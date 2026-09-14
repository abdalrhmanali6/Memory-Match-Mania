<p align="center">
  <h1 align="center">🧠 Memory Match Mania ✨</h1>
  <p align="center">A fun, interactive card-matching memory game built with React & TypeScript</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 🎮 Demo


Live demo:   [🚀 Play Now](https://your-deploy-url.com)


---

## ⚡ Features

- 🃏 **Card Flip Animations** — Smooth 3D flip transitions with CSS transforms
- 🎯 **Multiple Grid Sizes** — Choose between 4×4, 6×6, and 8×8 grids
- ⏱️ **Built-in Timer** — Track how fast you can clear the board
- 📊 **Move Counter** — Monitors your total moves and matched pairs
- 🔊 **Sound Effects** — Audio feedback on card flips and winning
- 🏆 **Win Detection** — Celebrates when you match all pairs
- 🔀 **Shuffled Decks** — Randomized card placement every game
- 👀 **Card Preview** — Cards briefly reveal at the start so you can memorize
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework with hooks & refs |
| **TypeScript 6** | Type-safe development |
| **Vite 8** | Lightning-fast dev server & bundler |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | Icons for the info panel |

---

## 📁 Project Structure

```
MemoryGame/
├── public/
│   └── audio/                # Sound effects (flip, win)
├── src/
│   ├── components/
│   │   ├── Card.tsx          # Individual card with flip logic
│   │   ├── CardsGrid.tsx     # Grid layout & match logic
│   │   ├── GridSelector.tsx  # Grid size picker (4×4, 6×6, 8×8)
│   │   ├── Info.tsx          # Stats bar (moves, timer, matches)
│   │   ├── Resetbutton.tsx   # Reset game button
│   │   ├── StartGame.tsx     # Start game button
│   │   └── Win.tsx           # Win celebration overlay
│   ├── hook/
│   │   ├── useSound.ts      # Sound playback hook
│   │   └── useTimer.ts      # Timer logic hook
│   ├── types/
│   │   └── Card.ts           # TypeScript interfaces
│   ├── utils/
│   │   └── Shuffle.ts        # Fisher-Yates shuffle utility
│   ├── App.tsx               # Main app component
│   ├── App.css               # App styles
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/MemoryGame.git
cd MemoryGame

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎲 How to Play

1. **Select a grid size** — Pick 4×4 (easy), 6×6 (medium), or 8×8 (hard)
2. **Press Start** — All cards briefly flip face-up so you can memorize their positions
3. **Find matches** — Click two cards per turn. If they match, they stay flipped!
4. **Clear the board** — Match all pairs in the fewest moves and fastest time 🏆

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
