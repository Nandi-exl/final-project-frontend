import { useState, useEffect} from "react";
import {Button, Modal, Row, Col} from "react-bootstrap";
import axios from "axios";

function ModalFood(props) {
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={5} md={5}>
            {images.map((img) => {
              const { id, image } = img;
              return (
                <>
                  <div key={id}>
                    <img width="100%" src={image} alt={image} />
                  </div>
                </>
              );
            })}
          </Col>
          <Col xs={6} md={4}>
            <h4>{foods.foodName}</h4>
            <p>{foods.description}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFood;
