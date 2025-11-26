'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from "./landing.module.scss";
import BookCallModal from './base/bookCallModela';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';
// import Hyperspeed from './ui/Hyperspeed/Hyperspeed';
import Image from 'next/image';

interface Message {
    id: string;
    text: string;
    type: 'user' | 'bot';
    isStreaming?: boolean;
}

interface WebSocketMessage {
    type: string;
    content?: string;
    conversation_complete?: boolean;
    [key: string]: any;
}

export default function Landing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { scrollTo } = useSmoothScrollTo();
    const bgRef = useRef<HTMLDivElement>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const currentBotMessageRef = useRef<string>('');
    const messageListRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const hasMessages = messages.length > 0;

    const handleBookCall = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleScrollToTestimonials = () => {
        window.location.href = "/projects";
    };

    // Initialize WebSocket connection
    useEffect(() => {
        const connectWebSocket = () => {
            try {
                const ws = new WebSocket('ws://69.197.164.183:8001/api/chat/123');
                
                ws.onopen = () => {
                    console.log('WebSocket connected');
                    setIsConnected(true);
                };

                ws.onmessage = (event) => {
                    try {
                        const data: WebSocketMessage = JSON.parse(event.data);
                        
                        if (data.type === 'content' && data.content) {
                            // Accumulate content chunks
                            currentBotMessageRef.current += data.content;
                            
                            // Update or create bot message
                            setMessages((prev) => {
                                const lastMessage = prev[prev.length - 1];
                                if (lastMessage && lastMessage.type === 'bot' && lastMessage.isStreaming) {
                                    // Update existing streaming message
                                    return prev.map((msg, idx) => 
                                        idx === prev.length - 1 
                                            ? { ...msg, text: currentBotMessageRef.current }
                                            : msg
                                    );
                                } else {
                                    // Create new bot message
                                    return [...prev, {
                                        id: `bot-${Date.now()}`,
                                        text: currentBotMessageRef.current,
                                        type: 'bot' as const,
                                        isStreaming: true
                                    }];
                                }
                            });
                        } else if (data.type === 'message_complete') {
                            // Stop streaming and finalize message
                            setMessages((prev) => {
                                return prev.map((msg) => 
                                    msg.type === 'bot' && msg.isStreaming
                                        ? { ...msg, isStreaming: false }
                                        : msg
                                );
                            });
                            currentBotMessageRef.current = '';
                            setIsLoading(false);
                            // Focus textarea after bot completes response
                            setTimeout(() => {
                                textareaRef.current?.focus();
                            }, 100);
                        } else if (data.type === 'tool_execution') {
                            // Handle tool execution if needed (can be ignored or logged)
                            console.log('Tool execution:', data);
                        }
                    } catch (error) {
                        console.error('Error parsing WebSocket message:', error);
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
                    setTimeout(connectWebSocket, 3000);
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
            
            // Prevent scroll propagation when at boundaries
            if ((isScrollingDown && scrollTop + clientHeight >= scrollHeight) ||
                (isScrollingUp && scrollTop <= 0)) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        messageList.addEventListener('wheel', handleWheel, { passive: false });
        return () => messageList.removeEventListener('wheel', handleWheel);
    }, [hasMessages]);

    const handleSendMessage = () => {
        const trimmed = currentMessage.trim();
        if (!trimmed || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
            if (!isConnected) {
                alert('WebSocket is not connected. Please wait...');
            }
            return;
        }

        // Add user message to UI
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            text: trimmed,
            type: 'user'
        };
        setMessages((prev) => [...prev, userMessage]);
        setCurrentMessage('');
        setIsLoading(true);
        currentBotMessageRef.current = '';

        // Send message via WebSocket
        try {
            wsRef.current.send(JSON.stringify({ message: trimmed }));
            // Focus textarea after sending message
            setTimeout(() => {
                textareaRef.current?.focus();
            }, 100);
        } catch (error) {
            console.error('Error sending message:', error);
            setIsLoading(false);
        }
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <section id="landing" className={styles.landing}>
            {/* HyperSpeed Background */}
            {/* <div className={styles.hyperspeedBackground} ref={bgRef}>
                <Hyperspeed 
                    effectOptions={{
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                            sticks: 0x03b3c3,
                        },
                        distortion: "turbulentDistortion",
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                    }}
                />
            </div> */}


            {/* CURVED LINES BACKGROUND (insert BEFORE landingContainer) */}
<div className={styles.curvedLines}>
  <div className={styles.line}></div>
  <div className={styles.line}></div>
  <div className={styles.line}></div>
  <div className={styles.line}></div>
</div>
            
            <div className={styles.landingContainer}>
                {/* <div className={styles.leftSection}>
                    <div className={styles.highlightSpot}>
                        <a 
                            href="https://www.upwork.com/agencies/1737467434828361728/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Top 1% recognized on UpWork
                        </a>
                    </div>
                    <div className={styles.pgagiLabel}>
                        <span>At <b>PG-AGI</b></span>
                        <div className={styles.pgagiUnderline}></div>
                    </div>
                    <h1 className={styles.mainHeading}>
                    We engineer purposeful  <span className={styles.coming}> AI products that scales </span> 
                    and create meaningful impact in the world
                    </h1>
                    <p className={styles.description}>
                    We engineer purposeful AI products that scales, and create meaningful impact in the world.
                    Creating for the world that’s <span className={styles.coming}> coming </span> 
                    Not the one passing.
                    </p>
                    <div className={styles.buttonRow}>
                        <button className={styles.ctaButton} onClick={() => {
                            // window.open("https://form.pgagi.in/", "_blank");
                             window.open("https://calendly.com/vivek-_ou/30min", "_blank");
                        }}>
                            Book Private Strategy Session
                        </button>
                        <button className={styles.outlineButton} onClick={handleScrollToTestimonials}>
                            View Our Work
                        </button>
                    </div>
                </div> */}

                <div className={styles.enterpriseBlock}>
    <h1 className={styles.enterpriseHeading}>
        Building AI Systems for Enterprises
    </h1>

    <p className={styles.enterpriseSubtext}>
        Top 1% Recognized on Upwork{' '}
        <Image 
            src="/images/up-arrow.png" 
            alt="Upwork Link" 
            width={16} 
            height={16}
            className={styles.upWorkLink}
            onClick={() => {
                window.open("https://www.upwork.com/agencies/1737467434828361728/", "_blank");
            }}
            style={{ cursor: 'pointer', display: 'inline-block', verticalAlign: 'middle' }}
        />
    </p>

    <div className={`${styles.chatContainer} ${hasMessages ? styles.chatContainerActive : ''}`}>
        {hasMessages && (
            <div className={styles.messageList} ref={messageListRef}>
                {messages.map((message) => (
                    <div 
                        key={message.id} 
                        className={`${styles.messageItem} ${message.type === 'user' ? styles.userMessage : styles.botMessage}`}
                    >
                        <p className={styles.messageBody}>
                            {message.text}
                            {message.isStreaming && (
                                <span className={styles.streamingCursor}>▋</span>
                            )}
                        </p>
                    </div>
                ))}
                {isLoading && messages[messages.length - 1]?.type === 'user' && (
                    <div className={`${styles.messageItem} ${styles.botMessage}`}>
                        <p className={styles.messageBody}>
                            <span className={styles.typingIndicator}>Thinking...</span>
                        </p>
                    </div>
                )}
            </div>
        )}
        <div className={styles.enterpriseInputWrapper}>
            <textarea 
                ref={textareaRef}
                placeholder="Tell us what you want to build."
                className={`${styles.enterpriseInput} ${hasMessages ? styles.enterpriseInputCompact : ''}`}
                value={currentMessage}
                onChange={(event) => setCurrentMessage(event.target.value)}
                onKeyDown={handleInputKeyDown}
                disabled={!isConnected || isLoading}
            />
            <Image 
                src="/images/send-button.png" 
                alt="Send" 
                width={28} 
                height={28}
                className={styles.enterpriseSubmitBtn}
                onClick={handleSendMessage}
                style={{ 
                    cursor: (isConnected && !isLoading) ? 'pointer' : 'not-allowed',
                    opacity: (isConnected && !isLoading) ? 1 : 0.5
                }}
            />
        </div>
        {!isConnected && (
            <div className={styles.connectionStatus}>
                Connecting to chat...
            </div>
        )}
    </div>
</div>

                <div className={styles.rightSection}>
                    {/* Placeholder SVG for animated face/skull */}
                   
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}
