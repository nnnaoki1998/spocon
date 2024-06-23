import { Box } from '@mui/material';
import React from 'react';
import { SpoconFileUploadButton } from '../1_atoms/SpoconFileUploadButton';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';
import { SpoconImageDisplayBox } from '../1_atoms/SpoconImageDisplayBox';

type FileUploadFormProps = {
  formLabel: string;
  isRequired: boolean;
  buttonLabel: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string;
};

export const SpoconFileUploadForm: React.FC<FileUploadFormProps> = ({
  formLabel,
  isRequired,
  buttonLabel,
  onChange,
  imageUrl,
}) => (
  <Box>
    <SpoconFormLabel label={formLabel} isRequired={isRequired} />
    <SpoconFileUploadButton label={buttonLabel} onChange={onChange} />
    <SpoconImageDisplayBox imageUrl={imageUrl} />
  </Box>
);
