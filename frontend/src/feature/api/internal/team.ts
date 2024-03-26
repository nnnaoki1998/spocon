import axios from 'axios';
import { backendUrl } from '../../../config';

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
