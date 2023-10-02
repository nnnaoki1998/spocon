import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TypeTeam } from '../utils/TypeDefinitions';
import { getTeamInfo } from '../utils/DummyApi';

const Profile: React.FC = () => {
  const params = useParams();
  const [profile, setProfile] = React.useState<TypeTeam>();

  const fetchTeamInfo = () => {
    if (!params.teamId) return;
    const teamInfo = getTeamInfo(params.teamId);
    setProfile(teamInfo);
  };

  useEffect(() => {
    fetchTeamInfo();
  }, []);

  return (
    <div className="team-list-item">
      <img alt="" src={profile?.image_url} />
      <p>TeamID: {profile?.id}</p>
      <p>TeamName: {profile?.name}</p>
      <p>Area: {profile?.area}</p>
      <p>Sport: {profile?.sport}</p>
      <p>Status: {profile?.status}</p>
      <p>LastLoginDate: {profile?.lastLoginDate.toLocaleDateString('ja-JP')}</p>
    </div>
  );
};

export { Profile };
