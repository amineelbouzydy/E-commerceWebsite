const express = require('express');
const Stripe = require("stripe");
const router = express.Router();
require("dotenv").config();

const stripe = require('stripe')('sk_test_51OLNEAJqU7h6Zk5YyYYAkYny8vxWpYm42chpA1QeQJsF2CtLI2J0ANUhw5ShNGTr2nqS3MCdAFMwTRJYsbC3Z1s500NptSX6ar')

const setPayment =  async (req, res) => {
    let totalAmount = 0;

    const line_items = req.body.cartItems.map((item) => {
        const unitAmount = item.price * 100;
        totalAmount += unitAmount * item.quantity;
        return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.product_name,
                images: [item.productImage], 
                description: item.description, 
              },
              unit_amount: Math.round((item.price * 100)/10),
            },
            quantity: item.quantity,
          };
    });
    if (totalAmount > 99999999) {
        return res.status(400).send({ error: 'Total amount exceeds the maximum limit.' });
    }
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `http://localhost:3000/orders`,
        cancel_url: `http://localhost:3000/checkout`,
    });
    res.send({ url: session.url });
}

module.exports = {setPayment}