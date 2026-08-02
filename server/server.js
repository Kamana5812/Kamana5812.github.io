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
    <!DOCTYPE html>
    <html>
      <head>
        <title>Kamana Portfolio Express API</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0c; color: #a3e635; padding: 3rem; max-width: 600px; margin: 0 auto; }
          h2 { color: #ffffff; font-size: 1.5rem; margin-bottom: 0.5rem; }
          p { color: #a1a1aa; font-family: monospace; font-size: 0.9rem; line-height: 1.6; }
          a { color: #a3e635; text-decoration: none; font-weight: 600; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; background: rgba(163, 230, 53, 0.15); color: #a3e635; border: 1px solid #a3e635; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 1rem; }
        </style>
      </head>
      <body>
        <div class="badge">● SERVER LIVE &amp; ONLINE</div>
        <h2>⚡ Kamana Agrawal Portfolio API</h2>
        <p>Your Node.js &amp; Express REST API server is running on Render cloud.</p>
        <hr style="border: none; border-top: 1px solid #27272a; margin: 1.5rem 0;" />
        <p>• Health Endpoint: <a href="/api/health">/api/health</a></p>
        <p>• Portfolio Data API: <a href="/api/portfolio">/api/portfolio</a></p>
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
