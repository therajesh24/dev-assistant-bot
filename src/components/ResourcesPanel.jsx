import React, { useState } from 'react';
import { Box, Paper, Typography, Divider, Stack, Link, IconButton, Tooltip } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

const docs = [
  { icon: <MenuBookIcon sx={{ color: '#D72524', mr: 1 }} />, label: 'Project Overview', url: 'https://example.com/project-overview' },
  { icon: <DescriptionIcon sx={{ color: '#D72524', mr: 1 }} />, label: 'API Documentation', url: 'https://example.com/api-docs' },
  { icon: <CodeIcon sx={{ color: '#D72524', mr: 1 }} />, label: 'Coding Standards', url: 'https://example.com/coding-standards' },
  { icon: <StorageIcon sx={{ color: '#D72524', mr: 1 }} />, label: 'Database Schema', url: 'https://example.com/database-schema' },
];

const snippets = [
  { title: 'Docker Compose Up', code: 'docker-compose up -d' },
  { title: 'Run Database Migrations', code: 'npm run migrate' },
  { title: 'Start Development Server', code: 'npm run dev' },
  { title: 'Docker Compose Up', code: 'docker-compose up -d' },
  { title: 'Run Database Migrations', code: 'npm run migrate' },
  { title: 'Start Development Server', code: 'npm run dev' },
  { title: 'Docker Compose Up', code: 'docker-compose up -d' },
  { title: 'Run Database Migrations', code: 'npm run migrate' },
  { title: 'Start Development Server', code: 'npm run dev' },
];

const ResourcesPanel = () => {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = async (code, idx) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1000);
    } catch (e) {
      // fallback or error handling
    }
  };

  return (
    <Paper elevation={0} sx={{ height: '100%', overflow: 'scroll', borderRadius: 4, p: 3, minWidth: 320, maxWidth: 340, background: '#fff', boxShadow: '0 2px 8px rgba(44, 51, 73, 0.04)' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#232B5E', mb: 0 }}>
        Resources
      </Typography>
      <Typography variant="subtitle2" sx={{ color: '#8A8CA9', mb: 1, fontWeight: 600 }}>
        Documentation
      </Typography>
      <Stack spacing={2} sx={{ mb: 2 }}>
        {docs.map((doc, idx) => (
          <Link
            key={doc.label}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: 'flex', alignItems: 'center', color: '#232B5E', fontWeight: 600, fontSize: 17, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          >
            {doc.icon}
            {doc.label}
          </Link>
        ))}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle2" sx={{ color: '#8A8CA9', mb: 1, fontWeight: 600 }}>
        Common Snippets
      </Typography>
      <Stack spacing={2}>
        {snippets.map((snip, idx) => (
          <Box key={snip.title} sx={{ background: '#F7F8FA', borderRadius: 2, p: 2, position: 'relative' }}>
            <Typography variant="body2" sx={{ color: '#232B5E', fontWeight: 700, mb: 0.5 }}>
              {snip.title}
            </Typography>
            <Box component="pre" sx={{ background: '#232B5E', color: '#fff', borderRadius: 1, p: 1.2, fontSize: 16, fontFamily: 'monospace', m: 0, mt: 0.5, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>{snip.code}</Box>
              <Tooltip title={copiedIdx === idx ? 'Copied!' : 'Copy'} placement="top">
                <IconButton
                  size="small"
                  onClick={() => handleCopy(snip.code, idx)}
                  sx={{ ml: 1, color: '#fff', bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' } }}
                >
                  {copiedIdx === idx ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default ResourcesPanel; 