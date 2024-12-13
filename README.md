# VASchool

VASchool is a dynamic online learning platform designed to make education accessible and engaging. The platform features a responsive user interface, robust state management, and secure backend architecture, enabling users to access courses, manage profiles, and engage with learning materials seamlessly.

---

## Features

### Frontend
- **React.js**: Component-based architecture for building scalable and interactive user interfaces.
- **Redux Toolkit**: Simplified and efficient state management.
- **Chakra UI**: Flexible and accessible UI components for styling and layout.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **React Router**: Streamlined navigation across multiple pages.
- **React Toastify**: Notifications to enhance user experience.
- **Typewriter Effect**: Dynamic animations for engaging content display.

### Backend
- **Express.js**: Lightweight and fast web application framework.
- **MongoDB**: NoSQL database for efficient and scalable data storage.
- **JWT Authentication**: Secure user authentication with JSON Web Tokens.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Multer**: File upload management.
- **bcrypt**: Password hashing for enhanced security.

---

## Tech Stack

### Frontend
- **React.js** (v18+)
- **Redux Toolkit**
- **Chakra UI**
- **Bootstrap**
- **React Router DOM**
- **React Toastify**
- **Typewriter Effect**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **bcrypt**
- **Multer**
- **dotenv**

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB**

### Clone the Repository
```bash
git clone https://github.com/yourusername/vaschool.git
cd vaschool
```

### Backend Setup
1. Install server dependencies:
   ```bash
   npm run install-server
   ```
2. Create a `.env` file in the root directory and configure environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
3. Start the server:
   ```bash
   npm run start-server
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install client dependencies:
   ```bash
   npm run install-client
   ```
3. Start the frontend development server:
   ```bash
   npm run start-client
   ```
4. Build the client for production:
   ```bash
   npm run build-client
   ```

---

## Folder Structure

```
vaschool/
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── utilities/
│   ├── index.js
│   ├── db.js
│   └── vercel.json
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── Layout/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── actions/
│   │   │   ├── constants/
│   │   │   ├── reducers/
│   │   │   ├── saga/
│   │   │   └── store/
│   │   ├── utilities/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── shared.types.ts
│   │   └── vite-env.d.ts
├── .env.local
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

---

## Contact
For any queries, feel free to reach out:
- **Email**: VaibhavArora8401@gmail.com
- **LinkedIn**: [Va1bhav07](https://www.linkedin.com/in/va1bhav07/)
