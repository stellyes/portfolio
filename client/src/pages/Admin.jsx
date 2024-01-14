import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button'

import { useMutation } from '@apollo/client';
import { LOGIN, VERIFY } from '../utils/mutations'; // Define your mutations file


const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [login] = useMutation(LOGIN);
    const [verify] = useMutation(VERIFY);

    // Check if admin is already logged in
    useEffect(() => {   
        const attemptVerify = async () => {
            try {
                const { data } = await verify();
                if (data.verify) {
                    setIsAdmin(true);
                    return;
                }
            } catch (err) {
                console.error(err);
            }
        }
        attemptVerify();
    }, []);

    // Redirect if admin is  logged in
    useEffect(() => {
        if (isAdmin) {
            window.location.href = '/';
        }
    }, [isAdmin])

    const checkAdminPrivileges = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const admin = Object.fromEntries(formData.entries()).admin;

            if (login({ variables: { admin } })) {
                setIsAdmin(true);
                return;
            }
        } catch (err) {
            console.error(err);
        }
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
