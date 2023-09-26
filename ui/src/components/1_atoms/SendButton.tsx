import React from 'react';
import TextData from '../../data.json';

export interface Props {
  newMessage: string;
}

const onClickSendButton = (message: string) => {
  console.log(message);
};

const SendButton: React.FC<Props> = (props: Props) => {
  const { newMessage } = props;

  return (
    <button type="button" onClick={() => onClickSendButton(newMessage)}>
      {TextData.data.main['send-message']}
    </button>
  );
};

export { SendButton };
