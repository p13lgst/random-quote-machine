import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { copyToClipboard } from "../lib/clipboard";
import { getQuoteText } from "../lib/quote";
import { getTweetUrl } from "../lib/tweet";
import { QuoteResponse } from "../types";
import isError from "../util/isError";

interface RandomQuoteContextType
  extends ReturnType<typeof useRandomQuoteInner> {}

interface RandomQuoteProviderProps {
  children: React.ReactNode;
}

async function fetchQuote(): Promise<QuoteResponse> {
  const response = await fetch("https://api.quotable.io/random");
  return response.json();
}

const RandomQuoteContext = createContext<RandomQuoteContextType | null>(null);

function useRandomQuoteInner() {
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadedInitialQuote = useRef(false);

  const loadQuote = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const quote = await fetchQuote();
      setQuote(quote);
    } catch (error) {
      if (isError(error)) setError(error.message);
      else setError("An unknown error occurred");
      setQuote(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loadedInitialQuote.current) return;
    loadedInitialQuote.current = true;
    loadQuote();
  }, [loadQuote]);

  const onCopy = useCallback(() => {
    if (quote) {
      let content = getQuoteText(quote);
      copyToClipboard(content);
    }
  }, [quote]);

  const onShare = useCallback(() => {
    if (quote) {
      const url = getTweetUrl(getQuoteText(quote));
      window.open(url, "_blank");
    }
  }, [quote]);

  return {
    onShare,
    onCopy,
    quote,
    loading,
    error,
    loadQuote,
  };
}

export const RandomQuoteProvider: React.FC<RandomQuoteProviderProps> = (
  props
) => {
  const value = useRandomQuoteInner();
  return <RandomQuoteContext.Provider value={value} {...props} />;
};

export default function useRandomQuote() {
  const context = useContext(RandomQuoteContext);
  if (!context) {
    throw new Error("useRandomQuote must be used within a RandomQuoteProvider");
  }
  return context;
}
