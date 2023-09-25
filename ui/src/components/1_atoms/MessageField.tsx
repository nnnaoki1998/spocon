import React from 'react';

interface Props {
  message: string;
  testHook: React.Dispatch<React.SetStateAction<string>>;
}

const MessageField: React.FC<Props> = (props: Props) => {
  const { message, testHook } = props;

  return (
    <input
      type="text"
      value={message}
      onChange={(e) => testHook(e.target.value)}
    />
  );
}

export { MessageField };
