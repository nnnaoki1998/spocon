import { TypeTeam } from '../../types';
import * as dummy from './DummyData';

export const getTeam = (teamId: number) => {
  console.log('test'); // eslint-disable-line no-console
  let res: TypeTeam | undefined;
  dummy.teamList1.forEach((team) => {
    if (team.id === teamId) {
      res = team;
    }
  });

  return res;
};
