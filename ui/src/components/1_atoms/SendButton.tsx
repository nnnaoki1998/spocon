import React from 'react';
import TextData from '../../data.json';

export interface Props {
  message: string;
}

const onClickSendButton = (message: string) => {
  console.log(message);
};

const SendButton: React.FC<Props> = (props: Props) => {
  const { message } = props;

  return (
    <button type="button" onClick={() => onClickSendButton(message)}>
      {TextData.data.main['send-message']}
    </button>
  );
};

export { SendButton };
