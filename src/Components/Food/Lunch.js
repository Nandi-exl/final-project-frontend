import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button, } from "react-bootstrap";
import axios from "axios";
import ModalFood from "./ModalFood";
import "./Food.css"

function Lunch() {
  const [images, setImages] = useState([]);
  const [foods, setFood] = useState([]);
  const [category, setCategory] = useState("");

  const data = async () => {
    const foods = await axios.get(`http://localhost:5000/food/1`);
    setFood(foods.data[0]);
    setCategory(foods.data[0].category.category);
    setImages(foods.data[0].foodImages);
    console.log(foods);
  };

  useEffect(() => {
    data();
  }, []);
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="food" className="abstract-bg">
      <br/>
      <h3>Lunch Menu</h3>
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
                  <Card.Title>{foods.foodName}</Card.Title>
                  {/* <Card.Text>{foods.description}</Card.Text> */}
                </Card.Body>
                {/* <Button variant="warning">See Recipe</Button> */}
                <Button variant="warning" onClick={() => setModalShow(true)}>
                  Details
                </Button>
                <ModalFood
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

export default Lunch;
