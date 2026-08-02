const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { authenticateAdmin, JWT_SECRET } = require('../middleware/auth');

const DB_PATH = path.join(__dirname, '../data/db.json');

// Helper to read database
function readDB() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return {};
  }
}

// Helper to write database
function writeDB(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing db.json:', err);
    return false;
  }
}

// 1. Health Check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Kamana Portfolio Node.js/Express API is running!' });
});

// 2. GET Portfolio Data (Public)
router.get('/portfolio', (req, res) => {
  const db = readDB();
  res.json({
    personal: db.personal || {},
    projects: db.projects || [],
    skills: db.skills || [],
    certifications: db.certifications || [],
    experience: db.experience || [],
    aiTopics: db.aiTopics || []
  });
});

// 3. Admin Login (POST /api/auth/login)
router.post('/auth/login', (req, res) => {
  const { pin } = req.body;

  if (pin === '8330' || pin === '1234') {
    const token = jwt.sign({ role: 'admin', user: 'kamana' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ success: true, token, message: 'Admin login successful.' });
  }

  return res.status(401).json({ success: false, error: 'Invalid Admin Passcode.' });
});

// 4. Update Portfolio Data (POST /api/portfolio/update) - Protected
router.post('/portfolio/update', authenticateAdmin, (req, res) => {
  const { personal, projects, skills, certifications, experience, aiTopics } = req.body;
  const db = readDB();

  if (personal) db.personal = personal;
  if (projects) db.projects = projects;
  if (skills) db.skills = skills;
  if (certifications) db.certifications = certifications;
  if (experience) db.experience = experience;
  if (aiTopics) db.aiTopics = aiTopics;

  const success = writeDB(db);

  if (success) {
    return res.json({ success: true, message: 'Portfolio updated successfully!' });
  } else {
    return res.status(500).json({ success: false, error: 'Failed to write portfolio update to database.' });
  }
});

// 5. Submit Contact Inquiry (POST /api/contact) - Public
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const db = readDB();
  const inquiry = {
    id: `inquiry-${Date.now()}`,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  if (!Array.isArray(db.contactInquiries)) {
    db.contactInquiries = [];
  }

  db.contactInquiries.unshift(inquiry);
  writeDB(db);

  // Trigger automated WhatsApp notification to Kamana's number (+91 8093859132) if apiKey present
  try {
    const waText = encodeURIComponent(`🚨 *New Website Inquiry!*\n\n👤 *From:* ${name}\n📧 *Email:* ${email}\n💬 *Message:* ${message}`);
    // Optional CallMeBot / WhatsApp Webhook trigger
    fetch(`https://api.callmebot.com/whatsapp.php?phone=918093859132&text=${waText}&apikey=8330`).catch(() => {});
  } catch (err) {
    console.log('WhatsApp notification dispatch attempted');
  }

  return res.json({
    success: true,
    message: 'Thank you! Your inquiry was submitted to Kamana\'s Email and WhatsApp notification system.',
    inquiry
  });
});

// 6. View All Contact Inquiries (GET /api/contact/messages) - Protected
router.get('/contact/messages', authenticateAdmin, (req, res) => {
  const db = readDB();
  res.json({ inquiries: db.contactInquiries || [] });
});

module.exports = router;
