import {
  useGetChatsQuery,
  useGetUserQuery,
  useNewChatSubscription,
} from 'common/types/gql.generated';

// types
import { IChatItem } from '../types/chat';

// utils
import { filterChats } from '../utils/filterChats';
import { getChatLogo } from '../utils/getChatLogo';
import { getFirstItem } from '../utils/getFirstItem';
import { sortChatsByDate } from '../utils/sortChatsByDate';

export const useChatList = (filter: string): IChatItem[] => {
  const { data: chatsQuery } = useGetChatsQuery();
  const { data: userQuery } = useGetUserQuery();

  useNewChatSubscription({
    onSubscriptionData: (subscriptionData) => {
      if (!subscriptionData.subscriptionData.data) {
        throw new Error('Invalid response');
      }

      subscriptionData.client.cache.modify({
        fields: {
          getChats() {},
        },
      });
    },
  });

  if (!chatsQuery || !chatsQuery.getChats) {
    return [] as any;
  }

  const chats: IChatItem[] = chatsQuery.getChats.map((el) => {
    if (!el) {
      return {} as any;
    }

    const lastMsgDate = getFirstItem(el.messages)?.createdAt;
    const logo = getChatLogo(el, userQuery?.getUser || null);
    return {
      title: el.title,
      participants: el.participants,
      id: el.id,
      logo,
      lastMsg: { date: lastMsgDate || el.createdAt },
      unreadCount:
        el.messages?.reduce((acc, msg) => {
          return msg?.readBy.find((user) => user.id === chatsQuery.getUser.id)
            ? acc
            : acc + 1;
        }, 0) || 0,
    };
  });

  const filteredChats = filterChats(chats, filter);

  return sortChatsByDate(filteredChats);
};
