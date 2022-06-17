//import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import React from 'react';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES
    }
  }
  render () {
    return (
    <div>
     <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Ristorante ConFusion</Navbar.Brand>
      </Container>
     </Navbar>
     <Menu dishes={this.state.dishes}/>
    </div>
  )};
}

export default App;
