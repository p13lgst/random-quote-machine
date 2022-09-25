import { QuoteResponse } from "../types";

export const getQuoteText = (quote: QuoteResponse) =>
  `"${quote.content}" — ${quote.author}`;
