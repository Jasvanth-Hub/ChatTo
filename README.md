# ChatTo - Chat To the world

**ChatTo is a real-time chat application that allows users to send and receive messages instantly. It features user authentication, real-time messaging with typing indicators, friend requests, and more. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for real-time communication.**

 🌐 Live Demo - 
[ChatTo Live App](https://chatto-app.onrender.com)

### 🚀 Features

- Real-time messaging using Socket.io

- User authentication with secure JWT tokens

- Friend request management system

- Typing indicators

- Responsive UI with React and Material UI

- Optimized backend with Node.js and Express.js

- MongoDB database integration

### 🛠️ Tech Stack

Frontend : React, Vite, Redux Toolkit, Axios, Material UI, Framer Motion

Backend : Node.js, Express.js, MongoDB, Mongoose, Socket.io

Deployment : Render (for both client and server)

Real-time Communication : Socket.io 

Cloud Storage: Cloudinary (for media uploads)

### 📦 Cloning & Running Locally

### Prerequisites

- Node.js & npm

- MongoDB (local or cloud-based)

- Git

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ChatTo.git
cd ChatTo
```

### 2️⃣ Setting Up the Server
```bash
cd server
npm install


# Create a .env file with the following variables
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_SERVER = your_frontend_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Run the server
npm start
```

### 3️⃣ Setting Up the Client
```bash
cd ../client
npm install

# Update the server URL in your environment config if needed
VITE_SERVER_URL=http://localhost:5000

# Run the client
npm run dev
```

**Your app should now be running at [http://localhost:5173.](http://localhost:5173.)**

---

### ⚙️ API Endpoints

### Authentication

- `POST /chatto/user/new` - Register a new user

- `POST /chatto/user/login` - Login user

- `GET /chatto/user/logout` - Logout user

- `GET /chatto/user/me` - Get current user profile

### Chat

- `POST /chatto/chat` - Create a new chat

- `GET /chatto/chat` - Get all chats for the logged-in user

- `POST /chatto/chat/message` - Send a new message

### Friends & Notifications

- `PUT /chatto/user/sendrequest` - Send friend request

- `PUT /chatto/user/acceptrequest` - Accept friend request

- `GET /chatto/user/notifications` - Get notifications

- `GET /chatto/user/friends` - Get friend list

---

## 📦 Deployment Instructions

### Backend Deployment on Render

1. Create a new Web Service on Render.

2. Connect your GitHub repository.

3. Add the required environment variables in Render settings.

4. Set the build command to `npm install` and start command to `npm start`.

### Frontend Deployment on Render

1. Create another Web Service for the client.

2. Add the environment variable `VITE_SERVER_URL` pointing to the backend URL.

3. Set the build command to `npm install && npm run build` and start command to `npm run preview`.

---

## 💡 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.

2. Create a new branch: `git checkout -b feature-branch`

3. Make your changes and commit: `git commit -m 'Add new feature'`

4. Push to your fork: `git push origin feature-branch`

5. Submit a pull request.

---

### 📞 Contact

If you have any questions, feel free to reach out:

 - Email : [bhukyajasvanth@gmail.com](mailto:bhukyajasvanth@gmail.com)

 - LinkedIn : [Bhukya Jasvanth](https://www.linkedin.com/in/jasvanth-bhukya-8a1b16256/)

---

Developed with ❤️ by Jasvanth.
