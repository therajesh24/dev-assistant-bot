import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../store/messagesSlice';
import ChatMessageUser from './ChatMessageUser';
import ChatMessageBot from './ChatMessageBot';
import ChatInput from './ChatInput';
import api from '../services/api';
import WelcomeCard from './WelcomeCard';

const Chatbot = () => {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (msg) => {
    dispatch(addMessage({ type: 'user', message: msg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), name: 'User' }));
    setLoading(true);
    try {
      const response = await api.post('/api/query', {
        query: msg,
        filters: null
      });
      dispatch(addMessage({ type: 'bot', message: response.data.response }));
    } catch (error) {
      dispatch(addMessage({ type: 'bot', message: 'Sorry, there was an error. Please try again.' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ height: '100%', borderRadius: 4, width: '100%', maxWidth: 900, flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Chat messages area: scrollable */}
      <Box
        ref={chatRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: 3,
          pt: 3,
          pb: 1,
          background: '#F9F9FB',
          minHeight: 0,
        }}
      >
        {messages.map((msg, idx) => {
          if (msg.type === 'welcome') {
            return <WelcomeCard key={idx} title={msg.title} description={msg.description} buttons={msg.buttons} />;
          }
          if (msg.type === 'user') {
            return <ChatMessageUser key={idx} message={msg.message} time={msg.time} name={msg.name} />;
          }
          if (msg.type === 'bot') {
            if (msg.code) {
              return (
                <ChatMessageBot key={idx} message={<Box component="pre" sx={{ bgcolor: '#232B5E', color: '#fff', p: 2, borderRadius: 2, fontFamily: 'monospace', fontSize: 15, mb: 0 }}>{msg.message}</Box>} time={msg.time} />
              );
            }
            return <ChatMessageBot key={idx} message={msg.message} time={msg.time} />;
          }
          return null;
        })}
      </Box>
      {/* Chat input area: not scrollable */}
      <Box sx={{ p: 2, background: '#fff' }}>
        <ChatInput onSend={handleSend} disabled={loading} />
      </Box>
    </Box>
  );
};

export default Chatbot; 