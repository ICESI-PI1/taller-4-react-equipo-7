import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Author = (props) => {

    const { author } = props;

    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./public/author.png"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Id: {author.id}</ListGroup.Item>
          <ListGroup.Item>Nombre : {author.name}</ListGroup.Item>
        
          <ListGroup.Item>Nacionalidad:{author.nationality}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Libros</Card.Link>
        </Card.Body>
      </Card>
 

    );
};

export default Author;
