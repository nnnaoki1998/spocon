import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';

import { TeamInfo } from '../utils/TypeDefinitions';
import { prefectures, sports, grades } from '../utils/DummyData';
import { ImgMediaCard } from './Card';
import { Selector } from './Selector';
import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { createRelayChatRoom } from '../../feature/api/chat';
import { useAuth } from '../../hooks/auth/useAuth';

const defaultTheme = createTheme();

const Top: React.FC = () => {
  const auth = useAuth();
  const myTeamId = 'teamId01';
  const [page, setPage] = React.useState(1);
  const [teamInfos, setTeamInfos] = React.useState<TeamInfo[]>([]);

  useEffect(() => {
    axios
      .get(String('http://127.0.0.1:3000/team-info?page=').concat(String(page)))
      .then((response) => {
        // eslint-disable-next-line
        setTeamInfos(response.data);
      })
      .catch(() => {
        console.log('Failed to call /team-info'); // eslint-disable-line no-console
      });
  }, [page]);

  const createChatRoom = (teamUuid: string) => {
    createRelayChatRoom(`testChatRoomId${teamUuid}`, myTeamId)
      .then(() => {
        console.log('Chat room created.'); // eslint-disable-line no-console
      })
      .catch((e) => {
        console.log(e); // eslint-disable-line no-console
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SpoconAppBar auth={auth} />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            py: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              SpoCon
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={4} sm={4} md={4}>
                <Selector label="prefecture" options={prefectures} />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Selector label="sport" options={sports} />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Selector label="grade" options={grades} />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {teamInfos.map((teamInfo) => (
              <Grid item key={teamInfo.id} xs={12} sm={6} md={6}>
                <ImgMediaCard
                  teamInfo={teamInfo}
                  createChatRoom={createChatRoom}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            bgcolor: 'background.paper',
            py: 6,
          }}
        >
          <Stack alignItems="center">
            <Pagination
              count={10}
              color="primary"
              // eslint-disable-next-line
              onChange={(e, page) => setPage(page)}
              page={page}
            />
          </Stack>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export { Top };

