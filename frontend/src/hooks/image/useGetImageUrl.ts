import React, { useEffect } from 'react';

type Args = {
  file: File | null;
};

/** 指定されたファイルのURLを返す */
export const useGetImageUrl = ({ file }: Args) => {
  const [imageUrl, setImageUrl] = React.useState('');

  useEffect(() => {
    if (!file) {
      return;
    }

    const reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      // base64のimageUrlを生成する。
      const base64 = reader && reader.result;
      if (base64 && typeof base64 === 'string') {
        setImageUrl(base64);
      }
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    imageUrl,
  };
};
