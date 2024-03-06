import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { SpoconButton } from '../1_atoms/SpoconButton';

export interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendMessageField: React.FC<Props> = (props: Props) => {
  const { newMessage, setNewMessage, setSendFlag } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            fullWidth
            id="fullWidth"
            multiline
            rows={1}
            maxRows={3}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="end">
        <Grid item>
          <SpoconButton onClick={() => setSendFlag(true)} iconName="send" />
        </Grid>
      </Grid>
    </>
  );
};

export { SendMessageField };
