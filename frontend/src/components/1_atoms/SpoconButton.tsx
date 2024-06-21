import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  label: string;
  onClickFunction: () => void;
};

export const SpoconButton: React.FC<Props> = ({
  size,
  variant,
  label,
  onClickFunction,
}) => (
  <Button size={size} variant={variant} onClick={onClickFunction}>
    {label}
  </Button>
);

SpoconButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
};
