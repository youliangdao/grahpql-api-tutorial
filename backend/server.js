const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "吾輩は猫である",
    author: "夏目漱石",
  },
  {
    title: "走れメロス",
    author: "太宰治",
  },
];

// どういうふうにAPIに問い合わせするのか？を定義する
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    test: [Book]
  }
`;

// 実際にtestというkeyが叩かれたときにどういう値を返すのか？を定義するものがresolver
// 上で定義したtypeDefsのkeyと対応している
const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
