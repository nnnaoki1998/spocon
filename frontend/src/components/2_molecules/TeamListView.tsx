import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeTeam } from '../utils/TypeDefinitions';

import './TeamListView.css';

export interface Props {
  teamList: TypeTeam[];
}

const TeamListView: React.FC<Props> = (props: Props) => {
  const { teamList } = props;
  const navigate = useNavigate();
  const basePath = '/profile';

  return (
    <div className="team-list-container">
      {teamList.map((team) => (
        <div className="team-list-item" key={team.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              navigate({ pathname: `${basePath}/${team.id}` });
            }}
            onKeyDown={() => {
              navigate({ pathname: `${basePath}/${team.id}` });
            }}
          >
            <img src={team.icon_path} alt="" />
          </div>
          <p>TeamID: {team.id}</p>
          <p>TeamName: {team.team_name}</p>
          <p>Area: {team.address}</p>
          <p>Sport: {team.sport_name}</p>
          <p>Status: {team.grade_name}</p>
          試合に誘う
        </div>
      ))}
    </div>
  );
};

export { TeamListView };
