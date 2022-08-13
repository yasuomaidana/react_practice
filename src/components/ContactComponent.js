import React from 'react';
import { Container, Row, BreadcrumbItem, Breadcrumb, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFax, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {BsSkype} from 'react-icons/bs'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            telnum:'',
            agree:false,
            contactType:'Tel.',
            message:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        console.log("Submited "+ JSON.stringify(this.state));
        event.preventDefault();
    }

    input(type,placeholder,name,defaultValue){
        return (
          <Form.Group as={Row} className="mt-2">
            <Form.Label htmlFor={name} as={Col} md={2}>
              {placeholder}
            </Form.Label>
            <Col md={10}>
              <Form.Control
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
              />
            </Col>
          </Form.Group>
        );
    }

    contactForm(){
        return (
          <Row className='mt-4'>
            <Col xs={12}>
              <h3>Send us your feedback</h3>
            </Col>
            <Col xs={12} md={9}>
              <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                {this.input("text", "First Name", "firstname", "")}
                {this.input("text", "Last Name", "lastname", "")}
                {this.input("tel", "Contact tel", "telnum", "")}
                {this.input("email", "Email", "email", "")}
                <Form.Group as={Row} className="mt-2">
                  <Col md={{ span: 6, offset: 2 }}>
                    <Form.Check
                      type="checkbox"
                      name="agree"
                      label={<strong>May we contact you?</strong>}
                      defaultChecked={this.state.agree}
                    />
                  </Col>
                  <Col md={{ span: 3, offset: 1 }}>
                    <Form.Select defaultValue={this.state.contactType}>
                      <option>Tel.</option>
                      <option>Email</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label htmlFor="comment" as={Col}>
                        Your feedback
                    </Form.Label>
                    <Col md={10}>
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a message here"
                        rows={12}
                        id="comment"
                        name="comment"
                        defaultValue={this.state.message}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                  <Col md={{ span: 10, offset: 2 }}>
                    <Button type="submit">Send feedback</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        );
    }

    render(){
        return(
            <Container>
                <Breadcrumb>
                  <BreadcrumbItem href={"/home"}>Home</BreadcrumbItem>
                  <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <Row xs={12}>
                  <h3>Contact</h3>
                  <hr/>
                </Row>
                <Row className="row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <FontAwesomeIcon icon={faPhone}/>: +852 1234 5678<br />
                            <FontAwesomeIcon icon={faFax}/>: +852 8765 4321<br />
                            <FontAwesomeIcon icon={faEnvelope}/>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><FontAwesomeIcon icon={faPhone}/> Call</a>
                            <a role="button" className="btn btn-info" href="/" ><BsSkype/> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                        </div>
                    </div>
                </Row>
                {this.contactForm()}
            </Container>
        );
    }
}

export default Contact;