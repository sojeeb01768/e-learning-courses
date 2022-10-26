import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)


    return (
        <Navbar className='py-2 mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <span className='me-2'><img className='img-thumbnail rounded-circle' style={{ width: '50px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2ade9211090065.560f167987933.png" alt="" srcset="" /></span>
                <Navbar.Brand><Link className='text-decoration-none fs-1 fw-semibold text-info' to='/'>Code Scholar</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' className='text-decoration-none text-light'>Courses</Link></Nav.Link>

                        <Nav.Link><Link className='text-decoration-none text-light' to="/faq">FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link className='text-decoration-none text-light' to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link href="#deets">
                            {

                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button>Log Out</button>
                                    </>
                                    :

                                    <>
                                        <Link className='text-decoration-none text-light me-2' to='/login'>Login</Link>
                                        <Link className='text-decoration-none text-light' to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;