import React from 'react';
import './App.scss';
import ReduxExample from './components/ReduxExample';
// import UserComponent from './components/UserComponent';
// import LinearPlot from './components/LinearPlot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
      {/* <UserComponent /> */}
      {/* <LinearPlot /> */}
      <ReduxExample />
    </div>
  );
}

export default App;
