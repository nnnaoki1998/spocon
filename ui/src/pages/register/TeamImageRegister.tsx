import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const TeamImageRegister = () => (
  <>
    <Typography variant="h6" gutterBottom>
      写真を設定してイメージしやすくしましょう
    </Typography>
    <Grid container spacing={2}>
      <Grid item container direction="column" xs={12} sm={6}>
        <Button component="label">
          <input type="file" className="inputFileBtnHide" />
        </Button>
      </Grid>
    </Grid>
  </>
);

export default TeamImageRegister;
