import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Header from '../components/Pages/Shared/Header/Header';
import LeftSideNav from '../components/Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
       <div>
        <Header></Header>
         <Container>
            <Row>
                <Col lg='4'>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='8'>
                <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Main;