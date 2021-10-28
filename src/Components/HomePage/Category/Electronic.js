import React from "react";
import {
  ListGroupItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
export default function Electronic(props) {
  const electronicCategory = props.products.filter(
    (item) => item.category === "electronics"
  );
  console.log(electronicCategory);

  return (
    <div>
      {electronicCategory.map((item, index) => (
        <ListGroupItem>
          <Card id="card">
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {item.description}
              </CardSubtitle>
              <CardText>Kaynak: {item.source}</CardText>
              <Button href={item.url}>Yazının Devamını Oku...</Button>
            </CardBody>
          </Card>
        </ListGroupItem>
      ))}
    </div>
  );
}
