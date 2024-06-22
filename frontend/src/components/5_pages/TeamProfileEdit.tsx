import React from 'react';
import { useParams } from 'react-router-dom';

import { TeamProfileWritableType } from '../../constants/TeamProfileWritableType';
import { useAuth } from '../../hooks/auth/useAuth';
import { useGetTeam } from '../../hooks/team/useGetTeam';
import { TeamProfileWritableFrame } from '../4_templates/TeamProfileWritableFrame';

export const TeamProfileEdit: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  // TODO: 数値以外のバリデーション検討
  if (teamId === undefined) {
    return <p>teamIdが選択されていません</p>;
  }
  const { team } = useGetTeam(parseInt(teamId, 10));
  const auth = useAuth();

  return (
    <TeamProfileWritableFrame
      auth={auth}
      writableType={TeamProfileWritableType.Edit}
      team={team}
    />
  );
};
