import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

/** stateに保持する市区町村情報を変更する */
export const useHandleCityChange = () => {
  const [city, setCity] = useState('');

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  return {
    city,
    handleCityChange,
  };
};
