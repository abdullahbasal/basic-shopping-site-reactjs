import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Mens from './Category/Mens';
import Electronic from './Category/Electronic';
import Jewelery from './Category/Jewelery';
import Woman from './Category/Woman';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  UncontrolledCarousel,
} from 'reactstrap';
import './HomePage.css';
export default function HomePage(props) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      headers: {
        'content-type': 'application/json',
        authorization: 'apikey 6FketkkdASMLZ31r8mgLDy:5diqSQ6tfrchsySR4M0dm0',
      },
    }).then((ress) => setProducts(ress.data));
  };
  useEffect(() => {
    getProducts();
    return () => {};
  }, [props.pageMode]);

  console.log(products);
  const items = [
    {
      src: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      key: '1',
    },
    {
      src: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      key: '2',
    },
    {
      src: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      key: '3',
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <div id="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/862/862856.png" />
            <h1>BASAL.COM</h1>
          </div>
          <div id="trolley">
            <h1>My Trolley</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/891/891440.png" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <ListGroup>
            <ListGroupItem>Electronics</ListGroupItem>
            <ListGroupItem>Jewelery</ListGroupItem>
            <ListGroupItem>Men's Clothing</ListGroupItem>
            <ListGroupItem>women's clothing</ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs="8">
          <UncontrolledCarousel items={items} />
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <ListGroup>
            <Electronic products={products}></Electronic>
          </ListGroup>
        </Col>
        <Col xs="3">
          <ListGroup>
            <Jewelery products={products}></Jewelery>
          </ListGroup>
        </Col>
        <Col xs="3">
          <ListGroup>
            <Mens products={products}></Mens>
          </ListGroup>
        </Col>
        <Col xs="3">
          <ListGroup>
            <Woman products={products}></Woman>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
