export const API_URL = "https://rickandmortyapi.com/graphql";

export const fetchGraphQL = async <T>(query: string, variables: T = {} as T) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    return response.json();
};

export const LOCATIONS_QUERY = `
  query Locations($filter: FilterLocation) {
    locations(filter: $filter) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  }
`;
