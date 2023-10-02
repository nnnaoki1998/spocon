import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

const ProfileView: React.FC<Props> = (props: Props) => {
  const { team } = props;

  return (
    <div>
      <img alt="" src={team?.image_url} />
      <p>TeamID: {team?.id}</p>
      <p>TeamName: {team?.name}</p>
      <p>Area: {team?.area}</p>
      <p>Sport: {team?.sport}</p>
      <p>Status: {team?.status}</p>
      <p>LastLoginDate: {team?.lastLoginDate.toLocaleDateString('ja-JP')}</p>
    </div>
  );
};

export { ProfileView };
