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
export const createRelayChatRoomTeam = /* GraphQL */ `
  mutation CreateRelayChatRoomTeam(
    $input: CreateRelayChatRoomTeamInput!
    $condition: ModelRelayChatRoomTeamConditionInput
  ) {
    createRelayChatRoomTeam(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRelayChatRoomTeam = /* GraphQL */ `
  mutation UpdateRelayChatRoomTeam(
    $input: UpdateRelayChatRoomTeamInput!
    $condition: ModelRelayChatRoomTeamConditionInput
  ) {
    updateRelayChatRoomTeam(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRelayChatRoomTeam = /* GraphQL */ `
  mutation DeleteRelayChatRoomTeam(
    $input: DeleteRelayChatRoomTeamInput!
    $condition: ModelRelayChatRoomTeamConditionInput
  ) {
    deleteRelayChatRoomTeam(input: $input, condition: $condition) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
