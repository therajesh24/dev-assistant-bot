import React from 'react';
import { Toolbar, Typography, Avatar, Box, Stack, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <Box color="default" elevation={0} sx={{ p: 1, borderBottom: 1, borderColor: 'divider', background: '#fff' }}>
      <Toolbar sx={{ maxWidth: 1600, margin: '0 auto', justifyContent: 'space-between', px: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: '#FFB300', width: 56, height: 56 }}>
            <SchoolIcon sx={{ fontSize: 36 }} />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#23235B', lineHeight: 1, mb: 0.5 }}>
              Developer Assistant
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 10, height: 10, bgcolor: '#44b700', borderRadius: '50%', display: 'inline-block' }} />
                <Typography variant="body2" color="text.secondary">
                  Online
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">• Last updated May 8, 2025</Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center">
          <IconButton size="large" sx={{ color: '#5B5B7B' }}>
            <AccessibilityNewIcon fontSize="medium" />
          </IconButton>
          <IconButton size="large" sx={{ color: '#5B5B7B' }}>
            <VolumeUpIcon fontSize="medium" />
          </IconButton>
          <IconButton size="large" sx={{ color: '#5B5B7B' }}>
            <SettingsIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Header; 