import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image, Button, FormControl,Form, Toast, ToastHeader, ToastBody} from 'react-bootstrap';
import Header from './components/header/header';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import swal from "sweetalert";


function App() {
    const [query, setQuery] = useState("");
    const[api,setApi]=useState(null);

  let style = {
    backgroundColor: "#e74a46",
    color: "white",
    borderRadius:"15px",
    border:"none"
    
  };
  function handleSubmit(event){
    event.preventDefault();
    console.log(query)

    let key = "38533facbd6e620a09f84bd16f666b78";
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    
     call(api);
  }
  async function call(api){
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if(data.cod=="404"){
          setApi(null);
           swal({
            title: "Error",
            text: "City Not Found",
            icon: "error",
          });
        }else{
          setApi(data);
        }
      });
  }
  function HandleChange(event){
    setQuery(event.target.value);

  }
  return (
    <>
   
      <div
        style={{ backgroundColor: "#c4c4c4", padding: "10px", height: "462px" }}
      >
        <Header />
        <Container
          fluid
          idth="20%"
          style={{ backgroundColor: "#dddddd", padding: "10px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={{ offset: 1, span: 8 }}>
                <FormControl
                  onChange={HandleChange}
                  style={{ borderRadius: "40px" }}
                  className="border"
                  placeholder="City Name"
                  required
                ></FormControl>
              </Col>
              <Col xs={{ offset: 1, span: 2 }}>
                <Button style={style} type="submit">
                  <i className="bi bi-search"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>

        {api && (
          <Row className="d-flex justify-content-center">
            <Container
              className="m-5 animation "
              style={{
                backgroundColor: "white",
                padding: "30px",
                width: "300px",
              }}
            >
              <Row>
                <Col xs={{ offset: 3, span: 6 }}>{<h1>{api.name}</h1>}</Col>
              </Row>
              <Row>
                <Col xs={{ offset: 3, span: 6 }}>
                  <h4>
                    <i class="bi bi-text-center"></i>
                    {(api.main.temp - 273.15).toFixed(2)}
                  </h4>
                </Col>
              </Row>
              <div className="d-flex">
                <Row>
                  <div style={{ marginLeft: "10px" }}>
                    <Col xs={{ offset: 2, span: 8 }}>
                      <i class="bi bi-thermometer-high">Max </i>
                      {(api.main.temp_max - 273.15).toFixed(2)}
                    </Col>
                  </div>
                </Row>
                <Row style={{ marginLeft: "25px" }}>
                  <div>
                    <Col xs={{ offset: 2, span: 6 }}>
                      <i class="bi bi-thermometer-low">Min </i>
                      {(api.main.temp_min - 273.15).toFixed(2)}
                    </Col>
                  </div>
                </Row>
              </div>
            </Container>
          </Row>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
