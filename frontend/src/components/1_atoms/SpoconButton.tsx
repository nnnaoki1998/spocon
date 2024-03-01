import React from 'react';
import Button from '@mui/material/Button';

export interface Props {
  onClickFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpoconButton: React.FC<Props> = (props: Props) => {
  const { onClickFunction } = props;

  return <Button onClick={() => onClickFunction(true)} />;
};

export { SpoconButton };
