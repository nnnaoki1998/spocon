import { useEffect, useState } from 'react';
import { TypeGrade } from '../../components/utils/TypeDefinitions';
import { getGrades } from '../../feature/api/internal/grade';

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
