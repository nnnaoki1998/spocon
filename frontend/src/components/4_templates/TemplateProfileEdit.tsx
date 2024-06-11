import Card from '@mui/material/Card';
import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { updateTeamInfo } from '../../feature/api/internal/team';
import { useGetCities } from '../../hooks/city/useGetCities';
import { useHandleCityChange } from '../../hooks/city/useHandleCityChange';
import { useGetGrades } from '../../hooks/grade/useGetGrades';
import { useGetImageUrlFromFile } from '../../hooks/image/useGetImageUrlFromFile';
import { useGetImageUrlFromStorage } from '../../hooks/image/useGetImageUrlFromStorage';
import { useHandleImageFile } from '../../hooks/image/useHandleImageFileChange';
import { useGetPrefectures } from '../../hooks/prefecture/useGetPrefectures';
import { useHandlePrefectureChange } from '../../hooks/prefecture/useHandlePrefectureChange';
import { useGetSports } from '../../hooks/sport/useGetSports';
import { ProfileEdit } from '../3_organisms/OrganismProfileEdit';
import { TypeTeam } from '../utils/TypeDefinitions';

export interface Props {
  team: TypeTeam | undefined;
}

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
      <ProfileEdit
        teamName={teamName}
        setTeamName={setTeamName}
        gradeName={gradeName}
        setGradeName={setGradeName}
        sportName={sportName}
        setSportName={setSportName}
        prefecture={prefecture}
        city={city}
        description={description}
        setDescription={setDescription}
        imageUrl={imageUrl}
        handleImageChange={handleImageChange}
        handleUpdateTeamProfile={handleUpdateTeamProfile}
        handlePrefectureChange={handlePrefectureChange}
        handleCityChange={handleCityChange}
        grades={grades}
        sports={sports}
        prefectures={prefectures}
        cities={cities}
      />
    </Card>
  );
};

export { TemplateProfileEdit };
