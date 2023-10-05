import React from 'react';
import { ChatMessage } from '../../API';

import './PastMessagesField.css';

export interface Props {
  myTeamId: string;
  pastMessages: (ChatMessage | null)[];
}

const sortByWriteDateTime = (chatMessageList: Array<ChatMessage | null>) => {
  chatMessageList.sort((a, b) => {
    if (a?.writeDateTime === undefined || b?.writeDateTime === undefined)
      return 0;
    if (a.writeDateTime < b.writeDateTime) return -1;
    if (a.writeDateTime > b.writeDateTime) return 1;
    return 0;
  });
};

const PastMessagesField: React.FC<Props> = (props: Props) => {
  const { myTeamId, pastMessages } = props;

  sortByWriteDateTime(pastMessages);

  return (
    <>
      {pastMessages.map((message) => (
        <div
          key={message?.writeDateTime}
          className={`past-messages-container ${
            message?.teamId === myTeamId ? 'mine' : ''
          }`}
        >
          <p className="past-message">{message?.message}</p>
        </div>
      ))}
    </>
  );
};

export { PastMessagesField };
