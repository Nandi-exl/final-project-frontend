import React from "react";
import "./Home.css";
import {
  Container,
  Form,
  FormControl,
  Button,
  Stack,
} from "react-bootstrap";

function Home() {
  return (
    <div id="home" className="background-image">
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Food Journal</h1>
        <br></br>
        <h3>Explore and make your own dish</h3>
        <br></br>
        <Container className="justify-content-center, w-50">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
              size="xl"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Container>
        <br></br>
        <br></br>
        <Stack
          className="justify-content-center"
          direction="horizontal"
          gap={3}
        >
          <Button variant="danger" href="/foods">
            Foods
          </Button>
          <div className="vr" />
          <Button variant="primary" href="/beverages">
            Beverages
          </Button>
        </Stack>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
