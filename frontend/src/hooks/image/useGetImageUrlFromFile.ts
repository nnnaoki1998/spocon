import { useEffect, useRef } from 'react';
import { Args, getFileUrl } from '../../utils/getFileUrl';

/** ファイルから画像URLを取得する */
export const useGetImageUrlFromFile = (
  { file }: Args,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    // 初回レンダリング時は何もしない
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const getImageUrl = async () => {
      const fileUel = await getFileUrl({ file });
      setImageUrl(fileUel);
    };
    getImageUrl().catch((e) => {
      console.log(e); // eslint-disable-line no-console
    });
  }, [file]);
};
