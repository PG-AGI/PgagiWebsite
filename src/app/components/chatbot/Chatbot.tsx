'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Chatbot.module.scss';
import { useChatUI } from '@/contexts/ChatUIContext';

interface Message {
  id: string;
  text: string;
  type: 'user' | 'bot';
  isStreaming?: boolean;
}

function formatBotMessage(text: string) {
  let formatted = text;

  // 1. Bold: **text**
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 2. Quoted text: "text"
  formatted = formatted.replace(/"(.*?)"/g, '<em>“$1”</em>');

  // 3. Dash-separated items → new lines
  formatted = formatted.replace(/\s-\s/g, '<br />');

  return formatted;
}

const shouldAutoResetChat = (text: string) => {
  const normalized = text.toLowerCase();
  return (
    normalized.includes('not be the best moment to discuss') ||
    normalized.includes('project details have been successfully captured')
  );
};

const Chatbot = () => {
  const { isOpen, closeChat } = useChatUI();

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const shouldReconnectRef = useRef(true);
  const currentBotMessageRef = useRef('');
  const messageListRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  /* ---------------- WebSocket ---------------- */

  const handleResetChat = () => {
    setMessages([]);
    setCurrentMessage('');
    currentBotMessageRef.current = '';
    setIsLoading(false);

    wsRef.current?.close();
    wsRef.current = null;
  };
  useEffect(() => {
    const connectWebSocket = async () => {
      try {
        let sessionId = localStorage.getItem('session_id');

        if (!sessionId) {
          const res = await fetch(
            'https://pgagi-chatbot-backend-168195082477.europe-west1.run.app/api/chat/generate_session',
          );
          const data = await res.json();
          sessionId = data.session_id;
          localStorage.setItem('session_id', sessionId!);
        }

        const ws = new WebSocket(
          `wss://pgagi-chatbot-backend-168195082477.europe-west1.run.app/api/chat/${sessionId}`,
        );

        ws.onopen = () => setIsConnected(true);

        ws.onmessage = async (event) => {
          const raw =
            typeof event.data === 'string'
              ? event.data
              : await (event.data as Blob).text();

          if (!raw || raw === 'ping' || raw === 'pong') return;

          const message = JSON.parse(raw);

          console.log(message);
          if (message.type === 'stream_start') {
            const id = `bot-${Date.now()}`;
            currentBotMessageRef.current = '';
            (ws as any)._currentMessageId = id;

            setMessages((prev) => [
              ...prev,
              { id, text: '', type: 'bot', isStreaming: true },
            ]);
          }

          if (message.type === 'chunk') {
            currentBotMessageRef.current += message.content || '';
            const id = (ws as any)._currentMessageId;

            const formattedText = formatBotMessage(
              currentBotMessageRef.current,
            );

            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === id ? { ...msg, text: formattedText } : msg,
              ),
            );
          }

          if (message.type === 'stream_end') {
            const id = (ws as any)._currentMessageId;
            setIsLoading(false);

            setMessages((prev) =>
              prev.map((m) => (m.id === id ? { ...m, isStreaming: false } : m)),
            );

            if (shouldAutoResetChat(currentBotMessageRef.current)) {
              handleResetChat();
            }
          }

          if (message.type === 'error') {
            setMessages((prev) => [
              ...prev,
              {
                id: `bot-${Date.now()}`,
                text: message.content || 'Something went wrong',
                type: 'bot',
              },
            ]);
            setIsLoading(false);
          }
        };

        ws.onclose = () => {
          setIsConnected(false);
          if (shouldReconnectRef.current) {
            setTimeout(connectWebSocket, 3000);
          }
        };

        ws.onerror = () => setIsConnected(false);

        wsRef.current = ws;
      } catch {
        setIsConnected(false);
      }
    };

    connectWebSocket();

    return () => {
      shouldReconnectRef.current = false;
      wsRef.current?.close();
    };
  }, []);

  /* ---------------- Scroll ---------------- */

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  /* ---------------- Actions ---------------- */

  const handleSendMessage = () => {
    const text = currentMessage.trim();
    if (!text || !wsRef.current || wsRef.current.readyState !== 1) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, text, type: 'user' },
    ]);

    setCurrentMessage('');
    setIsLoading(true);
    currentBotMessageRef.current = '';

    wsRef.current.send(JSON.stringify({ message: text }));
  };

  useEffect(() => {
    console.log('isLoading: ', isLoading, 'isConnected: ', isConnected);
  }, [isConnected, isLoading]);

  if (!isOpen) return null;

  /* ---------------- UI ---------------- */

  return (
    <div className={styles.chatContainer}>
      {/* Header */}
      <div className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.botAvatar}>PG</div>
          <div>
            <div className={styles.botName}>PGAGI Assistant</div>
            <div className={styles.botStatus}>
              <span className={styles.onlineDot} />
              Online
            </div>
          </div>
        </div>

        <button className={styles.headerClose} onClick={closeChat}>
          ×
        </button>
      </div>

      {/* Empty */}
      {!hasMessages && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🤖</div>
          <h3>Hi, I’m the PGAGI AI Assistant</h3>
          <p>
            I can help you with project ideas, timelines, pricing and technical
            guidance.
          </p>

          <div className={styles.suggestions}>
            {[
              'I want to build a SaaS app',
              'Help me plan an MVP',
              'What does PGAGI do?',
            ].map((text) => (
              <button
                key={text}
                onClick={() => {
                  setCurrentMessage(text);
                  setTimeout(handleSendMessage, 0);
                }}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {hasMessages && (
        <div className={styles.messageList} ref={messageListRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`${styles.messageItem} ${
                m.type === 'user' ? styles.userMessage : styles.botMessage
              }`}
            >
              {m.isStreaming && !m.text ? (
                <span className={styles.typingDots}>•••</span>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: m.text }}></p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      <div className={styles.chatInputWrapper}>
        <textarea
          className={styles.chatInput}
          placeholder="Ask about your idea, timeline, or budget…"
          // rows={1}
          value={currentMessage}
          disabled={!isConnected || isLoading}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
            // e.target.style.height = "auto";
            // e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />

        <button
          className={styles.sendButton}
          disabled={!currentMessage.trim() || isLoading}
          onClick={handleSendMessage}
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
