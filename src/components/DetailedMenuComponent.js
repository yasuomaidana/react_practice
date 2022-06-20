import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class ExtendedMenu extends Component{

    renderDish(dish){
        if(dish!=null){
            return(
                <Col xs={12} md={5} className="m1">
                    <Card className="mt-4">
                        <Card.Img width={100} src={dish.image} alt={dish.name} className="img-fluid rounded-start"/>
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(this.renderDish(this.props.selectedDish));
    }
}

export default ExtendedMenu;