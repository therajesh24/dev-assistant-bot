import React from 'react';
import { Box, Paper } from '@mui/material';

const WelcomeCard = ({ title, description, buttons }) => (
  <Paper elevation={0} sx={{ borderRadius: 3, borderLeft: '6px solid #F0AB00', p: 3, mb: 3, background: '#fff', boxShadow: '0 2px 8px rgba(44, 51, 73, 0.04)' }}>
    <Box sx={{ mb: 2 }}>
      <Box component="span" sx={{ fontWeight: 700, fontSize: 24, color: '#232B5E', display: 'block', mb: 1 }}>{title}</Box>
      <Box sx={{ color: '#5B5B7B', fontSize: 20 }}>{description}</Box>
    </Box>
    {buttons && buttons.length > 0 && (
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {buttons.map((btn, idx) => (
          <Box
            key={btn.label}
            component="button"
            style={{
              fontWeight: 600,
              fontSize: 18,
              borderRadius: 8,
              padding: '10px 24px',
              border: btn.variant === 'outlined' ? '2px solid #232B5E' : 'none',
              background: btn.variant === 'contained' ? '#232B5E' : '#fff',
              color: btn.variant === 'contained' ? '#fff' : '#232B5E',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {btn.label}
          </Box>
        ))}
      </Box>
    )}
  </Paper>
);

export default WelcomeCard; 