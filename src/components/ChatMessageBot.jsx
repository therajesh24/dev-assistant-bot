import React from 'react';
import { Box, Avatar, Typography, Stack } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const ChatMessageBot = ({ message, time }) => (
  <Stack direction="row" alignItems="flex-end" spacing={1} sx={{ mb: 2 }}>
    <Avatar sx={{ bgcolor: '#F0AB00', width: 32, height: 32 }}>
      <SmartToyIcon sx={{ color: '#fff', fontSize: 20 }} />
    </Avatar>
    <Box sx={{ maxWidth: '70%', bgcolor: '#fff', color: '#232B5E', px: 2, py: 1.5, borderRadius: 3, borderTopLeftRadius: 0, boxShadow: '0 1px 4px rgba(44,51,73,0.04)', wordBreak: 'break-word' }}>
      <Typography variant="body1" sx={{ fontSize: 16 }}>{message}</Typography>
      {time && <Typography variant="caption" sx={{ color: '#5B5B7B' }}>{time}</Typography>}
    </Box>
  </Stack>
);

export default ChatMessageBot; 