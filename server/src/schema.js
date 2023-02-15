const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query{
		tracksForHome: [Track!]!
	}
	
	type Track{
		id: ID!
		title: String!
		author: Author!
		length: Int
		modulesCount: Int
		thumbnail: String
	}
	
	type Author{
		id: ID!
		name: String!
		photo: String
	}
`;

module.exports = typeDefs;