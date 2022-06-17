import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button, } from "react-bootstrap";
import axios from "axios";
import ModalBeverage from "./ModalBeverage";
import "./Beverage.css"

function Alcohol() {
  const [images, setImages] = useState([]);
  const [beverages, setBeverage] = useState([]);
  const [category, setCategory] = useState("");

  const data = async () => {
    const beverages = await axios.get(`http://localhost:5000/beverage/1`);
    setBeverage(beverages.data[0]);
    setCategory(beverages.data[0].category.category);
    setImages(beverages.data[0].beverageImages);
    console.log(beverages);
  };

  useEffect(() => {
    data();
  }, []);
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="beverage" className="abstract-bg">
      <br/>
      <h3>Alcohol Drinks</h3>
      <br/>
      <Container>
        <Row xs={2} md={5} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col>
              <Card>
                {images.map((img) => {
                  const { id, image } = img;
                  return <Card.Img className="card-img" variant="top" key={id} src={image} />;
                })}
                <Card.Body className="card-font">
                  <Card.Title>{beverages.beverageName}</Card.Title>
                  {/* <Card.Text>{beverages.description}</Card.Text> */}
                </Card.Body>
                {/* <Button variant="warning">See Recipe</Button> */}
                <Button variant="warning" onClick={() => setModalShow(true)}>
                  Details
                </Button>
                <ModalBeverage
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <br/><br/><br/><br/><br/>
    </div>
  );
}

export default Alcohol;
