import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { TypeGrade, TypeSport } from '../../types';
import { createTeamInfo, updateTeamInfo } from '../apis/internal/team';

/** チーム情報作成時の型 */
type CreateTeamProfileProps = {
  teamName: string;
  sports: TypeSport[];
  sportName: string;
  grades: TypeGrade[];
  gradeName: string;
  prefectureName: string;
  cityName: string;
  description: string;
  imageFile: File | null;
};

/** チーム情報更新時の型 */
type UpdateTeamProfileProps = {
  teamId: number;
  teamName: string;
  sports: TypeSport[];
  sportName: string;
  grades: TypeGrade[];
  gradeName: string;
  prefectureName: string;
  cityName: string;
  description: string;
  imageFile: File | null;
};

const getSportIdByName = (sports: TypeSport[], targetSportName: string) =>
  sports.find((sport) => sport.name === targetSportName)?.id;
const getGradeIdByName = (grades: TypeGrade[], targetGradeName: string) =>
  grades.find((grade) => grade.name === targetGradeName)?.id;

/** チーム情報を作成する */
const CreateTeamProfile = async ({
  teamName,
  sports,
  sportName,
  grades,
  gradeName,
  prefectureName,
  cityName,
  description,
  imageFile,
}: CreateTeamProfileProps) => {
  const selectedSportId = getSportIdByName(sports, sportName);
  // TODO: エラーメッセージを検討
  if (!selectedSportId) {
    return;
  }
  const selectedGradeId = getGradeIdByName(grades, gradeName);
  // TODO: エラーメッセージを検討
  if (!selectedGradeId) {
    return;
  }
  const putResult = await Storage.put(uuidv4(), imageFile, {
    contentType: 'image/png',
  });
  await createTeamInfo(
    teamName,
    selectedSportId,
    selectedGradeId,
    putResult.key,
    description,
    prefectureName,
    cityName
  );
};

/** チーム情報の作成処理を呼び出す */
export const handleToCreateTeamProfile = ({
  teamName,
  sports,
  sportName,
  grades,
  gradeName,
  prefectureName,
  cityName,
  description,
  imageFile,
}: CreateTeamProfileProps) => {
  CreateTeamProfile({
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
    .then(() => {
      console.log('updateTeamProfile'); // eslint-disable-line no-console
    })
    .catch((e) => {
      console.log(e); // eslint-disable-line no-console
    });
};

/** チーム情報を更新する */
const updateTeamProfile = async ({
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
}: UpdateTeamProfileProps) => {
  const selectedSportId = getSportIdByName(sports, sportName);
  // TODO: エラーメッセージを検討
  if (!selectedSportId) {
    return;
  }
  const selectedGradeId = getGradeIdByName(grades, gradeName);
  // TODO: エラーメッセージを検討
  if (!selectedGradeId) {
    return;
  }
  const putResult = await Storage.put(uuidv4(), imageFile, {
    contentType: 'image/png',
  });
  await updateTeamInfo(
    teamId,
    teamName,
    selectedSportId,
    selectedGradeId,
    putResult.key,
    description,
    prefectureName,
    cityName
  );
};

/** チーム情報の更新処理を呼び出す */
export const handleUpdateTeamProfile = ({
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
}: UpdateTeamProfileProps) => {
  updateTeamProfile({
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
    .then(() => {
      console.log('updateTeamProfile'); // eslint-disable-line no-console
    })
    .catch((e) => {
      console.log(e); // eslint-disable-line no-console
    });
};
