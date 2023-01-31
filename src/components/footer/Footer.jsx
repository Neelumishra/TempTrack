
import {Row,Col,Container,Image} from "react-bootstrap";

export default function Footer() {
    return (
      <Container
        style={{ backgroundColor: "#dddddd" }}
        fluid
        className="d-flex justify-content-between"
      >
        <div style={{ marginTop: "20px" }}>
          {" "}
          Built on React using open weather API
        </div>
        <div>
          <a href="https://github.com/Neelumishra">
            <Image src="https://m-weather.netlify.app/images/github.png"></Image>
          </a>
        </div>
      </Container>
    );
    }
    // <Row className="border w-100">
        <Col xs={{ span: 6 }}  className="border">
          Built on React using open weather API
          <Col xs={{ span: 6 }}>
            <Image
              className="border"
              src="https://m-weather.netlify.app/images/github.png"
            ></Image>
          </Col>
        </Col>
      //</Row>