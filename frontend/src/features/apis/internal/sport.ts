import axios, { AxiosResponse } from 'axios';
import { TypeSport } from '../../../types';
import { backendUrl } from '../../../config';

/** スポーツ一覧を取得します */
export const getSports = async (): Promise<AxiosResponse<TypeSport[]>> =>
  axios.get(`${backendUrl}/sport`);
