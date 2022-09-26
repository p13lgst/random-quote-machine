import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useDarkMode from "../hooks/useDarkMode";

interface QuoteProps {
  quote: {
    content: string;
    author: string;
  } | null;
}

const Quote: React.FC<QuoteProps> = (props) => {
  const { quote } = props;
  const { darkMode } = useDarkMode();

  return (
    <blockquote>
      <SkeletonTheme
        baseColor={darkMode ? "#FFFFFF10" : "#00000010"}
        highlightColor={darkMode ? "#FFFFFF90" : "#00000090"}
      >
        <p className="text-center text-lg mb-2">
          {quote ? quote.content : <Skeleton count={2} width="100%" />}
        </p>
        <footer className="text-right">
          <cite>{quote ? `— ${quote.author}` : <Skeleton width={100} />}</cite>
        </footer>
      </SkeletonTheme>
    </blockquote>
  );
};

export default Quote;
