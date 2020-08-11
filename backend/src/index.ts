import { ApolloServer, gql, IResolvers } from 'apollo-server';

import { connect } from './database/connect';
import { ReadBooks, CreateBook } from './database/controllers/book.controller';

const PORT: number = +process.env.PORT || 3000;

const typeDefs = gql`
  type Book {
    title: String
    author: String
    _id: ID!
  }

  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;


const resolvers: IResolvers<any, any> = {
  Query: {
    books: async () => await ReadBooks(),
  },
  Mutation: {
    addBook: async (_, args) => {
      const bookAdded = await CreateBook({ ...args });
      return bookAdded;
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers, cors: true, debug: true });

const db = 'mongodb://localhost:27017/books';
connect({ db });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
