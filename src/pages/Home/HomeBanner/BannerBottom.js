import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../img/images.png';
import SearCar from '../../../img/Search car.png';
import dark from '../../../img/dark 1.png';
import map from '../../../img/map.png';
import '../../Shared/SharedCss/SharedCss.css';

const BannerBottom = () => {
    return (
        <div className='m-5'>
           <Container>
             <Row>
               <Col sm className=' border-end border-1 border-dark'>
               <img className='w-25 BannerBottom' src={img} alt=""/>
               <p className='text-dark fw-bold fst-italic'>Build & price</p>
               </Col>
               <Col sm className='border-end border-1 border-dark'>
               <img className='w-25 BannerBottom' src={SearCar} alt=""/>
               <p className='text-dark fw-bold fst-italic'>Search Inventory</p>
               </Col>
               <Col sm className='border-end border-1 border-dark'>
               <img className='w-25 BannerBottom' src={dark} alt=""/>
               <p className='text-dark fw-bold fst-italic'>Kelley Blue Book Trade-In Value</p>
               </Col>
               <Col sm>
               <img className='w-25 BannerBottom' src={map} alt=""/>
               <p className='text-dark fw-bold fst-italic'>Find A Dealer</p>
               </Col>
             </Row>
           </Container>
        </div>
    );
};

export default BannerBottom;