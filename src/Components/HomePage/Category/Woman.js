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
export default function Jewelery(props) {
  const womanCategory = props.products.filter(
    (item) => item.category === "women's clothing"
  );
  console.log(womanCategory);

  return (
    <div>
      {womanCategory.map((item, index) => (
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
