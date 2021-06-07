import { ApolloContextType } from '../../types/apollo';
import { QueryResolvers } from '../../types/gql.generated';

// controllers
import { UserController } from '../../controllers/User';
import { PostController } from '../../controllers/Post';
import { ChatController } from '../../controllers/Chat';

const queryResolvers: QueryResolvers<ApolloContextType> = {
  async getUserById(_, args) {
    return await UserController.getUser(args.id); // don't see principal difference between this query and getUser
  },
  async getPosts(_, __, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    return await PostController.getPostsByAuthor(currentUserId);
  },
  async getChats(_, __, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    return await ChatController.getChats(currentUserId);
  },
  async getCurrentUser(_, __, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    const user = await UserController.getUser(currentUserId);
    if (!user) {
      throw Error('unauthorized user');
    }
    return user;
  },
  async getChatById(_, args, { currentUserId }) {
    if (!currentUserId) throw Error('Unauthorized');

    return await ChatController.getChat(args.chatId);
  },
};

export default queryResolvers;
