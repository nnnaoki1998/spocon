import { useEffect, useState } from 'react';
import {
  TypeCity,
  TypePrefecture,
} from '../../components/utils/TypeDefinitions';
import { getCities } from '../../feature/api/external/resas';

/** 都道府県から市区町村一覧を取得する */
export const useGetCities = (
  prefectures: TypePrefecture[] | undefined,
  prefecture: string
) => {
  const [cities, setCities] = useState<TypeCity[] | undefined>();

  useEffect(() => {
    prefectures?.forEach((pref) => {
      if (pref.prefName === prefecture) {
        getCities(pref.prefCode)
          .then((res) => {
            setCities(res.data.result);
          })
          .catch(() => {
            console.log('Failed to call /cities'); // eslint-disable-line no-console
          });
      }
    });
  }, [prefecture]);

  return { cities };
};
