import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { TeamInfo } from '../utils/TypeDefinitions';

export interface Props {
  teamInfo: TeamInfo;
}

const ImgMediaCard: React.FC<Props> = (props: Props) => {
  const { teamInfo } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://thumb.photo-ac.com/40/4040c804e637099768e92d2c58904191_w.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {teamInfo?.team_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teamInfo?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teamInfo?.sport_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="info"
          onClick={() => {
            console.log(teamInfo);
          }}
        >
          Invite
        </Button>
      </CardActions>
    </Card>
  );
};

export { ImgMediaCard };
