import { Container, Row, Col } from "reactstrap";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterPage from "./Components/RegisterComponent/RegisterPage";
function App() {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <LoginPage></LoginPage>
          <RegisterPage></RegisterPage>
        </Col>
      </Row>
      <HomePage></HomePage>
    </Container>
  );
}

export default App;
