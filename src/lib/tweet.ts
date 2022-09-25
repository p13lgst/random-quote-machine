import { QuoteResponse } from "../types";

const INTENT_URL = "https://twitter.com/intent/tweet";

export function getTweetUrl(text: string) {
  const params = new URLSearchParams({
    text,
    url: window.location.href,
  });

  return `${INTENT_URL}?${params}`;
}

export function getQuoteTweetUrl(quote: QuoteResponse) {
  const text = `"${quote.content}" — ${quote.author}`;
  return getTweetUrl(text);
}
