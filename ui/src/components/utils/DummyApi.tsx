import { TypeTeam } from '../utils/TypeDefinitions';
import * as dummy from '../utils/DummyData';

export const getTeamInfo = (teamId: string) => {
  let res: (TypeTeam | undefined);
  dummy.teamList1.forEach((team) => {
    if (team.id === teamId) {
      res = team;
    }
  });

  return res;
}