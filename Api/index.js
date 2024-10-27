const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = 4000; // Make sure to change this to your actual port

// Storing events
let events = [];

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    credentials: true // Allow credentials (optional)
}));

// Define a GET route for events
app.get('/api/debug', (req, res) => {
    res.json(events);
});

// Define a POST route for debug data
app.post('/api/debug', (req, res) => {
    const debugData = req.body;
    console.log("Received debug data:", debugData);
    events.unshift(debugData); // Add to beginning of array
    
    res.json({ 
        message: "Debug data received successfully!",
        event: debugData
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});