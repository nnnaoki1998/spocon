import React, { useEffect } from 'react';
import { TypeTest } from '../utils/TypeDefinitions';
import { TemplateChat } from '../4_templates/TemplateChat';
import { ChatMessage } from '../../API';
import { getChatMessages, getChatRooms } from '../../feature/api/chat';

// chatRoomId : "testChatRoomId01"
// createdAt : "2023-07-12T17:25:11.843Z"
// owner : "e576e8ce-7c45-48c5-9d38-27780f871619"
// teamId : "teamId01"
// updatedAt : "2023-07-12T17:25:11.843Z"
// writeDateTime : 1689182711605

const Chat2: React.FC = () => {
  const myTeamId = 'teamId01';
  const [pastMessages, setPastMessages] = React.useState<
    Array<ChatMessage | null>
  >([]);
  const [newMessage, setNewMessage] = React.useState<string>('');
  const [chatRooms, setChatRooms] = React.useState<TypeTest>([]);
  const [chatRoomId, setChatRoomId] = React.useState<string | undefined>('');

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
    console.log(items);
    setPastMessages(items);
  };

  useEffect(() => {
    fetchPastMessages().catch((e) => {
      console.log(e);
    });
  }, [chatRoomId]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  return (
    <TemplateChat
      chatRooms={chatRooms}
      pastMessages={pastMessages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      setChatRoomId={setChatRoomId}
    />
  );
};

export { Chat2 };
