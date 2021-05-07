import React, { FC, memo } from 'react';
import {} from 'react-native';

// components
import ChatsView from 'chat/components/Chats';

// hooks
import { useChatList } from 'chat/hooks/useChatList';

interface IChatsContainerProps {}

const ChatsContainer: FC<IChatsContainerProps> = () => {
  const chatsData = useChatList();

  return <ChatsView data={chatsData} />;
};

export default memo(ChatsContainer);
