import React from 'react';
import { TypeTest } from '../utils/TypeDefinitions';
import { ChatSideView } from '../3_organisms/ChatSideView';
import { ChatMainView } from '../3_organisms/ChatMainView';
import { ChatMessage } from '../../API';

import './TemplateChat.css';

export interface Props {
  chatRooms: TypeTest;
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemplateChat: React.FC<Props> = (props: Props) => {
  const {
    chatRooms,
    pastMessages,
    newMessage,
    setNewMessage,
    setChatRoomId,
    setSendFlag,
  } = props;

  return (
    <div className="template-chat-container">
      <div className="template-chat-sub-container">
        <ChatSideView chatRooms={chatRooms} setChatRoomId={setChatRoomId} />
        <ChatMainView
          pastMessages={pastMessages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          setSendFlag={setSendFlag}
        />
      </div>
    </div>
  );
};

export { TemplateChat };
