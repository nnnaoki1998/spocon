import React, { useEffect } from 'react';
import { API } from 'aws-amplify';
import { GraphQLSubscription } from '@aws-amplify/api';
import { ChatMessage, OnCreateChatMessageSubscription } from '../../API';
import { onCreateChatMessage } from '../../graphql/subscriptions';
import {
  getChatMessages,
  getChatRooms,
  pushChatMessage,
} from '../../feature/api/chat';
import './Chat.css';

/**
 * チャットメッセージの配列を書き込み日時で昇順にソートする
 * @param chatMessageList チャットメッセージの配列
 */
const sortByWriteDateTime = (chatMessageList: Array<ChatMessage | null>) => {
  chatMessageList.sort((a, b) => {
    if (a?.writeDateTime === undefined || b?.writeDateTime === undefined)
      return 0;
    if (a.writeDateTime < b.writeDateTime) return -1;
    if (a.writeDateTime > b.writeDateTime) return 1;
    return 0;
  });
};

/** チャット画面のコンポーネント */
export const Chat: React.FC = () => {
  const [chatMessages, setChatMessages] = React.useState<
    Array<ChatMessage | null>
  >([]);
  const [message, setMessage] = React.useState<string>('');
  // TODO 自分と相手のチームIDをバックエンドのAPIを呼び出して取得する
  const [myTeamId, setMyTeamId] = React.useState<string>('teamId01');
  const [partnerTeamId, setPartnerTeamId] = React.useState<string>('teamId02');
  const [chatRoomId, setChatRoomId] = React.useState<string | undefined>('');

  /** チャットルームの全メッセージを取得する関数 */
  const fetchChatRoomMessage = async () => {
    try {
      await Promise.all([getChatRooms(myTeamId), getChatRooms(partnerTeamId)])
        .then(async ([myChatRoomList, partnerChatRoomList]) => {
          const myChatRoomIdList =
            myChatRoomList.data.relayChatRoomTeamsByTeamId?.items?.map(
              (item) => item?.chatRoomId
            );
          const partnerChatRoomIdList =
            partnerChatRoomList.data.relayChatRoomTeamsByTeamId?.items?.map(
              (item) => item?.chatRoomId
            );
          // 他のチャットルームに同じチームの組み合わせがないことが前提
          const currentChatRoomId = myChatRoomIdList?.find((item) =>
            partnerChatRoomIdList?.includes(item)
          );

          if (currentChatRoomId === undefined) {
            throw new Error('Failed to find the chatRoomId.');
          }
          setChatRoomId(() => currentChatRoomId);

          // TODO DynamoDBからソートして取得したい
          const chatMessageList = await getChatMessages(currentChatRoomId);
          const items = chatMessageList.data.chatMessagesByChatRoomId?.items;
          if (items === undefined) {
            throw new Error('Failed to get the items.');
          }
          sortByWriteDateTime(items);
          setChatMessages(items);
        })
        .catch((e: unknown) => {
          if (e instanceof Error) {
            throw new Error(e.message);
          }
        });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  /** チャットメッセージを送信する関数 */
  // eslint-disable-next-line no-shadow
  const putMessage = (message: string) => {
    try {
      if (chatRoomId === undefined)
        throw new Error('Failed to get the chatRoomId.');
      pushChatMessage(chatRoomId, myTeamId, message)
        .then(() => {
          setMessage('');
        })
        .catch(() => {
          throw new Error('Failed to push the message.');
        });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  /** チャットルームのメッセージの更新があれば、チャットメッセージを取得する関数 */
  const subscribeMessages = () => {
    try {
      // 新しいチャットが作成されたときにトリガーとなるイベントを登録する
      // この登録したイベントはAppSyncに常駐して新しいチャットが作成されたかを監視する
      const pushedOnCreateMessageEvent = API.graphql<
        GraphQLSubscription<OnCreateChatMessageSubscription>
      >({
        query: onCreateChatMessage,
      });
      // subscribeメソッドのnextは新しいチャットが作成されたときに呼び出される
      pushedOnCreateMessageEvent.subscribe({
        next: (res) => {
          if (res.value.data?.onCreateChatMessage?.chatRoomId === chatRoomId) {
            fetchChatRoomMessage().catch(() => {
              throw new Error('Failed to get the chat messages.');
            });
          }
        },
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  useEffect(() => {
    fetchChatRoomMessage().catch(() => {
      throw new Error('Failed to get the chat messages.');
    });
  }, []);

  // TODO 初回レンダリング時には呼び出すべきではない？性能問題が出てきたら改善する。
  useEffect(() => {
    subscribeMessages();
  }, [chatRoomId]);

  return (
    <div className="chat-container">
      <h1>チャット画面</h1>
      <div className="chat-message-container">
        {/* TODO returnのネストが深い */}
        <div>
          {chatMessages.map((item) => {
            const isMyMessage = item?.teamId === myTeamId;
            const messageClass = isMyMessage ? 'right' : '';
            return (
              <div
                key={item?.writeDateTime}
                className={`message-container ${messageClass}`}
              >
                <p className="message">{item?.message}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="send-message-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={() => putMessage(message)}>
          送信
        </button>
      </div>
    </div>
  );
};
