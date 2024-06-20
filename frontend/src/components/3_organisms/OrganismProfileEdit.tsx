import { Box, Grid, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SpoconButton } from '../1_atoms/SpoconButton';
import { SpoconFileUploadButton } from '../1_atoms/SpoconFileUploadButton';
import { SpoconFormLabel } from '../1_atoms/SpoconFormLabel';
import { SpoconImageDisplayBox } from '../1_atoms/SpoconImageDisplayBox';
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
}) => (
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
    <SpoconFileUploadButton label="UPLOAD IMAGE" onChange={handleImageChange} />
    <SpoconImageDisplayBox imageUrl={imageUrl} />
    <Box textAlign="center" sx={{ mt: 4 }}>
      <SpoconButton
        size="large"
        variant="contained"
        label="更新"
        onClickFunction={() => handleUpdateTeamProfile()}
      />
    </Box>
  </Box>
);
