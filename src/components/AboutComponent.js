import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, ListGroup,Container,Row, Col } from 'react-bootstrap';

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <p>Leader {leader.name}</p>
        );
    });

    return(
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </Row>
            <Row className="row-content">
                <Col md={6}>
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </Col>
                <Col md={6} xs={12}>
                    <Card>
                        <Card.Header className="bg-primary text-white">Facts At a Glance</Card.Header>
                        <Card.Body>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card>
                        <Card.Body className="bg-faded">
                            <blockquote className="blockquote text-end">
                                <p className="mb-3">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs={12}>
                    <h2>Corporate Leadership</h2>
                </Col>
                <Col xs={12}>
                <ListGroup.Item >
                {leaders}
                </ListGroup.Item>
                </Col>
            </Row>
        </Container>
    );
}

export default About;    