const express = require('express'); //define express package 
const app = express(); 
const PORT = 3000;


// Middleware to parse JSON
app.use(express.json());

// Define a POST route for debug data
app.post('/api/debug', (req, res) => {
    const debugData = req.body;
    console.log("Received debug data:", debugData);
    res.send({ message: "Debug data received successfully!" });
});


// Start the server
app.listen(PORT, () => {
    console.log(` on http://localhost:${PORT}`);
});
