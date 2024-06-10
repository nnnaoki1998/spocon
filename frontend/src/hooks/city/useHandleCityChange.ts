import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

/** stateに保持する市区町村情報を変更する */
export const useHandleCityChange = (
  setCity: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  return {
    handleCityChange,
  };
};
