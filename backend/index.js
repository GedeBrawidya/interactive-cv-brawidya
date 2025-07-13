const express = require('express');
const cors = require('cors');
const path = require('path');
const { 
  educationHistory,
  achievements,
  experiences,
  skills,
  projects
} = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'https://interactive-cv-brawidya.vercel.app'],
  credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Documentation
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my portfolio API',
    version: '1.0.0',
    endpoints: {
      education: {
        path: '/api/education',
        description: 'Get education history',
        exampleResponse: {
          data: educationHistory.slice(0, 1) // Contoh 1 item
        }
      },
      // ... tambahkan untuk endpoint lainnya
    }
  });
});

// Enhanced API Endpoints
const createApiEndpoint = (data, resourceName) => {
  return (req, res) => {
    try {
      // Tambahkan pagination atau filtering sederhana jika perlu
      const limit = parseInt(req.query.limit) || data.length;
      const offset = parseInt(req.query.offset) || 0;
      
      const processedData = data
        .slice(offset, offset + limit)
        .map(item => ({
          ...item,
          // Transformasi data jika diperlukan
        }));
      
      res.json({ 
        status: 'success',
        data: processedData,
        meta: {
          total: data.length,
          returned: processedData.length,
          offset,
          limit
        }
      });
    } catch (error) {
      console.error(`Error fetching ${resourceName}:`, error);
      res.status(500).json({ 
        status: 'error',
        message: `Failed to fetch ${resourceName}`,
        ...(process.env.NODE_ENV === 'development' && { 
          error: error.message,
          stack: error.stack 
        })
      });
    }
  };
};

// Endpoint API
app.get('/api/education', createApiEndpoint(educationHistory, 'education'));
app.get('/api/achievements', createApiEndpoint(achievements, 'achievements'));
app.get('/api/experiences', createApiEndpoint(experiences, 'experiences')); // Perhatikan typo di sini
app.get('/api/skills', createApiEndpoint(skills, 'skills'));
app.get('/api/projects', createApiEndpoint(projects, 'projects'));

// Health check endpoint yang lebih lengkap
app.get('/api/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    database: 'OK', // Jika ada koneksi DB bisa ditambahkan status
    memoryUsage: process.memoryUsage()
  };
  res.json(healthcheck);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    status: 'error',
    message: 'Endpoint not found',
    suggestion: 'Check /api for available endpoints' 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ 
    status: 'error',
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { 
      error: err.message,
      stack: err.stack 
    })
  });
});

// Server startup
const server = app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/api`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app;