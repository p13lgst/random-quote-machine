import { createContext, useContext, useEffect } from "react";
import { useLocalstorageState } from "rooks";

interface DarkModeContextType {
  darkMode: boolean | undefined;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useLocalstorageState<boolean | undefined>(
    "darkMode"
  );

  useEffect(() => {
    if (darkMode === undefined) {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

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
