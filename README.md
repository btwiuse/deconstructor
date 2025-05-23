# Word Deconstructor

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/btwiuse/deconstructor)

A beautiful and interactive web application that deconstructs words into their meaningful parts and explains their etymology. Built with Next.js, React Flow, and powered by AI.

## Features

- 🔍 Interactive word analysis
- 🌳 Beautiful visualization of word components using React Flow
- 📚 Detailed etymology and meaning breakdowns
- 🎨 Dark mode
- ⚡ Real-time updates and animations
- 🧠 AI-powered word deconstruction using OpenRouter API

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- An OpenRouter API key (get one at [OpenRouter](https://openrouter.ai))

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hyusap/deconstructor.git
cd deconstructor
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp example.env .env.local
```

Then edit `.env.local` and add your OpenRouter API key.

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

The Word Deconstructor breaks down words into their constituent parts:

1. Enter any word in the input field
2. The AI analyzes the word's etymology and components
3. A beautiful graph visualization shows:
   - Individual word parts
   - Their origins (Latin, Greek, etc.)
   - Meanings of each component
   - How components combine to form the full word

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React Flow](https://reactflow.dev/) - Graph visualization
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [OpenRouter AI](https://openrouter.ai/) - AI-powered word analysis
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Jotai](https://jotai.org/) - State management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
