import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { initializeAuht } from './hooks/auth_requests';
import "./hooks/axiosConfig";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import AppRoutes from './AppRoutes';
import apolloClient from './hooks/graphql/apolloClient';

function App() {
  const dispatch = useDispatch(); // Access the dispatch function
  useEffect(() => {
    dispatch(initializeAuht() as any); // Provide the correct type for dispatch and cast the action creator as any
  }, [dispatch]);
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
