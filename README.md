
# Chatbot App

A simple chatbot app built with React and TypeScript that allows users to communicate with a backend service, which processes user queries. This project includes a clean architecture setup, SCSS modules for styling, and JSDoc documentation for maintainability and readability.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [JSDoc Documentation](#jsdoc-documentation)
- [Adding Loading Animation](#adding-loading-animation)
- [API Service](#api-service)
- [Technologies Used](#technologies-used)

## Overview

This project demonstrates a chatbot interface that sends user messages to a backend API and displays responses. It follows a clean architecture pattern and uses SCSS modules with dot notation for scoped styling. The app includes a typing indicator to show when the chatbot is processing a query.

## Features

- **React with TypeScript**: Strongly typed and maintainable.
- **Clean Architecture**: Clear separation of concerns, including components, services, types, and utilities.
- **SCSS Modules**: Styled using SCSS modules with dot notation for cleaner, scoped styling.
- **Typing Indicator**: Minimal animation while waiting for responses from the backend.
- **JSDoc Comments**: Well-documented code using JSDoc for improved readability and maintainability.
- **`typedoc` Documentation Generation**: Automatically generate documentation using TypeScript’s `typedoc`.

## Installation

1. **Clone the repository**:
   ```bash
   git clone 
   cd chatbot-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install additional dependencies for SCSS and typedoc**:
   ```bash
   npm install sass typedoc --save-dev
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Folder Structure

```plaintext
src/
├── components/             # Reusable UI components
│   ├── Chatbot.tsx         # Main Chatbot UI component
│   ├── Message.tsx         # Message component for individual messages
│   ├── Chatbot.module.scss # Styles for Chatbot component
│   ├── Message.module.scss # Styles for Message component
├── services/               # Services for API calls
│   └── chatbotService.ts   # Handles API requests to backend
├── types/                  # Type definitions
│   └── Message.ts          # Type definition for message objects
├── utils/                  # Utility functions and helpers
│   └── api.ts              # Utility to configure axios or fetch API
└── App.tsx                 # Main app entry point
└── App.module.scss         # Styles for App component
```

## Usage

### Typing Indicator

A loading animation appears as three dots at the bottom of the chat window to indicate that the chatbot is processing the user query. This feature uses a simple SCSS animation in `Chatbot.module.scss`.

### JSDoc Documentation

JSDoc comments are used throughout the project for all components, functions, and types. This allows for easy documentation generation using `typedoc`.

To generate the documentation:

```bash
npx typedoc
```

Documentation will be generated in the `docs/` directory, which can be opened with a browser.

## Configuration

The backend URL is currently hardcoded in the service file (`chatbotService.ts`). You can adjust the base URL or configure environment variables as needed.

To enable CORS in development, configure the backend to accept requests from `http://localhost:3000`



## Adding Loading Animation

A "typing" indicator is shown while waiting for the response from the backend. Here’s the relevant code:

In `Chatbot.tsx`, add a loading state and display an indicator while waiting for the bot's response:

```typescript
const [loading, setLoading] = useState(false);

{loading && <div className={styles['typing-indicator']}>...</div>}
```

In `Chatbot.module.scss`:

```scss
.typing-indicator {
  font-size: 1.2rem;
  color: #eaeaea;
  padding: 10px 0;
  animation: typing 1s infinite;
}

@keyframes typing {
  0%, 33% { content: '.'; }
  66% { content: '..'; }
  100% { content: '...'; }
}
```

## API Service

The service file (`chatbotService.ts`) handles API requests to the backend and is responsible for sending user queries and handling responses. This file uses `axios` for HTTP requests.

Example usage:

```typescript
import axios from 'axios';

export const sendMessageToBackend = async (userQuery: string) => {
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
```

## Technologies Used

- **React** with **TypeScript** for building the app.
- **SCSS Modules** for component-level styling.
- **Axios** for HTTP requests.
- **typedoc** for documentation generation.
- **JSDoc** comments for code documentation.
- **Clean Architecture** principles to separate concerns and improve maintainability.

## License

This project is open source and available under the MIT License.
