import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button'

import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const checkAdminPrivileges = async (event) => {
        event.preventDefault();
        try {
            const response = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = response.data.login.token;

            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value,
        });
    };

    return (
        <Container>
            <Form 
                className="admin-form"
                onSubmit={checkAdminPrivileges}
            >
                <Form.Control 
                    type="text" 
                    placeholder="username" 
                    aria-label="username" 
                    name="username" 
                    onChange={handleChange}
                />
                <Form.Control 
                    type="password" 
                    placeholder="password" 
                    aria-label="password" 
                    name="password" 
                    onChange={handleChange}
                />
                <Button type="submit">✓</Button>
            </Form>
        </Container>
    );
};

export default Admin;
