import { useEffect, useState } from 'react';
import { getPrefectures } from '../../feature/api/external/resas';
import { TypePrefecture } from '../../types';

/** 都道府県一覧を取得する */
export const useGetPrefectures = () => {
  const [prefectures, setPrefectures] = useState<
    TypePrefecture[] | undefined
  >();

  useEffect(() => {
    getPrefectures()
      .then((res) => {
        setPrefectures(res.data.result);
      })
      .catch(() => {
        console.log('Failed to call /prefectures'); // eslint-disable-line no-console
      });
  }, []);

  return { prefectures };
};
