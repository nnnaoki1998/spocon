import React from 'react';
import Box from '@mui/material/Box';

import { ChatMessage } from '../../API';
import { PastMessagesField } from '../1_atoms/PastMessagesField';
import { SendMessageField } from '../2_molecules/SendMessageField';

export interface Props {
  myTeamId: string;
  pastMessages: (ChatMessage | null)[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMainView: React.FC<Props> = (props: Props) => {
  const { myTeamId, pastMessages, newMessage, setNewMessage, setSendFlag } =
    props;

  const refToBottom = React.useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    refToBottom.current?.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    scrollToBottom();
  }, [pastMessages]);

  return (
    <Box sx={{ height: '100vh' }}>
      <PastMessagesField myTeamId={myTeamId} pastMessages={pastMessages} />
      <SendMessageField
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        setSendFlag={setSendFlag}
      />
    </Box>
  );
};

export { ChatMainView };
