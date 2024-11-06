// src/services/chatbotService.ts

import axios from 'axios';

/**
 * Sends a message to the backend and retrieves a bot response.
 * @async
 * @function
 * @param {string} userQuery - The query or message from the user
 * @returns {Promise<string>} The response from the backend or an error message
 */
export const sendMessageToBackend = async (userQuery: string): Promise<string> => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/query/', {
      user_query: userQuery,
    });
    return response.data.response;
  } catch (error) {
    console.error('Error sending message to backend:', error);
    return 'Sorry, there was an error processing your request.';
  }
};
