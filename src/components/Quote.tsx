import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface QuoteProps {
  quote: {
    content: string;
    author: string;
  } | null;
}

const Quote: React.FC<QuoteProps> = (props) => {
  const { quote } = props;

  return (
    <blockquote>
      <SkeletonTheme baseColor="#00000010" highlightColor="#00000090">
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
