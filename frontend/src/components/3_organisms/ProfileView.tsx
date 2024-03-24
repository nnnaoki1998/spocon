import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

const ProfileView: React.FC<Props> = (props: Props) => {
  const { team } = props;
  const navigate = useNavigate();
  if (!team) {
    return <div>チームが見つかりません</div>;
  }

  return (
    <Card sx={{ flexGrow: 1, p: 10 }}>
      <CardMedia component="img" alt={team.team_name} image={team.icon_path} />
      <p>チーム名</p>
      <Typography variant="h5" component="div">
        {team.team_name}
      </Typography>
      <p>学年</p>
      <Typography variant="h5" component="div">
        {team.grade_name}
      </Typography>
      <p>スポーツ</p>
      <Typography variant="h5" component="div">
        {team.sport_name}
      </Typography>
      <p>住所</p>
      <Typography variant="h5" component="div">
        {team.address}
      </Typography>
      <p>チーム紹介文</p>
      <Typography variant="h5" component="div">
        {team.description}
      </Typography>
      <Box textAlign="center">
        <Button
          id="fullWidth"
          onClick={() => {
            navigate({ pathname: `/profile-edit/:${team.id}` });
          }}
        >
          編集
        </Button>
      </Box>
    </Card>
  );
};

export { ProfileView };
