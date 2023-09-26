import React from 'react';
import { ChatMessage } from '../../API';

export interface Props {
  pastMessages: (ChatMessage | null)[];
}

const MessagesField: React.FC<Props> = (props: Props) => {
  const { pastMessages } = props;

  return (
    <>
      {pastMessages.map((message) => (
        <div key={message?.writeDateTime}>
          <p>{message?.message}</p>
        </div>
      ))}
    </>
  );
};

export { MessagesField };
