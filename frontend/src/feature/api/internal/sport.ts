import axios, { AxiosResponse } from 'axios';
import { TypeSport } from '../../../components/utils/TypeDefinitions';
import { backendUrl } from '../../../config';

/** スポーツ一覧を取得します */
export const getSports = async (): Promise<AxiosResponse<TypeSport[]>> =>
  axios.get(`${backendUrl}/sport`);
