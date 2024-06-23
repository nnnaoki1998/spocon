import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};

export const SpoconPageTitle: React.FC<Props> = ({ title }) => (
  <Typography variant="h4" component="div">
    {title}
  </Typography>
);
