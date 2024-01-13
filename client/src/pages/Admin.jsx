import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button'

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [login, { error: loginError, data: loginData }] = useMutation(LOGIN);

    useEffect(() => {
        console.log("login data:", loginData);
        if (loginData.login.token) {
            Auth.login(loginData.login.token);
        }
    }, [loginData]);

    const checkAdminPrivileges = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const entries = Object.fromEntries(formData.entries()).username;
            const { username, password } = entries;

            // Getting { token, user } from server-side
            await login({
                variables: {
                    username,
                    password,
                },
            });

            
            setIsAdmin(true);
        } catch (err) {
            console.error(loginError);
        }
    }

    const handleLogin = () => {
        window.location.href = "/";
    }

    return (
        <Container>
            {isAdmin ? 
                handleLogin :
                <Form 
                    onSubmit={checkAdminPrivileges}
                >
                    <Form.Control 
                        type="text" 
                        placeholder="admin" 
                        aria-label="admin" 
                        name="admin" 
                    />
                    <Button type="submit">✓</Button>
                </Form>
            }
        </Container>
    );
};

export default Admin;
