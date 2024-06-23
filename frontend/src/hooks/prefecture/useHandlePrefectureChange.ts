import { SelectChangeEvent } from '@mui/material';

/** stateに保持する都道府県を変更する */
export const useHandlePrefectureChange = (
  setPrefectureName: React.Dispatch<React.SetStateAction<string>>
) => {
  const handlePrefectureChange = (event: SelectChangeEvent) => {
    setPrefectureName(event.target.value);
  };

  return {
    handlePrefectureChange,
  };
};
