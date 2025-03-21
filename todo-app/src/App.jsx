import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { ThemeProvider, useTheme } from "./contexts";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo === todo.id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleComplete,
        themeMode,
        darkTheme,
        lightTheme,
      }}
    >
      <main className="relative">
        {/* Mobile background */}
        <img
          src={`./bg-mobile-${themeMode}.jpg`}
          alt={`bg-mobile-${themeMode}`}
          className="md:hidden"
        />
        {/* Desktop background */}
        <img
          src={`./bg-desktop-${themeMode}.jpg`}
          alt={`bg-desktop-${themeMode}`}
          className="hidden md:block"
        />

        <div className="w-full px-6 absolute inset-0 top-12">
          <div className="flex items-center justify-between top-12 w-full">
            <h2 className="text-3xl text-white dark:text-black font-bold tracking-[10px]">
              TODO
            </h2>
            <ThemeSwitcher />
          </div>
          {/* Form Input */}
          <Form />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
