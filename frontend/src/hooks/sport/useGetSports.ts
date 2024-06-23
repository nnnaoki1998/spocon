import { useEffect, useState } from 'react';
import { getSports } from '../../features/apis/internal/sport';
import { TypeSport } from '../../types';

/** スポーツ一覧を取得する */
export const useGetSports = () => {
  const [sports, setSports] = useState<TypeSport[]>([]);

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
