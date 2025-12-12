import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { askTravelAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatInterfaceProps {
  location: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ location }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: `Hi! I'm your Dutch travel assistant. We are currently checking out ${location}. Ask me anything about transportation, food, or history!` }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await askTravelAssistant(input, location);
    
    const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-white rounded-t-3xl shadow-inner mt-4">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-terracotta text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex justify-start">
             <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about this location..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className={`ml-2 p-2 rounded-full ${loading ? 'bg-gray-300' : 'bg-terracotta'} text-white transition-colors`}
          >
            <Icons.Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};