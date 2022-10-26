import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { providerLoginWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLoginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='mb-4' variant="primary" type="submit">
                Login
            </Button> <br />
            <Button onClick={handleGoogleSignIn} className='me-3' variant="outline-info"><FaGoogle></FaGoogle> Login with google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

        </Form>


    );
};

export default Login;