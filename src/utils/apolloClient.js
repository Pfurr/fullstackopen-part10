import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

//create link for apollo client
const httpLink = createHttpLink({
  uri: 'http://192.168.1.176:5000/graphql'
});
//declare function for generating apolo client

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
};

export default createApolloClient;