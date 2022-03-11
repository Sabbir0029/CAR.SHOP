import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../MyOrder/CheckoutForm';


const stripePromise = loadStripe('pk_test_51Kc1CLKBiV3NBPFsAjtSY7r0CgPhQyPb1DOJTBbTQjTyXMOztFSshkwe9JmF2QKdIDVMPj1qz04JpdDDpefw0ERM00yc3U3fd4');
const BookingCar = () => {
    const [booking, setBooking] = useState({})
    const {id} = useParams()
    const [bookingInfo, setBookingInfo] = useState({});
    const {name,price,img,photo,phototype} = booking;
    const [bookingSuccessfully, setBookingSuccessfully] = useState(false);

    useEffect(()=>{
        const url = `https://serene-lake-68929.herokuapp.com/carlist/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    const handelOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newData = {...bookingInfo}
      newData[field] = value;
      console.log(newData);
      setBookingInfo(newData)
  }
  const handelSubmitBtn = e =>{
    const bookingPlaces ={
      ...bookingInfo,
      name,
      price
    }
    fetch('https://serene-lake-68929.herokuapp.com/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(bookingPlaces)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.insertedId){
        setBookingSuccessfully(true)
      }
    })
    e.preventDefault();

}
    return (
        <div className='cartop'>
          {bookingSuccessfully && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  Logged {variant} in Correctly!
                </Alert>
              ))}
            <Container>
              <Row>
                <Col sm={6}>
                <img className='w-75' src={img} alt=""/>
                <div className='carimg'>
                <img className='w-25' src={img} alt=""/>
                <img className='w-25' src={photo} alt=""/>
                <img className='w-25' src={phototype} alt=""/>
                </div>
                </Col>
                <Col sm={6}>
                <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-50 mt-4 text-dark '
                disabled
                defaultValue={name}
                name='name'
                type='text'
                ></input> <br/>
                <input 
                className='w-50 m-3 text-dark'
                disabled
                defaultValue={price}
                name='price'
                type='text'
                ></input><br/>
                <input 
                className='w-50 mb-3 text-dark'
                placeholder='Your Email Addess'
                required
                name='email'
                type='email'
                onBlur={handelOnBlur}
                ></input><br/>
                <input 
                className='w-50 mb-3 text-dark'
                placeholder='Your Phone Number'
                name='phone'
                type='text'
                required
                onBlur={handelOnBlur}
                ></input><br/>
                <input 
                className='w-50 mb-3 text-dark'
                placeholder='date'
                name='date'
                type='text'
                required
                onBlur={handelOnBlur}
                ></input><br/>
                <Button type='submit' className='w-50 mb-3 bg-dark border-dark fw-bold fst-italic'>Send</Button>
            </form>
                </Col>
              </Row>
            </Container>
            <h1>{name}</h1>
            <Elements stripe={stripePromise}>
              <CheckoutForm 
              booking={booking}
               />
            </Elements>
         </div>
    );
};

export default BookingCar;