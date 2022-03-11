import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1  className='text-dark mb-4 fw-bold fst-italic pt-5'>Get in Touch</h1>
            <div className='mt-5 mb-5'>
            <Container>
                <Row>
                  <Col className='pt-5 pb-5'>
                  <h1 className='text-dark fw-bold fst-italic'>Write us</h1>
            <form >
                <input 
                className='w-75 mt-4 text-dark '
                placeholder="Your Email"
                name='email'
                type='email'
                ></input> <br></br>
                <input 
                className='w-75 m-3 text-dark'
                placeholder="Your Password"
                name='password'
                type='password'
                ></input><br></br>
                <textarea className='w-75 fw-bold fst-italic text-dark'></textarea>
                <Button type='submit' className='w-75 mb-3  mt-4 bg-dark border-dark fw-bold fst-italic'>Send</Button>
            </form>
                  </Col>
                  <Col className='contact pt-5 pb-5'>
                  <h1 className='text-dark fw-bold fst-italic pt-3'>Contact Us</h1>

                  <ul className='text-dark fw-bold fst-italic pt-3 fs-5'>
                      <li>Address : Pabna,Rajshahi,Bangladesh</li>
                      <li>Phone : +8801773147066</li>
                      <li>Email : mdsabbirhossain0029@gmail.com</li>
                      <li>Web Site : https://car-shop-f0ba3.web.app/</li>
                  </ul>
                  </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default ContactUs;