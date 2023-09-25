import React from 'react';
import { ChatMessage, OnCreateChatMessageSubscription } from '../../API';

export interface Props {
  messages: (ChatMessage | null)[];
}

const MessagesField: React.FC<Props> = (props: Props) => {
  const { messages } = props;

  return (
    <>
      {messages.map((message) => (
        <div>
          <p>{message?.message}</p>
        </div>
      ))}
    </>
  );
};

export { MessagesField };
