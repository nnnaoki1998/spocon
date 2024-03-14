import React, { useEffect } from 'react';
import { API } from 'aws-amplify';
import { GraphQLSubscription } from '@aws-amplify/api';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { TypeTest } from '../utils/TypeDefinitions';
import { TemplateChat } from '../4_templates/TemplateChat';
import { ChatMessage, OnCreateChatMessageSubscription } from '../../API';
import { onCreateChatMessage } from '../../graphql/subscriptions';
import {
  getChatMessages,
  getChatRooms,
  pushChatMessage,
} from '../../feature/api/chat';
import { SpoconAppBar } from '../3_organisms/SpoconAppBar';
import { useAuth } from '../../hooks/auth/useAuth';

const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar {
          width: 20px;
          height: 20px;
        }
      `,
    },
  },
});

const Chat: React.FC = () => {
  const auth = useAuth();
  const myTeamId = 'teamId01';
  const [chatRooms, setChatRooms] = React.useState<TypeTest>([]);
  const [chatRoomId, setChatRoomId] = React.useState<string | undefined>('');
  const [pastMessages, setPastMessages] = React.useState<
    Array<ChatMessage | null>
  >([]);
  const [newMessage, setNewMessage] = React.useState<string>('');
  const [sendFlag, setSendFlag] = React.useState<boolean>(false);

  const fetchChatRooms = () => {
    getChatRooms(myTeamId)
      .then((rooms) => {
        console.log(rooms.data.relayChatRoomTeamsByTeamId?.items); // eslint-disable-line no-console
        setChatRooms(rooms.data.relayChatRoomTeamsByTeamId?.items); // eslint-disable-line no-console
      })
      .catch((e) => {
        console.log(e); // eslint-disable-line no-console
      });
  };

  const fetchPastMessages = async () => {
    if (!chatRoomId) return;
    const chatMessageList = await getChatMessages(chatRoomId);
    const items = chatMessageList.data.chatMessagesByChatRoomId?.items;
    if (items === undefined) {
      throw new Error('Failed to fetch past messages.');
    }
    setPastMessages(items);
  };

  const sendNewMessage = () => {
    console.log('Invoked sendNewMessage().'); // eslint-disable-line no-console
    if (!chatRoomId) return;
    pushChatMessage(chatRoomId, myTeamId, newMessage)
      .then(() => {
        setNewMessage('');
      })
      .catch(() => {
        throw new Error('Failed to send message.');
      });
  };

  const subscribePastMessages = () => {
    const pushedOnCreateMessageEvent = API.graphql<
      GraphQLSubscription<OnCreateChatMessageSubscription>
    >({
      query: onCreateChatMessage,
    });
    pushedOnCreateMessageEvent.subscribe({
      next: (res) => {
        if (res.value.data?.onCreateChatMessage?.chatRoomId === chatRoomId) {
          fetchPastMessages().catch(() => {
            throw new Error('Failed to fetch past messages.');
          });
        }
      },
    });
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  useEffect(() => {
    fetchPastMessages().catch((e) => {
      console.log(e); // eslint-disable-line no-console
    });
  }, [chatRoomId]);

  // TODO: 依存条件の見直しと二重発火の回避
  useEffect(() => {
    if (newMessage !== '') {
      sendNewMessage();
      setNewMessage('');
    }
    setSendFlag(false);
  }, [sendFlag === true]);

  useEffect(() => {
    subscribePastMessages();
  }, [chatRoomId]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <SpoconAppBar auth={auth} />
      <main>
        <TemplateChat
          myTeamId={myTeamId}
          chatRooms={chatRooms}
          pastMessages={pastMessages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          setChatRoomId={setChatRoomId}
          setSendFlag={setSendFlag}
        />
      </main>
    </ThemeProvider>
  );
};

export { Chat };

