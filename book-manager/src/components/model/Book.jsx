import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Book = (props) => {

    const { book } = props;

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./public/book.png"/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Id: {book.id}</ListGroup.Item>
          <ListGroup.Item>Título : {book.title}</ListGroup.Item>
          <ListGroup.Item>Autor:{book.author.name}</ListGroup.Item>
        <ListGroup.Item>Fecha:{book.date}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Autor</Card.Link>
        </Card.Body>
      </Card>

        
    );
};

export default Book;
