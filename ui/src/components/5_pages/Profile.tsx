import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TypeTeam } from '../utils/TypeDefinitions';
import { getTeam } from '../utils/DummyApi';
import { TemplateProfile } from '../4_templates/TemplateProfile';

const Profile: React.FC = () => {
  const params = useParams();
  const [team, setTeam] = React.useState<TypeTeam>();

  const fetchTeamInfo = () => {
    if (!params.teamId) return;
    const res = getTeam(params.teamId);
    setTeam(res);
  };

  useEffect(() => {
    fetchTeamInfo();
  }, []);

  return <TemplateProfile team={team} />;
};

export { Profile };
