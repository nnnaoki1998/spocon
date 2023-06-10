/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatMessage = /* GraphQL */ `
  query GetChatMessage(
    $chatRoomId: ID!
    $writeDateTime: AWSTimestamp!
    $teamId: ID!
  ) {
    getChatMessage(
      chatRoomId: $chatRoomId
      writeDateTime: $writeDateTime
      teamId: $teamId
    ) {
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
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $chatRoomId: ID
    $writeDateTimeTeamId: ModelChatMessagePrimaryCompositeKeyConditionInput
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatMessages(
      chatRoomId: $chatRoomId
      writeDateTimeTeamId: $writeDateTimeTeamId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        chatRoomId
        writeDateTime
        teamId
        message
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom(
    $chatRoomId: ID!
    $writeDateTime: AWSTimestamp!
    $teamId: ID!
  ) {
    getChatRoom(
      chatRoomId: $chatRoomId
      writeDateTime: $writeDateTime
      teamId: $teamId
    ) {
      chatRoomId
      writeDateTime
      teamId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $chatRoomId: ID
    $writeDateTimeTeamId: ModelChatRoomPrimaryCompositeKeyConditionInput
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRooms(
      chatRoomId: $chatRoomId
      writeDateTimeTeamId: $writeDateTimeTeamId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        chatRoomId
        writeDateTime
        teamId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const chatMessagesByChatRoomId = /* GraphQL */ `
  query ChatMessagesByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatMessagesByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        chatRoomId
        writeDateTime
        teamId
        message
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const chatRoomsByTeamId = /* GraphQL */ `
  query ChatRoomsByTeamId(
    $teamId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomsByTeamId(
      teamId: $teamId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        chatRoomId
        writeDateTime
        teamId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
