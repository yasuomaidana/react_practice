import Container from "react-bootstrap/Container";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
//import DishDetail from "./DishDetailComponent";
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {BrowserRouter,Routes,Route} from "react-router-dom";

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
        <Header />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/menu" element={<Menu dishes={this.state.dishes}/>}></Route>
            </Routes>
          </BrowserRouter> 
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Main;
