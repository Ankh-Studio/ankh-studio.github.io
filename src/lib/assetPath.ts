// Helper to fix asset paths for GitHub Pages
const assetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};

export default assetPath;
