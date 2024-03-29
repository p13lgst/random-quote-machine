import rgba from "color-rgba";

export const DEFAULT_COLOR = "#a855f7";

function hex(num: number) {
  return num.toString(16).padStart(2, "0");
}

export function ensureHexColor(color: string) {
  const parsed = rgba(color);
  if (!parsed) return "#a855f7";
  const [r, g, b] = parsed.map((c) => hex(c));
  return `#${r}${g}${b}`;
}
