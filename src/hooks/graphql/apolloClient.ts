import { ApolloClient, createHttpLink, from, fromPromise, InMemoryCache, toPromise } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
// import { RetryLink } from '@apollo/client/link/retry';
import { refreshToken } from '../tokenService';
import { logout_request } from '../auth_requests';

// Create a separate link for refreshing the token.
const refreshTokenLink = onError(({ graphQLErrors, operation, forward }) => {
  const shouldRefresh = graphQLErrors &&
    graphQLErrors.some((error) => error.message === 'User not authenticated');
  
  if (!shouldRefresh) {
    return;
  }

  const oldToken = localStorage.getItem('refresh_token') || '';

  return fromPromise(new Promise((resolve, reject) => {
    refreshToken(oldToken)
      .then((newAccessToken) => {
        if (newAccessToken) {
          // Update the localStorage with the new access token.
          localStorage.setItem('access_token', newAccessToken);
          // Retry the original operation with the new access token in the context.
          const context = operation.getContext();
          context.headers.authorization = `Bearer ${newAccessToken}`;
          console.log('Retrying with new access token.');
          return resolve(toPromise(forward(operation)));
        } else {
          logout_request();
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          reject(new Error('No new access token obtained.'));
        }
      })
      .catch((error) => {
        // Handle refresh token errors, e.g., logout.
        logout_request();
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        reject(error);
      });
  }))
});

// Create the HTTP link and add the authentication header with the access token.
const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
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

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  // Handle other errors like network errors
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }

  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      console.error(`[GraphQL error]: ${error.message}`);
    });
  }
});

// Chain the refresh token link with the auth link and error link.
// RetryLink is added to handle temporary network errors.
const client = new ApolloClient({
  link: from([
    // new RetryLink(),
    errorLink,
    refreshTokenLink,
    authLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;