# Frédéric Klein - Portfolio Website

🌐 **Live Site:** https://fklein82.github.io

Static portfolio website showcasing my professional experience, certifications, and skills.

## Features

- ✨ Modern, responsive design
- 🤖 AI-powered chatbot (powered by backend API)
- 📱 Mobile-friendly
- 🎨 Glassmorphism UI design
- ⚡ Fast loading (GitHub Pages CDN)

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** GitHub Pages
- **Backend API:** [portfolio-api](https://github.com/fklein82/portfolio-api) (Railway)

## Architecture

```
┌─────────────────┐
│  GitHub Pages   │ ← You are here
│   (Frontend)    │
└────────┬────────┘
         │
         │ API Calls
         ▼
┌─────────────────┐
│    Railway      │
│  (Backend API)  │
│   Quarkus/Java  │
└─────────────────┘
```

## Local Development

```bash
# Clone the repo
git clone https://github.com/fklein82/fklein82.github.io.git
cd fklein82.github.io

# Serve locally (requires Python)
python3 -m http.server 8000

# Or use any static server
npx serve .
```

Open http://localhost:8000

## Configuration

Update the API URL in `js/chatbot.js`:

```javascript
const API_URL = 'https://your-railway-app.up.railway.app';
```

## Deployment

Automatic deployment via GitHub Pages:
- Push to `main` branch
- GitHub Pages will build and deploy automatically
- Live at https://fklein82.github.io

## License

© 2026 Frédéric Klein. All rights reserved.
