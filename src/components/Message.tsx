// src/components/Message.tsx

import React from 'react';
import { Message as MessageType } from '../types/Message';
import styles from './Message.module.scss';

type MessageProps = {
  /** The content of the message */
  content: string;
  /** Indicates if the sender is a user or bot */
  sender: 'user' | 'bot';
};

/**
 * Message component renders individual messages in the chat window.
 * @component
 * @param {MessageProps} props - The properties of the Message component
 * @returns {JSX.Element} The rendered Message component
 */
const Message: React.FC<MessageProps> = ({ content, sender }) => {
  return (
    <div className={`${styles.message} ${styles[sender]}`}>
      <div className={styles['message-bubble']}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Message;
