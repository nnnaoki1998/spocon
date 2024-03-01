import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

const ProfileView: React.FC<Props> = (props: Props) => {
  const { team } = props;

  return (
    <Card sx={{ flexGrow: 1, p: 10 }}>
      <CardMedia
        component="img"
        alt={team?.team_name}
        image={team?.icon_path}
      />
      <p>チーム名</p>
      <Typography variant="h5" component="div">
        {team?.team_name}
      </Typography>
      <p>学年</p>
      <Typography variant="h5" component="div">
        {team?.grade_name}
      </Typography>
      <p>スポーツ</p>
      <Typography variant="h5" component="div">
        {team?.sport_name}
      </Typography>
      <p>住所</p>
      <Typography variant="h5" component="div">
        {team?.address}
      </Typography>
      <p>チーム紹介文</p>
      <Typography variant="h5" component="div">
        {team?.description}
      </Typography>
    </Card>
  );
};

export { ProfileView };
