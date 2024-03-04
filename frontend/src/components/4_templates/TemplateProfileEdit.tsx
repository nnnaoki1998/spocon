import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import { TypeTeam, Prefecture, City } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

interface NodeEnv {
  REACT_APP_RESAS_API_URL?: string;
  REACT_APP_RESAS_API_KEY?: string;
}

const RESAS_API_URL = (process.env as NodeEnv)
  .REACT_APP_RESAS_API_URL as string;
const RESAS_API_KEY = (process.env as NodeEnv)
  .REACT_APP_RESAS_API_KEY as string;

const TemplateProfileEdit: React.FC<Props> = (props: Props) => {
  const { team } = props;
  const [prefectures, setPrefectures] = React.useState<
    Prefecture[] | undefined
  >();
  const [prefecture, setPrefecture] = React.useState('');
  const [cities, setCities] = React.useState<City[] | undefined>();
  const [city, setCity] = React.useState('');

  const handlePrefectureChange = (event: SelectChangeEvent) => {
    console.log(event.target); // eslint-disable-line no-console
    setPrefecture(event.target.value);
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    console.log(event.target); // eslint-disable-line no-console
    setCity(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${RESAS_API_URL}/prefectures`, {
        headers: { 'X-API-KEY': RESAS_API_KEY },
      })
      .then((response) => {
        // eslint-disable-next-line
        setPrefectures(response.data.result);
      })
      .catch(() => {
        console.log('Failed to call /prefectures'); // eslint-disable-line no-console
      });
  }, []);

  useEffect(() => {
    prefectures?.forEach((pref) => {
      if (pref.prefName === prefecture) {
        axios
          .get(`${RESAS_API_URL}/cities?prefCode=${pref.prefCode}`, {
            headers: { 'X-API-KEY': RESAS_API_KEY },
          })
          .then((response) => {
            // eslint-disable-next-line
            setCities(response.data.result);
          })
          .catch(() => {
            console.log('Failed to call /cities'); // eslint-disable-line no-console
          });
      }
    });
  }, [prefecture]);

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
          <FormControl fullWidth id="fullWidth">
            <InputLabel id="demo-simple-select-autowidth-label">
              都道府県
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={prefecture}
              label="都道府県"
              onChange={handlePrefectureChange}
              autoWidth
            >
              {prefectures?.map((item) => (
                <MenuItem key={item.prefName} value={item.prefName}>
                  {item.prefName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth id="fullWidth">
            <InputLabel id="demo-simple-select-autowidth-label">
              市区町村
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={city}
              label="市区町村"
              onChange={handleCityChange}
              autoWidth
            >
              {cities?.map((item) => (
                <MenuItem key={item.cityName} value={item.cityName}>
                  {item.cityName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
