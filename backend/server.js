const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Sample data (mock database)
const pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Squirtle', type: 'Water' },
];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});