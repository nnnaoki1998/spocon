import { Box, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';
import { SpoconSelectField } from '../1_atoms/SpoconSelectField';

interface Props<T> {
  selectFieldId: string;
  isRequired: boolean;
  labelId: string;
  label: string;
  selectionItems: T[];
  getSelectionItemKey: (item: T) => string;
  getSlectionItemName: (item: T) => string;
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
}

export const SpoconSelectForm = <T,>({
  selectFieldId,
  isRequired,
  labelId,
  label,
  selectionItems,
  getSelectionItemKey,
  getSlectionItemName,
  value,
  onChange,
}: Props<T>) => (
  <Box>
    <SpoconFormLabel label={label} isRequired={isRequired} />
    <SpoconSelectField
      selectFieldId={selectFieldId}
      labelId={labelId}
      label={label}
      selectionItems={selectionItems}
      getSelectionItemKey={getSelectionItemKey}
      getSlectionItemName={getSlectionItemName}
      value={value}
      onChange={onChange}
    />
  </Box>
);
