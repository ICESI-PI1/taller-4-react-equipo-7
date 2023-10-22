import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Book = ({ id, title, author, date }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./public/book.png"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Id: {id}</ListGroup.Item>
          <ListGroup.Item>Título : {title}</ListGroup.Item>
          <ListGroup.Item>Autor:{author}</ListGroup.Item>
        <ListGroup.Item>Fecha:{date}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Autor</Card.Link>
        </Card.Body>
      </Card>

        
    );
};

export default Book;
