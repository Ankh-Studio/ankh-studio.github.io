export type CurrentTheme = "dark" | "light";

export type ColorTheme = {
  Primary       : string,
  Secondary     : string,
  AccentOne     : string,
  AccentTwo     : string,
  AccentThree   : string,
  Background    : string,
  Surface       : string,       
  TextPrimary   : string,
  TextSecondary : string,
  Highlight     : string,
};

export type ThemeChoices = {
  Dark  : ColorTheme,
  Light : ColorTheme,
};

export const Themes: ThemeChoices = {
  Dark: {
    Primary       : "#004D40",
    Secondary     : "#8C4600",
    AccentOne     : "#00FF80",
    AccentTwo     : "#FF8C00",
    AccentThree   : "#00BFFF",
    Background    : "#0A1F1B",
    Surface       : "#132825",
    TextPrimary   : "#FFFFFF",
    TextSecondary : "#BBBBBB",
    Highlight     : "#99FFCC",
  },

  Light: {
    Primary       : "#004D40",
    Secondary     : "#8C4600",
    AccentOne     : "#00FF80",
    AccentTwo     : "#FF8C00",
    AccentThree   : "#00BFFF",
    Background    : "#FFFFFF",
    Surface       : "#F4F4F4",
    TextPrimary   : "#212121",
    TextSecondary : "#555555",
    Highlight     : "#99FFCC",
  },
};

export const ColorThemeKeys: (keyof ColorTheme)[] = [
 "Primary",
 "Secondary",
 "AccentOne",
 "AccentTwo",
 "AccentThree",
 "Background",
 "Surface",
 "TextPrimary",
 "TextSecondary",
 "Highlight",
];

export function isColorThemeKey(
  key: string,
): key is keyof ColorTheme {
  return ColorThemeKeys.includes(key as keyof ColorTheme);
}

