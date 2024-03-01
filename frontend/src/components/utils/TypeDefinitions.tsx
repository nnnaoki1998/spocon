export type TypeTeam = {
  id: number;
  uuid: string;
  team_name: string;
  reception_status: string;
  icon_path: string;
  description: string;
  address: string;
  sport_name: string;
  grade_name: string;
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
