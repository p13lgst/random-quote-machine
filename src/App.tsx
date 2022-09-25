import clsx from "clsx";
import { useLocalstorageState } from "rooks";
import Button from "./components/Button";
import ArrowPathIcon from "./components/Icons/ArrowPathIcon";
import ClipboardIcon from "./components/Icons/ClipboardIcon";
import TwitterIcon from "./components/Icons/TwitterIcon";
import Quote from "./components/Quote";
import useContrastColor from "./hooks/useContrastColor";
import useRandomQuote from "./useRandomQuote";

function App() {
  const { error, loadQuote, loading, quote, onShare, onCopy } =
    useRandomQuote();

  const [color, setColor] = useLocalstorageState("custom-color", "#a855f7");

  const contrastColor = useContrastColor(color);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 dark:bg-black">
      <div
        className="bg-white dark:bg-black p-5 rounded-lg w-full max-w-2xl text-secondary dark:text-white border-2"
        style={{
          borderColor: color,
        }}
      >
        <h1
          className="text-xl sm:text-3xl mb-4 text-center pb-2 border-b-2"
          style={{
            borderColor: color,
          }}
        >
          Random Quote Machine
        </h1>

        {error ? (
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        ) : (
          <Quote quote={loading ? null : quote} />
        )}
        <div className="grid gap-2 md:grid-cols-3 mt-4">
          <Button
            icon={
              <ArrowPathIcon
                className={clsx("w-6 h-6", loading && "animate-spin")}
              />
            }
            style={{ backgroundColor: color, color: contrastColor }}
            onClick={loadQuote}
            disabled={loading}
          >
            New Quote
          </Button>
          <Button
            style={{ backgroundColor: color, color: contrastColor }}
            icon={<TwitterIcon />}
            onClick={onShare}
            disabled={loading}
          >
            Tweet
          </Button>
          <Button
            style={{ backgroundColor: color, color: contrastColor }}
            icon={<ClipboardIcon />}
            onClick={onCopy}
            disabled={loading}
          >
            Copy to clipboard
          </Button>

          {/* <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
