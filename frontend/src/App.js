import React from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the Chatbot
      </header>
      <div className="flex-container">
        {/* Note Box */}
        <div className="note-box">
          <h2>Test Questions</h2>
          <ul>
            <li>Hi</li>
            <li>What is your name?</li>
            <li>What can you do?</li>
          </ul>
        </div>
        
        {/* Chat Window */}
        <div className="chat-container">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
