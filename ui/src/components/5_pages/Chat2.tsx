import React, { useEffect } from 'react';
import { TypeTest } from '../utils/TypeDefinitions';
import { TemplateChat } from '../4_templates/TemplateChat';
import { ChatMessage } from '../../API';
import {
  getChatMessages,
  getChatRooms,
  pushChatMessage,
} from '../../feature/api/chat';

const Chat2: React.FC = () => {
  const myTeamId = 'teamId01';
  const [pastMessages, setPastMessages] = React.useState<
    Array<ChatMessage | null>
  >([]);
  const [newMessage, setNewMessage] = React.useState<string>('');
  const [chatRooms, setChatRooms] = React.useState<TypeTest>([]);
  const [chatRoomId, setChatRoomId] = React.useState<string | undefined>('');
  const [sendFlag, setSendFlag] = React.useState<boolean>(false);

  const fetchChatRooms = () => {
    getChatRooms(myTeamId)
      .then((rooms) => {
        console.log(rooms.data.relayChatRoomTeamsByTeamId?.items);
        setChatRooms(rooms.data.relayChatRoomTeamsByTeamId?.items);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log('Finished to invoke getChatRoom().');
      });
  };

  const fetchPastMessages = async () => {
    const currentChatRoomId = chatRoomId || 'chatRoomId01';
    console.log(currentChatRoomId);

    const chatMessageList = await getChatMessages(currentChatRoomId);
    const items = chatMessageList.data.chatMessagesByChatRoomId?.items;
    if (items === undefined) {
      throw new Error('Failed to get the items.');
    }
    setPastMessages(items);
  };

  const sendNewMessage = () => {
    console.log('Invoked sendNewMessage().');
    if (!chatRoomId) return;
    pushChatMessage(chatRoomId, myTeamId, newMessage)
      .then(() => {
        setNewMessage('');
      })
      .catch(() => {
        throw new Error('Failed to send message.');
      });
  };

  useEffect(() => {
    fetchPastMessages().catch((e) => {
      console.log(e);
    });
  }, [chatRoomId]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  // TODO: 依存条件の見直しと二重発火の回避
  useEffect(() => {
    if (newMessage !== '') {
      sendNewMessage();
      setNewMessage('');
    }
    setSendFlag(false);
  }, [sendFlag === true]);

  return (
    <TemplateChat
      chatRooms={chatRooms}
      pastMessages={pastMessages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      setChatRoomId={setChatRoomId}
      setSendFlag={setSendFlag}
    />
  );
};

export { Chat2 };
