import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Storage } from 'aws-amplify';
import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useGetCities } from '../../hooks/city/useGetCities';
import { useHandleCityChange } from '../../hooks/city/useHandleCityChange';
import { useGetImageUrl } from '../../hooks/image/useGetImageUrl';
import { useHandleImageChange } from '../../hooks/image/useHandleImageChange';
import { useGetPrefectures } from '../../hooks/prefecture/useGetPrefectures';
import { useHandlePrefectureChange } from '../../hooks/prefecture/useHandlePrefectureChange';
import { useGetSports } from '../../hooks/sport/useGetSports';
import { TypeTeam } from '../utils/TypeDefinitions';
import { useGetGrades } from '../../hooks/grade/useGetGrades';
import { updateTeamInfo } from '../../feature/api/internal/team';

export interface Props {
  team: TypeTeam | undefined;
}

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

const TemplateProfileEdit: React.FC<Props> = (props: Props) => {
  const { team } = props;
  const id = team ? team.id : 1;
  const [teamName, setTeamName] = React.useState<string>(
    team ? team.team_name : ''
  );
  const [gradeName, setGradeName] = React.useState<string>(
    team ? team.grade_name : ''
  );
  const [sportName, setSportName] = React.useState<string>(
    team ? team.sport_name : ''
  );
  const [description, setDescription] = React.useState<string>(
    team ? team.description : ''
  );
  const SelectedImageRef = useRef(null);

  // グレード一覧を取得する
  const { grades } = useGetGrades();
  // スポーツ種別一覧を取得する
  const { sports } = useGetSports();
  // 都道府県一覧を取得する
  const { prefectures } = useGetPrefectures();
  // 都道府県が変更されたら、prefectureを更新する
  const { prefecture, handlePrefectureChange } = useHandlePrefectureChange();
  // 都道府県が変更されたら、市区町村一覧を取得する
  const { cities } = useGetCities(prefectures, prefecture);
  // 市区町村が変更されたら、cityを更新する
  const { city, handleCityChange } = useHandleCityChange();
  // 画像ファイルが変更されたら、imageFileを更新する
  const { imageFile, handleImageChange } = useHandleImageChange();
  // stateのimgageFileが変更されたら、画像URLを取得する
  const { imageUrl } = useGetImageUrl({ file: imageFile });

  const updateTeamProfile = async () => {
    const selectedSportId = sports.find(
      (sport) => sport.name === sportName
    )?.id;
    // TODO: エラーメッセージを検討
    if (!selectedSportId) {
      return;
    }
    const selectedGradeId = grades.find(
      (grade) => grade.name === gradeName
    )?.id;
    // TODO: エラーメッセージを検討
    if (!selectedGradeId) {
      return;
    }
    const putResult = await Storage.put(uuidv4(), imageFile, {
      contentType: 'image/png',
    });
    await updateTeamInfo(
      id,
      teamName,
      selectedSportId,
      selectedGradeId,
      putResult.key,
      description,
      prefecture,
      city
    );
  };

  const handleUpdateTeamProfile = () => {
    updateTeamProfile()
      .then(() => {
        console.log('updateTeamProfile');
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
        <p>グレード種別 *必須</p>
        <FormControl fullWidth>
          <InputLabel id="select-grade-type">グレード</InputLabel>
          <Select
            labelId="select-grade-type"
            id="select-grade"
            value={gradeName}
            label="グレード"
            onChange={(e) => setGradeName(e.target.value)}
            sx={{ width: '100%' }}
          >
            {grades?.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
          onChange={handleImageChange}
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
      <Box textAlign="center">
        <Button id="fullWidth" onClick={() => handleUpdateTeamProfile()}>
          登録
        </Button>
      </Box>
    </Card>
  );
};

export { TemplateProfileEdit };
