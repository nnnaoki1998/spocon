import React from 'react';
import { ChatMessage } from '../../API';
import { MessageField } from '../1_atoms/MessageField';
import { MessagesField } from '../1_atoms/MessagesField';
import { SendButton } from '../1_atoms/SendButton';

import './ChatView.css';

export interface Props {
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatView: React.FC<Props> = (props: Props) => {
  const { pastMessages, newMessage, setNewMessage, setSendFlag } = props;

  return (
    <div className="chat-view-container2">
      <MessagesField pastMessages={pastMessages} />
      <MessageField newMessage={newMessage} setNewMessage={setNewMessage} />
      <SendButton newMessage={newMessage} setSendFlag={setSendFlag} />
    </div>
  );
};

export { ChatView };
