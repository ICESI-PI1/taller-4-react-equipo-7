import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBarNavigation from '../ui/NavBarNavigation';
import instance from '../../config/tokenAxios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const AuthorForm = ({ isEdit }) => {

  const { id } = useParams();


  const [authorData, setAuthorData] = useState({
    id: '',
    name: '',
    nationality: ''
  });



  const [error, setError] = useState(null); 


  useEffect(() => {
    if (isEdit) {
      instance.get(`autores/${id}`)
      .then(response => {
        const data = response.data;
        setAuthorData({
          id: data.id,
          name: data.name,
          nationality: data.nationality
        });
      })
      .catch(err => {
        setError('Hubo un error al cargar los datos del autor');
      });
      
    }
  }, [isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({
      ...authorData,
      [name]: name === 'id' ? parseInt(value, 10) : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null); 

    if (isEdit) {
      
      instance.put(`autores/${id}`, authorData)
        .then((response) => {
          window.location.href = '/authors';

        })
        .catch((error) => {
          console.error('Error al editar los datos:', error);
          setError('No se pudo editar el autor. Inténtalo de nuevo.');

        });
    } else {
      instance.post('/autores', authorData)
        .then((response) => {
          window.location.href = '/authors';

        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error);
          setError('No se pudo crear el autor. Inténtalo de nuevo.');
        });
    }
  };


  return (
    <>

      <NavBarNavigation />
      <Form >
        <h2>Formulario de autores</h2>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Identificación</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el id"
            pattern="[0-9]*"
            name="id"
            value={authorData.id}
            onChange={handleChange}
            readOnly={isEdit} 


          />
          <Form.Text className="text-muted">
            Solo se permiten valores numéricos.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el nombre del autor"
            value={authorData.name}
            onChange={handleChange}
            name="name"

          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nacionalidad</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el nombre del autor"
            value={authorData.nationality}
            onChange={handleChange}
            name="nationality"
          />
          <Form.Text className="text-muted">


          </Form.Text>
        </Form.Group>

        {error && <div className="mb-3" style={{ color: 'red' }}>{error}</div>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Guardar
          </Button>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Link to="/authors">
            <Button variant="danger" type="submit">
              Cancelar
            </Button>
          </Link>

        </Form.Group>





      </Form>
    </>


  );
};

export default AuthorForm;