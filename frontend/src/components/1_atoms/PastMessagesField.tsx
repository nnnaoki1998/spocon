import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ChatMessage } from '../../API';

export interface Props {
  myTeamId: string;
  pastMessages: (ChatMessage | null)[];
}

const sortByWriteDateTime = (chatMessageList: Array<ChatMessage | null>) => {
  chatMessageList.sort((a, b) => {
    if (a?.writeDateTime === undefined || b?.writeDateTime === undefined)
      return 0;
    if (a.writeDateTime < b.writeDateTime) return -1;
    if (a.writeDateTime > b.writeDateTime) return 1;
    return 0;
  });
};

const PastMessagesField: React.FC<Props> = (props: Props) => {
  const { myTeamId, pastMessages } = props;

  sortByWriteDateTime(pastMessages);

  return (
    <Box sx={{ overflowY: 'scroll', maxHeight: '500px' }}>
      {pastMessages.map((message) => (
        <Box
          id={message?.writeDateTime.toString()}
          maxWidth="100%"
          my={1}
          pl={message?.teamId === myTeamId ? '20%' : 0}
          pr={message?.teamId === myTeamId ? 0 : '20%'}
          display="flex"
          justifyContent={
            message?.teamId === myTeamId ? 'flex-end' : 'flex-start'
          }
          style={{ overflowWrap: 'break-word' }}
        >
          <Typography>{message?.message}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export { PastMessagesField };
