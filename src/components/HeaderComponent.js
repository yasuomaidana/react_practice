import {FormControl, FormGroup, FormLabel, Nav, Row } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHome, faInfo, faList, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Component } from "react";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen});
  }

  handleLogin(event){
    this.toggleModal();
    console.log(this.username.value);
    console.log(this.password.value);
    console.log(this.remember);
    event.preventDefault();
  }

  login(){
    return(
    <Navbar className="justify-content-end">
      <Nav>
        <Button onClick={this.toggleModal} variant="outline-primary"><FontAwesomeIcon icon={faRightToBracket}/> Login</Button>
      </Nav>
    </Navbar>);
  }

  menu(){
    return(<Collapse in={this.state.isNavOpen} className="ps-2">
    <div>
      <Nav>
        <NavLink className={"nav-link me-2"} to={"/home"} style={{display:"inline"}}><FontAwesomeIcon icon={faHome} size="lg"/>Home</NavLink>
        <NavLink className={"nav-link me-2"} to={"/about"} style={{display:"inline"}}><FontAwesomeIcon icon={faInfo} size="lg"/>About us</NavLink>
        <NavLink className={"nav-link me-2"} to={"/menu"} style={{display:"inline"}}><FontAwesomeIcon icon={faList} size="lg"/>Menu</NavLink>
        <NavLink className={"nav-link me-2"} to={"/contact"} style={{display:"inline"}}><FontAwesomeIcon icon={faAddressCard} size="lg"/>Contact us</NavLink>
      </Nav>
    </div>
  </Collapse>);
  }

  navBarOrder(){
    let small = window.innerWidth < 760;
    if(small){
      return(<>
      {this.login()}
      <div style={{flexBasis: "100%",height: "0"}}/>
      {this.menu()}</>);
    }
    else{
      return(<>
      {this.menu()}
      {this.login()}
      </>);
    }
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
            {this.navBarOrder()}
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
        <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
          <Modal.Header closeButton>Login</Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleLogin}>
              <Form.Group>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormControl name="username" id="username" type="text" ref={(input)=>this.username = input}></FormControl>
              </Form.Group>
              <Form.Group>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl name="password" id="password" type="password" ref={(input)=>this.password = input}></FormControl>
              </Form.Group>
              <FormGroup>
                <Form.Check
                      type="checkbox"
                      name="remember"
                      label="Remember me"
                      defaultChecked={this.remember=false}
                      onChange={(event)=>this.remember=event.target.checked}
                    />
              </FormGroup>
              <Button type="submit">Login</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  }

  export default Header;