import React from 'react';
import TextData from '../../data.json';

export interface Props {
  newMessage: string;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const onClickSendButton = (message: string) => {
  console.log(message);
};

const SendButton: React.FC<Props> = (props: Props) => {
  const { newMessage, setSendFlag } = props;

  return (
    <button type="button" onClick={() => setSendFlag(true)}>
      {TextData.data.main['send-message']}
    </button>
  );
};

export { SendButton };
