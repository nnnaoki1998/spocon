import axios, { AxiosResponse } from 'axios';
import { SportInfo } from '../../../components/utils/TypeDefinitions';
import { backendUrl } from '../../../config';

/** スポーツ一覧を取得します */
export const getSports = async (): Promise<AxiosResponse<SportInfo[]>> =>
  axios.get(`${backendUrl}/sport`);
