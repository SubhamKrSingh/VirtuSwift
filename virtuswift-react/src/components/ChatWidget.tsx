import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    const inputField = document.querySelector('.chat-input-field') as HTMLInputElement;
    if (inputField && inputField.value.trim()) {
      const message = inputField.value.trim();
      // Placeholder for sending message and receiving response
      addMessage('user', message);
      inputField.value = '';
      // Simulate bot response
      setTimeout(() => {
        addMessage('bot', 'Thank you for your message. Our team will get back to you shortly.');
      }, 1000);
    }
  };

  const addMessage = (sender: 'user' | 'bot', text: string) => {
    const messagesContainer = document.querySelector('.chat-widget-messages');
    if (messagesContainer) {
      const messageElement = document.createElement('div');
      messageElement.className = `chat-message ${sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}`;
      messageElement.innerText = text;
      messagesContainer.appendChild(messageElement);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add initial bot message on open or load
    if (isOpen && document.querySelectorAll('.chat-message').length === 0) {
       setTimeout(() => {
        addMessage('bot', 'Hello! Welcome to VirtuSwift. How can I help you today?');
      }, 500);
    }
  }, [isOpen]);



  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {/* Chat Button */}
      <button
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-orange-600 flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none"
        onClick={toggleChat}
        aria-label="Open chat widget"
      >
        <FontAwesomeIcon icon={faCommentDots} size="xl" className="text-white" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white py-3 px-4 flex justify-between items-center">
            <span className="font-semibold text-lg">VirtuSwift Assistant</span>
            <button onClick={toggleChat} className="text-white text-xl focus:outline-none" aria-label="Close chat widget">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-3">
             {/* Messages will be added here by JavaScript */}
             <div ref={messagesEndRef} /> { /* Scroll helper */ }
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 flex items-center">
            <input
              type="text"
              className="chat-input-field flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type your message here..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            <button
              className="bg-orange-600 text-white rounded-full w-9 h-9 flex items-center justify-center ml-2 focus:outline-none hover:bg-orange-700 transition-colors duration-200"
              onClick={sendMessage}
              aria-label="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 