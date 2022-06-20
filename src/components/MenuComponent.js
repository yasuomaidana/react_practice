import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import DetailedMenuComponent from './DetailedMenuComponent';

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
                    <DetailedMenuComponent selectedDish ={this.state.selectedDish}/>
                </Row>
            </Container>
        );
    }
}

export default Menu;