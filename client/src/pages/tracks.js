import React from 'react';
import {Layout} from '../components';
import {useQuery, gql} from '@apollo/client';
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
    query GetTracks {
        tracksForHome {
            id
            title
            author {
                id
                name
                photo
            }
            length
            modulesCount
            thumbnail
        }
    }
`;

const Tracks = () => {
	const {loading, error, data} = useQuery(TRACKS);

	return <Layout grid>
		<QueryResult data={data} error={error} loading={loading}>
			{data?.tracksForHome?.map((track) => (
				<TrackCard key={track.id} track={track}/>
			))}
		</QueryResult>
	</Layout>;
};

export default Tracks;
