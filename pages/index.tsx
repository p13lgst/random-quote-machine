import clsx from "clsx";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import ArrowPathIcon from "../components/Icons/ArrowPathIcon";
import ClipboardIcon from "../components/Icons/ClipboardIcon";
import TwitterIcon from "../components/Icons/TwitterIcon";
import Quote from "../components/Quote";
import ToggleSwitch from "../components/ToggleSwitch";
import useContrastColor from "../hooks/useContrastColor";
import useDarkMode from "../hooks/useDarkMode";
import useRandomQuote from "../hooks/useRandomQuote";
import { DEFAULT_COLOR, ensureHexColor } from "../lib/color";

const Home: NextPage = () => {
  const { error, loadQuote, loading, quote, onShare, onCopy } =
    useRandomQuote();

  const { darkMode, setDarkMode } = useDarkMode();

  const [color, setColor] = useState(DEFAULT_COLOR);

  const safeColor = useMemo(() => ensureHexColor(color), [color]);
  const contrastColor = useContrastColor(safeColor);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-5 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-wrap justify-evenly w-full">
        <label className="flex items-center space-x-2 mr-2 mb-2">
          <span>Select a color: </span>
          <input
            type="color"
            value={safeColor}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <ToggleSwitch
          label="Dark mode"
          checked={!!darkMode}
          onChange={setDarkMode}
          className="mr-2 mb-2"
        />
      </div>
      <div
        style={{ borderColor: safeColor }}
        className=" p-5 rounded-lg w-full max-w-2xl border-2"
      >
        <h1
          style={{ borderColor: safeColor }}
          className="text-xl sm:text-3xl mb-4 text-center pb-2 border-b-2"
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
            style={{ backgroundColor: safeColor, color: contrastColor }}
            onClick={loadQuote}
            disabled={loading}
          >
            New Quote
          </Button>
          <Button
            style={{ backgroundColor: safeColor, color: contrastColor }}
            icon={<TwitterIcon />}
            onClick={onShare}
            disabled={loading}
          >
            Tweet
          </Button>
          <Button
            style={{ backgroundColor: safeColor, color: contrastColor }}
            icon={<ClipboardIcon />}
            onClick={onCopy}
            disabled={loading}
          >
            Copy to clipboard
          </Button>
        </div>
      </div>
      <footer className="flex space-x-3 flex-wrap items-center">
        <p className="text-center text-sm">
          Made by{" "}
          <a
            href="https://pauloaugusto.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Paulo Augusto Silva
          </a>
          . Source code on{" "}
          <a
            href="https://github.com/p13lgst/random-quote-machine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
