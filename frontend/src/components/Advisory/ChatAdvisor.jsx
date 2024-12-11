import React, { useState } from 'react';

const ChatAdvisor = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    // Simulate advisor response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Response from advisor', sender: 'advisor' }]);
    }, 1000);
  };

  return (
    <div className="chat-advisor">
      <h2>Chat with Advisor</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatAdvisor;
