import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BmwCarListCard = (props) => {
    const {name,img,price,_id} = props.cars
    return (
        <div>
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title className='text-dark fst-italic'>Name : {name}</Card.Title>
                <Card.Title className='text-dark fst-italic'>price : {price}</Card.Title>
                <Link to={`booking/${_id}`}><Button className=' mb-3 bg-dark border-dark fw-bold fst-italic'>Booking</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default BmwCarListCard;