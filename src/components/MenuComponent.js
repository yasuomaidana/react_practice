import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import DishDetail from "./DishDetailComponent";

const RenderDishCard = ({dish})=> {



  return (
    <Card>
      <Card.Img
        width={100}
        src={dish.image}
        alt={dish.name}
        className="img-fluid rounded-start"
      />
      <Card.ImgOverlay className="text-start ml-5">
        <Card.Title>
          <p className="h1">{dish.name}</p>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

const Menu = (props) => {

  const [dishId, setDishId] = useState(-1);
  
  const onDishSelect = (dishId) => {
    setDishId(dishId)
  }

  const renderDishDetail = (dishId)=>{
    if (dishId>-1){
      return <Row><DishDetail dish={props.dishes.filter((dish) => dish.id === dishId)[0]}/></Row>;
    }
    else {
      return <></>
    }

  }
  const menu = props.dishes.map((dish) => {
    return (
      <Col
        key={dish.id}
        onClick={() => onDishSelect(dish.id)}
        xs={12}
        md={5}
        className="m1 mt-4"
      >
        <RenderDishCard dish={dish} />
      </Col>
    );
  });
  return <>
            <Row>{menu}</Row>
            {renderDishDetail(dishId)}
         </>;
};

export default Menu;
