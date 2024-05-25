import React, { useEffect } from 'react';
import './App.scss';
import ReduxExample from './components/ReduxExample';
import NavBar from './components/navbar/NavBar';
import { useDispatch } from 'react-redux';
import { initializeAuht } from './hooks/auth_requests';
import "./hooks/axiosConfig";
// import UserComponent from './components/UserComponent';
// import LinearPlot from './components/LinearPlot';

function App() {
  const dispatch = useDispatch(); // Access the dispatch function
  useEffect(() => {
    dispatch(initializeAuht() as any); // Provide the correct type for dispatch and cast the action creator as any
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      {/* <UserComponent /> */}
      {/* <LinearPlot /> */}
      <ReduxExample />
    </div>
  );
}

export default App;
