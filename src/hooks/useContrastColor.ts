import isDarkColor from "is-dark-color";
import { useMemo } from "react";

export default function useContrastColor(hexColor: string) {
  return useMemo(() => {
    return isDarkColor(hexColor) ? "#fff" : "#000";
  }, [hexColor]);
}
