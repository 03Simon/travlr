# Travlr Getaways — Full Stack Web Application

A full-stack travel app with an admin side and a customer side. The final iteration adds secure admin login (JWT), route protection, and environment-based configuration.

---

## Architecture

**Frontend types used & how they differ**

- **Express HTML** – Server-rendered HTML pages for the early/static site. Fast to scaffold, minimal tooling, but limited interactivity without extra JS.
- **Plain JavaScript** – Enhanced pages with DOM updates and fetch calls; good for small dynamic bits but can get hard to organize as the UI grows.
- **SPA (Angular)** – The admin UI as a single-page app: client-side routing, components, services, and state. Best for rich, interactive workflows and code reuse.

**Why MongoDB (NoSQL) for the backend?**

- Trip records are document-shaped and can evolve without rigid migrations.
- Simple JSON <-> BSON mapping (great DX in Node).
- Built-in horizontal scalability and geo-friendly queries if needed later.

---

## Functionality

**JSON vs JavaScript & how JSON connects front and back**

- **JavaScript** is a programming language executed in Node and browsers.
- **JSON** is a data format (text) that represents objects/arrays.
- The frontend and backend exchange **JSON** over HTTP (e.g., `GET /api/trips`) so both sides can serialize/deserialize data consistently.

**Refactors & reusable UI**

- Extracted backend routes into **modular routers** (`/routes/auth.js`, `/routes/trips.js`) to keep `app.js` small and testable.
- Centralized **middleware** (CORS, JSON parsing, logging, auth) to avoid duplication.
- In the SPA, split screens into **reusable components** (e.g., TripList, TripCard, AuthForm) so features compose cleanly and styling is consistent.

---

## Testing

**Endpoints & methods**

- `GET /health` – service check.
- `GET /api/trips` – list trips (public).
- `POST /api/auth/login` – returns JWT (admin).
- Protected admin routes require `Authorization: Bearer <token>`.

**How I tested**

- CLI: `curl` / PowerShell `Invoke-WebRequest` for quick smoke tests.
- Postman/Thunder Client for collections with auth headers and bodies.
- Verified middleware order (CORS → JSON body → auth → routes).
- Checked failure paths (401/403/404/500) and CORS preflight.

**Security**

- **JWT** for admin sessions, validated via middleware.
- **dotenv** for secrets; nothing sensitive committed.
- Basic input validation and consistent HTTP status codes.

---

## Run Instructions

> Prereqs: Node 18+ and MongoDB (local or Atlas).

### Backend
```bash
cd backend
npm install
