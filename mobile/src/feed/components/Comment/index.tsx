import React, { FC, memo } from 'react';
import { View, Text, Image } from 'react-native';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// styles
import styles from './styles';

// consts
import COLORS from '@/common/constants/colors';

// types
import { IconName } from '@/common/types/iconNames';

interface ICommentViewProps {
  content: string;
  authorName: string;
  authorAvatar: string | null;
  createdAt: string;
  likeCount: number;
  liked: boolean;
  toggleLike(): void;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';
  const icon: IconName = props.liked ? 'liked' : 'unliked';
  return (
    <View style={styles.feedStyle}>
      {props.authorAvatar ? (
        <Image
          style={styles.userIconImageStyle}
          source={{ uri: props.authorAvatar }}
        />
      ) : (
        <Image
          style={styles.userIconImageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <View style={styles.textWrapperStyle}>
        <Text style={styles.secondaryTextStyle}>{props.authorName}</Text>
        <Text style={styles.primaryTextStyle}>{props.content}</Text>
        <View style={styles.infoStyle}>
          <Text style={styles.minorTextStyle}>{props.createdAt}</Text>
          <IconWithTextButton
            icon={icon}
            label={likes}
            labelStyle={styles.iconStyle}
            onPress={props.toggleLike}
            iconColor={COLORS.secondary}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(CommentView);
