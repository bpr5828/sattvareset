# Sattva Reset – Health Coaching Website

> **Health · Fitness · Diet Coaching** — [sattvareset.com](https://sattvareset.com)

A full-stack health coaching website built with React (Vite) + Node.js/Express. Deployed as a single project on **Vercel** (frontend + serverless API).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + React Router v6 |
| Styling | Vanilla CSS with design tokens |
| Backend | Node.js + Express (Vercel Serverless) |
| Integrations | Google Sheets API, Nodemailer (Gmail) |
| Deployment | Vercel (primary) · Docker + nginx (alternative) |

---

## Project Structure

```
Sattvarest/
├── api/
│   └── index.js          # Vercel serverless entry → Express app
├── client/               # React (Vite) frontend
│   ├── public/
│   │   ├── SattvaResetLogo.jpeg
│   │   └── images/
│   ├── src/
│   │   ├── components/   # Navbar, Footer, WhatsAppButton, ScrollToTop
│   │   ├── pages/        # Home, About, Services, SuccessStories, Blog, Contact
│   │   ├── App.jsx
│   │   └── index.css     # Design system
│   ├── nginx.conf        # For Docker deployments only
│   └── package.json
├── server/               # Express backend
│   ├── routes/
│   │   └── contact.js    # POST /api/contact → Google Sheets + Email
│   ├── index.js          # Exports Express app (+ listens locally if LOCAL_DEV=true)
│   ├── .env.example
│   └── package.json
├── vercel.json           # Vercel build + routing config
├── Dockerfile.client     # Docker alternative
├── Dockerfile.server     # Docker alternative
├── docker-compose.yml    # Docker alternative
└── README.md
```

---

## Running Locally

### Prerequisites
- Node.js ≥ 18, npm ≥ 9

### Install

```bash
cd client && npm install
cd ../server && npm install
```

### Start Dev Servers

Open two terminals:

```bash
# Terminal 1 – Frontend (http://localhost:5173)
cd client && npm run dev

# Terminal 2 – Backend (http://localhost:5001)
cd server && npm run dev   # runs with LOCAL_DEV=true
```

> **Note:** macOS reserves port 5000 for AirPlay Receiver. Backend uses **port 5001**.

---

## Deploying to Vercel

This is a **single Vercel project** — the frontend and backend deploy together.

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/sattvarest.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects `vercel.json` — **no settings to change**
4. Add **Environment Variables** (see below)
5. Click **Deploy**

### 3. Set Environment Variables in Vercel

In your Vercel project → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `GOOGLE_SHEETS_ID` | Your sheet ID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Private key (paste full value) |
| `EMAIL_USER` | `sattvareset@gmail.com` |
| `EMAIL_PASS` | Gmail App Password |
| `CLIENT_URL` | `https://sattvareset.com` |

> **Note:** Do NOT set `LOCAL_DEV` on Vercel — it's only needed for local development.

### How It Works on Vercel

- `vercel.json` tells Vercel to build the React app from `client/`
- All `/api/*` requests are routed to `api/index.js` — a Vercel Serverless Function that wraps the Express app
- The frontend and API share one domain (no CORS issues in production)

---

## Credentials Setup

### Google Sheets
1. [Google Cloud Console](https://console.cloud.google.com) → Create a Service Account
2. Share your Google Sheet with the service account email (editor access)
3. Copy the Sheet ID from the URL: `.../spreadsheets/d/**ID**/edit`

### Gmail App Password
1. Enable 2-Step Verification on `sattvareset@gmail.com`
2. [App Passwords](https://myaccount.google.com/apppasswords) → Generate a 16-char password

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, value propositions, testimonials, CTA |
| About | `/about` | Story, philosophy, qualifications |
| Services | `/services` | 11 focus areas, process steps, 3 packages |
| Success Stories | `/success-stories` | 6 client transformations with metrics |
| Blog | `/blog` | Articles, category filter, free downloads |
| Contact | `/contact` | Form, FAQ accordion, WhatsApp booking |

---

## Customizing Content

| What | File |
|---|---|
| About Me story | `client/src/pages/About.jsx` |
| Testimonials | `client/src/pages/Home.jsx` · `SuccessStories.jsx` |
| Blog articles | `client/src/pages/Blog.jsx` |
| Images | `client/public/images/` |
| Booking link | `client/src/pages/Contact.jsx` |
| WhatsApp number | Search `17034240537` across components |

---

## Design System

Colors from the Sattva Reset logo:

| Token | Hex | Use |
|---|---|---|
| `--green-700` | `#40916C` | Primary buttons |
| `--green-800` | `#2D6A4F` | Headings, dark primary |
| `--green-900` | `#1B4332` | Footer background |
| `--orange-500` | `#F4A261` | Accent, CTA buttons |

**Fonts:** Playfair Display (headings) · Poppins (body)

---

## Docker (Alternative Deployment)

```bash
docker-compose build && docker-compose up -d
```

Point Cloudflare DNS A record to your server IP. nginx handles SPA routing + API proxy.

---

© 2025 Sattva Reset. All rights reserved.
