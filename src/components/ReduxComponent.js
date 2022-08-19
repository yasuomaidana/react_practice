import { Container, Row } from "react-bootstrap";
import Counter from "../features/counter/Counter";
import PostList from "../features/post/PostsList";

const reduxComponent = (name,component) => 
(<>
  <Row xs={12}>
    <h3>{name}</h3>
    <hr />
  </Row>
  <Row>
    {component}
  </Row>
  <hr />
</>);
const Redux = () =>{
    return(
    <Container>
      {reduxComponent("Counter",<Counter/>)}
      {reduxComponent("Post list",<PostList/>)}  
    </Container>);
};

export default Redux;