import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import instance from '../../config/tokenAxios';
import { Button } from 'react-bootstrap';
import NavBarNavigation from '../ui/NavBarNavigation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function BookTable(props) {

  const navigate = useNavigate();

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

  const handleUpdate = (id) => {
    navigate(`/authors/edit/${id}`);
  };


    return (
        <div>
            <NavBarNavigation />
            <h2 style={{ marginTop: "25px" }}>Lista de autores</h2>
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

              <Link to={`/authors/edit/${item.id}`}>
                <Button variant="primary" >
                  Actualizar
                </Button>
              </Link>
              
            </td>
            </tr>
          ))}
          </tbody>

        </Table>
        </div>

        
    );
}

export default BookTable;