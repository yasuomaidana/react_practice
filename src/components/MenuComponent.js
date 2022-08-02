import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Link } from "react-router-dom";
import { BreadcrumbItem, Container } from "react-bootstrap";

const RenderDishCard = ({dish})=> {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
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
      </Link>
    </Card>
  );
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
    return (
      <Col
        key={dish.id}
        xs={12}
        md={5}
        className="m1 mt-4"
      >
        <RenderDishCard dish={dish} />
      </Col>
    );
  });
  return <Container>
            <Breadcrumb>
              <BreadcrumbItem href={"/home"}>Home</BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <Row xs={12}>
              <h3>Menu</h3>
              <hr/>
            </Row>
            <Row>{menu}</Row>
         </Container>;
};

export default Menu;
