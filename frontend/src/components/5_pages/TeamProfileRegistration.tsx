import React from 'react';
import { useAuth } from '../../hooks/auth/useAuth';
import { TeamProfileWritableFrame } from '../4_templates/TeamProfileWritableFrame';

export const TeamProfileRegistration: React.FC = () => {
  const auth = useAuth();

  return <TeamProfileWritableFrame auth={auth} />;
};
