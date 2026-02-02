'use client';
import { MessageCircleIcon } from 'lucide-react';
import styles from './Chatbot-Button.module.scss';
import { useChatUI } from '@/contexts/ChatUIContext';

const ChatBotButton = () => {
  const { isOpen, toggleChat } = useChatUI();

  if (isOpen) return null;
  return (
    <button
      className={`${styles.chatbotButton} ${isOpen ? styles.open : ''}`}
      onClick={toggleChat}
      aria-label="Toggle chat"
    >
      <MessageCircleIcon size={20} />
    </button>
  );
};

export default ChatBotButton;
