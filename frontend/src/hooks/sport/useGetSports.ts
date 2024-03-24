import { useEffect, useState } from 'react';
import { getSports } from '../../feature/api/internal/sport';
import { SportInfo } from '../../components/utils/TypeDefinitions';

/** スポーツ一覧を取得するカスタムフック */
export const useGetSports = () => {
  const [sports, setSports] = useState<SportInfo[]>([]);

  useEffect(() => {
    getSports()
      .then((res) => {
        setSports(res.data);
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }, []);

  return { sports };
};
