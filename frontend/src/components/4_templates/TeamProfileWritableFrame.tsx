import { Box, Card, Container } from '@mui/material';
import React from 'react';
import { TeamProfileWritableType } from '../../constants/TeamProfileWritableType';
import { UseAuth } from '../../hooks/auth/useAuth';
import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { TeamProfileWritableView } from '../3_organisms/TeamProfileWritableView';

type Props = {
  auth: UseAuth;
  writableType: TeamProfileWritableType;
  teamId: number;
};

export const TeamProfileWritableFrame: React.FC<Props> = ({
  auth,
  writableType,
  teamId,
}) => (
  <Box>
    <SpoconAppBar auth={auth} />
    <main>
      <Container maxWidth="md">
        <Card sx={{ flexGrow: 1, p: 10 }}>
          <TeamProfileWritableView
            writableType={writableType}
            teamId={teamId}
          />
        </Card>
      </Container>
    </main>
  </Box>
);
