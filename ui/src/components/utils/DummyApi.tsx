import { TypeTeam } from './TypeDefinitions';
import * as dummy from './DummyData';

export const getTeamInfo = (teamId: string) => {
  let res: TypeTeam | undefined;
  dummy.teamList1.forEach((team) => {
    if (team.id === teamId) {
      res = team;
    }
  });

  return res;
};
