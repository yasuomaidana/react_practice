import Container from "react-bootstrap/Container";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import React from "react";

import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import Counter from "../features/counter/Counter";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
    };
  }

  renderHome = ()=>{
    return( 
    <Home dish={this.state.dishes.filter(dish=>dish.featured)[0]}
          promotion={this.state.promotions.filter(promo=>promo.featured)[0]}
          leader={this.state.leaders.filter(leader=>leader.featured)[0]}
    />);
  }

  renderMenu = () => {return(<Menu dishes={this.state.dishes} />);};

  render() {
    return (
      <>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Container>
              <Routes>
                <Route path="/home" element={this.renderHome()}></Route>
                <Route exact path="/menu" element={this.renderMenu()}></Route>
                <Route path="/menu/:dishId" element={<DishDetail dishes={this.state.dishes} comments={this.state.comments}/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About leaders={this.state.leaders}/>}></Route>
                <Route path="/redux" element={<Counter/>}></Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
          </Container>
          <Footer />
        </BrowserRouter> 
      </Provider>
      </>
    );
  }
}

export default Main;
