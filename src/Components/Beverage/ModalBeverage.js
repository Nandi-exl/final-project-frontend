import { useState, useEffect} from "react";
import {Button, Modal, Row, Col} from "react-bootstrap";
import axios from "axios";

function ModalBeverage(props) {
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Recipe</Modal.Title>
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
            <h4>{beverages.foodName}</h4>
            <p>{beverages.description}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBeverage;
