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
import { styled } from '@mui/material/styles';
import { Storage } from 'aws-amplify';
import React, { useState, useEffect, useRef } from 'react';
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
import {
  GradeInfo,
  Prefecture,
  SportInfo,
  TypeTeam,
} from '../utils/TypeDefinitions';
import { useGetImageUrlFromStorage } from '../../hooks/image/useGetImageUrlFromStorage';
import { SpoconTextField } from '../1_atoms/SpoconTextField';
import { SpoconPageTitle } from '../1_atoms/SpoconPageTitle';
import { SpoconSelectField } from '../2_molecules/SpoconSelectField';

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
  const [teamName, setTeamName] = useState<string>('');
  const [gradeName, setGradeName] = useState<string>('');
  const [sportName, setSportName] = useState<string>('');
  const [prefecture, setPrefecture] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const SelectedImageRef = useRef(null);

  // グレード一覧を取得する
  const { grades } = useGetGrades();
  // スポーツ種別一覧を取得する
  const { sports } = useGetSports();
  // 都道府県一覧を取得する
  const { prefectures } = useGetPrefectures();
  // 選択中の都道府県を更新する
  const { handlePrefectureChange } = useHandlePrefectureChange(setPrefecture);
  // 市区町村一覧を取得する
  const { cities } = useGetCities(prefectures, prefecture);
  // 選択中の市区町村を更新する
  const { handleCityChange } = useHandleCityChange(setCity);
  // 選択中の画像ファイルを更新する
  const { imageFile, handleImageChange } = useHandleImageFile();
  // ファイルから画像URLを取得する
  useGetImageUrlFromFile({ file: imageFile }, setImageUrl);

  useEffect(() => {
    if (team) {
      setTeamName(team.team_name);
      setGradeName(team.grade_name);
      setSportName(team.sport_name);
      setPrefecture(team.address_state);
      setCity(team.address_city);
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
      <SpoconPageTitle title="チーム編集" />
      <p>チーム名 *必須</p>
      <SpoconTextField
        id="profile-edit-team-name"
        label="チーム名"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <p>グレード種別 *必須</p>
        <SpoconSelectField
          selectFieldId="profile-edit-select-field-grade"
          labelId="profile-edit-select-label-grade"
          label="グレード"
          selectionItems={grades}
          getSelectionItemKey={(item: GradeInfo) => String(item.id)}
          getSlectionItemName={(item: GradeInfo) => item.name}
          value={gradeName}
          onChange={(e) => setGradeName(e.target.value)}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <p>スポーツ種別 *必須</p>
        <SpoconSelectField
          selectFieldId="profile-edit-select-field-sport"
          labelId="profile-edit-select-label-sport"
          label="スポーツ"
          selectionItems={sports}
          getSelectionItemKey={(item: SportInfo) => String(item.id)}
          getSlectionItemName={(item: SportInfo) => item.name}
          value={sportName}
          onChange={(e) => setSportName(e.target.value)}
        />
      </Box>
      <p>主な活動場所 *必須</p>
      <Grid container>
        <Grid item xs={6}>
          {prefectures && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-prefecture"
              labelId="profile-edit-select-label-prefecture"
              label="都道府県"
              selectionItems={prefectures}
              getSelectionItemKey={(item: Prefecture) => String(item.prefCode)}
              getSlectionItemName={(item: Prefecture) => item.prefName}
              value={prefecture}
              onChange={handlePrefectureChange}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          {cities && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-city"
              labelId="profile-edit-select-label-city"
              label="市区町村"
              selectionItems={cities}
              getSelectionItemKey={(item) => String(item.cityCode)}
              getSlectionItemName={(item) => item.cityName}
              value={city}
              onChange={handleCityChange}
            />
          )}
        </Grid>
      </Grid>
      <p>チーム紹介文 *必須</p>
      <SpoconTextField
        id="profile-edit-description"
        label="チーム紹介文"
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
