// server.js
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

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Documentation
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my portfolio API',
    version: '1.0.0',
    endpoints: {
      education: {
        path: '/api/education',
        method: 'GET',
        description: 'Get education history'
      },
      achievements: {
        path: '/api/achievements',
        method: 'GET',
        description: 'Get achievements and awards'
      },
      experiences: {
        path: '/api/experiences',
        method: 'GET',
        description: 'Get professional experiences'
      },
      skills: {
        path: '/api/skills',
        method: 'GET',
        description: 'Get technical skills'
      },
      projects: {
        path: '/api/projects',
        method: 'GET',
        description: 'Get portfolio projects'
      }
    }
  });
});

// Education Endpoint
app.get('/api/education', (req, res) => {
  try {
    const data = educationHistory.map(edu => ({
      ...edu,
      showDetails: false // Initialize for frontend
    }));
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch education data' });
  }
});

// Achievements Endpoint
app.get('/api/achievements', (req, res) => {
  try {
    res.json({ success: true, count: achievements.length, data: achievements });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch achievements' });
  }
});

// Experiences Endpoint
app.get('/api/experiences', (req, res) => {
  try {
    const data = experiences.map(exp => ({
      ...exp,
      showResponsibilities: false // Initialize for frontend
    }));
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch experiences' });
  }
});

// Skills Endpoint
app.get('/api/skills', (req, res) => {
  try {
    res.json({ success: true, count: skills.length, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch skills' });
  }
});

// Projects Endpoint
app.get('/api/projects', (req, res) => {
  try {
    const { category } = req.query;
    let data = projects;
    
    if (category) {
      data = projects.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// Error Handling
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📚 API Docs available at http://localhost:${PORT}/api`);
});