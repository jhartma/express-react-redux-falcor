import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from "graphql"

let count = 0

let RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    count: {
      type: GraphQLInt,
      resolve: function() {
        return count
      },
    },
  },
})

let rootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: "Updates the count",
      resolve: function() {
        count += 1
        return count
      },
    },
  },
})

let schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: rootMutation,
})

export default schema
