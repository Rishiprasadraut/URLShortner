# URL Shortener

A full-stack URL shortening service built with Node.js, Express, MongoDB, and EJS. This application allows users to create shortened URLs and track their usage with click analytics.

## Features

- 🔗 Shorten long URLs into compact, shareable links
- 👤 User authentication (Sign up/Login)
- 📊 Click tracking and analytics
- 🔒 Secure session management with JWT
- 🎨 Server-side rendering with EJS templates
- 📱 Responsive web interface

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Template Engine**: EJS
- **Session Management**: Cookie Parser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Rishiprasadraut/URLShortner.git
cd URLShortner
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your MongoDB connection string and other configurations.

4. Start the server:
```bash
npm start
```

The application will run on `http://localhost:8001`

## Usage

1. **Sign Up/Login**: Create an account or log in to access the URL shortening service
2. **Shorten URL**: Enter a long URL to generate a shortened version
3. **Share**: Copy and share your shortened URL
4. **Track**: View analytics for your shortened URLs

## API Routes

- `POST /user/signup` - Register a new user
- `POST /user/login` - User login
- `POST /url` - Create a shortened URL
- `GET /:shortId` - Redirect to original URL

## Project Structure

```
├── controller/       # Request handlers
├── middlewares/      # Authentication middleware
├── models/          # MongoDB schemas
├── routes/          # API routes
├── service/         # Authentication services
├── views/           # EJS templates
├── connect.js       # Database connection
└── index.js         # Application entry point
```

## License

MIT

## Author

Rishiprasad Raut
