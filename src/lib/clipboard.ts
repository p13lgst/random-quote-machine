import { toast } from "react-toastify";

export async function copyToClipboard(text: string) {
  try {
    await window.navigator.clipboard.writeText(text);
    toast("Copied to clipboard!");
  } catch (error) {
    toast("Failed to copy :(");
    console.error(error);
  }
}
