import { useEffect, useState } from 'react';
import { TypeGrade } from '../../types';
import { getGrades } from '../../features/apis/internal/grade';

/** グレード一覧を取得する */
export const useGetGrades = () => {
  const [grades, setGrades] = useState<TypeGrade[]>([]);

  useEffect(() => {
    getGrades()
      .then((res) => {
        setGrades(res.data);
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }, []);

  return { grades };
};
