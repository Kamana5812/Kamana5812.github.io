# Node.js & Express.js Backend Server — Kamana Portfolio

This is the official Node.js & Express.js backend server for Kamana Agrawal's portfolio website.

## 🚀 Features
- **REST APIs**: `GET /api/portfolio`, `POST /api/contact`, `POST /api/portfolio/update`.
- **JWT Authentication**: Secure admin login (`POST /api/auth/login`).
- **CORS Enabled**: Accepts requests from `https://kamana-agrawal.me` and `http://localhost:3000`.
- **Contact Inbox**: Saves contact form inquiries directly to `contactInquiries` list.

---

## 🛠️ How to Run Locally

1. Open terminal inside the `server` directory:
   ```bash
   cd server
   npm install
   ```

2. Start the Express server:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000`.

---

## 🌐 1-Click Free Cloud Deployment on Render.com

1. Push this repository to GitHub.
2. Sign up / Log in to **[Render.com](https://render.com)** (100% Free Tier).
3. Click **New +** -> **Web Service**.
4. Select your GitHub repository (`Kamana5812/kamana-portfolio` or `Kamana5812/Kamana5812.github.io`).
5. Configure the Web Service settings:
   - **Name:** `kamana-portfolio-api`
   - **Root Directory:** `server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click **Create Web Service**.

Your live API URL will be: **`https://kamana-portfolio-api.onrender.com`**!
