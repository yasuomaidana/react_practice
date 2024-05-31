import React, { useEffect } from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import { useDispatch } from 'react-redux';
import { initializeAuht } from './hooks/auth_requests';
import "./hooks/axiosConfig";
import PCConfigurator from './components/cpu/PCConfigurator';
import { initialPC } from './components/cpu/InitialPC';
// import UserComponent from './components/UserComponent';
// import LinearPlot from './components/LinearPlot';
// import ReduxExample from './components/ReduxExample';

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
      {/* <ReduxExample /> */}
      <PCConfigurator initialPC={initialPC}/>
    </div>
  );
}

export default App;
