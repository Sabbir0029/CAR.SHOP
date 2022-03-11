import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../img/google-1088004_960_720.png';

const Footer = () => {
    return (
        <div className='bg-dark mt-5'>
            <Container>
              <Row>
                <Col className='p-5'>
                <h3 className='text-light mb-3 fw-bold fst-italic'>CAR<span className='text-danger fw-bold'>.SHOP</span></h3>
                <ul className='text-light fst-italic  text-decoration-none'>
                  <p className='text-light fst-italic'>A good story has a beginning, middle, and end. The beginning is where you make a promise to viewers that this story will tead somewhere worthy of their time.</p>
                  <p>Phone : +8801773147066</p>
                  <img className='img1 mb-5'  src={img} alt=""/>
                </ul>
                </Col>
                <Col className='p-5'>
                    <h3 className='text-light mb-4 fw-bold fst-italic'>QUICK LINKS</h3>
                    <ul>
                        <Link to='/home' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>Home</Link><br></br>
                        <Link to='/AllProducts' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>All Products</Link><br></br>
                        <Link to='/contactUs' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>Contact Us</Link>
                    </ul>
                </Col>
                <Col className='p-5'>
                <h3 className='text-light mb-5 fw-bold fst-italic'>Contact Us</h3>
                <input 
                className='w-75 mb-3 text-danger '
                placeholder="Your Email"
                name='email'
                type='email'
                ></input><br></br>
                <textarea className='w-75 fw-bold fst-italic text-danger'></textarea><br></br>
                <Button type='submit' className='w-75 mb-5 bg-light border-dark text-dark fw-bold fst-italic'>Send</Button>
                </Col>
              </Row>
            </Container>
    </div>
    );
};

export default Footer;