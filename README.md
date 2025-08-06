# AI Engineering Log

A comprehensive documentation platform for AI engineering topics, built with modern web technologies. This project serves as a centralized knowledge base covering essential concepts, tools, and best practices in AI engineering.

## Overview

AI Engineering Log is an open-source documentation platform that organizes AI engineering knowledge into structured collections. Each collection focuses on specific domains like package management, prompt engineering, and other crucial aspects of building AI systems.

## Features

- **Structured Content Collections**: Organized by topics with comprehensive metadata
- **Modern Tech Stack**: Built with Astro, React, TypeScript, and Tailwind CSS
- **MDX Support**: Rich content authoring with components
- **Type-Safe Configuration**: Centralized collection management with TypeScript validation
- **Responsive Design**: Optimized for all devices
- **Fast Performance**: Static site generation with Astro

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── config/           # Collection and site configuration
│   ├── content/          # MDX content organized by collections
│   │   ├── package-management/
│   │   └── prompt-engineering/
│   ├── layouts/          # Astro layout components
│   ├── pages/            # Site pages and routing
│   ├── scripts/          # Client-side scripts
│   ├── styles/           # CSS styles
│   └── utils/            # Utility functions
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AI-Brewery/AIEngineeringLog.git
cd AIEngineeringLog
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

## Available Commands

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `bun install`     | Install project dependencies               |
| `bun dev`         | Start development server at localhost:4321 |
| `bun build`       | Build production site to ./dist/           |
| `bun preview`     | Preview production build locally           |
| `bun astro check` | Run TypeScript and Astro checks            |

## Contributing

We welcome contributions to improve the AI Engineering Log. Here's how you can contribute:

### Adding New Content

1. **Create a new collection** (if needed):

   - Add collection configuration in `src/config/collections.ts`
   - Create a new directory in `src/content/`

2. **Add content to existing collections**:
   - Create new `.mdx` files in the appropriate collection directory
   - Follow the frontmatter schema defined in `src/content/config.ts`

### Content Guidelines

- Use clear, concise language
- Include practical examples and code snippets
- Add appropriate tags and metadata
- Follow the established frontmatter format:

```yaml
---
title: "Your Article Title"
description: "Brief description of the content"
collection: "collection-slug"
order: 1
author: "Your Name"
publishDate: 2025-01-01
readTime: "5 min read"
tags: ["tag1", "tag2"]
prerequisites: ["prerequisite-topic"]
authorProfile:
  website: "https://your-website.com"
  github: "your-github-username"
---
```

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test locally
4. Commit with descriptive messages
5. Push to your fork and create a pull request

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Run `bun astro check` before committing
- Ensure all content validates against the schema

## Technology Stack

- **Framework**: Astro 5.x
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX with syntax highlighting
- **Language**: TypeScript
- **Package Manager**: Bun
- **Analytics**: Vercel Analytics

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Built with modern web technologies and inspired by the need for comprehensive AI engineering documentation.
