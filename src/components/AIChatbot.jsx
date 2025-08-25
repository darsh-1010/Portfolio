import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { chatbotConfig, generateSmartResponse, generateGroqResponse, quickActions, conversationStarters } from '../config/chatbot';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: chatbotConfig.welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced AI response logic with Groq integration
  const generateAIResponse = async (userMessage) => {
    setIsTyping(true);
    
    try {
      // Try Groq API first if enabled and API key is available
      if (chatbotConfig.aiService === 'groq' && chatbotConfig.groqApiKey) {
        console.log('Attempting to use Groq API...');
        const groqResponse = await generateGroqResponse(userMessage);
        setIsTyping(false);
        return groqResponse;
      } else {
        console.log('Groq API not available, using local system...');
      }
    } catch (error) {
      console.log('Groq API failed, falling back to local system...', error.message);
      // Continue to fallback
    }
    
    // Fallback to local smart response system
    const response = generateSmartResponse(userMessage);
    const responseLength = response.length;
    
    // Calculate typing delay: longer responses take more time to "type"
    const baseDelay = 500; // Base delay in ms
    const charDelay = 15; // Additional delay per character
    const totalDelay = Math.min(baseDelay + (responseLength * charDelay), 3000); // Max 3 seconds
    
    // Simulate realistic typing delay
    await new Promise(resolve => setTimeout(resolve, totalDelay));
    
    setIsTyping(false);
    return response;
  };

  const handleSendMessage = async (customMessage = null) => {
    const messageToSend = customMessage || inputMessage;
    if (!messageToSend.trim()) return;

    // Check message limit
    if (messages.length >= chatbotConfig.maxMessages) {
      setMessages(prev => prev.slice(-chatbotConfig.maxMessages + 2));
    }

    const userMessage = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!customMessage) setInputMessage('');

    // Generate AI response
    const aiResponse = await generateAIResponse(messageToSend);
    
    const botMessage = {
      id: Date.now() + 1,
      text: aiResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    
    // Debug: Log configuration when chat opens
    if (!isOpen) {
      console.log('🔍 Chatbot Configuration:', {
        aiService: chatbotConfig.aiService,
        groqApiKey: chatbotConfig.groqApiKey ? '✅ Set' : '❌ Not Set',
        groqModel: chatbotConfig.groqModel,
        maxTokens: chatbotConfig.maxTokens
      });
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleChat}
          className="bg-[#915EFF] hover:bg-[#7c4dff] text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-black-100 rounded-2xl shadow-2xl border border-[#915EFF]/20 z-40 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-[#915EFF] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#915EFF] font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Darsh Shah's AI Assistant</h3>
                    <p className="text-xs opacity-90">Ask me anything!</p>
                  </div>
                </div>
                <button
                  onClick={() => setMessages([{
                    id: Date.now(),
                    text: chatbotConfig.welcomeMessage,
                    sender: 'bot',
                    timestamp: new Date()
                  }])}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  title="Clear chat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto h-64">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-[#915EFF] text-white'
                          : 'bg-tertiary text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Quick Action Buttons - Show only when there are few messages */}
                {messages.length <= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-2 justify-start"
                  >
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(action)}
                        className="bg-[#915EFF]/20 hover:bg-[#915EFF]/30 text-[#915EFF] px-3 py-2 rounded-lg text-xs transition-colors duration-200 border border-[#915EFF]/30"
                      >
                        {action}
                      </button>
                    ))}
                  </motion.div>
                )}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-tertiary text-white p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-[#915EFF]/20">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Darsh Shah..."
                  className="flex-1 bg-tertiary text-white px-4 py-2 rounded-lg outline-none border-none text-sm placeholder:text-secondary"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-[#915EFF] hover:bg-[#7c4dff] disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
