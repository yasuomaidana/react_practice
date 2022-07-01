import Container from "react-bootstrap/Container";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
        <Header/>
        <Container>
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
          />
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Main;
