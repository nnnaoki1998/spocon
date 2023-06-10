/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatMessageInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
  message: string,
};

export type ModelChatMessageConditionInput = {
  message?: ModelStringInput | null,
  and?: Array< ModelChatMessageConditionInput | null > | null,
  or?: Array< ModelChatMessageConditionInput | null > | null,
  not?: ModelChatMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ChatMessage = {
  __typename: "ChatMessage",
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
  message: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateChatMessageInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
  message?: string | null,
};

export type DeleteChatMessageInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type CreateChatRoomInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateChatRoomInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type DeleteChatRoomInput = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type ModelChatMessagePrimaryCompositeKeyConditionInput = {
  eq?: ModelChatMessagePrimaryCompositeKeyInput | null,
  le?: ModelChatMessagePrimaryCompositeKeyInput | null,
  lt?: ModelChatMessagePrimaryCompositeKeyInput | null,
  ge?: ModelChatMessagePrimaryCompositeKeyInput | null,
  gt?: ModelChatMessagePrimaryCompositeKeyInput | null,
  between?: Array< ModelChatMessagePrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelChatMessagePrimaryCompositeKeyInput | null,
};

export type ModelChatMessagePrimaryCompositeKeyInput = {
  writeDateTime?: number | null,
  teamId?: string | null,
};

export type ModelChatMessageFilterInput = {
  chatRoomId?: ModelIDInput | null,
  writeDateTime?: ModelIntInput | null,
  teamId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelChatMessageFilterInput | null > | null,
  or?: Array< ModelChatMessageFilterInput | null > | null,
  not?: ModelChatMessageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelChatMessageConnection = {
  __typename: "ModelChatMessageConnection",
  items:  Array<ChatMessage | null >,
  nextToken?: string | null,
};

export type ModelChatRoomPrimaryCompositeKeyConditionInput = {
  eq?: ModelChatRoomPrimaryCompositeKeyInput | null,
  le?: ModelChatRoomPrimaryCompositeKeyInput | null,
  lt?: ModelChatRoomPrimaryCompositeKeyInput | null,
  ge?: ModelChatRoomPrimaryCompositeKeyInput | null,
  gt?: ModelChatRoomPrimaryCompositeKeyInput | null,
  between?: Array< ModelChatRoomPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelChatRoomPrimaryCompositeKeyInput | null,
};

export type ModelChatRoomPrimaryCompositeKeyInput = {
  writeDateTime?: number | null,
  teamId?: string | null,
};

export type ModelChatRoomFilterInput = {
  chatRoomId?: ModelIDInput | null,
  writeDateTime?: ModelIntInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionChatMessageFilterInput = {
  chatRoomId?: ModelSubscriptionIDInput | null,
  writeDateTime?: ModelSubscriptionIntInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  chatRoomId?: ModelSubscriptionIDInput | null,
  writeDateTime?: ModelSubscriptionIntInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type CreateChatMessageMutationVariables = {
  input: CreateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type CreateChatMessageMutation = {
  createChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatMessageMutationVariables = {
  input: UpdateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type UpdateChatMessageMutation = {
  updateChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatMessageMutationVariables = {
  input: DeleteChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type DeleteChatMessageMutation = {
  deleteChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetChatMessageQueryVariables = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type GetChatMessageQuery = {
  getChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatMessagesQueryVariables = {
  chatRoomId?: string | null,
  writeDateTimeTeamId?: ModelChatMessagePrimaryCompositeKeyConditionInput | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatMessagesQuery = {
  listChatMessages?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      chatRoomId: string,
      writeDateTime: number,
      teamId: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  chatRoomId: string,
  writeDateTime: number,
  teamId: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  chatRoomId?: string | null,
  writeDateTimeTeamId?: ModelChatRoomPrimaryCompositeKeyConditionInput | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      chatRoomId: string,
      writeDateTime: number,
      teamId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatMessagesByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatMessagesByChatRoomIdQuery = {
  chatMessagesByChatRoomId?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      chatRoomId: string,
      writeDateTime: number,
      teamId: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomsByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomsByTeamIdQuery = {
  chatRoomsByTeamId?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      chatRoomId: string,
      writeDateTime: number,
      teamId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateChatMessageSubscription = {
  onCreateChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChatMessageSubscription = {
  onUpdateChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChatMessageSubscription = {
  onDeleteChatMessage?:  {
    __typename: "ChatMessage",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    chatRoomId: string,
    writeDateTime: number,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
