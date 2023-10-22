import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AuthorForm = () => {
    return (
        <Form>
            <h2>Formulario de autores</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el nombre del autor" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nacionalidad</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el nombre del autor" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Button variant="success" type="submit">
                    Guardar
                </Button>
                
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Button variant="danger" type="submit">
                    Cancelar
                </Button>
            </Form.Group>





        </Form>


    );
};

export default AuthorForm;