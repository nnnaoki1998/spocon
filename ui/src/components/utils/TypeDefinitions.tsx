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
