// Helper to fix asset paths for GitHub Pages
const assetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ankh-studio.github.io' : '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};

export default assetPath;
