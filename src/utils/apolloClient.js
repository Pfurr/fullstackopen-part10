import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

//create link for apollo client
const httpLink = createHttpLink({
  uri: Constants.manifest.extra.APOLLO_URI
});
//declare function for generating apolo client

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
};

export default createApolloClient;