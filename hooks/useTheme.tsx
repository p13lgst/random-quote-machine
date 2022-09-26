import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_COLOR } from "../lib/color";
import useContrastColor from "./useContrastColor";
import useSafeColor from "./useSafeColor";

interface ThemeContextType {
  darkMode: boolean | undefined;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  contrastColor: string;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, _setDarkMode] = useState<boolean | undefined>(undefined);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const safeColor = useSafeColor(color);
  const contrastColor = useContrastColor(safeColor);

  const setDarkMode = useCallback<Dispatch<SetStateAction<boolean>>>((prev) => {
    _setDarkMode((realPrev) => {
      const next = typeof prev === "function" ? prev(!!realPrev) : prev;
      localStorage.setItem("darkMode", next ? "true" : "false");
      return next;
    });
  }, []);

  useEffect(() => {
    const darkMode = window.localStorage.getItem("darkMode");
    if (darkMode !== "true" && darkMode !== "false") {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      setDarkMode(darkMode === "true");
    }
  }, [setDarkMode]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode, setDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        contrastColor,
        color: safeColor,
        setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
