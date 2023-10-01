import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeTeam } from '../utils/TypeDefinitions';
import { InviteButton } from '../1_atoms/InviteButton';

import './TeamListView.css';

export interface Props {
  teamList: TypeTeam[];
}

const TeamListView: React.FC<Props> = (props: Props) => {
  const { teamList } = props;
  const navigate = useNavigate();
  const basePath = "/profile";

  return (
    <div className="team-list-container">
      {teamList.map((team) => (
        <div className="team-list-item" key={team.id}>
          <img alt="" src={team.image_url} onClick={() => {navigate({ pathname: basePath + "/" + team.id})}} />
          <p>TeamID: {team.id}</p>
          <p>TeamName: {team.name}</p>
          <p>Area: {team.area}</p>
          <p>Sport: {team.sport}</p>
          <p>Status: {team.status}</p>
          <p>LastLoginDate: {team.lastLoginDate.toLocaleDateString('ja-JP')}</p>
          <InviteButton partnerTeamId={team.id} />
        </div>
      ))}
    </div>
  );
};

export { TeamListView };
