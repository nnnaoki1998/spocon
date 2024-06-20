import { Card } from '@mui/material';
import React from 'react';
import { TeamProfileWritableType } from '../../constants/TeamProfileWritableType';
import { TeamProfileWritableView } from '../3_organisms/TeamProfileWritableView';
import { TypeTeam } from '../utils/TypeDefinitions';

type Props = {
  writableType: TeamProfileWritableType;
  team: TypeTeam | undefined;
};

export const TeamProfileWritableFrame: React.FC<Props> = ({
  writableType,
  team,
}) => (
  <Card sx={{ flexGrow: 1, p: 10 }}>
    <TeamProfileWritableView writableType={writableType} team={team} />
  </Card>
);
