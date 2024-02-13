// Importing necessary modules
const express = require('express');
const fs = require('fs');
const app = express();

// Route handler for root path
app.get('/', (req, res) => {
    fs.readFile('./objects.json', 'utf8', (err, data) => {
        if (err) {
            // Send error response if file reading fails
            res.status(500).send('Error reading JSON file');
        } else {
            // Send JSON file content in json format
            res.type('application/json').send(data);
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
