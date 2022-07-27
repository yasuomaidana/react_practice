import Container from "react-bootstrap/Container";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";

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
      <>
        <BrowserRouter>
          <Header/>
          <Container>
              <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/menu" element={
                <>
                  <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
                  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                </>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
          </Container>
          <Footer />
        </BrowserRouter> 
      </>
    );
  }
}

export default Main;
