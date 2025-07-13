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

// Enhanced CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'https://interactive-cv-brawidya-production.up.railway.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("welcome to backend")
  });


// API Documentation
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my portfolio API',
    version: '1.0.0',
    endpoints: {
      education: '/api/education',
      achievements: '/api/achievements',
      experiences: '/api/experiences',
      skills: '/api/skills',
      projects: '/api/projects'
    }
  });
});

// Enhanced API Endpoints with better error handling
const createApiEndpoint = (data, resourceName) => {
  return (req, res) => {
    try {
      const processedData = data.map(item => ({
        ...item,
        // Add any necessary transformations here
      }));
      
      res.json({ 
        success: true, 
        count: processedData.length, 
        data: processedData 
      });
    } catch (error) {
      console.error(`Error fetching ${resourceName}:`, error);
      res.status(500).json({ 
        success: false, 
        error: `Failed to fetch ${resourceName}`,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  };
};

app.get('/api/education', createApiEndpoint(educationHistory, 'education'));
app.get('/api/achievements', createApiEndpoint(achievements, 'achievements'));
app.get('/api/experiences', createApiEndpoint(experiences, 'experiences'));
app.get('/api/skills', createApiEndpoint(skills, 'skills'));
app.get('/api/projects', createApiEndpoint(projects, 'projects'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Enhanced error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint not found' 
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server with better logging
app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/api`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health\n`);
});

module.exports = app;