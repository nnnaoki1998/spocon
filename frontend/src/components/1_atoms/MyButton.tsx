import React from 'react';
import Button from '@mui/material/Button';

import TextData from '../../data.json';

export interface Props {
  partnerTeamId: string;
}

const openRelayChatRoom = (partnerTeamId: string) => {
  console.log(`You invite team(id: ${partnerTeamId}) to a match.`); // eslint-disable-line no-console
};

export const MyButton: React.FC<Props> = (props: Props) => {
  const { partnerTeamId } = props;

  return (
    <Button onClick={() => openRelayChatRoom(partnerTeamId)}>
      {TextData.data.main['invite-to-match']}
    </Button>
  );
};
