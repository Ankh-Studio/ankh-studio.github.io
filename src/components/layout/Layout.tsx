// src/components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-white min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;