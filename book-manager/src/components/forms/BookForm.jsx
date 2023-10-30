import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import instance from '../../config/tokenAxios';
import { useParams } from 'react-router-dom';



const BookForm = () => {

    

    return (
        <Form>
            <h2>Formulario de libros</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título</Form.Label>

                <Form.Control 
                    
                    placeholder="Ingresa el título del libro" 
                   
                />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Autor</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Selecciona un autor</option>
                    
                </Form.Select>
            </Form.Group>



            <Form.Group className="mb-3">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth"/>
                
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
