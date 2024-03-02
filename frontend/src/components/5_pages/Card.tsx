import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { TeamInfo } from '../utils/TypeDefinitions';

const basePathToProfile = '/profile';
const basePathToChat = '/chat2';

export interface Props {
  teamInfo: TeamInfo;
  createChatRoom: (team_uuid: string) => void;
}

const ImgMediaCard: React.FC<Props> = (props: Props) => {
  const { teamInfo, createChatRoom } = props;
  const navigateToProfile = useNavigate();
  const navigateToChat = useNavigate();

  return (
    <Card>
      <CardActionArea
        onClick={() => {
          navigateToProfile({
            pathname: `${basePathToProfile}/${teamInfo.id}`,
          });
        }}
      >
        <CardMedia
          component="img"
          alt={teamInfo?.team_name}
          height="140"
          image={teamInfo?.icon_path}
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
      </CardActionArea>
      <CardActions>
        <Button
          color="info"
          onClick={() => {
            console.log(teamInfo.uuid); // eslint-disable-line no-console
            createChatRoom(teamInfo.uuid);
            navigateToChat({ pathname: `${basePathToChat}` });
          }}
        >
          Invite
        </Button>
      </CardActions>
    </Card>
  );
};

export { ImgMediaCard };
