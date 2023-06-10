import { API } from 'aws-amplify';
import {
  ChatMessagesByChatRoomIdQuery,
  ChatRoomsByTeamIdQuery,
  CreateChatMessageMutation,
} from '../../API';
import { createChatMessage } from '../../graphql/mutations';
import {
  chatMessagesByChatRoomId,
  chatRoomsByTeamId,
} from '../../graphql/queries';

interface GraphQLQueryResult<T> {
  data: T;
}

/** チームIDを指定して、参加しているチャットルームを取得する */
export const getChatRooms = async (
  teamId: string
): Promise<GraphQLQueryResult<ChatRoomsByTeamIdQuery>> =>
  (await API.graphql({
    query: chatRoomsByTeamId,
    variables: { teamId },
  })) as GraphQLQueryResult<ChatRoomsByTeamIdQuery>;

/** チャットルームIDを指定して、チャットルーム内のメッセージをすべて取得する */
export const getChatMessages = async (
  chatRoomId: string
): Promise<GraphQLQueryResult<ChatMessagesByChatRoomIdQuery>> =>
  (await API.graphql({
    query: chatMessagesByChatRoomId,
    variables: { chatRoomId },
  })) as GraphQLQueryResult<ChatMessagesByChatRoomIdQuery>;

/** チャットメッセージを送信する */
export const pushChatMessage = async (
  chatRoomId: string,
  teamId: string,
  message: string
) => {
  await API.graphql<CreateChatMessageMutation>({
    query: createChatMessage,
    variables: {
      input: {
        chatRoomId,
        writeDateTime: new Date().getTime(),
        teamId,
        message,
      },
    },
  });
};
