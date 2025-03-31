// src/components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-4 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ankh Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;