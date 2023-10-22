import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Author = ({ id, name, nationality }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./public/author.png"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Id: {id}</ListGroup.Item>
          <ListGroup.Item>Nombre : {name}</ListGroup.Item>
        
          <ListGroup.Item>Nacionalidad:{nationality}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Libros</Card.Link>
        </Card.Body>
      </Card>
 

    );
};

export default Author;
