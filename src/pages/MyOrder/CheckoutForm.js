import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = ({booking}) => {
    const {price} = booking;
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log( error);
          } else {
            console.log( paymentMethod);
          }
    }
    return (
        <div className='container m-5'>
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
              <button type="submit" className='rounded-pill m-3 p-2 bg-dark border-dark fw-bold fst-italic text-light' disabled={!stripe}>
                Pay {price}
              </button>
            </form>
        </div>
    );
};

export default CheckoutForm;