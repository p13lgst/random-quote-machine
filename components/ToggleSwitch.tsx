import { Switch } from "@headlessui/react";
import clsx from "clsx";

interface ToggleSwitchProps {
  label: React.ReactNode;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { label, checked, onChange, className } = props;

  return (
    <Switch.Group>
      <div className={clsx("flex items-center", className)}>
        <Switch.Label className="mr-3">{label}</Switch.Label>
        <Switch
          checked={checked}
          onChange={onChange}
          className={clsx(
            checked ? "bg-blue-600" : "bg-black",
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:ring-offset-black focus:ring-offset-2"
          )}
        >
          <span
            className={clsx(
              checked ? "translate-x-6 " : "translate-x-1",
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
            )}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
