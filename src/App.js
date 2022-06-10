import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Ristorante ConFusion</Navbar.Brand>
      </Container>
     </Navbar>
    </div>
  );
}

export default App;
