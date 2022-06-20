import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup  from "react-bootstrap/ListGroup";

class ExtendedMenu extends Component{
    renderComments(comments){
        comments.forEach(element => {
            console.log(element)
        });
        return(
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        );
    }

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
                            <Card.Title>Comments</Card.Title>
                            {this.renderComments(dish.comments)}
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