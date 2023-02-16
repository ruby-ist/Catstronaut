const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query{
		tracksForHome: [Track!]!
		track(id: ID!): Track
	}
	
	type Track{
        id: ID!
        title: String!
        author: Author!
        length: Int
        modulesCount: Int
        thumbnail: String
        description: String
        numberOfViews: Int
		modules: [Module!]!
    }
	
	type Author{
		id: ID!
		name: String!
		photo: String
	}
	
	type Module{
		id: ID!
		title: String!
		length: Int
	}
`;

module.exports = typeDefs;