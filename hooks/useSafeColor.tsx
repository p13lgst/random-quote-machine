import { useMemo } from "react";
import { ensureHexColor } from "../lib/color";

export default function useSafeColor(color: string) {
  return useMemo(() => ensureHexColor(color), [color]);
}
