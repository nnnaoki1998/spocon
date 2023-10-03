import React from 'react';
import { NewMessageField } from '../1_atoms/NewMessageField';
import { SendMessageButton } from '../1_atoms/SendMessageButton';

import './SendNewMessageField.css';

export interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendNewMessageField: React.FC<Props> = (props: Props) => {
  const { newMessage, setNewMessage, setSendFlag } = props;

  return (
    <div className="send-new-message-container">
      <NewMessageField newMessage={newMessage} setNewMessage={setNewMessage} />
      <SendMessageButton setSendFlag={setSendFlag} />
    </div>
  );
};

export { SendNewMessageField };
