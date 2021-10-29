import React from 'react';
import {
  ListGroupItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import './Electronic.css';
export default function Electronic(props) {
  const electronicCategory = props.products.filter(
    (item) => item.category === 'electronics'
  );
  console.log(electronicCategory);

  return (
    <div>
      {electronicCategory.map((item, index) => (
        <ListGroupItem>
          <Card id="card">
            <div id="card-img-area">
              <CardImg
                id="card-img"
                top
                width="100%"
                src={item.image}
                alt="Card image cap"
              />
            </div>
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {item.description}
              </CardSubtitle>
              <CardText>Price: {item.price}</CardText>
              <Button color="success">Buy</Button>
            </CardBody>
          </Card>
        </ListGroupItem>
      ))}
    </div>
  );
}
