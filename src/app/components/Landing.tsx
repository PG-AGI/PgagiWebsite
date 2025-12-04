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
    const [conversationStarted, setConversationStarted] = useState(false);
    const { scrollTo } = useSmoothScrollTo();
    const bgRef = useRef<HTMLDivElement>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const currentBotMessageRef = useRef<string>('');
    const messagesRef = useRef<Message[]>([]);
    const isProcessingRef = useRef<boolean>(false);
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
                // 1) Get or create session_id and store in localStorage
                let sessionId = typeof window !== 'undefined' ? localStorage.getItem('session_id') || '' : '';
                if (!sessionId) {
                    const resp = await fetch('http://69.197.164.183:8001/api/chat/generate_session');
                    const json = await resp.json();
                    sessionId = json.session_id;
                    if (sessionId && typeof window !== 'undefined') {
                        localStorage.setItem('session_id', sessionId);
                    }
                }

                // 2) Connect WebSocket using the session_id
                const ws = new WebSocket(`ws://69.197.164.183:8001/api/chat/${sessionId}`);

                ws.onopen = () => {
                    console.log('WebSocket connected');
                    setIsConnected(true);
                };

                ws.onmessage = async (event) => {
                    try {
                        // Accept only the new plain-text format and render it directly
                        const raw = event.data;
                        const text = typeof raw === 'string' ? raw : await (raw as Blob).text();

                        // Ignore heartbeat strings
                        if (text === 'ping' || text === 'pong') return;

                        const botMsg: Message = {
                            id: `bot-${Date.now()}-${Math.random()}`,
                            text: text.trim(),
                            type: 'bot',
                            isStreaming: false
                        };

                        setMessages((prev) => {
                            const updated = [...prev, botMsg];
                            messagesRef.current = updated;
                            return updated;
                        });

                        // Reset flags so UI doesn't stay in loading state
                        setIsLoading(false);
                        isProcessingRef.current = false;

                        // Focus input for next message
                        setTimeout(() => {
                            textareaRef.current?.focus();
                        }, 100);
                    } catch (error) {
                        console.error('Error handling WebSocket message:', error);
                        isProcessingRef.current = false;
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





    const handleSendMessage = () => {
        const trimmed = currentMessage.trim();
        if (!trimmed || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN || isProcessingRef.current) {
            if (!isConnected) {
                alert('WebSocket is not connected. Please wait...');
            }
            return;
        }

        // Set processing flag to prevent concurrent operations
        isProcessingRef.current = true;

        // Mark conversation as started
        setConversationStarted(true);

        // Add user message to UI
        const userMessage: Message = {
            id: `user-${Date.now()}-${Math.random()}`,
            text: trimmed,
            type: 'user'
        };
        
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages, userMessage];
            messagesRef.current = updatedMessages;
            return updatedMessages;
        });
        
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
            isProcessingRef.current = false;
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

                    <div className={`${styles.chatContainer} ${conversationStarted ? styles.chatContainerActive : ''}`}>
                        {conversationStarted && (
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
                                className={`${styles.enterpriseInput} ${conversationStarted ? styles.enterpriseInputCompact : ''}`}
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
