



  // server.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const connectDB = require('./database/db');
const Animal = require('./database/animals');
const cors=require('cors');
const app = express();
const PORT = 8000;


// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error(error));



// Multer configuration for handling image uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });





// Route for handling animal rescue requests
app.post('/rescue', upload.single('photo'), async (req, res) => {
  try {
    const { animalName, description } = req.body;
    const photo = {
      data: req.file.buffer, // Get image data from buffer
      contentType: req.file.mimetype // Get image content type
    };
    const animal = new Animal({ animalName, description, photo });
    await animal.save();
    res.status(201).send('Animal rescued successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error rescuing animal');
  }
});


// Route for fetching all animals
app.get('/animals', async (req, res) => {
  try {
    // Fetch all animals from the database
    const animals = await Animal.find();
    res.json(animals); // Send the fetched animals as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching animals');
  }
});
  
 connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
