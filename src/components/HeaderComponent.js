import { Component } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <p className="h1">Ristorante ConFusion</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Row>
          <Col xs={6} sm={12}>
            <div className="p-5 text-white rounded jumbotron row-header">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header