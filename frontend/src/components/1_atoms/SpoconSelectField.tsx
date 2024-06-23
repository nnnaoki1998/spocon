import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

type Props<T> = {
  selectFieldId: string;
  labelId: string;
  label: string;
  selectionItems: T[];
  getSelectionItemKey: (item: T) => string;
  getSlectionItemName: (item: T) => string;
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
};

export const SpoconSelectField = <T,>({
  selectFieldId,
  labelId,
  label,
  selectionItems,
  getSelectionItemKey,
  getSlectionItemName,
  value,
  onChange,
}: Props<T>) => (
  <FormControl fullWidth>
    <InputLabel id={labelId}>{label}</InputLabel>
    <Select
      labelId={labelId}
      id={selectFieldId}
      value={value}
      label={label}
      onChange={onChange}
      sx={{ width: '100%' }}
    >
      {selectionItems?.map((item) => (
        <MenuItem
          key={getSelectionItemKey(item)}
          value={getSlectionItemName(item)}
        >
          {getSlectionItemName(item)}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
