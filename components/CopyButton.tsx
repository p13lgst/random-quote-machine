import { useState } from "react";
import Button, { ButtonProps } from "./Button";
import CheckIcon from "./Icons/CheckIcon";
import ClipboardIcon from "./Icons/ClipboardIcon";

interface CopyButtonProps extends Omit<ButtonProps, "icon" | "children"> {
  onClick: () => void;
  disabled?: boolean;
}

export default function CopyButton(props: CopyButtonProps) {
  const { onClick, ...rest } = props;
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    onClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Button
      icon={copied ? <CheckIcon /> : <ClipboardIcon />}
      onClick={handleClick}
      {...rest}
    >
      {copied ? "Copied!" : "Copy to clipboard"}
    </Button>
  );
}
