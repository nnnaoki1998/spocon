import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Box,
  Button,
  CardMedia,
  Grid,
  SelectChangeEvent,
  styled,
} from '@mui/material';
import React, { useRef } from 'react';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';
import { SpoconPageTitle } from '../1_atoms/SpoconPageTitle';
import { SpoconSelectField } from '../1_atoms/SpoconSelectField';
import { SpoconSelectForm } from '../2_molecules/SpoconSelectForm';
import { SpoconTextForm } from '../2_molecules/SpoconTextForm';
import {
  City,
  GradeInfo,
  Prefecture,
  SportInfo,
} from '../utils/TypeDefinitions';

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

interface ProfileEditProps {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  gradeName: string;
  setGradeName: React.Dispatch<React.SetStateAction<string>>;
  sportName: string;
  setSportName: React.Dispatch<React.SetStateAction<string>>;
  prefecture: string;
  city: string;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrefectureChange: (e: SelectChangeEvent) => void;
  handleCityChange: (e: SelectChangeEvent) => void;
  handleUpdateTeamProfile: () => void;
  grades: GradeInfo[];
  sports: SportInfo[];
  prefectures: Prefecture[] | undefined;
  cities: City[] | undefined;
}

export const ProfileEdit: React.FC<ProfileEditProps> = ({
  teamName,
  setTeamName,
  gradeName,
  setGradeName,
  sportName,
  setSportName,
  prefecture,
  city,
  description,
  setDescription,
  imageUrl,
  handleImageChange,
  handleUpdateTeamProfile,
  handlePrefectureChange,
  handleCityChange,
  grades,
  sports,
  prefectures,
  cities,
}) => {
  const SelectedImageRef = useRef(null);

  return (
    <Box>
      <SpoconPageTitle title="チーム編集" />
      <SpoconTextForm
        id="profile-edit-team-name"
        isRequired
        label="チーム名"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <SpoconSelectForm
        selectFieldId="profile-edit-select-field-grade"
        isRequired
        labelId="profile-edit-select-label-grade"
        label="グレード"
        selectionItems={grades}
        getSelectionItemKey={(item: GradeInfo) => String(item.id)}
        getSlectionItemName={(item: GradeInfo) => item.name}
        value={gradeName}
        onChange={(e) => setGradeName(e.target.value)}
      />
      <SpoconSelectForm
        selectFieldId="profile-edit-select-field-sport"
        isRequired
        labelId="profile-edit-select-label-sport"
        label="スポーツ"
        selectionItems={sports}
        getSelectionItemKey={(item: SportInfo) => String(item.id)}
        getSlectionItemName={(item: SportInfo) => item.name}
        value={sportName}
        onChange={(e) => setSportName(e.target.value)}
      />
      <SpoconFormLabel label="主な活動場所" isRequired />
      <Grid container>
        <Grid item xs={6}>
          {prefectures && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-prefecture"
              labelId="profile-edit-select-label-prefecture"
              label="都道府県"
              selectionItems={prefectures}
              getSelectionItemKey={(item: Prefecture) => String(item.prefCode)}
              getSlectionItemName={(item: Prefecture) => item.prefName}
              value={prefecture}
              onChange={handlePrefectureChange}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          {cities && (
            <SpoconSelectField
              selectFieldId="profile-edit-select-field-city"
              labelId="profile-edit-select-label-city"
              label="市区町村"
              selectionItems={cities}
              getSelectionItemKey={(item: City) => String(item.cityCode)}
              getSlectionItemName={(item: City) => item.cityName}
              value={city}
              onChange={handleCityChange}
            />
          )}
        </Grid>
      </Grid>
      <SpoconTextForm
        id="profile-edit-description"
        isRequired
        label="チーム紹介文"
        multiline
        rows={4}
        maxRows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <SpoconFormLabel label="チーム画像" isRequired />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        UPLOAD IMAGE
        <VisuallyHiddenInput
          ref={SelectedImageRef}
          type="file"
          onChange={handleImageChange}
        />
      </Button>
      {imageUrl ? (
        <CardMedia
          component="img"
          alt="upload image"
          image={imageUrl}
          sx={{ height: '300px', width: '300px' }}
        />
      ) : (
        <Box
          sx={{ height: '300px', width: '300px', backgroundColor: 'black' }}
        />
      )}
      <Box textAlign="center">
        <Button id="fullWidth" onClick={() => handleUpdateTeamProfile()}>
          更新
        </Button>
      </Box>
    </Box>
  );
};
