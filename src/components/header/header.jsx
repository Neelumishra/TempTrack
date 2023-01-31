 import { Container, Row, Col, Image } from "react-bootstrap";
 export default function Header() {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="p-2">
        <Col>
          <Image
            src="https://m-weather.netlify.app/images/weather.png"
            alt="no-image"
          ></Image>
        </Col>
        <Col xs={{ offset: 10 }}>
          <p>Weather</p>
        </Col>
      </Row>
    </Container>
  );
}
