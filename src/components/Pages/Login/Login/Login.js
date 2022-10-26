import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const { providerLoginWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLoginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p>Don't have any Account <Link className='fw-semibold' to='/register'> Create Account</Link></p>
            <Button className='mb-4' variant="primary" type="submit">
                Login
            </Button> <br />
            <Button onClick={handleGoogleSignIn} className='me-3' variant="outline-info"><FaGoogle></FaGoogle> Login with google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

        </Form>


    );
};

export default Login;