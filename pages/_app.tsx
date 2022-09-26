import type { AppProps } from "next/app";
import { DarkModeProvider } from "../hooks/useDarkMode";
import "../styles/globals.css";

import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
