import { useToggleLikeMutation } from '@/common/types/gql.generated';

import crashlytics from '@react-native-firebase/crashlytics';

export const useOnLikePressed = (postId: string) => {
  const [toggleLike] = useToggleLikeMutation();
  return () => {
    toggleLike({ variables: { id: postId } });
    crashlytics()
      .setCrashlyticsCollectionEnabled(true)
      .then(() => crashlytics().crash());
  };
};
