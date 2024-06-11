import React, { useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Box,
  Button,
  CardMedia,
  Grid,
  SelectChangeEvent,
  styled,
} from '@mui/material';
import { SpoconSelectField } from '../2_molecules/SpoconSelectField';
import {
  City,
  GradeInfo,
  Prefecture,
  SportInfo,
} from '../utils/TypeDefinitions';
import { SpoconTextField } from '../1_atoms/SpoconTextField';
import { SpoconPageTitle } from '../1_atoms/SpoconPageTitle';

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
      <p>チーム名 *必須</p>
      <SpoconTextField
        id="profile-edit-team-name"
        label="チーム名"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <p>グレード種別 *必須</p>
        <SpoconSelectField
          selectFieldId="profile-edit-select-field-grade"
          labelId="profile-edit-select-label-grade"
          label="グレード"
          selectionItems={grades}
          getSelectionItemKey={(item: GradeInfo) => String(item.id)}
          getSlectionItemName={(item: GradeInfo) => item.name}
          value={gradeName}
          onChange={(e) => setGradeName(e.target.value)}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <p>スポーツ種別 *必須</p>
        <SpoconSelectField
          selectFieldId="profile-edit-select-field-sport"
          labelId="profile-edit-select-label-sport"
          label="スポーツ"
          selectionItems={sports}
          getSelectionItemKey={(item: SportInfo) => String(item.id)}
          getSlectionItemName={(item: SportInfo) => item.name}
          value={sportName}
          onChange={(e) => setSportName(e.target.value)}
        />
      </Box>
      <p>主な活動場所 *必須</p>
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
      <p>チーム紹介文 *必須</p>
      <SpoconTextField
        id="profile-edit-description"
        label="チーム紹介文"
        multiline
        rows={4}
        maxRows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>チーム画像 *必須</p>
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
