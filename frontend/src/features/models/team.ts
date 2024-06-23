import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { TypeGrade, TypeSport } from '../../types';
import { updateTeamInfo } from '../apis/internal/team';

type UpdateTeamProfileProps = {
  teamId: number;
  teamName: string;
  sports: TypeSport[];
  sportName: string;
  grades: TypeGrade[];
  gradeName: string;
  prefecture: string;
  city: string;
  description: string;
  imageFile: File | null;
};

const getSportIdByName = (sports: TypeSport[], targetSportName: string) =>
  sports.find((sport) => sport.name === targetSportName)?.id;
const getGradeIdByName = (grades: TypeGrade[], targetGradeName: string) =>
  grades.find((grade) => grade.name === targetGradeName)?.id;

/** チーム情報を更新する */
const updateTeamProfile = async ({
  teamId,
  teamName,
  sports,
  sportName,
  grades,
  gradeName,
  prefecture,
  city,
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
    prefecture,
    city
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
  prefecture,
  city,
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
    prefecture,
    city,
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
