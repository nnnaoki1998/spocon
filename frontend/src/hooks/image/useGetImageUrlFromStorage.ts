import { Storage } from 'aws-amplify';

/** ストレージから画像URLを取得する */
export const useGetImageUrlFromStorage = (
  iconPath: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  Storage.get(iconPath)
    .then((result) => {
      setImageUrl(result);
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line no-console
    });
};
