import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IFriendButtonViewProps {
  onPress(): void;
}

const FriendButtonView: FC<IFriendButtonViewProps> = (props) => {
  return (
    <View style={styles.friendButtonViewStyle}>
      <TouchableOpacity
        style={styles.friendButtonTouchStyles}
        onPress={props.onPress}>
        <Text>Add friend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(FriendButtonView);
