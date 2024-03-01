import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { TypeTest } from '../utils/TypeDefinitions';
import { ChatSideView } from '../3_organisms/ChatSideView';
import { ChatMainView } from '../3_organisms/ChatMainView';
import { ChatMessage } from '../../API';

export interface Props {
  myTeamId: string;
  chatRooms: TypeTest;
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemplateChat: React.FC<Props> = (props: Props) => {
  const {
    myTeamId,
    chatRooms,
    pastMessages,
    newMessage,
    setNewMessage,
    setChatRoomId,
    setSendFlag,
  } = props;

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        position: 'fixed',
        height: '100vh - 64px',
        width: '100vw',
      }}
    >
      <Container
        sx={{
          maxWidth: 'md',
        }}
      >
        <Grid container>
          <Grid item xs={1} sm={1} md={4}>
            <ChatSideView chatRooms={chatRooms} setChatRoomId={setChatRoomId} />
          </Grid>
          <Grid item xs={11} sm={11} md={8}>
            <ChatMainView
              myTeamId={myTeamId}
              pastMessages={pastMessages}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              setSendFlag={setSendFlag}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { TemplateChat };
