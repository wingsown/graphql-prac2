const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products, reviews } = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Category,
      Product
    },
    context: {
      categories,
      products,
      reviews,
    },
});

server.listen().then(({ url }) => {
    console.log("Server is ready at" + url)
});