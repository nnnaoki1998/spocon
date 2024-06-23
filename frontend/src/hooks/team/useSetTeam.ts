import { useEffect } from 'react';
import { useGetTeam } from './useGetTeam';
import { useGetImageUrlFromStorage } from '../image/useGetImageUrlFromStorage';

type Props = {
  teamId: number;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  setGradeName: React.Dispatch<React.SetStateAction<string>>;
  setSportName: React.Dispatch<React.SetStateAction<string>>;
  setPrefectureName: React.Dispatch<React.SetStateAction<string>>;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const useSetTeam = ({
  teamId,
  setTeamName,
  setGradeName,
  setSportName,
  setPrefectureName,
  setCityName,
  setDescription,
  setImageUrl,
}: Props) => {
  const { team } = useGetTeam(teamId);

  useEffect(() => {
    if (team) {
      setTeamName(team.team_name);
      setGradeName(team.grade_name);
      setSportName(team.sport_name);
      setPrefectureName(team.address_state);
      setCityName(team.address_city);
      setDescription(team.description);
      useGetImageUrlFromStorage(team.icon_path, setImageUrl);
    }
  }, [team]);
};
