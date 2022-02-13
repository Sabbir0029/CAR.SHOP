import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginimg from '../../../img/login.png';
import Login from './Login';

const LoginHome = () => {
    return (
        <div className='top1 border border-5 shadow'>
            <Container>
            <Row>
              <Col sm={12} md={6}>
              <h1 className='text-dark fw-bold fst-italic mx-5 mt-5'>Hello ! Welcome to the Car Shop Platform</h1>
              <p className='text-dark fw-bold fst-italic'>Don't have an account?</p>
              <Link to='register'><Button className=' bg-dark text-decoration-none text-light border-dark  fw-bold fst-italic'>Create An Account</Button></Link> <br/>
                <img className='w-75 mb-5' src={loginimg} alt=""/>
              </Col>
              <Col sm={12} md={6}>
              <Login></Login>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default LoginHome;