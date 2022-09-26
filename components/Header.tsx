import useTheme from "../hooks/useTheme";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { darkMode, setDarkMode, color, setColor } = useTheme();

  return (
    <header className="flex flex-wrap justify-evenly w-full">
      <label className="flex items-center space-x-2 mr-2 mb-2">
        <span>Select a color: </span>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <ToggleSwitch
        label="Dark mode"
        checked={!!darkMode}
        onChange={setDarkMode}
        className="mr-2 mb-2"
      />
    </header>
  );
};

export default Header;
