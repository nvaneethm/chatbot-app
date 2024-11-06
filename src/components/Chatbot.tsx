// src/components/Chatbot.tsx

import React, { useState } from 'react';
import Message from './Message';
import { Message as MessageType } from '../types/Message';
import { sendMessageToBackend } from '../services/chatbotService';
import styles from './Chatbot.module.scss';

/**
 * Chatbot component provides the main UI and logic for the chatbot.
 * It handles user input, displays messages, and manages loading animations.
 * @component
 * @returns {JSX.Element} The rendered Chatbot component
 */
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Handles input change events and updates the input state.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  /**
   * Sends a message to the backend, updates the loading state,
   * and adds bot responses to the message list.
   */
  const handleSend = async () => {
    if (input.trim()) {
      const userMessage: MessageType = { content: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setInput('');
      setLoading(true);

      const botResponseContent = await sendMessageToBackend(input);
      setLoading(false);

      const botMessage: MessageType = { content: botResponseContent, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className={styles['chatbot-container']}>
      <div className={styles['chatbot-header']}>Chatbot</div>
      <div className={styles['chat-window']}>
        {messages.map((msg, index) => (
          <Message key={index} content={msg.content} sender={msg.sender} />
        ))}
        {loading && <div className={styles['typing-indicator']}>...</div>}
      </div>
      <div className={styles['input-area']}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
