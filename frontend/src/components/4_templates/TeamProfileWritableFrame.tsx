import { Box, Card, Container } from '@mui/material';
import React from 'react';
import { UseAuth } from '../../hooks/auth/useAuth';
import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { TeamProfileWritableView } from '../3_organisms/TeamProfileWritableView';

type Props = {
  auth: UseAuth;
  teamId?: number;
};

export const TeamProfileWritableFrame: React.FC<Props> = ({ auth, teamId }) => (
  <Box>
    <SpoconAppBar auth={auth} />
    <main>
      <Container maxWidth="md">
        <Card sx={{ flexGrow: 1, p: 10 }}>
          <TeamProfileWritableView teamId={teamId} />
        </Card>
      </Container>
    </main>
  </Box>
);

TeamProfileWritableFrame.defaultProps = {
  teamId: undefined,
};
