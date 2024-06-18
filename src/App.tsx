import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { initializeAuht } from './hooks/auth_requests';
import "./hooks/axiosConfig";
import PCConfigurator from './components/cpu/PCConfigurator';
import { initialPC } from './components/cpu/InitialPC';

function App() {
  const dispatch = useDispatch(); // Access the dispatch function
  useEffect(() => {
    dispatch(initializeAuht() as any); // Provide the correct type for dispatch and cast the action creator as any
  }, [dispatch]);
  return (
    <div className="App">
      <PCConfigurator initialPC={initialPC}/>
    </div>
  );
}

export default App;
