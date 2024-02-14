export type TypeTeam = {
  id: string;
  name: string;
  area: string;
  sport: string;
  status: string;
  image_url: string;
  lastLoginDate: Date;
};

export type TypeChatRoom = {
  chatRoomId: string;
  createdAt: string;
  owner: string;
  teamId: string;
  updatedAt: string;
  writeDateTime: number;
};

export type TypeTest =
  | ({
      __typename: 'RelayChatRoomTeam';
      chatRoomId: string;
      writeDateTime: number;
      teamId: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null | undefined;
    } | null)[]
  | undefined;

export type TeamInfo = {
  address: string;
  description: string;
  grade_name: string;
  icon_path: string;
  id: number;
  reception_status: string;
  sport_name: string;
  team_name: string;
  uuid: string;
};

export type TeamInfos =
  | ({
      address: string;
      description: string;
      grade_name: string;
      icon_path: string;
      id: number;
      reception_status: string;
      sport_name: string;
      team_name: string;
      uuid: string;
    } | null)[]
  | undefined;
