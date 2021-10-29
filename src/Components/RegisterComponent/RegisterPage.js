import React, { useState } from 'react';
import { Container, Row, Input, Button, Col } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import './RegisterPage.css';
export default function RegisterPage(props) {
  const [database, setDatabase] = useState([
    { name: 'admin', email: '', password: 1234 },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function addDatabase() {
    const tempDatabase = database;
    setDatabase([
      ...tempDatabase,
      { name: name, email: email, password: password },
    ]);
    name = '';
  }
  console.log(name);
  console.log(email);

  console.log(password);

  return (
    <Container>
      <Row>
        <AvForm>
          <AvField
            name="nameCustomMessage"
            label="Name"
            type="text"
            onChange={handleChangeName}
            value={name}
            validate={{
              required: { value: true, errorMessage: 'Please enter a name' },
              pattern: {
                value: '^[A-Za-z0-9]+$',
                errorMessage:
                  'Your name must be composed only with letter and numbers',
              },
              minLength: {
                value: 3,
                errorMessage: 'Your name must be between 3 and 16 characters',
              },
              maxLength: {
                value: 16,
                errorMessage: 'Your name must be between 6 and 16 characters',
              },
            }}
          />
          <br />
          <AvField name="originalEmail" label="Email" type="email" />
          <br />
          <AvField
            name="confirmationEmail"
            label="Email validate"
            type="email"
            validate={{ match: { value: 'originalEmail' } }}
            onChange={handleChangeEmail}
            value={email}
          />
          <br />
          <p id="password">Password</p>
          <Input
            type="password"
            label="Password"
            placeholder="password"
            onChange={handleChangePassword}
            value={password}
          />
          <br />
          <Button color="success" onClick={() => addDatabase()}>
            Register
          </Button>
        </AvForm>
        <Col id="return-back" onClick={() => props.onLogin()}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/860/860774.png"
            width="20px"
            height="20px"
            id="return-img"
          />
          Return Login Panel
        </Col>
      </Row>
    </Container>
  );
}
