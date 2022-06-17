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

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish!=null){
            return(
            <Card>
                <Card.Img width={100} src={dish.image} alt={dish.name} className="img-fluid rounded-start"/>
                <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
            </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const menu = this.props.dishes.map(dish=>{
            return (
                <Col key={dish.id} xs={12} md={5} className="m1 mt-4">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <Card.Img width={100} src={dish.image} alt={dish.name} className="img-fluid rounded-start"/>

                        <Card.ImgOverlay className='text-start ml-5'>
                            <Card.Title><p className='h1'>{dish.name}</p></Card.Title>
                            
                        </Card.ImgOverlay>
                            
                    </Card>
                </Col>
            )
        });
        return(
            <Container>
                <Row>
                    {menu}
                </Row>
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
            </Container>
        );
    }
}

export default Menu;