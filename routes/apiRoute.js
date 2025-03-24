// routes/apiRoutes.js
const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Create a rate limiter that allows 5 requests per 15 minutes
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        status: 429,
        message: 'Too many requests, please try again later.',
    },
});

// Apply the rate limiter to the /api endpoint
router.use(apiLimiter);

// Sample route
router.get('/data', (req, res) => {
    res.send('Here is your data!');
});

// Another sample route
router.get('/info', (req, res) => {
    res.send('This is some information!');
});

module.exports = router;