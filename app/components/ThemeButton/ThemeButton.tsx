import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import * as React from "react";
import { SupportedTheme } from "~/types";

interface Props {
  setTheme: () => void;
  theme: SupportedTheme;
}
const ThemeButton: React.FC<Props> = (props) => {
  const handleToggleTheme = () => {
    props.setTheme();
  };
  return (
    <div className="switch relative">
      <input
        type="checkbox"
        name="toggle"
        onClick={handleToggleTheme}
        className="top-0 right-0 bottom-0 left-0 opacity-0 absolute w-full h-full cursor-pointer"
      />
      <label htmlFor="toggle" className="block h-full relative w-4/5">
        {props.theme === SupportedTheme.DARK ? (
          <div className="flex absolute">
            <MoonIcon className="theme-icon moon-dark m-auto" />
          </div>
        ) : (
          <div className="flex absolute">
            <SunIcon className="theme-icon sun-light m-auto" />
          </div>
        )}
      </label>
      <span className="inline-block absolute right-0"></span>
    </div>
  );
};

export default ThemeButton;
