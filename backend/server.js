const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios"); // Import axios

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Backend API is Running");
});

/* API Calls:

GET [/pokemon]
GET [/pokemon/:name]
GET [/pokemon/:id]

*/

// |GET|: Returns list of Pokémon with optional limit and offset
app.get("/pokemon", async (req, res) => {
  const { limit = 20, offset = 0 } = req.query; // Default to 20 Pokémon
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed o fetch Pokémon list!" });
  }
});

// |GET|: Returns Pokémon by their name
app.get("/pokemon/name/:name", async (req, res) => {
  const { name } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ error: `Pokémon ${name} not found!` });
  }
});

// |GET|: Returns Pokémon by their ID
app.get("/pokemon/id/:id", async (req, res) => {
  const { id } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ error: `Pokémon with ID ${id} not found!` });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
