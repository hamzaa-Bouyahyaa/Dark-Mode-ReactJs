import React from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <h1 className="header">Easy Darkmode and Themes in React</h1>
      <div class="container">
        <div class="center">
          <button onClick={switchTheme} className="btn">
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
