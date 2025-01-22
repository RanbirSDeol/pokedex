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

// |GET|: '/pokemon/:name_of_pokemon'
// Returns the JSON files for any pokemon
app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    // Fetch data from PokéAPI using axios
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    res.status(404).json({ error: "Pokémon not found!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
