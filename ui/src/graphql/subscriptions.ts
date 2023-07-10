/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onCreateChatMessage(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onUpdateChatMessage(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onDeleteChatMessage(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRelayChatRoomTeam = /* GraphQL */ `
  subscription OnCreateRelayChatRoomTeam(
    $filter: ModelSubscriptionRelayChatRoomTeamFilterInput
    $owner: String
  ) {
    onCreateRelayChatRoomTeam(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRelayChatRoomTeam = /* GraphQL */ `
  subscription OnUpdateRelayChatRoomTeam(
    $filter: ModelSubscriptionRelayChatRoomTeamFilterInput
    $owner: String
  ) {
    onUpdateRelayChatRoomTeam(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRelayChatRoomTeam = /* GraphQL */ `
  subscription OnDeleteRelayChatRoomTeam(
    $filter: ModelSubscriptionRelayChatRoomTeamFilterInput
    $owner: String
  ) {
    onDeleteRelayChatRoomTeam(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
