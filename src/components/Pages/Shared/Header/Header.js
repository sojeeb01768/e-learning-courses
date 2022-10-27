import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { FaUserAlt } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error))
    }


    // const renderTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Simple tooltip
    //     </Tooltip>
    // );


    return (
        <Navbar className='py-2 mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <span className='me-2'><img className='img-thumbnail rounded-circle' style={{ width: '50px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2ade9211090065.560f167987933.png" /></span>
                <Navbar.Brand><Link className='text-decoration-none fs-1 fw-semibold text-info' to='/'>Code Scholar</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' className='text-decoration-none text-light'>Courses</Link></Nav.Link>

                        <Nav.Link><Link className='text-decoration-none text-light' to="/faq">FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none text-light' to="/blog">Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link href="#deets">
                            {

                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='ms-2' variant="outline-danger">Logout</Button>
                                    </>
                                    :

                                    <>
                                        <Link className='text-decoration-none text-light me-2' to='/login'>Login</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.photoURL ?

                                    
                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                    :
                                    <FaUserAlt className='mt-2'></FaUserAlt>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;