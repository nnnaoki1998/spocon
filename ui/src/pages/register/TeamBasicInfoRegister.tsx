import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SportsSelecter from './SportsSelecter';

const TeamBasicInfoRegister = () => (
  <>
    <Typography variant="h6" gutterBottom>
      あなたのチームはどのように活動していますか？
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="teamName"
          name="teamName"
          label="チーム名"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>

      <Grid item xs={12}>
        <SportsSelecter />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="市区町村"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="state"
          name="state"
          label="都道府県"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="agreement" value="yes" />}
          label="規約に同意する"
        />
      </Grid>
    </Grid>
  </>
);

export default TeamBasicInfoRegister;
