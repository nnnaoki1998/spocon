import { ChangeEvent, useState } from 'react';

export const useHandleImageChange = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files && event.currentTarget.files[0]) {
      const targetFile = event.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  return {
    imageFile,
    handleImageChange,
  };
};
