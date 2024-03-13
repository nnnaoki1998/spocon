import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Sms from '@mui/icons-material/Sms';
import Person from '@mui/icons-material/Person';
import { UseAuth } from '../../hooks/auth/useAuth';
import { useSignOut } from '../../hooks/signOut/useSignOut';

type Anchor = 'left';

interface Props {
  auth: UseAuth;
}

const SpoconAppBar: React.FC<Props> = (props: Props) => {
  const { auth } = props;
  const { executeSignOut } = useSignOut();
  const navigateTo = useNavigate();
  const [state, setState] = React.useState({ left: false });

  console.log(auth); // eslint-disable-line no-console

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="トップ" disablePadding>
          <ListItemButton onClick={() => navigateTo({ pathname: '/top' })}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="トップ" />
          </ListItemButton>
        </ListItem>
        <ListItem key="チャット" disablePadding>
          <ListItemButton onClick={() => navigateTo({ pathname: '/chat' })}>
            <ListItemIcon>
              <Sms />
            </ListItemIcon>
            <ListItemText primary="チャット" />
          </ListItemButton>
        </ListItem>
        <ListItem key="プロフィール" disablePadding>
          <ListItemButton onClick={() => navigateTo({ pathname: '/profile' })}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="プロフィール" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                color="primary"
                sx={{ color: 'white' }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            SpoCon
          </Typography>
          {auth.isAuthenticated ? (
            <Button
              color="primary"
              sx={{ color: 'white' }}
              onClick={() => executeSignOut()}
            >
              SIGNOUT
            </Button>
          ) : (
            <>
              <Button
                color="primary"
                sx={{ color: 'white' }}
                onClick={() => navigateTo({ pathname: '/signup' })}
              >
                SIGNUP
              </Button>
              <Button
                color="primary"
                sx={{ color: 'white' }}
                onClick={() => navigateTo({ pathname: '/' })}
              >
                SIGNIN
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export { SpoconAppBar };

