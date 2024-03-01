import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SpoconTextField: React.FC<Props> = (props: Props) => {
  const { newMessage, setNewMessage } = props;

  return (
    <TextField
      fullWidth
      id="fullWidth"
      multiline
      rows={3}
      maxRows={3}
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
    />
  );
};

export { SpoconTextField };
