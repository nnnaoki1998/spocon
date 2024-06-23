import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import {
  handleToCreateTeamProfile,
  handleToUpdateTeamProfile,
} from '../../features/models/team';
import { useGetCities } from '../../hooks/city/useGetCities';
import { useHandleCityChange } from '../../hooks/city/useHandleCityChange';
import { useGetGrades } from '../../hooks/grade/useGetGrades';
import { useGetImageUrlFromFile } from '../../hooks/image/useGetImageUrlFromFile';
import { useHandleImageFile } from '../../hooks/image/useHandleImageFileChange';
import { useGetPrefectures } from '../../hooks/prefecture/useGetPrefectures';
import { useHandlePrefectureChange } from '../../hooks/prefecture/useHandlePrefectureChange';
import { useGetSports } from '../../hooks/sport/useGetSports';
import { useSetTeam } from '../../hooks/team/useSetTeam';
import { TypeCity, TypeGrade, TypePrefecture, TypeSport } from '../../types';
import { SpoconButton } from '../1_atoms/SpoconButton';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';
import { SpoconPageTitle } from '../1_atoms/SpoconPageTitle';
import { SpoconSelectField } from '../1_atoms/SpoconSelectField';
import { SpoconFileUploadForm } from '../2_molecules/SpoconFileUploadForm';
import { SpoconSelectForm } from '../2_molecules/SpoconSelectForm';
import { SpoconTextForm } from '../2_molecules/SpoconTextForm';

type Props = {
  teamId?: number;
};

export const TeamProfileWritableView: React.FC<Props> = ({ teamId }) => {
  const [teamName, setTeamName] = useState<string>('');
  const [gradeName, setGradeName] = useState<string>('');
  const [sportName, setSportName] = useState<string>('');
  const [prefectureName, setPrefectureName] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  // グレード一覧を取得する
  const { grades } = useGetGrades();
  // スポーツ種別一覧を取得する
  const { sports } = useGetSports();
  // 都道府県一覧を取得する
  const { prefectures } = useGetPrefectures();
  // 選択中の都道府県を更新する
  const { handlePrefectureChange } =
    useHandlePrefectureChange(setPrefectureName);
  // 市区町村一覧を取得する
  const { cities } = useGetCities(prefectures, prefectureName);
  // 選択中の市区町村を更新する
  const { handleCityChange } = useHandleCityChange(setCityName);
  // 選択中の画像ファイルを更新する
  const { imageFile, handleImageChange } = useHandleImageFile();
  // ファイルから画像URLを取得する
  useGetImageUrlFromFile({ file: imageFile }, setImageUrl);

  if (teamId) {
    useSetTeam({
      teamId,
      setTeamName,
      setGradeName,
      setSportName,
      setPrefectureName,
      setCityName,
      setDescription,
      setImageUrl,
    });
  }

  return (
    <Box>
      <SpoconPageTitle
        title={teamId === undefined ? 'チーム登録' : 'チーム編集'}
      />
      <SpoconTextForm
        id="profile-edit-team-name"
        isRequired
        label="チーム名"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <SpoconSelectForm
        selectFieldId="profile-edit-select-field-grade"
        isRequired
        labelId="profile-edit-select-label-grade"
        label="グレード"
        selectionItems={grades}
        getSelectionItemKey={(item: TypeGrade) => String(item.id)}
        getSlectionItemName={(item: TypeGrade) => item.name}
        value={gradeName}
        onChange={(e) => setGradeName(e.target.value)}
      />
      <SpoconSelectForm
        selectFieldId="profile-edit-select-field-sport"
        isRequired
        labelId="profile-edit-select-label-sport"
        label="スポーツ"
        selectionItems={sports}
        getSelectionItemKey={(item: TypeSport) => String(item.id)}
        getSlectionItemName={(item: TypeSport) => item.name}
        value={sportName}
        onChange={(e) => setSportName(e.target.value)}
      />
      <SpoconFormLabel label="主な活動場所" isRequired />
      <Grid container>
        <Grid item xs={6}>
          {prefectures && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-prefecture"
              labelId="profile-edit-select-label-prefecture"
              label="都道府県"
              selectionItems={prefectures}
              getSelectionItemKey={(item: TypePrefecture) =>
                String(item.prefCode)
              }
              getSlectionItemName={(item: TypePrefecture) => item.prefName}
              value={prefectureName}
              onChange={handlePrefectureChange}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          {prefectures && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-city"
              labelId="profile-edit-select-label-city"
              label="市区町村"
              selectionItems={
                cities === undefined ? ([] as TypeCity[]) : cities
              }
              getSelectionItemKey={(item: TypeCity) => String(item.cityCode)}
              getSlectionItemName={(item: TypeCity) => item.cityName}
              value={cityName}
              onChange={handleCityChange}
            />
          )}
        </Grid>
      </Grid>
      <SpoconTextForm
        id="profile-edit-description"
        isRequired
        label="チーム紹介文"
        multiline
        rows={4}
        maxRows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <SpoconFileUploadForm
        formLabel="チーム画像"
        isRequired
        buttonLabel="UPLOAD IMAGE"
        onChange={handleImageChange}
        imageUrl={imageUrl}
      />
      <Box textAlign="center" sx={{ mt: 4 }}>
        <SpoconButton
          size="large"
          variant="contained"
          label={teamId === undefined ? '登録' : '更新'}
          onClickFunction={
            teamId === undefined
              ? () =>
                  handleToCreateTeamProfile({
                    teamName,
                    sports,
                    sportName,
                    grades,
                    gradeName,
                    prefectureName,
                    cityName,
                    description,
                    imageFile,
                  })
              : () =>
                  handleToUpdateTeamProfile({
                    teamId,
                    teamName,
                    sports,
                    sportName,
                    grades,
                    gradeName,
                    prefectureName,
                    cityName,
                    description,
                    imageFile,
                  })
          }
        />
      </Box>
    </Box>
  );
};

TeamProfileWritableView.defaultProps = {
  teamId: undefined,
};
