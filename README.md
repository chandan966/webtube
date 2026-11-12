# WebTube — Next-Generation YouTube Web Application

A modern, responsive, feature-rich YouTube clone built with clean HTML5, CSS3, and ES6+ JavaScript. Zero external frameworks, blazing fast, and packed with real-world interactive capabilities.

![WebTube Preview](favicon.svg)

---

## ✨ Features at a Glance

### 1. 🎬 YouTube Watch Experience
- **Dedicated Watch Page Layout**: Smooth in-page transition with two-column responsive desktop layout (player on left, related queue on right) and stacked mobile layout.
- **Responsive 16:9 Player**: Fullscreen support, keyboard playback controls, and seamless YouTube embed iframe.
- **Interactive Channel Row**: Verified badge, subscriber counter, and active **Subscribe / Subscribed** toggle with persistence.
- **Live Video Actions**:
  - Interactive **Like & Dislike** buttons with live counter.
  - **Share Modal** with direct link generation, 1-click clipboard copy, and instant sharing to WhatsApp, X (Twitter), Facebook, Reddit, and Email.
  - **Save to Watch Later** button with instant state update.
  - **Download** simulation with HD feedback toast.
- **Expandable Description Box**: Click "Show more" / "Show less" with video tags, view count, and formatted timestamps.
- **Interactive Comments System**:
  - Add public comments with user avatar and dynamic timestamps.
  - Like existing comments with live counter.
  - Delete user-created comments.
  - Persisted in browser `localStorage`.

### 2. ⚡ YouTube Shorts Reel
- Dedicated vertical short-form video reel (9:16 aspect ratio).
- Up/Down navigation controls and keyboard arrow support (`↑` / `↓`).
- Overlay channel info, handle, sound credits, and circular action buttons (Like, Dislike, Comment, Share).

### 3. 🌓 Dark & Light Theme System
- YouTube-authentic dark theme (`#0f0f0f`) and crisp light theme.
- One-click toggle in the header navigation.
- Saved in `localStorage` so your theme choice is remembered across page reloads.

### 4. 🔍 Intelligent Search & Voice Search
- **Live Search**: Real-time filtering across titles, channel names, and topics.
- **Autocomplete Suggestions**: Sleek dropdown showing instant matching video titles as you type.
- **Web Speech API Voice Search**: Real microphone voice input with a pulsing listening radar modal.
- **Quick Clear Button (✕)**: Instant search reset.

### 5. ➕ Create / Upload Custom Video
- Paste any YouTube URL (`youtube.com/watch?v=...`, `youtu.be/...`, `youtube.com/shorts/...`, or direct 11-char ID).
- Specify custom Title, Channel Name, Category, and Duration.
- Automatically extracts the valid video ID and generates video cards.
- Persisted in `localStorage` so custom videos stay in your personal catalog.

### 6. 📚 Persistent Library & History
- **Watch History**: Automatically tracks every video you watch; view history list or click "Clear All History".
- **Liked Videos**: Displays all videos you've liked in one place.
- **Watch Later**: Quick queue of saved videos.
- **Subscriptions**: Interactive channel list in sidebar with live status indicators.

### 7. ⌨️ Keyboard Shortcuts
- `/` — Focus search input immediately
- `Escape` — Close any open modal or return from Watch view to Home feed
- `Enter` / `Space` — Open selected video card
- `↑` / `↓` — Navigate previous / next video in Shorts mode

---

## 🚀 How to Run Locally

No build step, bundler, or `npm install` needed!

1. Double-click `index.html` or open it in any web browser (Chrome, Edge, Firefox, Brave, Safari).
2. Alternatively, serve with any local development server:
   ```bash
   # Using Python
   python -m http.server 3000

   # Or using Node.js
   npx serve .
   ```
3. Visit `http://localhost:3000` in your browser.

---

## 📁 File Structure

```text
youtube clone/
├── index.html        # Semantic HTML5 structure (Header, Sidebar, Watch Page, Shorts, Modals)
├── style.css         # Modern CSS3 design system with custom properties, Grid/Flexbox, and animations
├── script.js         # Vanilla ES6+ application state, localStorage persistence, and event handlers
├── favicon.svg       # Vector WebTube brand icon
└── README.md         # Project documentation and guide
```

---

## 🛠️ Built With

- **HTML5**: Semantic tags (`<header>`, `<aside>`, `<main>`, `<article>`, `<nav>`, `<form>`).
- **CSS3**: Custom Properties (variables), CSS Grid, Flexbox, Keyframe animations, backdrop-filter blur.
- **JavaScript (ES6+)**: LocalStorage API, Web Speech Recognition API, Clipboard API, DOM manipulation.
- **Zero External Dependencies**: 100% lightweight and future-proof.
