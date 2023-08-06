import React from 'react';
import { TypeTeam } from '../utils/TypeDefinitions';
import { FilterView } from '../2_molecules/FilterView';
import { TeamListView } from '../2_molecules/TeamListView';

import './MainView.css';

export interface Props {
  areaList: string[];
  sportList: string[];
  statusList: string[];
  teamList: TypeTeam[];
  testHook: React.Dispatch<React.SetStateAction<TypeTeam[]>>;
}

const MainView: React.FC<Props> = (props: Props) => {
  const { areaList, sportList, statusList, teamList, testHook } = props;

  return (
    <div className="main-view-container">
      <div className="filter-view-container">
        <div className="filter-view-item">
          <FilterView itemList={areaList} testHook={testHook} />
        </div>
        <div className="filter-view-item">
          <FilterView itemList={sportList} testHook={testHook} />
        </div>
        <div className="filter-view-item">
          <FilterView itemList={statusList} testHook={testHook} />
        </div>
      </div>
      <TeamListView teamList={teamList} />
    </div>
  );
};

export { MainView };
