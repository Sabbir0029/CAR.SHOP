import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BmwCarListCard from '../BmwCarListCard';

const BmwCarList = () => {
    const [BmwCarList, setBmwCarList] = useState([])

      useEffect(()=>{
        fetch('http://localhost:5000/carlist')
        .then(res => res.json())
        .then(data => setBmwCarList(data))
      },[])
    return (
        <div>
          <Row xs={1} md={3} className="g-2">
            {
              BmwCarList.map(cars => <BmwCarListCard
                key={cars._id}
                cars={cars}
              ></BmwCarListCard>)
            }
          </Row>

        </div>
    );
};

export default BmwCarList;