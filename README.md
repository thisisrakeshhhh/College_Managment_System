# SXIT PORTAL - College Management System

A premium MERN stack application for managing college operations, student records, faculty assigned classes, and academic performance.

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v16+)
- MongoDB Atlas Account
- NPM or Yarn

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `env_template`:
   ```bash
   # Add your MongoDB connection string in .env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **Frontend:** React.js, Vite, Vanilla CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Styling:** Premium Custom CSS with animated reveal triggers

## 📂 Project Structure
- `/src` - React frontend components and pages
- `/server` - Node.js/Express backend with Mongoose models
- `/public` - Static assets and legacy HTML files

## 🛡 Security Note
- The `.env` file is ignored by Git to protect your database credentials.
- Always use `env_template` as a reference for required environment variables.
