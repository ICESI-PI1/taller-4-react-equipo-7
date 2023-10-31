import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import instance from '../../config/tokenAxios';
import NavBarNavigation from '../ui/NavBarNavigation';
import { useNavigate } from 'react-router-dom';


function BookTable(props) {

  const [books, setBooks] = useState([]);

  const navigate = useNavigate();




  useEffect(() => {

    instance.get('/libros')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error de solicitud:', error);
      });
  }, []);



  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString(); // Formatea la fecha como "MM/DD/AAAA"
    return `${formattedDate}`;
  };

  const handleUpdate = (id) => {
    navigate(`/books/edit/${id}`);
  };


  const handleDelete = (id) => {
    instance.delete(`/libros/${id}`)
      .then((response) => {
        setBooks(books.filter(book => book.id !== id));
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error al eliminar el libro:', error);
      });
  };


  return (
    <div>
      <NavBarNavigation />
      <div>

        <h2 style={{ marginTop: "25px" }}>Lista de libros</h2>


      </div>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha de publicación</th>
            <th>Nombre del autor</th>
            <th>Nacionalidad del autor</th>
            <th>Operación</th>
          </tr>
        </thead>
        <tbody>

          {books.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{formatDate(item.publicationDate)}</td>
              <td>{item.author.name}</td>
              <td>{item.author.nationality}</td>
              <td>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                Eliminar
              </Button>
              <span style={{ margin: '0 5px' }}></span>
              

              <Button variant="primary" onClick={() => handleUpdate(item.id)}>
                Actualizar
              </Button>
            </td>
            </tr>
          ))}

        </tbody>

      </Table>
    </div>


  );
}

export default BookTable;
