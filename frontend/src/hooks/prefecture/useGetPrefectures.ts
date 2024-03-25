import { useEffect, useState } from 'react';
import { getPrefectures } from '../../feature/api/external/resas';
import { Prefecture } from '../../components/utils/TypeDefinitions';

/** 都道府県一覧を取得するカスタムフック */
export const useGetPrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[] | undefined>();

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
