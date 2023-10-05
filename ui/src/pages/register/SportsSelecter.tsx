import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SportsSelecter = () => (
  <FormControl>
    <FormLabel required id="form-label">
      スポーツ種別
    </FormLabel>
    <RadioGroup
      aria-labelledby="radio-buttons-group-label"
      defaultValue="handball"
      name="radio-buttons-group"
    >
      <FormControlLabel value="baseball" control={<Radio />} label="野球" />
      <FormControlLabel value="soccer" control={<Radio />} label="サッカー" />
      <FormControlLabel
        value="handball"
        control={<Radio />}
        label="ハンドボール"
      />
    </RadioGroup>
  </FormControl>
);

export default SportsSelecter;
