import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

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
