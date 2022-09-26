const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
