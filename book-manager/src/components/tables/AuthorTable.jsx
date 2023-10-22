import React from 'react';
import Table from 'react-bootstrap/Table';


function BookTable(props) {
    const { authors } = props;
    

    return (
        <div>
            <h2>Lista de autores</h2>
            <Table striped bordered hover>
            
            <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Nacionalidad</th>
            </tr>
          </thead>
          <tbody>
            {authors.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.nationality}</td>
              </tr>
            ))}
          </tbody>

        </Table>
        </div>

        
    );
}

export default BookTable;