export function getHSPFromRGB(hexColor: string) {
  const [r, g, b] = getTextColor(hexColor);
  // HSP equation from http://alienryderflex.com/hsp.html
  return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
}

function getTextColor(hexColor: string) {
  const r = parseInt(hexColor.substring(1, 2), 16);
  const g = parseInt(hexColor.substring(3, 2), 16);
  const b = parseInt(hexColor.substring(5, 2), 16);

  return [r, g, b];
}
