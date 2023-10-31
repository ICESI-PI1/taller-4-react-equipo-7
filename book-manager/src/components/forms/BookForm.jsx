import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import instance from '../../config/tokenAxios';
import { useParams } from 'react-router-dom';
import NavBarNavigation from '../ui/NavBarNavigation';

const BookForm = ({ isEdit }) => {

    const { id } = useParams();

    const [error, setError] = useState(null);

    const [selectedAuthorId, setSelectedAuthorId] = useState('');

    const handleSelectChange = (event) => {
        setSelectedAuthorId(event.target.value);
    };

    const [authors, setAuthors] = useState([]);
    const [bookData, setBookData] = useState({
        id: '',
        title: '',
        publicationDate: '',
        author: ''
    });

    useEffect(() => {

        if (isEdit) {
            instance.get(`libros/${id}`)
                .then(response => {
                    const data = response.data;

                    setBookData({
                        id: data.id,
                        title: data.title,
                        publicationDate: data.publicationDate
                    });
                    console.log(data.author.id);
                    instance.get(`autores/${data.author.id}}`)
                    .then(response => {
                        const data = response.data;
                        setBookData({
                            author:data
                        });
                    })
                    .catch(err => {
                        setError('Hubo un error al cargar los datos del autor');
                    });
                    
                })
                .catch(err => {
                    setError('Hubo un error al cargar los datos del autor');
                });

        }

        instance.get('/autores')
            .then(response => {
                setAuthors(response.data);
                setSelectedAuthorId(response.data[0].id);
            })
            .catch(error => {
                console.error('Error de solicitud:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: name === 'id' ? parseInt(value, 10) : value
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);

        if (isEdit) {

            instance.put(`books/${id}`, authorData)
                .then((response) => {
                    window.location.href = '/authors';

                })
                .catch((error) => {
                    console.error('Error al editar los datos:', error);
                    setError('No se pudo editar el autor. Inténtalo de nuevo.');

                });
        } else {
            console.log(selectedAuthorId);
            instance.get(`/autores/${selectedAuthorId}`)
                .then((response) => {
                    bookData.author = response.data;
                    instance.post('/libros', bookData)
                        .then((response) => {
                            window.location.href = '/books';

                        })
                        .catch((error) => {
                            console.error('Error al enviar los datos:', error);
                            setError('No se pudo crear el autor. Inténtalo de nuevo.');
                        });

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
            <Form>
                <h2 style={{ marginTop: "25px" }}>Formulario de libros</h2>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Identificación</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingresa el id"
                        pattern="[0-9]*"
                        name="id"
                        value={bookData.id}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Solo se permiten valores numéricos.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control

                        placeholder="Ingresa el título del libro"

                        name="title"
                        value={bookData.title}
                        onChange={handleChange}

                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Autor</Form.Label>
                    <Form.Select aria-label="Default select example" value={selectedAuthorId}
                        onChange={handleSelectChange}>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha:</Form.Label>
                    <Form.Control onChange={handleChange}
                        type="date" name="publicationDate" placeholder="Date of Birth" />

                </Form.Group>
                {error && <div className="mb-3" style={{ color: 'red' }}>{error}</div>}

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

export default BookForm;
