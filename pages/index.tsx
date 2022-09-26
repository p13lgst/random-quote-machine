import type { NextPage } from "next";
import Actions from "../components/Actions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Quote from "../components/Quote";
import QuoteContainer from "../components/QuoteContainer";
import { RandomQuoteProvider } from "../hooks/useRandomQuote";
import { ThemeProvider } from "../hooks/useTheme";

const Home: NextPage = () => {
  return (
    <RandomQuoteProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col items-center justify-between p-5 bg-white dark:bg-black text-black dark:text-white">
          <Header />
          <QuoteContainer title="Random quote machine">
            <Quote />
            <Actions />
          </QuoteContainer>
          <Footer />
        </div>
      </ThemeProvider>
    </RandomQuoteProvider>
  );
};

export default Home;
