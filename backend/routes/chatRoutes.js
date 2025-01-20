const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData.json');  // Import mock data file

// Function to get the bot's response based on user input
function getBotResponse(userInput) {
  // Check if the user input matches any FAQ
  if (mockData.faq[userInput]) {
    return mockData.faq[userInput];
  }

  // Check if the user input matches small talk
  if (mockData.small_talk[userInput]) {
    return mockData.small_talk[userInput];
  }

  // Check if it's a greeting
  if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
    return mockData.greetings[Math.floor(Math.random() * mockData.greetings.length)];
  }

  // Fallback if no match is found
  return mockData.fallback[Math.floor(Math.random() * mockData.fallback.length)];
}

// POST route to handle user input and respond with bot message
router.post('/chat', (req, res) => {
  const userMessage = req.body.message;  // Get message from user input (sent from frontend)

  if (!userMessage) {
    return res.status(400).send({ message: "Please provide a message." });
  }

  const botResponse = getBotResponse(userMessage);

  // Send the bot response back to the frontend
  return res.status(200).send({ response: botResponse });
});

module.exports = router;
