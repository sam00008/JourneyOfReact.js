import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/themecontext.js";
import ThemeBtn from "./components/ThemeButton.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
