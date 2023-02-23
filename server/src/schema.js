const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query{
		tracksForHome: [Track!]!
		track(id: ID!): Track
		module(id: ID!): Module!
	}
	
	type Mutation{
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}
	
	type IncrementTrackViewsResponse{
		code: Int!
		success: Boolean!
		message: String!
		track: Track
	}
	
	type Track{
        id: ID!
        title: String!
        author: Author!
        length: Int @deprecated(reason: "Use durationInSeconds")
		durationInSeconds: Int
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
		content: String
		length: Int @deprecated(reason: "Use durationInSeconds")
		durationInSeconds: Int
		videoUrl: String
	}
`;

module.exports = typeDefs;