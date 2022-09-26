import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean | undefined;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, _setDarkMode] = useState<boolean | undefined>(undefined);

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
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === null) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  return context;
}
