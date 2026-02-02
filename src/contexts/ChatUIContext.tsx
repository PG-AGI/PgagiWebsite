"use client";

import React, { createContext, useContext, useState } from "react";

interface ChatUIContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const ChatUIContext = createContext<ChatUIContextType | null>(null);

export const ChatUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((v) => !v);

  return (
    <ChatUIContext.Provider
      value={{ isOpen, openChat, closeChat, toggleChat }}
    >
      {children}
    </ChatUIContext.Provider>
  );
};

export const useChatUI = () => {
  const ctx = useContext(ChatUIContext);
  if (!ctx) {
    throw new Error("useChatUI must be used inside ChatUIProvider");
  }
  return ctx;
};
