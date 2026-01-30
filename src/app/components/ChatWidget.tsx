'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import styles from './landing.module.scss';

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
    normalized.includes(
      "I appreciate your time, but it seems like this might not be the best moment to discuss your project. Feel free to reach out when you're ready to focus on your requirements. Have a great day! :wave:",
    ) ||
    normalized.includes(
      'Your project details have been successfully captured! Our expert team at PGAGI has received your requirements  ',
    )
  );
};

// interface WebSocketMessage {
//   type: string;
//   content?: string;
//   conversation_complete?: boolean;
//   [key: string]: any;
// }

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const currentBotMessageRef = useRef<string>('');
  const messageListRef = useRef<HTMLDivElement>(null);
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasMessages = messages.length > 0;

  const isUnmountedRef = useRef(false);

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);

  // Initialize WebSocket connection
  useEffect(() => {
    const connectWebSocket = async () => {
      try {
        // Check localStorage for existing session
        let sessionId = localStorage.getItem('session_id');

        // If no session, fetch new one from backend
        if (!sessionId) {
          const response = await fetch(
            'https://pgagi-chatbot-backend-168195082477.europe-west1.run.app/api/chat/generate_session',
          );
          const data = await response.json();
          sessionId = data.session_id;
          if (sessionId) {
            localStorage.setItem('session_id', sessionId);
          }
        }

        // Connect WebSocket with session ID
        const ws = new WebSocket(
          `wss://pgagi-chatbot-backend-168195082477.europe-west1.run.app/api/chat/${sessionId || '123'}`,
        );

        ws.onopen = () => {
          console.log('WebSocket connected');
          setIsConnected(true);
        };

        ws.onmessage = async (event) => {
          try {
            // Convert Blob to text if needed
            const text =
              typeof event.data === 'string'
                ? event.data
                : await (event.data as Blob).text();

            // Ignore heartbeat messages
            if (text === 'ping' || text === 'pong') return;
            if (!text.trim()) return;

            // Parse JSON message
            const message = JSON.parse(text);

            if (message.type === 'stream_start') {
              // Create new bot message with streaming state
              const botMessageId = `bot-${Date.now()}`;
              setMessages((prev) => [
                ...prev,
                {
                  id: botMessageId,
                  text: '',
                  type: 'bot',
                  isStreaming: true,
                },
              ]);
              currentBotMessageRef.current = '';
              // Store the message ID for subsequent chunks
              (ws as any)._currentMessageId = botMessageId;
            } else if (message.type === 'chunk' && message.content) {
              // Append chunk to current bot message
              currentBotMessageRef.current += message.content;
              const messageId = (ws as any)._currentMessageId;

              const formattedText = formatBotMessage(
                currentBotMessageRef.current,
              );

              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === messageId ? { ...msg, text: formattedText } : msg,
                ),
              );
            } else if (message.type === 'stream_end') {
              // Mark streaming as complete
              const messageId = (ws as any)._currentMessageId;
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === messageId ? { ...msg, isStreaming: false } : msg,
                ),
              );
              setIsLoading(false);

              // Check if auto-reset is needed
              if (shouldAutoResetChat(currentBotMessageRef.current)) {
                handleResetChat();
              }
            } else if (message.type === 'error') {
              // Display error message
              setMessages((prev) => [
                ...prev,
                {
                  id: `bot-${Date.now()}`,
                  text: message.content || 'An error occurred',
                  type: 'bot',
                  isStreaming: false,
                },
              ]);
              setIsLoading(false);
            } else if (message.type === 'end_chat') {
              // Handle chat end
              console.log('Chat ended:', message.content);
              handleResetChat();
            }
          } catch (error) {
            console.error('Error processing WebSocket message:', error);
            setIsLoading(false);
          }
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          setIsConnected(false);
        };

        ws.onclose = () => {
          console.log('WebSocket disconnected');
          setIsConnected(false);
          // Attempt to reconnect after 3 seconds

          if (!isUnmountedRef.current) {
            setTimeout(connectWebSocket, 3000);
          }
        };

        wsRef.current = ws;
      } catch (error) {
        console.error('Error connecting WebSocket:', error);
        setIsConnected(false);
      }
    };

    connectWebSocket();

    // Cleanup on unmount
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Prevent scroll propagation from message list to page
  useEffect(() => {
    const messageList = messageListRef.current;
    if (!messageList) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = messageList;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Prevent page scroll when scrolling inside bounds
      if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
        e.stopPropagation();
      }
    };

    messageList.addEventListener('wheel', handleWheel, { passive: false });
    return () => messageList.removeEventListener('wheel', handleWheel);
  }, [hasMessages]);

  // Auto-focus textarea when chat becomes active or after bot responds
  // useEffect(() => {
  //     if (hasMessages && !isLoading && textareaRef.current) {
  //         textareaRef.current.focus();
  //     }
  // }, [hasMessages, isLoading]);

  const handleResetChat = () => {
    setMessages([]);
    setCurrentMessage('');
    currentBotMessageRef.current = '';
    setIsLoading(false);
  };

  const handleSendMessage = () => {
    const trimmed = currentMessage.trim();
    if (
      !trimmed ||
      !wsRef.current ||
      wsRef.current.readyState !== WebSocket.OPEN
    ) {
      if (!isConnected) {
        alert('WebSocket is not connected. Please wait...');
      }
      return;
    }

    // Add user message to UI
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: trimmed,
      type: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);
    currentBotMessageRef.current = '';

    // Send message via WebSocket
    try {
      wsRef.current.send(JSON.stringify({ message: trimmed }));
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const renderedMessages = useMemo(
    () =>
      messages.map((message) => (
        <div
          key={message.id}
          className={`${styles.messageItem} ${message.type === 'user' ? styles.userMessage : styles.botMessage}`}
        >
          <div className={styles.messageBody}>
            {message.type === 'bot' && message.isStreaming && !message.text ? (
              <span className={styles.typingDots}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
            )}
          </div>
        </div>
      )),
    [messages],
  );

  return (
    <div
      className={`${styles.chatContainer} ${hasMessages ? styles.chatContainerActive : ''} ${hasMessages ? styles.chatActive : ''}`}
    >
      {hasMessages && (
        <button
          type="button"
          className={styles.chatCloseButton}
          onClick={handleResetChat}
          aria-label="Reset chat"
        >
          ×
        </button>
      )}
      {hasMessages && (
        <div className={styles.messageList} ref={messageListRef}>
          {renderedMessages}
        </div>
      )}
      <div className={styles.enterpriseInputWrapper}>
        <textarea
          // ref={textareaRef}
          placeholder="Tell us what you want to build."
          className={`${styles.enterpriseInput} ${hasMessages ? styles.enterpriseInputCompact : ''}`}
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={handleInputKeyDown}
          disabled={!isConnected || isLoading}
        />
        <div className={styles.inputActions}>
          <div className={styles.leftActions}>
            {/* <button
                                        className={styles.actionButton}
                                        aria-label="Add"
                                        type="button"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <button
                                        className={styles.actionButton}
                                        aria-label="Attach"
                                        type="button"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.5 7.5L9 13C8.17157 13.8284 6.82843 13.8284 6 13C5.17157 12.1716 5.17157 10.8284 6 10L11.5 4.5C11.8978 4.10218 12.6022 4.10218 13 4.5C13.3978 4.89782 13.3978 5.60218 13 6L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`${styles.actionButton} ${styles.themeButton}`}
                                        aria-label="Theme"
                                        type="button"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7 3H13C15.2091 3 17 4.79086 17 7V13C17 15.2091 15.2091 17 13 17H7C4.79086 17 3 15.2091 3 13V7C3 4.79086 4.79086 3 7 3Z" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                        <span className={styles.themeText}>Theme</span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.chevron}>
                                            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.rightActions}>
                                    <button
                                        className={`${styles.actionButton} ${styles.chatButton}`}
                                        aria-label="Chat"
                                        type="button"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M6 14H14L17 17V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H6V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className={styles.chatText}>Chat</span>
                                    </button>
                                    <button
                                        className={styles.actionButton}
                                        aria-label="Audio"
                                        type="button"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <rect x="4" y="2" width="3" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                                            <rect x="9" y="5" width="3" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                                            <rect x="14" y="7" width="3" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </button> */}
            <button
              className={styles.sendButton}
              onClick={handleSendMessage}
              disabled={!isConnected || isLoading}
              aria-label="Send"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 4V16M10 4L6 8M10 4L14 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {!isConnected && (
        <div className={styles.connectionStatus}>Connecting to chat...</div>
      )}
    </div>
  );
}
