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

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Root API Info
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to my portfolio API',
    endpoints: {
      education: '/api/education',
      achievements: '/api/achievements',
      experiences: '/api/experiences',
      skills: '/api/skills',
      projects: '/api/projects'
    }
  });
});

// Endpoints
app.get('/api/education', (req, res) => {
  res.json({ success: true, count: educationHistory.length, data: educationHistory });
});

app.get('/api/achievements', (req, res) => {
  res.json({ success: true, count: achievements.length, data: achievements });
});

app.get('/api/experiences', (req, res) => {
  res.json({ success: true, count: experiences.length, data: experiences });
});

app.get('/api/skills', (req, res) => {
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});
  res.json({ success: true, count: skills.length, data: grouped });
});

app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  let filtered = projects;
  if (category) {
    filtered = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ success: true, count: filtered.length, data: filtered });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Something broke!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/api`);
});
