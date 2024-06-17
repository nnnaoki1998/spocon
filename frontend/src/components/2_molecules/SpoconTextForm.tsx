import { Box } from '@mui/material';
import React from 'react';
import { SpoconTextField } from '../1_atoms/SpoconTextField';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';

type Props = {
  id: string;
  isRequired: boolean;
  label: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SpoconTextForm: React.FC<Props> = ({
  id,
  isRequired,
  label,
  multiline,
  rows,
  maxRows,
  value,
  onChange,
}) => (
  <Box>
    <SpoconFormLabel label={label} isRequired={isRequired} />
    <SpoconTextField
      id={id}
      label={label}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      value={value}
      onChange={onChange}
    />
  </Box>
);

SpoconTextForm.defaultProps = {
  multiline: false,
  rows: 1,
  maxRows: 1,
};
