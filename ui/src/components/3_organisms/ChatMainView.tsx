import React from 'react';
import { ChatMessage } from '../../API';
import { NewMessageField } from '../1_atoms/NewMessageField';
import { PastMessagesField } from '../1_atoms/PastMessagesField';
import { SendMessageButton } from '../1_atoms/SendMessageButton';

import './ChatMainView.css';

export interface Props {
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMainView: React.FC<Props> = (props: Props) => {
  const { pastMessages, newMessage, setNewMessage, setSendFlag } = props;

  return (
    <div className="chat-view-container2">
      <PastMessagesField pastMessages={pastMessages} />
      <NewMessageField newMessage={newMessage} setNewMessage={setNewMessage} />
      <SendMessageButton setSendFlag={setSendFlag} />
    </div>
  );
};

export { ChatMainView };
