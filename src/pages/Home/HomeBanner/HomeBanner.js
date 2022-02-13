import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../img/lamborghini-aventador-fire.jpg';
import img2 from '../../../img/c14fcfe743535f9ff70c25bba4d78e8c.jpg';
import img3 from '../../../img/Red-Lamborghini-supercar-black-background_2560x1440.jpg';
import BannerBottom from './BannerBottom';

const HomeBanner = () => {
    return (
        <div className='mt-5'>
            <Carousel variant="dark">
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={img1}
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h5 className='text-light fw-bold fst-italic'>The All-New 2022 Tundra</h5>
                 <p className='text-light fw-bold fst-italic'>Redesigned from the ground up and born for adventure, the 2022 Tundra is our toughest, most capable, most advanced Tundra to date.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={img2}
                 alt="Second slide"
               />
               <Carousel.Caption>
                 <h5 className='text-light fw-bold fst-italic'>2022 C-HR</h5>
                 <p className='text-light fw-bold fst-italic'>C-HR's striking exterior stands out from the crowd</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={img3}
                 alt="Third slide"
               />
               <Carousel.Caption>
                 <h5 className='text-light fw-bold fst-italic'>2022 Tacoma</h5>
                 <p className='text-light fw-bold fst-italic'>The 2022 Tacoma makes your off-road, off-grid adventures possible.</p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
           <BannerBottom></BannerBottom>
        </div>
    );
};

export default HomeBanner;