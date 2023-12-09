// src/components/ChatComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [translatedMessage, setTranslatedMessage] = useState('');

  const sendMessage = async (lang) => {
    try {
      const response = await axios.post('http://localhost:3000/translate', {
        text: message,
        targetLang: lang,
      });
      setTranslatedMessage(response.data);
    } catch (error) {
      console.error('Error translating message:', error);
    }
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={() => sendMessage('fr')}>Traduire en Français</button>
      <button onClick={() => sendMessage('en')}>Translate to English</button>
      <button onClick={() => sendMessage('es')}>Traducir al Español</button>
      <div>
        <strong>Translated Message:</strong>
        <p>{translatedMessage}</p>
      </div>
    </div>
  );
}

export default ChatComponent;
