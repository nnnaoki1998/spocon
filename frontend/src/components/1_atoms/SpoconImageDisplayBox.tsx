import { Box, CardMedia } from '@mui/material';
import React from 'react';

type Props = {
  imageUrl: string;
};

export const SpoconImageDisplayBox: React.FC<Props> = ({ imageUrl }) => (
  <Box>
    {imageUrl ? (
      <CardMedia
        component="img"
        alt="upload image"
        image={imageUrl}
        sx={{ height: '300px', width: '300px' }}
      />
    ) : (
      <Box sx={{ height: '300px', width: '300px', backgroundColor: 'black' }} />
    )}
  </Box>
);
