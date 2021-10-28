import React from "react";
import {
  Col,
  Container,
  InputGroup,
  Input,
  Row,
  Button,
  Label,
} from "reactstrap";
import "./LoginPage.css";
export default function LoginPage() {
  return (
    <Container>
      <Col>
        Email
        <InputGroup>
          <Input type="email" placeholder="email" />
        </InputGroup>
        <br />
        Password
        <Row>
          <InputGroup>
            <Input type="password" placeholder="password" />
          </InputGroup>
        </Row>
        <br />
        <Row>
          <Label check>
            <Input type="checkbox" /> Remember Me
          </Label>
        </Row>
        <br />
        <Button color="primary">Login</Button>
        <br />
        <br />
        <Button color="success">Register</Button>
      </Col>
    </Container>
  );
}
