//import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Ristorante ConFusion</Navbar.Brand>
      </Container>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
