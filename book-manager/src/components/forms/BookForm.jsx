import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookForm = () => {
    return (
        <Form>
            <h2>Formulario de libros</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el título del libro" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Autor</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Seleccionar autor</option>
                    <option value="1">Autor 1</option>
                    <option value="2">Autor 2</option>
                    <option value="3">Autor 3</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                
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

export default BookForm;
