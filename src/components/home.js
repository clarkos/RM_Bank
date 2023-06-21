import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import promo from "../assets/banPromo.jpg";
import b1 from "../assets/logo3.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export const Home = () => {
  return (
    <div className="container">
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {"  "}
          </Col>
          <Col md="auto">
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            {/* <h1>
              Welcome from{" "}
              <strong>
                <em>Every Dimensions</em>
              </strong>
            </h1> */}
          </Col>
          <Col xs lg="2">
            {"  "}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={8}>
            <Card className="bg-dark text-white">
              <Card.Img src={promo} alt="welcome" />
              <Card.Body>
                No matters from where you are... <br />
                your money will be safe in our <del>pockets</del>{" "}
                <strong>accounts</strong>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={b1} />
              <Card.Body>
                <Card.Title>Take Control</Card.Title>
                <Card.Text>
                  Inside your personal area, control every aspect of your
                  account. <br />
                  Access o Register your account
                </Card.Text>
                <Link to="login">
                  <Button variant="outline-secondary">Login</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <hr />
        </Row>
        <Row>
          <Col sm={3}>
            <Card
              bg="success"
              key="success"
              text="white"
              style={{ width: "17rem" }}
              className="mb-2"
            >
              <Card.Header>Payments</Card.Header>
              <Card.Body>
                <Card.Title>Don't forget your bills </Card.Title>
                <Card.Text>
                  Easily pay every disgusting but absolutly necesary services.
                  Remember, it's a{" "}
                  <strong>
                    <em>relief</em>
                  </strong>
                  .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card
              bg="secondary"
              key="secondary"
              text="white"
              style={{ width: "17rem" }}
              className="mb-2"
            >
              <Card.Header>Transfers</Card.Header>
              <Card.Body>
                <Card.Title>A friend needs money? </Card.Title>
                <Card.Text>
                  Send cash never been so fluent... dont hesitate walking to the
                  ATM,{" "}
                  <strong>
                    <em>you're a few clicks away</em>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Header>Our Clients...</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    I had place all my money here. Really, I didn't imagine that it
                    can made me so easy everytime I need to made some
                    operation over de Dimensional Bank Network.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">
                      <strong>Another Dimension</strong>
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
      </Container>
    </div>
  );
};
