import { useEffect } from 'react';
import { useGetTeam } from './useGetTeam';
import { useGetImageUrlFromStorage } from '../image/useGetImageUrlFromStorage';

type Props = {
  teamId: number;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  setGradeName: React.Dispatch<React.SetStateAction<string>>;
  setSportName: React.Dispatch<React.SetStateAction<string>>;
  setPrefecture: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const useSetTeam = ({
  teamId,
  setTeamName,
  setGradeName,
  setSportName,
  setPrefecture,
  setCity,
  setDescription,
  setImageUrl,
}: Props) => {
  const { team } = useGetTeam(teamId);

  useEffect(() => {
    if (team) {
      setTeamName(team.team_name);
      setGradeName(team.grade_name);
      setSportName(team.sport_name);
      setPrefecture(team.address_state);
      setCity(team.address_city);
      setDescription(team.description);
      useGetImageUrlFromStorage(team.icon_path, setImageUrl);
    }
  }, [team]);
};
