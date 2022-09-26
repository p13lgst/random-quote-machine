export async function copyToClipboard(text: string) {
  try {
    await window.navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error);
  }
}
