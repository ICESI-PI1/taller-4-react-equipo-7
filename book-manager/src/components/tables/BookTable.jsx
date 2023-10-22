import React from 'react';
import Table from 'react-bootstrap/Table';


function BookTable(props) {
    const { books } = props;

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const formattedDate = date.toLocaleDateString(); // Formatea la fecha como "MM/DD/AAAA"
        return `${formattedDate}`;
      };

    

    return (
        <div>
            <h2>Lista de libros</h2>
            <Table striped bordered hover>
            
            <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Fecha de publicación</th>
              <th>Nombre del autor</th>
              <th>Nacionalidad del autor</th>
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
              </tr>
            ))}
          </tbody>

        </Table>
        </div>

        
    );
}

export default BookTable;
