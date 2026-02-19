# URL Shortener 🔗

A modern, full-stack URL shortening service built with React, Node.js, Express, and MongoDB. Transform long URLs into short, shareable links with analytics tracking.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Node](https://img.shields.io/badge/Node.js-Express-green.svg)

## ✨ Features

- 🔗 **URL Shortening** - Convert long URLs into compact, shareable links
- 👤 **User Authentication** - Secure signup/login with JWT
- 📊 **Analytics** - Track clicks and visit history for each short URL
- 🎨 **Modern UI** - Beautiful, responsive interface with Tailwind CSS v4
- 🔒 **Secure** - Password hashing with bcrypt, HTTP-only cookies
- ⚡ **Fast** - Built with Vite for lightning-fast development
- 📱 **Responsive** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - Modern UI library
- **React Router 7.13** - Client-side routing
- **Tailwind CSS 4.2** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vite 7.3** - Build tool and dev server
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Token-based authentication
- **Bcrypt** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Nanoid** - Unique ID generator

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (running locally on port 27017 or MongoDB Atlas URI)
- **npm** or **yarn**

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Configure Environment

#### Backend Configuration
Create a `.env` file in the `server` directory (optional):
```env
MONGODB_URI=mongodb://localhost:27017/url-shortner
PORT=4001
JWT_SECRET=your_secret_key_here
```

> **Note:** If you don't create a `.env` file, the app will use default values.

### 5. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# On Windows (if installed as service)
net start MongoDB

# On Mac/Linux
sudo systemctl start mongod
```

## 🎯 Running the Application

### Development Mode

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm start
```
The backend will run on `http://localhost:4001`

**Terminal 2 - Start Frontend Dev Server:**
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Build

**Build Frontend:**
```bash
cd client
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## 📖 Usage

### 1. **Register an Account**
- Navigate to `http://localhost:5173/register`
- Fill in your name, email, and password
- Click "Register"

### 2. **Login**
- Go to `http://localhost:5173/login`
- Enter your credentials
- Click "Login"

### 3. **Create Short URLs**
- On the home page, paste your long URL
- Click "Shorten"
- Your short URL will appear in the table below
- Click on the short ID to test the redirect

### 4. **View Analytics**
- See the number of clicks for each URL
- Track visit history

## 🗂️ Project Structure

```
URL_Shortner/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── assets/        # Images, icons, etc.
│   │   ├── component/     # React components
│   │   │   ├── FormUrl.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/       # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── UrlContext.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/      # API services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Backend Node.js application
│   ├── controller/        # Request handlers
│   │   ├── url.js
│   │   └── user.js
│   ├── middlewares/       # Custom middleware
│   │   └── auth.js
│   ├── models/           # Mongoose schemas
│   │   ├── url.js
│   │   └── user.js
│   ├── routes/           # API routes
│   │   ├── StaticRouter.js
│   │   ├── url.js
│   │   └── user.js
│   ├── service/          # Business logic
│   │   └── auth.js
│   ├── connect.js        # Database connection
│   ├── index.js          # Entry point
│   └── package.json
│
├── views/                # EJS templates (optional)
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/user` | Register new user | No |
| POST | `/user/login` | Login user | No |

### URL Operations
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/url` | Create short URL | Yes |
| GET | `/` | Get all user URLs | Yes |
| GET | `/url/analytics/:shortId` | Get URL analytics | Yes |
| GET | `/:shortId` | Redirect to original URL | No |

### Web Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Home page (EJS) | Yes |
| GET | `/login` | Login page (EJS) | No |
| GET | `/signup` | Signup page (EJS) | No |
| GET | `/admin/urls` | Admin URLs (EJS) | Yes (Admin) |

## 🔐 Authentication Flow

1. User registers/logs in
2. Server generates JWT token
3. Token stored in:
   - HTTP-only cookie (server-side rendering)
   - localStorage (React app)
4. Token sent with requests via:
   - Cookie (automatic)
   - Authorization header (Bearer token)
5. Middleware validates token and attaches user to request

## 🎨 Features in Detail

### URL Shortening
- Uses Nanoid to generate unique 8-character IDs
- Validates URL format
- Associates URLs with user accounts
- Tracks creation timestamp

### Analytics
- Records timestamp for each visit
- Displays total click count
- Provides detailed visit history
- Real-time updates

### Security
- Password hashing with bcrypt (12 rounds)
- JWT token authentication
- HTTP-only cookies
- CORS protection
- Helmet.js security headers
- Protected routes

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running
```bash
net start MongoDB  # Windows
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # Mac
```

**Port Already in Use:**
```
Error: listen EADDRINUSE: address already in use :::4001
```
**Solution:** Kill the process using the port or change the port in `server/index.js`

**CORS Error:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```
**Solution:** Make sure both servers are running and CORS is configured correctly in `server/index.js`

## 📝 Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server
```bash
npm start        # Start server with nodemon
```





---


