// src/App.tsx
import React from 'react';
import Chatbot from './components/Chatbot';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Chatbot />
    </div>
  );
};

export default App;
