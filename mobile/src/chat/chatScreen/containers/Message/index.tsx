import React, { FC, memo } from 'react';

// components
import MessageView from 'chat/chatScreen/components/Message';

// hooks
import { useOnMessagePressed } from 'chat/chatScreen/hooks/useOnMessagePressed';
import { useDirection } from 'chat/chatScreen/hooks/useDirection';

// constants
import { parseDate } from '../../utils/parseDate';
import { IMessageItem } from '../../types/message';

interface IMessageContainerProps extends IMessageItem {
  currentUserId: string;
  setMessageEdit(msg: IMessageItem | null): void;
}

const MessageContainer: FC<IMessageContainerProps> = (props) => {
  const direction = useDirection(props.author.id, props.currentUserId);
  const onPress = useOnMessagePressed(props.id);
  const createdAt = parseDate(props.createdAt);
  const lastEdit = parseDate(props.lastEdit);

  if (!createdAt) {
    throw Error('msg loading error');
  }

  return (
    <MessageView
      onPress={onPress}
      setEditMessage={props.setMessageEdit}
      content={props.content}
      direction={direction}
      author={props.author.name}
      createdAt={createdAt}
      isRead={props.isRead}
      lastEdit={lastEdit}
      id={props.id}
    />
  );
};

export default memo(MessageContainer);
