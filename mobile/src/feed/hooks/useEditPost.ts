import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  PostFragmentFragmentDoc,
  useEditPostMutation,
} from '@/common/types/gql.generated';

// cache
import { editPost } from '@/common/cache/cache';

export const useEditPost = () => {
  const navigation = useNavigation();
  const [editPostMutation] = useEditPostMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      cache.modify({
        fields: {
          getPosts(exPosts = []) {
            try {
              const post = cache.writeFragment({
                fragment: PostFragmentFragmentDoc,
                data: data.editPost,
              });
              return [...exPosts, post];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  return async () => {
    try {
      const newPost = {
        postId: editPost().id,
        textContent: editPost().textContent,
        mediaContent: editPost().mediaContent,
      };
      await editPostMutation({ variables: { ...newPost } });
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', `${err}`);
    }
  };
};
