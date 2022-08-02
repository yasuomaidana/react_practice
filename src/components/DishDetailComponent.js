import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Breadcrumb } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import moment from "moment";
import { Link,useParams } from "react-router-dom";

const getDate = (commentDate) => {
  var working_date = new Date(commentDate);
  return moment(working_date).format("MMM, D, yyyy");
};

const renderComments = (comments) => {
  const formattedComments = comments.map((comment) => {
    return (
      <ListGroup.Item key={comment.id}>
        {comment.comment}
        <br />
        -- {comment.author}, {getDate(comment.date)}
      </ListGroup.Item>
    );
  });

  return <ListGroup variant="flush">{formattedComments}</ListGroup>;
};

const renderDish = (dish,comments) => {
  if (dish != null) {
    return (
      <Row>
        <Col xs={12} md={5} className="m1 mt-4">
          <Card>
            <Card.Img
              width={100}
              src={dish.image}
              alt={dish.name}
              className="img-fluid rounded-start"
            />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} className="m1 mt-4">
          <Card border="light">
            <Card.Body>
              <Card.Title>Comments</Card.Title>
              {renderComments(comments)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  } else {
    return <div></div>;
  }
};

const DishDetail = (props) => {
  const { dishId } = useParams();
  return renderDish(props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0] 
  ,props.comments.filter((comment) => comment.dishId === parseInt(dishId,10)));
};

export default DishDetail;