import { useEffect, useState } from 'react';
import { TypeCity, TypePrefecture } from '../../types';
import { getCities } from '../../features/apis/external/resas';

/** 都道府県から市区町村一覧を取得する */
export const useGetCities = (
  prefectures: TypePrefecture[] | undefined,
  prefectureName: string
) => {
  const [cities, setCities] = useState<TypeCity[] | undefined>();

  useEffect(() => {
    prefectures?.forEach((pref) => {
      if (pref.prefName === prefectureName) {
        getCities(pref.prefCode)
          .then((res) => {
            setCities(res.data.result);
          })
          .catch(() => {
            console.log('Failed to call /cities'); // eslint-disable-line no-console
          });
      }
    });
  }, [prefectureName]);

  return { cities };
};
