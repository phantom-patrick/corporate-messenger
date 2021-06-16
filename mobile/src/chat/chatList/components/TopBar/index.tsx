import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

// containers
import TopBarButtons from 'chat/chatList/containers/TopBarButtons';

interface ITopBarViewProps {}

const TopBarView: FC<ITopBarViewProps> = () => {
  return (
    <View style={styles.topBarStyle}>
      <View style={styles.topBarTextViewStyle}>
        <Text style={styles.textStyle}>Chats</Text>
      </View>
      <TopBarButtons />
    </View>
  );
};

export default memo(TopBarView);
