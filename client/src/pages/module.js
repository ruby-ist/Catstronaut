import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { ModuleDetail } from "../components";

const GET_MODULE = gql`
    query getModule($trackId: ID!, $moduleId: ID!) {
        track(id: $trackId) {
            title
            modules {
                title
                durationInSeconds
                id
            }
            id
        }
        module(id: $moduleId) {
            title
            content
            videoUrl
            id
        }
    }
`;

const Module = ({trackId, moduleId}) => {
	const {loading, error, data} = useQuery(GET_MODULE, {
		variables: {
			trackId: trackId,
			moduleId: moduleId
		}
	});

	return (<Layout fullWidth={true}>
		<QueryResult data={data} loading={loading} error={error}>
			<ModuleDetail track={data?.track} module={data?.module} ></ModuleDetail>
		</QueryResult>
	</Layout>)
};

export default Module;