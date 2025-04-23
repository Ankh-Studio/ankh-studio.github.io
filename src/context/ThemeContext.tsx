import React, { createContext, useEffect, useState } from "react";
import { ColorTheme, CurrentTheme, isColorThemeKey, ThemeChoices, Themes } from "@/theme/colors";


interface ThemeContextProps {
  theme       : CurrentTheme;
  themeColors : ColorTheme,
  toggleTheme : () => void;
  getColor: (color: string) => string | null;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<CurrentTheme>("dark");
  const [ themeColors, setThemeColors ] = useState<ColorTheme>(Themes.Dark);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as CurrentTheme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    setTheme(storedTheme ?? systemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /** 
   * Safely converts a TailwindCSS Theme Color into it's HEX value.
   * Since ThemeContextProvider handles our Websites theme for both Tailwind,
   * Sass and React CSS. `getColor` takes in what would be a Tailwind Theme 
   * Identifier and tries to retreive the raw HEX value for said Theme Color. 
   *
   * - i.e., `getColor("Dark-Background") => "#004D40"`
   **/
  const getColor  = (c: string): string|null => {
    const parts = c.split("-")
    if( 
       parts.length !== 2
     || parts[0] !== "Dark" && parts[0] !== "Light"
     || !isColorThemeKey(parts[1])
    ){
      return null;
    }
    const [
      theme,
      color
    ]: [
      keyof ThemeChoices, 
      keyof ColorTheme,
    ] = [ parts[0], parts[1] ];

    return Themes[theme][color];
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      setThemeColors(prev === "light" ? Themes.Dark : Themes.Light);
      return prev === "light" ? "dark" : "light";
    })
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeColors,
      toggleTheme,
      getColor,
    }}>
      { children }
    </ThemeContext.Provider>
  );
};
