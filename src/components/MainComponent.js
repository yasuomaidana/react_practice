import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <p className="h1">Ristorante ConFusion</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
          />
        </Container>
      </div>
    );
  }
}

export default Main;
