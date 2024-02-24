import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
        const stripe = useStripe();
        const elements = useElements();
      
       // components/StripeForm.js
const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const { paymentIntent, error } = await stripe.createPaymentIntent({
      amount: 1000,  // Amount in cents (e.g., $10.00)
      currency: 'usd',
    });
  
    if (error) {
      console.error(error);
    } else {
      // Call stripe.confirmCardPayment to complete the payment
      const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      if (result.error) {
        console.error(result.error);
      } else {
        console.log('Payment successful:', result.paymentIntent);
      }
    }
  };
  
    return (
            <form onSubmit={handleSubmit}>
              <CardElement />
              <button type="submit">Pay</button>
            </form>
          );
        };




export default Payment
