import isDarkColor from "is-dark-color";
import { useMemo } from "react";

export default function useContrastColor(hexColor: string) {
  return useMemo(() => (isDarkColor(hexColor) ? "#fff" : "#000"), [hexColor]);
}
