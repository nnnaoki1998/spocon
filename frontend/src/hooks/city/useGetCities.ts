import { useEffect, useState } from 'react';
import { City, Prefecture } from '../../components/utils/TypeDefinitions';
import { getCities } from '../../feature/api/external/resas';

export const useGetCities = (
  prefectures: Prefecture[] | undefined,
  prefecture: string
) => {
  const [cities, setCities] = useState<City[] | undefined>();

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
