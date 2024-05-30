import { useEffect, useRef } from 'react';
import { Args, getFileUrl } from '../../utils/getFileUrl';

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
    const asyncSetImageUrl = async () => {
      const fileUel = await getFileUrl({ file });
      setImageUrl(fileUel);
    };
    asyncSetImageUrl().catch((e) => {
      console.log(e); // eslint-disable-line no-console
    });
  }, [file]);
};
