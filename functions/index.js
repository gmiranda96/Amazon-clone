const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MNhxwHo8ZV7fq6Z3uOaEK2sETmB6pyNLcxOiMGi1pHbqb3BOKGNM2CdbVERZHeBKYjQ2itdcMOTjeq9ZdFOc1VM00p724oYzF');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Received for this amount >>> ', total)

	const paymentIntent = await stripe.paymentIntents.create({
		amount : total,
		currency: "usd",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen Command
exports.api = functions.https.onRequest(app)

// Example Endpoint
// http://127.0.0.1:5001/clone-c48ca/us-central1/api