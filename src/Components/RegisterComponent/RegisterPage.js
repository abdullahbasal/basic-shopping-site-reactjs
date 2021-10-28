import React from "react";
import { Container, Row, Input, Button, Col } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import "./RegisterPage.css";
export default function RegisterPage() {
  return (
    <Container>
      <Row>
        <AvForm>
          <AvField
            name="nameCustomMessage"
            label="Name"
            type="text"
            validate={{
              required: { value: true, errorMessage: "Please enter a name" },
              pattern: {
                value: "^[A-Za-z0-9]+$",
                errorMessage:
                  "Your name must be composed only with letter and numbers",
              },
              minLength: {
                value: 3,
                errorMessage: "Your name must be between 3 and 16 characters",
              },
              maxLength: {
                value: 16,
                errorMessage: "Your name must be between 6 and 16 characters",
              },
            }}
          />
          <br />
          <AvField name="email" label="Email" type="email" />
          <br />
          <p id="password">Password</p>
          <Input type="password" label="Password" placeholder="password" />
          <br />
          <Button color="success">Register</Button>
        </AvForm>
        <Col id="return-back">
          <img
            src="https://cdn-icons.flaticon.com/png/512/2459/premium/2459628.png?token=exp=1635257001~hmac=46dba3d39c357891f342ff6d04e95c20"
            width="20px"
            height="20px"
          />
          Return Login Panel
        </Col>
      </Row>
    </Container>
  );
}
