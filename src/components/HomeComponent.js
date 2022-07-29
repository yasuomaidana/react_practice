import { Col, Container, Row, Card } from "react-bootstrap"


const RenderCard = ({item})=> {
    return (
      <Card>
        <Card.Img
          width={100}
          src={item.image}
          alt={item.name}
          className="img-fluid rounded-start"
        />
        <Card.Body className="text-start ml-5">
          <Card.Title>
            <p className="h1">{item.name}</p>
          </Card.Title>
          {item.designation?<Card.Subtitle>{item.designation}</Card.Subtitle>:null}
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

const Home = (props)=>{
    return(
        <Container>
            <Row className="align-items-start">
                <Col xs={12} md className="m-1">
                    <RenderCard item={props.dish}/>
                </Col>
                <Col xs={12} md className="m-1">
                    <RenderCard item={props.promotion}/>
                </Col>
                <Col xs={12} md className="m-1">
                    <RenderCard item={props.leader}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;