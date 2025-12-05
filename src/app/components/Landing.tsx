'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from "./landing.module.scss";
import BookCallModal from './base/bookCallModela';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';
// import Hyperspeed from './ui/Hyperspeed/Hyperspeed';
import Image from 'next/image';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';

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

const shouldAutoResetChat = (text: string) => {
    const normalized = text.toLowerCase();
    return (
        normalized.includes("I appreciate your time, but it seems like this might not be the best moment to discuss your project. Feel free to reach out when you're ready to focus on your requirements. Have a great day! :wave:") ||
        normalized.includes("Your project details have been successfully captured! Our expert team at PGAGI has received your requirements  ")
    );
};

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
        const connectWebSocket = async () => {
            try {
                // Check localStorage for existing session
                let sessionId = localStorage.getItem('session_id');
                
                // If no session, fetch new one from backend
                if (!sessionId) {
                    const response = await fetch('http://69.197.164.183:8001/api/chat/generate_session');
                    const data = await response.json();
                    sessionId = data.session_id;
                    if (sessionId) {
                        localStorage.setItem('session_id', sessionId);
                    }
                }

                // Connect WebSocket with session ID
                const ws = new WebSocket(`ws://69.197.164.183:8001/api/chat/${sessionId || '123'}`);

                ws.onopen = () => {
                    console.log('WebSocket connected');
                    setIsConnected(true);
                };

                ws.onmessage = async (event) => {
                    try {
                        // Convert Blob to text if needed
                        const text = typeof event.data === 'string'
                            ? event.data
                            : await (event.data as Blob).text();

                        // Ignore heartbeat messages
                        if (text === 'ping' || text === 'pong') return;
                        if (!text.trim()) return;

                        // Add bot message instantly (no animation)
                        setMessages(prev => [...prev, {
                            id: `bot-${Date.now()}`,
                            text: text,
                            type: 'bot',
                            isStreaming: false
                        }]);

                        setIsLoading(false);

                        // Check if auto-reset is needed
                        if (shouldAutoResetChat(text)) {
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





    const handleResetChat = () => {
        setMessages([]);
        setCurrentMessage('');
        currentBotMessageRef.current = '';
        setIsLoading(false);
    };

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
                    <h1 className={`${styles.enterpriseHeading} ${styles.enterpriseHeadingAnimated}`}>
                        <LayoutTextFlip
                            text="Building AI Systems for"
                            words={["Enterprises", "Start Ups", "Businesses"]}
                        />
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
                                            <span className={styles.typingDots}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
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
