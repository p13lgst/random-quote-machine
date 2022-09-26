import useRandomQuote from "../hooks/useRandomQuote";
import useTheme from "../hooks/useTheme";
import Button from "./Button";
import CopyButton from "./CopyButton";
import ArrowPathIcon from "./Icons/ArrowPathIcon";
import TwitterIcon from "./Icons/TwitterIcon";

const Actions: React.FC = (props) => {
  const { onShare, onCopy, loadQuote, loading } = useRandomQuote();
  const { color, contrastColor } = useTheme();

  return (
    <div className="grid gap-2 md:grid-cols-3 mt-4">
      <Button
        icon={<ArrowPathIcon />}
        style={{ backgroundColor: color, color: contrastColor }}
        onClick={loadQuote}
        disabled={loading}
        iconClassName={loading ? "animate-spin" : ""}
      >
        New Quote
      </Button>

      <Button
        style={{ backgroundColor: color, color: contrastColor }}
        icon={<TwitterIcon className="text-[#1d9bf0]" />}
        onClick={onShare}
        disabled={loading}
      >
        Tweet
      </Button>

      <CopyButton
        style={{ backgroundColor: color, color: contrastColor }}
        onClick={onCopy}
        disabled={loading}
      />
    </div>
  );
};

export default Actions;
