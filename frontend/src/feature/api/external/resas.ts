import axios, { AxiosResponse } from 'axios';
import { Prefecture } from '../../../components/utils/TypeDefinitions';
import { resasApiKey, resasApiUrl } from '../../../config';

type ResasApiResponse<T> = {
  message: string | null;
  result: T[];
};

/** 都道府県一覧を取得します */
export const getPrefectures = async (): Promise<
  AxiosResponse<ResasApiResponse<Prefecture>>
> =>
  axios.get(`${resasApiUrl}/prefectures`, {
    headers: { 'X-API-KEY': resasApiKey },
  });
