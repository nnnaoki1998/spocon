import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

const TemplateProfileEdit: React.FC<Props> = (props: Props) => {
  const { team } = props;

  return (
    <Card sx={{ flexGrow: 1, p: 10 }}>
      <Typography variant="h4" component="div">
        チーム登録
      </Typography>
      <p>チーム名 *必須</p>
      <TextField
        fullWidth
        id="fullWidth"
        rows={1}
        maxRows={1}
        value={team?.team_name}
      />
      <p>スポーツ *必須</p>
      <TextField
        fullWidth
        id="fullWidth"
        rows={1}
        maxRows={1}
        value={team?.sport_name}
      />
      <p>主な活動場所 *必須</p>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            label="都道府県"
            fullWidth
            id="fullWidth"
            rows={1}
            maxRows={1}
            value={team?.address}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="市区町村"
            fullWidth
            id="fullWidth"
            rows={1}
            maxRows={1}
            value={team?.address}
          />
        </Grid>
      </Grid>
      <p>チーム紹介文 *必須</p>
      <TextField
        fullWidth
        id="fullWidth"
        multiline
        rows={4}
        maxRows={4}
        value={team?.description}
      />
      <p>チーム画像 *必須</p>
      <TextField fullWidth id="fullWidth" rows={4} maxRows={4} />
      <p />
      <Box textAlign="center">
        <Button
          id="fullWidth"
          onClick={() => {
            console.log('Button pushed!'); // eslint-disable-line no-console
          }}
        >
          登録
        </Button>
      </Box>
    </Card>
  );
};

export { TemplateProfileEdit };
