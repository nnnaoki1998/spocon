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
export const getRelayChatRoomTeam = /* GraphQL */ `
  query GetRelayChatRoomTeam(
    $chatRoomId: ID!
    $writeDateTime: AWSTimestamp!
    $teamId: ID!
  ) {
    getRelayChatRoomTeam(
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
export const listRelayChatRoomTeams = /* GraphQL */ `
  query ListRelayChatRoomTeams(
    $chatRoomId: ID
    $writeDateTimeTeamId: ModelRelayChatRoomTeamPrimaryCompositeKeyConditionInput
    $filter: ModelRelayChatRoomTeamFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRelayChatRoomTeams(
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
export const relayChatRoomTeamsByTeamId = /* GraphQL */ `
  query RelayChatRoomTeamsByTeamId(
    $teamId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRelayChatRoomTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    relayChatRoomTeamsByTeamId(
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
