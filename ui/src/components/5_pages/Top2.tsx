import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';
import { TemplateTop } from '../4_templates/TemplateTop';

// For preview with dummy data
import * as dummy from '../utils/DummyData';

const Top2: React.FC = () => {
  const [teamList, setTeamList] = React.useState<TypeTeam[]>(dummy.teamList1);

  return (
    <TemplateTop
      areaList={dummy.areas}
      sportList={dummy.sports}
      statusList={dummy.status}
      teamList={teamList}
      testHook={setTeamList}
    />
  );
};

export { Top2 };
