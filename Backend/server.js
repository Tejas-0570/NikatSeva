const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/db');
const userRoute = require('./routes/user.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // no need body-parser

// Routes
app.use('/api/users', userRoute);

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});