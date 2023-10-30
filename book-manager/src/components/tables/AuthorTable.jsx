import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import instance from '../../config/tokenAxios';
import { Button } from 'react-bootstrap';


function BookTable(props) {
    

  const [authors, setAuthors] = useState([]);


  useEffect(() => {

    instance.get('/autores')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('Error de solicitud:', error);
      });
  }, []);

  const handleDelete = (id) => {
    instance.delete(`/autores/${id}`)
      .then((response) => {
        setAuthors(authors.filter(authors => authors.id !== id));
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error al eliminar el libro:', error);
      });
  };


    return (
        <div>
            <h2>Lista de autores</h2>
            <Table striped bordered hover>
            
            <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Nacionalidad</th>
              <th>Operación</th>
            </tr>
          </thead>
          <tbody>
          {authors.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.nationality}</td>
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