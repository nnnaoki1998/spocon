import React, { useEffect, useRef } from 'react';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { backendUrl } from '../../config';

import {
  TypeTeam,
  Prefecture,
  City,
  SportInfo,
} from '../utils/TypeDefinitions';

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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type Args = {
  file: File | null;
};

export const useGetImageUrl = ({ file }: Args) => {
  const [imageUrl, setImageUrl] = React.useState('');

  useEffect(() => {
    if (!file) {
      return;
    }

    const reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      // base64のimageUrlを生成する。
      const base64 = reader && reader.result;
      if (base64 && typeof base64 === 'string') {
        setImageUrl(base64);
      }
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    imageUrl,
  };
};

const TemplateProfileEdit: React.FC<Props> = (props: Props) => {
  const { team } = props;
  const [teamName, setTeamName] = React.useState<string>(
    team ? team.team_name : ''
  );
  const [sportName, setSportName] = React.useState<string>(
    team ? team.sport_name : ''
  );
  const [prefectures, setPrefectures] = React.useState<
    Prefecture[] | undefined
  >();
  const [prefecture, setPrefecture] = React.useState('');
  const [cities, setCities] = React.useState<City[] | undefined>();
  const [city, setCity] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>(
    team ? team.description : ''
  );
  const [imgageFile, setImageFile] = React.useState<File | null>(null);
  const SelectedImageRef = useRef(null);
  const [sports, setSports] = React.useState<SportInfo[]>([]);

  const handlePrefectureChange = (event: SelectChangeEvent) => {
    setPrefecture(event.target.value);
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  const handleSelectedImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget?.files && event.currentTarget.files[0]) {
      const targetFile = event.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  const { imageUrl } = useGetImageUrl({ file: imgageFile });

  const updateTeamProfile = () => {
    const selectedSportId = sports.find(
      (sport) => sport.name === sportName
    )?.id;
    // TODO: エラーメッセージを検討
    if (!selectedSportId) {
      return;
    }
    const iconPath = Storage.put(uuidv4(), imgageFile, {
      contentType: 'image/png',
    })
      .then((result) => result)
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };

  useEffect(() => {
    axios
      .get(`${backendUrl}/sport`)
      .then((res) => {
        // eslint-disable-next-line
        setSports(res.data); // なぜか型安全にならない（もう少し調べる）
        console.log(res.data); // eslint-disable-line no-console
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }, []);

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
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <p>スポーツ種別 *必須</p>
        <FormControl fullWidth>
          <InputLabel id="select-sport-type">スポーツ</InputLabel>
          <Select
            labelId="select-sport-type"
            id="select-sport"
            value={sportName}
            label="スポーツ"
            onChange={(e) => setSportName(e.target.value)}
            sx={{ width: '100%' }}
          >
            {sports?.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>チーム画像 *必須</p>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        UPLOAD IMAGE
        <VisuallyHiddenInput
          ref={SelectedImageRef}
          type="file"
          onChange={handleSelectedImageChange}
        />
      </Button>
      {imageUrl ? (
        <CardMedia
          component="img"
          alt="upload image"
          image={imageUrl}
          sx={{ height: '300px', width: '300px' }}
        />
      ) : (
        <Box
          sx={{ height: '300px', width: '300px', backgroundColor: 'black' }}
        />
      )}
      <p />
      <Box textAlign="center">
        <Button
          id="fullWidth"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(
              `teamName: ${teamName}`,
              `sportName: ${sportName}`,
              `prefecture: ${prefecture}`,
              `city: ${city}`,
              `description: ${description}`
            );
          }}
        >
          登録
        </Button>
      </Box>
    </Card>
  );
};

export { TemplateProfileEdit };
