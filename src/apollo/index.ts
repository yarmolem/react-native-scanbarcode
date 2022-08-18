import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://laesperanza.almacenrivera.com/public/graphql',
  uri: 'https://apicajabamba.plazaticket.com/public/graphql',
  cache: new InMemoryCache(),
});

export default client;
