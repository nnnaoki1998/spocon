import { useEffect, useState } from 'react';
import { GradeInfo } from '../../components/utils/TypeDefinitions';
import { getGrades } from '../../feature/api/internal/grade';

export const useGetGrades = () => {
  const [grades, setGrades] = useState<GradeInfo[]>([]);

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
