import { useEffect, useState } from 'react';
import { TypeTeam } from '../../types';
import { getTeam } from '../../features/apis/internal/team';

/** チームIDからチーム情報を取得する */
export const useGetTeam = (teamId: number) => {
  const [team, setTeam] = useState<TypeTeam>();
  console.log(teamId); // eslint-disable-line no-console

  useEffect(() => {
    getTeam(teamId)
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
      });
  }, []);

  return { team };
};
