import React from 'react';
import './App.scss';
import ReduxExample from './components/ReduxExample';
import NavBar from './components/navbar/NavBar';
// import UserComponent from './components/UserComponent';
// import LinearPlot from './components/LinearPlot';

function App() {
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
