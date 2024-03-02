import React from 'react';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { TypeTest } from '../utils/TypeDefinitions';

export interface Props {
  chatRooms: TypeTest;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const onClickChatRoom = (
  chatRoomId: string | undefined,
  func: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const id = chatRoomId || 'chatRoomId01';
  console.log(`Invoked onClickChatRoom(${id}).`); // eslint-disable-line no-console
  func(id);
};

const ChatSideView: React.FC<Props> = (props: Props) => {
  const { chatRooms, setChatRoomId } = props;

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        bgcolor: 'background.paper',
      }}
    >
      {chatRooms?.map((room) => (
        <ListItemButton
          alignItems="flex-start"
          onClick={() => onClickChatRoom(room?.chatRoomId, setChatRoomId)}
        >
          <ListItemAvatar>
            <Avatar alt="TeamName" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={room?.chatRoomId}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {room?.chatRoomId}
                </Typography>
                {' — Headline comes here.'}
              </>
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export { ChatSideView };
