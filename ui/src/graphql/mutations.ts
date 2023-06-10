/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
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
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
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
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
