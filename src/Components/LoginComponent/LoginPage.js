import React from 'react';
import {
  Col,
  Container,
  InputGroup,
  Input,
  Row,
  Button,
  Label,
} from 'reactstrap';
import './LoginPage.css';
export default function LoginPage(props) {
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
        <Button color="primary" onClick={() => props.onHome()}>
          Login
        </Button>
        <br />
        <br />
        <Button color="success" onClick={() => props.onRegister()}>
          Register
        </Button>
      </Col>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
