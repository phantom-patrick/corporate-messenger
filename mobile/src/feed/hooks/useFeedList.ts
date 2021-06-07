// component
import TileView from '@/feed/components/Tile';
import { useGetFeedQuery } from '@/common/types/gql.generated';

export const useFeedList = () => {
  const { data } = useGetFeedQuery();

  return data?.getAllPosts?.map((el) => {
    if (!el) {
      return {
        data: null,
        id: '',
      };
    }
    return {
      data: TileView,
      id: el.id,
    };
  });
};
