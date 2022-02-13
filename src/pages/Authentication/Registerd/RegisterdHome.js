import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Registerd from './Registerd';
import loginimg from '../../../img/online-registration-4489363-3723270.png';
import { Link } from 'react-router-dom';
import  '../../Shared/SharedCss/SharedCss.css';

const RegisterdHome = () => {
    return (
        <div className='top1 border border-5 shadow'>
            <Container>
            <Row>
              <Col sm={6}>
                  <Registerd></Registerd>
              </Col>
              <Col sm={6}>
                  <h1 className='text-dark mx-5 mt-5 fw-bold fst-italic'>Hello ! Welcome to the Car Shop Platform</h1>
                  <p className='text-dark fw-bold fst-italic'>I'f You already have an account?</p>
                  <Link to='login'><Button className=' bg-dark text-decoration-none text-light border-dark  fw-bold fst-italic'>Please Login</Button></Link> <br/>
              <img className='w-75 mb-5' src={loginimg} alt=""/>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default RegisterdHome;