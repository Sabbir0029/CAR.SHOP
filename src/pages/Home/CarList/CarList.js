import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BmwCarList from '../BmwCarList/BmwCarList/BmwCarList';

const CarList = () => {
    return (
        <div className='container'>
            <h1 className='text-dark mt-5 mb-5 fw-bold fst-italic'>Explore All Vehicles</h1>
            <BmwCarList></BmwCarList>
        </div>
    );
};

export default CarList;