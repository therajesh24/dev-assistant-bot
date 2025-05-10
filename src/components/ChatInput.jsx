import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSend(value);
      setValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    // Shift+Enter will allow new line by default in multiline TextField
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          border: '2px solid #E3E6F0',
          borderRadius: 3,
          boxShadow: '0 2px 8px rgba(44, 51, 73, 0.04)',
          p: 0,
          mb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
          <TextField
            fullWidth
            multiline
            minRows={1}
            maxRows={4}
            placeholder="Type your message here..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: 22,
                py: 1.5,
                background: 'transparent',
                borderRadius: 2,
              },
            }}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            inputProps={{ style: { fontSize: 20 } }}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            sx={{
              ml: 2,
              bgcolor: '#232B5E',
              color: '#fff',
              width: 48,
              height: 48,
              borderRadius: 2,
              '&:hover': { bgcolor: '#232B5E' },
            }}
          >
            <SendIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, pb: 0.5 }}>
        <Typography variant="body2" sx={{ color: '#8A8CA9' }}>
          Press Enter to send, Shift+Enter for new line
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatInput; 