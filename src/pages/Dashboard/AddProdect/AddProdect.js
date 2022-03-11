import React from 'react';
import { Button } from 'react-bootstrap';

const AddProdect = () => {
    return (
        <div className='dashboard'>
            <h1>Add Prodects</h1>
            <form>
            <input 
                className='w-25 text-dark '
                placeholder="Prodects Name"
                name='email'
                type='email'
                ></input><br/>
            <input 
                className='w-25 m-3 text-dark '
                placeholder="img url"
                name='email'
                type='email'
                ></input><br/>
            <input 
                className='w-25 text-dark '
                placeholder="Price"
                name='email'
                type='email'
                ></input><br/>
                <Button type='submit' className='m-3 w-25 bg-dark border-dark fw-bold fst-italic'>Send</Button>
            </form>
        </div>
    );
};

export default AddProdect;