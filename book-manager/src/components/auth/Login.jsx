import instance from '../../config/noTokenAxios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavBarNavigation from '../ui/NavBarNavigation';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post('/auth/login', {
                username,
                password,
            });

            console.log(response.data)

            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <NavBarNavigation />
        <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </>
        
    );
};

export default Register;