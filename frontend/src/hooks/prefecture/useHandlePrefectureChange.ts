import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

/** stateに保持する都道府県を変更する */
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
