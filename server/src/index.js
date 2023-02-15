const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackApi = require('./datasources/track-api');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			trackAPI: new TrackApi()
		}
	}
});

server.listen().then( () => {
	console.log("Listening!!!");
});
