import axios, { AxiosResponse } from 'axios';
import { TypeGrade } from '../../../types';
import { backendUrl } from '../../../config';

export const getGrades = async (): Promise<AxiosResponse<TypeGrade[]>> =>
  axios.get(`${backendUrl}/grade`);
