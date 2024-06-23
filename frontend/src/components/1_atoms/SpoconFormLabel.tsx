import { Box } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  isRequired: boolean;
};

export const SpoconFormLabel: React.FC<Props> = ({ label, isRequired }) => (
  <Box component="p" sx={{ my: 2 }}>
    {label} {isRequired && '*必須'}
  </Box>
);
