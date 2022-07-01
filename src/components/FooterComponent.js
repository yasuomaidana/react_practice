import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFax, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import {AiFillGooglePlusCircle,AiFillLinkedin,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
const Footer = (props) => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={4} sm={2} offset={1}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Menu</a>
              </li>
              <li>
                <a href="contactus.html">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xs={7} sm={5}>
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <FontAwesomeIcon icon={faPhone} size={"lg"} />: +852 1234 5678
              <br />
              <FontAwesomeIcon icon={faFax} size={"lg"} />: +852 8765 4321
              <br />
              <FontAwesomeIcon icon={faEnvelope} size={"lg"} />:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </Col>
          <Col xs={12} sm={4}>
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                <AiFillGooglePlusCircle size={40}/>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <BsFacebook size={40}/>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <AiFillLinkedin size={40}/>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <AiFillTwitterCircle size={40}/>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <AiFillYoutube size={40}/>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <FontAwesomeIcon icon={faEnvelopeOpen} size={"2x"} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
