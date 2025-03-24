// server.js
const express = require('express');
const apiRoutes = require('./routes/apiRoute');

const app = express();

// Use the API routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});