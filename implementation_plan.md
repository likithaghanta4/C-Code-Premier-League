# Module 1: Project Setup & Architecture

Build the complete project foundation for **C Code Premier League (CPL)** — a premium C Programming learning platform for engineering students.

---

## What This Module Covers

Module 1 establishes the entire project skeleton — frontend, backend, database connection, design system, routing, and shared components. No features are built yet; this is pure architecture.

---

## Proposed Changes

### 1. Frontend — Vite + React + Tailwind CSS

#### [NEW] `client/` — React application scaffolded with Vite

| Item | Detail |
|------|--------|
| **Scaffolding** | `npx create-vite` with React template |
| **Tailwind CSS** | v4 (latest), configured with the CPL dark theme |
| **Router** | `react-router-dom` v7 with lazy-loaded routes |
| **Animations** | `framer-motion` |
| **Icons** | `lucide-react` |
| **Charts** | `recharts` |
| **Notifications** | `react-toastify` |

#### [NEW] Design System & Theme (`client/src/styles/`)

A comprehensive design token system:

| Token | Values |
|-------|--------|
| **Primary** | Blue `#3B82F6` → `#2563EB` |
| **Secondary** | Cyan `#06B6D4` → `#0891B2` |
| **Accent** | Purple `#8B5CF6` → `#7C3AED` |
| **Background** | Dark `#0F172A` (base), `#1E293B` (card), `#334155` (elevated) |
| **Glassmorphism** | `backdrop-blur-xl`, semi-transparent backgrounds, subtle borders |
| **Typography** | Google Font: **Inter** (body) + **JetBrains Mono** (code) |
| **Radius** | `0.5rem` (sm), `0.75rem` (md), `1rem` (lg), `1.5rem` (xl) |

#### [NEW] Project Folder Structure

```
client/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Static assets (images, logos)
│   ├── components/
│   │   ├── common/           # Button, Card, Input, Modal, Loader, Badge
│   │   ├── layout/           # Navbar, Sidebar, Footer, PageWrapper
│   │   └── ui/               # GlassCard, AnimatedCounter, ProgressBar
│   ├── contexts/             # AuthContext, ThemeContext, NotificationContext
│   ├── hooks/                # useAuth, useApi, useDebounce, useLocalStorage
│   ├── pages/                # One folder per route/feature
│   │   ├── landing/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── ...
│   ├── services/             # API service layer (axios instance + endpoints)
│   ├── utils/                # Helpers, formatters, constants
│   ├── styles/               # Global CSS, Tailwind config overrides
│   ├── App.jsx               # Root component with Router
│   ├── main.jsx              # Entry point
│   └── router.jsx            # Centralized route definitions
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

#### [NEW] Shared Components Built in This Module

| Component | Purpose |
|-----------|---------|
| `Button` | Primary, secondary, outline, ghost, danger variants with loading state |
| `GlassCard` | Glassmorphism card with hover glow effect |
| `Input` | Styled text input with label, error state, icon support |
| `Loader` | Full-page and inline loading spinners |
| `PageWrapper` | Consistent page layout with animations |
| `Logo` | CPL brand logo (SVG) |

---

### 2. Backend — Node.js + Express

#### [NEW] `server/` — Express.js API server

```
server/
├── src/
│   ├── config/
│   │   └── db.js             # MongoDB Atlas connection
│   ├── middleware/
│   │   ├── auth.js           # JWT verification middleware
│   │   ├── errorHandler.js   # Global error handler
│   │   └── validate.js       # Request validation middleware
│   ├── models/               # Mongoose schemas (empty for now)
│   ├── routes/               # Express routers (health check only)
│   │   └── index.js
│   ├── controllers/          # Route handlers (empty for now)
│   ├── services/             # Business logic layer (empty for now)
│   ├── utils/
│   │   └── ApiResponse.js    # Standardized API response helper
│   └── app.js                # Express app setup
├── .env.example              # Environment variable template
├── server.js                 # Entry point
└── package.json
```

#### Backend Packages

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM |
| `cors` | Cross-origin support |
| `dotenv` | Environment variables |
| `bcryptjs` | Password hashing |
| `jsonwebtoken` | JWT auth |
| `express-validator` | Input validation |
| `helmet` | Security headers |
| `morgan` | Request logging |
| `nodemon` | Dev auto-restart |

---

### 3. Root Configuration

#### [NEW] Root `package.json` — Monorepo scripts

Convenience scripts to run both client and server:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:client\" \"npm run dev:server\"",
    "dev:client": "cd client && npm run dev",
    "dev:server": "cd server && npm run dev"
  }
}
```

---

## Open Questions

> [!IMPORTANT]
> **MongoDB Atlas Connection String**: Do you already have a MongoDB Atlas cluster set up? If yes, please share the connection string (you can put it in a `.env` file). If not, I'll set up the code to read from `.env` and you can add it later.

> [!IMPORTANT]
> **Tailwind CSS Version**: Your prompt mentions Tailwind CSS. The latest is **v4** (CSS-first config, no `tailwind.config.js`). However, **v3** is more stable and widely documented. Which do you prefer?
> - **Option A**: Tailwind CSS v3 (stable, JS config file)
> - **Option B**: Tailwind CSS v4 (latest, CSS-first config)

> [!NOTE]
> **Port Configuration**: I'll default to `5173` for the frontend dev server and `5000` for the backend API. Let me know if you need different ports.

---

## Verification Plan

### Automated Tests
```bash
# Frontend builds without errors
cd client && npm run build

# Backend starts successfully
cd server && npm run dev

# Both run concurrently
cd .. && npm run dev
```

### Manual Verification
- Frontend loads at `http://localhost:5173` with the CPL dark theme
- Backend responds at `http://localhost:5000/api/health` with `{ status: "ok" }`
- Tailwind styles render correctly (glassmorphism card visible)
- Framer Motion animations work (page transition test)
- React Router navigates between placeholder routes
- Responsive layout works on mobile/tablet/desktop viewports
