import React from 'react';

interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageField: React.FC<Props> = (props: Props) => {
  const { newMessage, setNewMessage } = props;

  return (
    <input
      type="text"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
    />
  );
};

export { MessageField };
