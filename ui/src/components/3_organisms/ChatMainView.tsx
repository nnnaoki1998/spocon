import React from 'react';
import { ChatMessage } from '../../API';
import { PastMessagesField } from '../1_atoms/PastMessagesField';
import { SendNewMessageField } from '../2_molecules/SendNewMessageField';

import './ChatMainView.css';

export interface Props {
  myTeamId: string;
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMainView: React.FC<Props> = (props: Props) => {
  const { myTeamId, pastMessages, newMessage, setNewMessage, setSendFlag } =
    props;

  return (
    <div className="chat-main-view-container">
      <div className="chat-main-view-past-messages-field">
        <PastMessagesField myTeamId={myTeamId} pastMessages={pastMessages} />
      </div>
      <div className="chat-main-view-send-new-message-field">
        <SendNewMessageField
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          setSendFlag={setSendFlag}
        />
      </div>
    </div>
  );
};

export { ChatMainView };
