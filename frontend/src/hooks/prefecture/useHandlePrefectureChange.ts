import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

/** 選択中の都道府県を保持するカスタムフック */
export const useHandlePrefectureChange = () => {
  const [prefecture, setPrefecture] = useState('');

  const handlePrefectureChange = (event: SelectChangeEvent) => {
    setPrefecture(event.target.value);
  };

  return {
    prefecture,
    handlePrefectureChange,
  };
};
