import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';
import { HeaderView } from '../3_organisms/HeaderView';
import { MainView } from '../3_organisms/MainView';
import { FooterView } from '../3_organisms/FooterView';

import './TemplateTop.css';

export interface Props {
  areaList: string[];
  sportList: string[];
  statusList: string[];
  teamList: TypeTeam[];
  testHook: React.Dispatch<React.SetStateAction<TypeTeam[]>>;
}

const TemplateTop: React.FC<Props> = (props: Props) => {
  const { areaList, sportList, statusList, teamList, testHook } = props;

  return (
    <div className="template-top-container">
      <HeaderView />
      <MainView
        areaList={areaList}
        sportList={sportList}
        statusList={statusList}
        teamList={teamList}
        testHook={testHook}
      />
      <FooterView />
    </div>
  );
};

export { TemplateTop };
