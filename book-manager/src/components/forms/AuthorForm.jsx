import React , { useState }from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBarNavigation from '../ui/NavBarNavigation';
import instance from '../../config/tokenAxios';

const AuthorForm = () => {

    const [authorData, setAuthorData] = useState({
        id: '',
        name: '',
        nationality: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthorData({
            ...authorData,
            [name]: name === 'id' ? parseInt(value, 10) : value
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();

    
        instance.post('/autores', authorData)
          .then((response) => {
            window.location.href = '/';

          })
          .catch((error) => {
            console.error('Error al enviar los datos:', error);
          });
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

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Guardar
                    </Button>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Button variant="danger" type="submit">
                        Cancelar
                    </Button>
                </Form.Group>





            </Form>
        </>


    );
};

export default AuthorForm;