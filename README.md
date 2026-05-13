<<<<<<< HEAD
# 🚀 Nexora Agency - MERN Stack Landing Page

A modern, fully responsive, and animated landing page for a premier IT Services Agency built with the MERN Stack (MongoDB, Express, React, Node.js).

## ✨ Features

### Frontend (React + Vite + Tailwind CSS)
- **Floating Glass-Morphism Navbar** - Smooth scroll navigation
- **Hero Section** with particle background and floating elements
- **Services Cards** with 3D animations and hover effects
- **Tech Stack** with dynamic tabbed interface
- **Contact Form** with validation and real-time feedback
- **Admin Dashboard** to view all contact inquiries
- **Dark/Light Mode Toggle**
- **Custom Cursor** and smooth scroll animations
- **Particle Background** and scroll progress indicator
- **Toast Notifications** using react-hot-toast
- **Animations powered by Framer Motion**

### Backend (Express + MongoDB)
- **RESTful API** endpoints for contact management
- **Mongoose Schema** with full validation
- **CORS Enabled** for cross-origin requests
- **Error Handling Middleware**
- **Graceful MongoDB Connection Fallback**

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

### Database
- **MongoDB Atlas** - Cloud database

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
git clone https://github.com/siddhtyagi18/nexora-agency.git
cd nexora-agency
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/nexus-agency?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Start the frontend development server:
```bash
npm run dev
```

## 🚀 Running the Application

### Development Mode
1. **Backend**: Runs on http://localhost:5000
2. **Frontend**: Runs on http://localhost:5173 (or another port if 5173 is in use)

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start backend
cd ../server
npm start
```

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home Page | Main landing page with all sections |
| `/admin` | Admin Dashboard | View all contact inquiries |

## 🎨 Sections Included

1. **Navbar** - Floating glass-morphism style with theme toggle
2. **Hero** - Catchy headline with animations and CTA buttons
3. **Services** - 6 service cards with hover animations
4. **About** - Company introduction
5. **Tech Stack** - Tabbed interface for technologies
6. **Testimonials** - Client testimonials
7. **Contact** - Contact form with validation
8. **Footer** - Copyright and social links

## 📝 API Endpoints

### Contact Endpoints
- `POST /api/contact` - Create a new contact inquiry
- `GET /api/contact/getContactInfo` - Get all contact inquiries (newest first)
- `GET /api/health` - Health check endpoint

## 🎯 Key Features Highlight

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations throughout the site
- ✅ Dark/Light mode support
- ✅ Real-time contact form with validation
- ✅ Admin dashboard to view submissions
- ✅ MongoDB integration with Mongoose
- ✅ Graceful error handling
- ✅ Demo mode available without MongoDB

## 📄 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using MERN Stack**
=======
# nexora-agency
A premium futuristic MERN stack digital agency platform with modern UI/UX, smooth animations, responsive design, MongoDB integration, and full-stack functionality.
>>>>>>> 8049a899806ac9b3d343e77e54efab08b42265bd
