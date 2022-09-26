import clsx from "clsx";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, icon, disabled, iconClassName, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex bg-purple-500 text-black p-2 rounded-md space-x-2 items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black  focus:ring-black dark:focus:ring-white active:opacity-60",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
