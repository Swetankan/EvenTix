#  Eventix – Event Ticketing & Management Platform 

A modern full-stack **event management and ticketing platform**. With Eventix, users can **browse events, book tickets, and manage bookings**, while organizers can **host events, track sales, and verify tickets with QR codes**. Admins have full control over **users, categories, flagged events, and system analytics**.

🚀 **Live Demo (Vercel):** [https://eventix-demo.vercel.app](https://eventix-demo.vercel.app)

---

## ✨ Features

### 🎫 For Attendees
- Browse and search events by **category, location, and date**
- Secure ticket booking with **Stripe**
- **QR code tickets** for quick event entry
- Profile management & booking history
- **Google OAuth authentication**
- Flexible refund policy
- Contact organizers directly
- Report inappropriate events

### 🎤 For Organizers
- Create and manage events with images, venue map, and capacity
- Real-time booking analytics & revenue tracking
- **QR code ticket verification**
- Event cancellation with **automated refunds**
- Manage contact inquiries from attendees

### 🛠️ For Admins
- User & organizer management
- **Category management**
- Event reporting & moderation
- System-wide analytics & dashboards
- Contact message tracking
- Rate limiting & spam prevention

---

## 🛠 Tech Stack

**Frontend**
- React 19 + React Router
- TailwindCSS
- Axios
- React Hot Toast
- Date-fns

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication + Google OAuth
- Stripe for payments
- Redis for caching & rate limiting
- Cloudinary for image uploads
- **Custom error handling middleware** for stability  
- **Secure password hashing (bcrypt)** and JWT token protection  
- **Optimized with MongoDB indexes, Redis caching & pagination**

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB
- Redis
- Stripe Account
- Google OAuth & Maps API keys
- Cloudinary (for images)

### Installation

```bash
# Clone repo
git clone <repository-url>

# Navigate into the project directory
cd eventix

# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### Environment Setup

**Backend – `.env`**

```env
PORT=8000
CORS_ORIGIN=*
MONGODB_URI=mongodb://localhost:27017/Eventix
JWT_SECRET=your-secret
JWT_EXPIRES_IN=7d
NODE_ENV=development

GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
STRIPE_SECRET_KEY=your-stripe-secret-key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
```

**Frontend – `.env`**

```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### Run the Project

```bash
# In the backend directory
cd backend
npm run dev

# In a new terminal, in the frontend directory
cd frontend
npm run dev
```

🌐 **Application URL:** `http://localhost:5173`

---

## 📚 API Documentation

### Authentication

* `POST /api/auth/register` - Register new user
* `POST /api/auth/login` - Login with email/phone and password
* `POST /api/auth/google` - Google OAuth authentication
* `POST /api/auth/logout` - Logout user

### Events

* `POST /api/events` - Create event (organizers)
* `GET /api/events` - List all events
* `GET /api/events/:id` - Get event details
* `PATCH /api/events/:id` - Update event
* `DELETE /api/events/:id` - Cancel event
* `GET /api/events/:id/seats` - Get available seats

### Bookings

* `POST /api/bookings` - Create booking
* `GET /api/bookings/user` - Get user bookings
* `GET /api/bookings/event/:eventId` - Get event bookings
* `DELETE /api/bookings/:id` - Cancel booking
* `POST /api/bookings/verify` - Verify ticket code

### Users

* `GET /api/users/profile` - Get user profile
* `PATCH /api/users/update` - Update user profile
* `DELETE /api/users/delete` - Delete own account
* `DELETE /api/users/:id` - Admin delete user

### Categories

* `POST /api/categories` - Create category (admin)
* `GET /api/categories` - List categories
* `PATCH /api/categories/:id` - Update category
* `DELETE /api/categories/:id` - Delete category

### Contacts

* `POST /api/contacts/general` - Submit general contact form
* `POST /api/contacts/event/:eventId` - Contact event organizer
* `GET /api/contacts/general` - Get general contacts (admin)
* `GET /api/contacts/organizer` - Get organizer contacts
* `PATCH /api/contacts/:contactId/status` - Update contact status

### Reports

* `POST /api/reports` - Report an event for inappropriate content
* `GET /api/reports/my-reports` - Get user's own reports
* `GET /api/reports` - Get all reports (admin)
* `GET /api/reports/events/flagged` - Get flagged events (admin)
* `PATCH /api/reports/:reportId/status` - Update report status (admin)

### Payments

* `POST /api/payments/create-payment-intent` - Create Stripe payment intent

---

## 📂 Project Structure

```text
event-ticketing-platform/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Request handlers
│   │   ├── middleware/       # Authentication, error handling, rate limiting
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   ├── utils/            # Helper functions
│   │   ├── redis/            # Redis client and helpers
│   │   ├── app.js            # Express app setup
│   │   └── server.js         # Server entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/       # Reusable components
    │   ├── context/          # React context
    │   ├── pages/            # Route components
    │   ├── services/         # API services
    │   ├── api/              # API client setup
    │   └── App.jsx           # Main app component
    └── package.json
```

---

## 🌟 Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📝 License

MIT License © 2025 Eventix
