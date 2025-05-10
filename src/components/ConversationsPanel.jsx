import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { clearMessages } from '../store/messagesSlice';

const ConversationsPanel = () => {
  const dispatch = useDispatch();
  const handleNewConversation = () => {
    dispatch(clearMessages());
  };
  return (
    <Box sx={{ minWidth: 220, maxWidth: 260, p: 2, pt: 3, bgcolor: '#fff', borderRadius: 3, boxShadow: '0 2px 8px rgba(44, 51, 73, 0.04)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: '#232B5E',
          color: '#fff',
          borderRadius: 2,
          px: 3,
          py: 1.2,
          boxShadow: 'none',
          width: 'fit-content',
          mb: 2,
          '&:hover': { bgcolor: '#232B5E' },
        }}
        onClick={handleNewConversation}
      >
        New Conversation
      </Button>
    </Box>
  );
};

export default ConversationsPanel; 