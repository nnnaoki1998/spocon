import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  id: string;
  label: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpoconTextField: React.FC<Props> = ({
  id,
  label,
  multiline,
  rows,
  maxRows,
  value,
  onChange,
}) => (
  <TextField
    id={id}
    label={label}
    fullWidth
    multiline={multiline}
    rows={rows}
    maxRows={maxRows}
    value={value}
    onChange={onChange}
  />
);

SpoconTextField.defaultProps = {
  multiline: false,
  rows: 1,
  maxRows: 1,
};
