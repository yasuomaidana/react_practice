import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component{
    render(){
        return(
            <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <p className="h1">Ristorante ConFusion</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        );
    }
}

export default Header