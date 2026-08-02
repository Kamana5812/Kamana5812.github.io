const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allows requests from GitHub Pages, localhost, & custom domains
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Kamana Portfolio Express API</title></head>
      <body style="font-family: monospace; background: #0a0a0c; color: #a3e635; padding: 2rem;">
        <h2>⚡ Kamana Agrawal Portfolio Express API</h2>
        <p style="color: #fff;">Server status: <strong>ACTIVE</strong></p>
        <p style="color: #888;">Live API Base URL: <code>https://kamana-agrawal.me/api/</code> or <code>http://localhost:${PORT}/api/</code></p>
      </body>
    </html>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Kamana Portfolio Express Server running on port ${PORT}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
  console.log(`==================================================`);
});
