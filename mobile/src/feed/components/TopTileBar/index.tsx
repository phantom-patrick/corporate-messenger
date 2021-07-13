import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components
import UserDataView from '../UserData';
import UserIconView from '../UserIcon';

// containers
import PostMenuButton from 'feed/containers/PostMenuButton';

interface ITopTileBarViewProps {
  onUserPress(): void;
  onPostPressed(): void;
  id: string;
  avatar: string;
  author: string;
  createdAt: string;
}

const TopTileBarView: FC<ITopTileBarViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.barStyle} onPress={props.onPostPressed}>
      <TouchableOpacity
        style={styles.userInfoStyle}
        onPress={props.onUserPress}>
        <UserIconView avatar={props.avatar} />
        <UserDataView author={props.author} createdAt={props.createdAt} />
      </TouchableOpacity>
      <PostMenuButton postId={props.id} />
    </TouchableOpacity>
  );
};

export default memo(TopTileBarView);
