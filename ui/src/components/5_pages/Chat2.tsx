import React, { useEffect } from 'react';
import { TemplateChat } from '../4_templates/TemplateChat';
import { ChatMessage, OnCreateChatMessageSubscription } from '../../API';
import { onCreateChatMessage } from '../../graphql/subscriptions';
import {
  getChatMessages,
  getChatRooms,
  pushChatMessage,
} from '../../feature/api/chat';


const Chat2: React.FC = () => {
  const [message, setMessage] = React.useState<string>('');
  const [messages, setMessages] = React.useState<Array<ChatMessage | null>>([]);
  const myTeamId = 'teamId01';
  const partnerTeamId = 'teamId02';
  const [chatRoomId, setChatRoomId] = React.useState<string | undefined>('');

  const fetchMessages = async () => {
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
          setMessages(items);
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

  useEffect(() => {
    fetchMessages().catch(() => {
      throw new Error('Failed to get chat messages.');
    });
  }, [])

  return (
    <TemplateChat
      messages={messages}
      message={message}
      testHook={setMessage}
    />
  );
};

export { Chat2 };
