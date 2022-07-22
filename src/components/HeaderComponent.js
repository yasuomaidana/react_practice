import {Nav, Row } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHome, faInfo, faList } from "@fortawesome/free-solid-svg-icons";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Component } from "react";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
      this.setState({isNavOpen: window.innerWidth >= 760});
  }

  /*()=>this.toggleNav() we can use it inside 
  onClick=()=>this.toggleNav()}, and we could skip 
  this.toggleNav = this.toggleNav.bind(this);*/
  toggleNav(){
    this.setState({isNavOpen:!this.state.isNavOpen});
  }
  render(){
    return (
      <>
        <Navbar variant="dark" expand="md">
          <Container className="px-6">
            <NavbarToggle onClick={this.toggleNav}/>
            <Navbar.Brand href="/" className="me-auto ps-2">
              <img src="assets/images/logo.png" height={30} width={41}
              alt="Ristorante Con Fusion"/>
            </Navbar.Brand>
            {window.innerWidth < 760 ? <div style={{flexBasis: "100%",height: "0"}}></div>:<></>}
            <Collapse in={this.state.isNavOpen} className="ps-2">
              <div>
                <Nav>
                  <NavLink className={"nav-link me-2"} to={"/home"} style={{display:"inline"}}><FontAwesomeIcon icon={faHome} size="lg"/>Home</NavLink>
                  <NavLink className={"nav-link me-2"} to={"/about"} style={{display:"inline"}}><FontAwesomeIcon icon={faInfo} size="lg"/>About us</NavLink>
                  <NavLink className={"nav-link me-2"} to={"/menu"} style={{display:"inline"}}><FontAwesomeIcon icon={faList} size="lg"/>Menu</NavLink>
                  <NavLink className={"nav-link me-2"} to={"/contact"} style={{display:"inline"}}><FontAwesomeIcon icon={faAddressCard} size="lg"/>Contact us us</NavLink>
                </Nav>
              </div>
            </Collapse>
          </Container>
        </Navbar>
        <Row className="p-5 text-white rounded jumbotron row-header">
          <Col xs={12} sm={6}>
            <h1>Ristorante con Fusion</h1>
            <p>
              We take inspiration from the World's best cuisines, and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </Col>
        </Row>
      </>
    );
  }
  }

  export default Header;