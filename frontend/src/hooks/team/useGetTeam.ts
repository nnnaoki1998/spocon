import { useEffect, useState } from 'react';
import { TypeTeam } from '../../components/utils/TypeDefinitions';
import { getTeam } from '../../feature/api/internal/team';

export const useGetTeam = (teamId: number) => {
  const [team, setTeam] = useState<TypeTeam>();
  console.log(teamId);

  useEffect(() => {
    getTeam(teamId)
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { team };
};
