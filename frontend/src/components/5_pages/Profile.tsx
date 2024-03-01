import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { TemplateProfile } from '../4_templates/TemplateProfile';

import { TypeTeam } from '../utils/TypeDefinitions';
import { getTeam } from '../utils/DummyApi';

const defaultTheme = createTheme();

const Profile: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const [team, setTeam] = React.useState<TypeTeam>();

  console.log(teamId);

  const fetchTeamInfo = () => {
    let id;
    if (teamId) {
      id = parseInt(teamId, 10);
    } else {
      id = parseInt('1', 10);
    }
    setTeam(getTeam(id));
  };

  useEffect(() => {
    fetchTeamInfo();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <SpoconAppBar />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            py: 6,
          }}
        >
          <Container maxWidth="md">
            <TemplateProfile team={team} />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export { Profile };
