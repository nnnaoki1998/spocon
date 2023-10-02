import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';
import { ProfileView } from '../3_organisms/ProfileView';

import './TemplateProfile.css';

export interface Props {
  team: TypeTeam | undefined;
}

const TemplateProfile: React.FC<Props> = (props: Props) => {
  const { team } = props;

  return (
    <div className="template-profile-container">
      <ProfileView team={team} />
    </div>
  );
};

export { TemplateProfile };
