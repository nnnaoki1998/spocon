import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, styled } from '@mui/material';
import React, { useRef } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SpoconFileUploadButton: React.FC<Props> = ({
  label,
  onChange,
}) => {
  const SelectedImageRef = useRef(null);
  return (
    // NOTE: ボタンの各属性を呼び出し元で指定したい場合は、Propsに追加して受け取るようにする
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {label}
      <VisuallyHiddenInput
        ref={SelectedImageRef}
        type="file"
        onChange={onChange}
      />
    </Button>
  );
};
