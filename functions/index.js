const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IHqszIDhUvMXvc9Pavd1Mlyk93KpBPEv6k6HfGdGFFAwlMN7GdvBVTGIN3903ypux0BlxBe7TzrbThhXmMjx07j00dHIFca2z')

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received.', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)
