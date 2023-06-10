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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onCreateChatRoom(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onUpdateChatRoom(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onDeleteChatRoom(filter: $filter, owner: $owner) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
