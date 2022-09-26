import useTheme from "../hooks/useTheme";

interface QuoteContainerProps {
  children: React.ReactNode;
  title: string;
}

const QuoteContainer: React.FC<QuoteContainerProps> = (props) => {
  const { color } = useTheme();
  const { title, children } = props;

  return (
    <div
      style={{ borderColor: color }}
      className=" p-5 rounded-lg w-full max-w-2xl border-2"
    >
      <h1
        style={{ borderColor: color }}
        className="text-xl sm:text-3xl mb-4 text-center pb-2 border-b-2 font-title uppercase"
      >
        {title}
      </h1>

      {children}
    </div>
  );
};

export default QuoteContainer;
