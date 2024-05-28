import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useParams } from 'react-router-dom';

import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { TemplateProfileEdit } from '../4_templates/TemplateProfileEdit';

import { useAuth } from '../../hooks/auth/useAuth';
import { useGetTeam } from '../../hooks/team/useGetTeam';

const defaultTheme = createTheme();

const ProfileEdit: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  // TODO: 数値以外のバリデーション検討
  if (teamId === undefined) {
    console.error('teamIdが選択されていません');
    return <p>teamIdが選択されていません</p>;
  }
  const { team } = useGetTeam(parseInt(teamId, 10));
  const auth = useAuth();

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
          <Container maxWidth="md">
            <TemplateProfileEdit team={team} />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export { ProfileEdit };
