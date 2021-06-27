import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IUnreadCountViewProps {
  count: number;
}

const UnreadCountView: FC<IUnreadCountViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <View style={styles.unreadStyle}>
        <Text style={styles.textStyle}>{props.count}</Text>
      </View>
    </View>
  );
};

export default memo(UnreadCountView);
