import axios, { AxiosResponse } from 'axios';
import { backendUrl } from '../../../config';
import { TypeTeam } from '../../../components/utils/TypeDefinitions';

/** チーム情報を取得します */
export const getTeam = async (id: number): Promise<AxiosResponse<TypeTeam>> =>
  axios.get(`${backendUrl}/team/${id}`);

/** チーム情報を更新します */
export const updateTeamInfo = async (
  id: number,
  name: string,
  sportId: number,
  gradeId: number,
  iconPath: string,
  description: string,
  prefecture: string,
  city: string
): Promise<void> =>
  axios.patch(`${backendUrl}/team/${id}`, {
    name,
    sport_id: sportId,
    grade_id: gradeId,
    icon_path: iconPath,
    description,
    address_state: prefecture,
    address_city: city,
  });
