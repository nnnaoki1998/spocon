import React from 'react';
import { TypeTest } from '../utils/TypeDefinitions';
import { SideView } from '../3_organisms/SideView';
import { ChatView } from '../3_organisms/ChatView';
import { ChatMessage } from '../../API';

import './TemplateChat.css';

export interface Props {
  chatRooms: TypeTest;
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TemplateChat: React.FC<Props> = (props: Props) => {
  const { chatRooms, pastMessages, newMessage, setNewMessage, setChatRoomId } =
    props;

  return (
    <div className="chat-view-container">
      <SideView chatRooms={chatRooms} setChatRoomId={setChatRoomId} />
      <ChatView
        pastMessages={pastMessages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </div>
  );
};

export { TemplateChat };
