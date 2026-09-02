# User & Posts System API

A production-grade RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**. This project demonstrates database relationships, embedded subdocuments, custom schema virtuals, instance/static methods, service-layer abstractions, and global error middleware.

---

## 🚀 Key Features

* **3-Tier Layered Architecture**: Routes $\rightarrow$ Services $\rightarrow$ Models for clean separation of concerns.
* **Embedded Subdocuments**: Comments embedded directly inside `Post` schema.
* **Mongoose Schema Features**:
  * Virtual getters: `fullName`, `followersCount`, `followingCount`, `likesCount`, `commentsCount`, `readingTime`.
  * Pre-save hooks: Automated bcrypt password hashing, excerpt generation, and publication timestamping.
  * Custom Instance & Static Methods: `addComment()`, `toggleLike()`, `findByAuthor()`, `findPopular()`.
  * Text & Compound Indexes: Fast full-text search and optimized queries on author/created dates.
* **Resilient Service Layer**: Parallel `Promise.all` pagination, atomic `$addToSet` and `$pull` updates.
* **Centralized Error Middleware**: Formats Mongoose `ValidationError` and `CastError` to standard 400 HTTP responses.

---

## 📁 Project Structure

```text
user_and_posts_system/
├── src/
│   ├── app.ts                 # Express app initialization & server startup
│   ├── config/
│   │   └── database.ts        # Mongoose connection setup & SIGINT handlers
│   ├── middleware/
│   │   └── errorHandler.ts    # Global Express error handling middleware
│   ├── models/
│   │   ├── User.ts            # User schema, password hashing & virtuals
│   │   └── Post.ts            # Post schema, comment subdocuments & methods
│   ├── routes/
│   │   ├── users.ts           # User API endpoint routes
│   │   └── post.ts            # Post API endpoint routes
│   └── services/
│       ├── userService.ts     # User business logic & database queries
│       └── postService.ts     # Post business logic & database queries
├── .env.example               # Template for environment variables
├── package.json
└── tsconfig.json
```

---

## 📡 API Endpoints

### Health Check
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service uptime and database connectivity check |

### User Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users` | List paginated users (`?page=1&limit=10`) |
| `POST` | `/api/users` | Create a new user |
| `GET` | `/api/users/search` | Search users by name/username (`?q=query`) |
| `GET` | `/api/users/:id` | Get user by ID (with populated followers/following) |
| `PATCH` | `/api/users/:id` | Update user profile details |
| `POST` | `/api/users/:id/follow` | Follow a user |
| `POST` | `/api/users/:id/unfollow` | Unfollow a user |

### Post Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/posts` | List paginated posts with filters (`?page=1&limit=10`) |
| `POST` | `/api/posts` | Create a new post |
| `GET` | `/api/posts/trending` | Get trending posts sorted by views (`?limit=10`) |
| `GET` | `/api/posts/:id` | Get post by ID (increments views count) |
| `PATCH` | `/api/posts/:id` | Update post (author only) |
| `DELETE` | `/api/posts/:id` | Delete post (author only) |
| `POST` | `/api/posts/:id/comments` | Add an embedded comment to a post |
| `POST` | `/api/posts/:id/like` | Toggle like/unlike on a post |

---

## ⚙️ Getting Started Locally

### 1. Prerequisites
* **Node.js** (v18+ recommended)
* **MongoDB** (Local instance or MongoDB Atlas URI)

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URL=mongodb://localhost:27017/user_posts_db
```

### 3. Installation & Run
```bash
# Install dependencies
npm install

# Start development server with live reload
npm run dev
```
