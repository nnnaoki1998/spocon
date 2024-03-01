import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface Props {
  label: string;
  options: string[];
}

const Selector: React.FC<Props> = (props: Props) => {
  const { label, options } = props;
  const [item, setItem] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <FormControl sx={{ mb: 6, minWidth: '100%' }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={item}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { Selector };
