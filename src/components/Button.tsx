import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, icon, disabled, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex bg-purple-500 text-black p-2 rounded-md space-x-2 items-center justify-center",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
