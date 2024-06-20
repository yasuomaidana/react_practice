import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { refreshToken } from '../tokenService';
import { onError } from '@apollo/client/link/error';
import { logout_request } from '../auth_requests';


const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql', // Replace with your GraphQL API URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const errorLink = onError(({ operation, graphQLErrors, forward }) => {
  if(graphQLErrors){
    graphQLErrors.filter((error) => error.message === 'User not authenticated').map((error) => {
      if (localStorage.getItem('access_token')){
        error.message = 'Refreshing token';
      }
      return refreshToken(localStorage.getItem('refresh_token') || '')
        .then((newAccessToken) => {
          if (newAccessToken) {
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          } else {
            logout_request();
            console.log('No new access token obtained');
            return;
          }
        });
    });
  }
});

const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default apolloClient;