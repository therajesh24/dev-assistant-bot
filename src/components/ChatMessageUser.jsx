import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[1][0]).toUpperCase();
};

const ChatMessageUser = ({ message, time, name }) => (
  <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={1} sx={{ mb: 2 }}>
    <Box sx={{ maxWidth: '70%', bgcolor: '#232B5E', color: '#fff', px: 2, py: 1.5, borderRadius: 3, borderTopRightRadius: 0, wordBreak: 'break-word' }}>
      <Typography variant="body1" sx={{ fontSize: 16 }}>{message}</Typography>
      {time && <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>{time}</Typography>}
    </Box>
    <Box sx={{ width: 32, height: 32, bgcolor: '#F0AB00', color: '#232B5E', fontWeight: 700, fontSize: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {getInitials(name || 'User')}
    </Box>
  </Stack>
);

export default ChatMessageUser; 