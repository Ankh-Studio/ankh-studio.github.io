// src/styles/tokens.ts
export interface DesignTokens {
  colors: Record<string, string>;
  typography: {
    sizes: Record<string, string>;
    weights: Record<string, number>;
    lineHeights: Record<string, string>;
  };
  spacing: Record<string, string>;
  animations: {
    timing: Record<string, string>;
    duration: Record<string, string>;
  };
}

export const tokens: DesignTokens = {
  colors: {
    primary: "#0A0A23",      // Midnight Blue
    accent: "#D4AF37",       // Gold
    secondary: "#CD7F32",    // Bronze
    background: "#0D0D0D",   // Ebony Black
  },
  typography: {
    sizes: {
      h1: "2.5rem",
      h2: "2rem",
      body: "1rem",
    },
    weights: {
      bold: 700,
      regular: 400,
    },
    lineHeights: {
      h1: "3rem",
      h2: "2.5rem",
      body: "1.5rem",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
  animations: {
    timing: {
      fast: "0.3s",
      medium: "0.5s",
      slow: "0.8s",
    },
    duration: {
      short: "0.3s",
      normal: "0.5s",
      long: "0.8s",
    },
  },
};