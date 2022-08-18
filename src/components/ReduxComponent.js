import { Container, Row } from "react-bootstrap";
import Counter from "../features/counter/Counter";
const Redux = () =>{
    return(
    <Container>
        <Row xs={12}>
          <h3>Counter</h3>
          <hr />
        </Row>
        <Row>
          {<Counter/>}
        </Row>
        <hr />
        <Row xs={12}>
          <h3>Posts </h3>
          <hr />
        </Row>
    </Container>);
};

export default Redux;