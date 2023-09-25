import React from 'react';
import { ChatMessage, OnCreateChatMessageSubscription } from '../../API';
import { MessageField } from '../1_atoms/MessageField';
import { MessagesField } from '../1_atoms/MessagesField';
import { SendButton } from '../1_atoms/SendButton';

import './TemplateTop.css';

export interface Props {
  messages: (ChatMessage | null)[];
  message: string;
  testHook: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateChat: React.FC<Props> = (props: Props) => {
  const { messages, message, testHook } = props;

  return (
    <>
      <MessagesField
        messages={messages}
      />
      <MessageField
        message={message}
        testHook={testHook}
      />
      <SendButton
        message={message}
      />
    </>
  );
};

export { TemplateChat };
