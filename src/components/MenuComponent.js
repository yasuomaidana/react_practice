import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class Menu extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    render(){
        const menu = this.props.dishes.map(dish=>{
            return (
                <Col key={dish.id} xs={12} md={5} className="m1 mt-4">
                    <Card>
                        <Row>
                            <Col xs={12} md={3}>
                                <Card.Img src={dish.image} alt={dish.name} className="img-fluid rounded-start h-100"/>
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Body className='text-start ml-5'>
                                    <Card.Title>{dish.name}</Card.Title>
                                    <Card.Text>{dish.description}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        });
        return(
            <Container>
                <Row>
                    {menu}
                </Row>
            </Container>
        );
    }
}

export default Menu;