import axios, { AxiosResponse } from 'axios';
import { GradeInfo } from '../../../components/utils/TypeDefinitions';
import { backendUrl } from '../../../config';

export const getGrades = async (): Promise<AxiosResponse<GradeInfo[]>> =>
  axios.get(`${backendUrl}/grade`);
