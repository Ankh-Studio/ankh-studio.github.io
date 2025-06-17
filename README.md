# Ankh Studio Website

This is the official website for Ankh Studio, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Smooth animations with Framer Motion
- Accessible UI components
- Modern tech stack

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
# or
yarn build
```

## Technologies Used

- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion

## Deployment to GitHub Pages

1. Build the static site. When deploying to a project page specify the base path:

```bash
# user or org site
npm run build

# project site
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

2. Commit the `out/` folder or rely on the GitHub Actions workflow in
`.github/workflows/deploy.yaml` to publish automatically.
