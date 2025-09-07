"use client";

import { useEffect } from "react";

const ThemeSwitcher = () => {
  useEffect(() => {
    // restore theme from localStorage if available
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="ml-2 h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-4 shadow-2xl max-h-96 overflow-y-auto border border-base-content"
      >
        {[
          "light",
          "dark",
          "cupcake",
          "bumblebee",
          "emerald",
          "corporate",
          "synthwave",
          "retro",
          "cyberpunk",
          "valentine",
          "halloween",
          "garden",
          "forest",
          "aqua",
          "lofi",
          "pastel",
          "fantasy",
          "wireframe",
          "black",
          "luxury",
          "dracula",
          "cmyk",
          "autumn",
          "business",
          "acid",
          "lemonade",
          "night",
          "coffee",
          "winter",
        ].map((theme) => (
          <li key={theme} className="">
            <button
              onClick={() => handleThemeChange(theme)}
              className="w-full flex gap-2 py-2 btn btn-ghost justify-start"
            >
              <div
                data-theme={theme}
                className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm w-6 h-6"
              >
                <div className="bg-base-content size-1 rounded-full"></div>
                <div className="bg-primary size-1 rounded-full"></div>
                <div className="bg-secondary size-1 rounded-full"></div>
                <div className="bg-accent size-1 rounded-full"></div>
              </div>
              <p className="text-base-content">{theme}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
