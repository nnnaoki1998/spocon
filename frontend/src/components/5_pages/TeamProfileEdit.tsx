import React from 'react';
import { useParams } from 'react-router-dom';

import { TeamProfileWritableType } from '../../constants/TeamProfileWritableType';
import { useAuth } from '../../hooks/auth/useAuth';
import { TeamProfileWritableFrame } from '../4_templates/TeamProfileWritableFrame';

export const TeamProfileEdit: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  // TODO: 数値以外のバリデーション検討
  if (teamId === undefined) {
    return <p>teamIdが選択されていません</p>;
  }
  // NOTE: idは数値である必要があるのか、検討
  const teamIdNumber = parseInt(teamId, 10);
  const auth = useAuth();

  return (
    <TeamProfileWritableFrame
      auth={auth}
      writableType={TeamProfileWritableType.Edit}
      teamId={teamIdNumber}
    />
  );
};
