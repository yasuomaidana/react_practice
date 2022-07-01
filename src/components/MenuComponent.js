import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

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
  const menu = props.dishes.map((dish) => {
    return (
      <Col
        key={dish.id}
        onClick={() => props.onClick(dish.id)}
        xs={12}
        md={5}
        className="m1 mt-4"
      >
        <RenderDishCard dish={dish} />
      </Col>
    );
  });
  return <Row>{menu}</Row>;
};

export default Menu;
