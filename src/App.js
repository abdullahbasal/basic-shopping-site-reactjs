import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginComponent/LoginPage';
import RegisterPage from './Components/RegisterComponent/RegisterPage';
import './App.css';
function App() {
  const [pageMode, setPageMode] = useState('login');

  return (
    <Container>
      <Col id="home-page">{pageMode === 'home' && <HomePage></HomePage>}</Col>

      <Row>
        <Col id="login-register-page" sm="12" md={{ size: 6, offset: 3 }}>
          {pageMode === 'login' && (
            <LoginPage
              onRegister={() => setPageMode('register')}
              onHome={() => setPageMode('home')}
            ></LoginPage>
          )}
          {pageMode === 'register' && (
            <RegisterPage onLogin={() => setPageMode('login')}></RegisterPage>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
