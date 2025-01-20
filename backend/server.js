const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chatRoutes');  // Import the chat routes
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for frontend access
app.use(bodyParser.json());  // Parse JSON requests

// Use the routes
app.use('/api', chatRoutes);  // The /chat route will be accessible at /api/chat

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
