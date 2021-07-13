import {
  useGetChatsQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';
import { filterChats } from '../utils/filterChats';

export const useChatList = (filter: string) => {
  const { data } = useGetChatsQuery();
  useNewChatSubscription();

  if (!data || !data.getChats) {
    return [] as any;
  }

  const chats = data.getChats.map((el) => {
    if (!el) {
      return [] as any;
    }
    return {
      title: el.title,
      participants: el.participants,
      id: el.id,
      unreadCount:
        el.messages?.reduce((acc, msg) => {
          return msg?.readBy.find((user) => user.id === data.getUser.id)
            ? acc
            : acc + 1;
        }, 0) || 0,
    };
  });

  const filteredChats = filterChats(chats, filter);

  return filteredChats;
};
