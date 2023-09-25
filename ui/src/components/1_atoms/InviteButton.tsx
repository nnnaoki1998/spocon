import React from 'react';
import TextData from '../../data.json';

export interface Props {
  partnerTeamId: string;
}

const openRelayChatRoom = (partnerTeamId: string) => {
  console.log(`You invite team(id: ${partnerTeamId}) to a match.`);
};

const InviteButton: React.FC<Props> = (props: Props) => {
  const { partnerTeamId } = props;

  return (
    <button type="button" onClick={() => openRelayChatRoom(partnerTeamId)}>
      {TextData.data.main['invite-to-match']}
    </button>
  );
};

export { InviteButton };
