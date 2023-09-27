import React from 'react';
import TextData from '../../data.json';

export interface Props {
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendMessageButton: React.FC<Props> = (props: Props) => {
  const { setSendFlag } = props;

  return (
    <button type="button" onClick={() => setSendFlag(true)}>
      {TextData.data.main['send-message']}
    </button>
  );
};

export { SendMessageButton };
