const express = require('express');
const Stripe = require("stripe");
const router = express.Router();
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_KEY)

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
              unit_amount: Math.round(item.price * 100),
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
        success_url: `${process.env.CLIENT_URL}/orders`,
        cancel_url: `${process.env.CLIENT_URL}/checkout`,
    });
    res.send({ url: session.url });
}

module.exports = {setPayment}