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
import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { updateTeamInfo } from '../../feature/api/internal/team';
import { useGetCities } from '../../hooks/city/useGetCities';
import { useHandleCityChange } from '../../hooks/city/useHandleCityChange';
import { useGetGrades } from '../../hooks/grade/useGetGrades';
import { useGetImageUrlFromFile } from '../../hooks/image/useGetImageUrlFromFile';
import { useHandleImageFile } from '../../hooks/image/useHandleImageFileChange';
import { useGetPrefectures } from '../../hooks/prefecture/useGetPrefectures';
import { useHandlePrefectureChange } from '../../hooks/prefecture/useHandlePrefectureChange';
import { useGetSports } from '../../hooks/sport/useGetSports';
import { TypeTeam } from '../utils/TypeDefinitions';
import { useGetImageUrlFromStorage } from '../../hooks/image/useGetImageUrlFromStorage';

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
  const [teamName, setTeamName] = React.useState<string>('');
  const [gradeName, setGradeName] = React.useState<string>('');
  const [sportName, setSportName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const SelectedImageRef = useRef(null);

  // グレード一覧を取得する
  const { grades } = useGetGrades();
  // スポーツ種別一覧を取得する
  const { sports } = useGetSports();
  // 都道府県一覧を取得する
  const { prefectures } = useGetPrefectures();
  // 選択中の都道府県を更新する
  const { prefecture, handlePrefectureChange } = useHandlePrefectureChange();
  // 市区町村一覧を取得する
  const { cities } = useGetCities(prefectures, prefecture);
  // 選択中の市区町村を更新する
  const { city, handleCityChange } = useHandleCityChange();
  // 選択中の画像ファイルを更新する
  const { imageFile, handleImageChange } = useHandleImageFile();
  // ファイルから画像URLを取得する
  useGetImageUrlFromFile({ file: imageFile }, setImageUrl);

  useEffect(() => {
    if (team) {
      setTeamName(team.team_name);
      setGradeName(team.grade_name);
      setSportName(team.sport_name);
      setDescription(team.description);
      useGetImageUrlFromStorage(team.icon_path, setImageUrl);
    }
  }, [team]);

  /** チーム情報を更新する */
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

  /** チーム情報の更新処理を呼び出す */
  const handleUpdateTeamProfile = () => {
    updateTeamProfile()
      .then(() => {
        console.log('updateTeamProfile'); // eslint-disable-line no-console
      })
      .catch((e) => {
        console.log(e); // eslint-disable-line no-console
      });
  };

  return (
    <Card sx={{ flexGrow: 1, p: 10 }}>
      <Typography variant="h4" component="div">
        チーム編集
      </Typography>
      <p>チーム名 *必須</p>
      <TextField
        fullWidth
        id="fullWidth"
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
          更新
        </Button>
      </Box>
    </Card>
  );
};

export { TemplateProfileEdit };
