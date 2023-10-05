import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TeamIntroRegister = () => 
    <>
      <Typography variant="h6" gutterBottom>
        あなたのチームはどんなチームですか？紹介してください！
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="team-introduction"
            label="私たちのチームの特色は、XXXでYYYなところです！..."
            multiline
            rows={8}
            fullWidth
            variant="standard"
            helperText="あなたのチームと試合を組みたいと思わせるような文章を考えてみましょう"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="agreement" value="yes" />
            }
            label="規約に同意する"
          />
        </Grid>
      </Grid>
    </>

export default TeamIntroRegister;
