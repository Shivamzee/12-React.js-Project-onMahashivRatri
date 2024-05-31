import useLacalStorage from "./useLacalStorage";

const lightDarkMode = () => {
  const [theme, setTheme] = useLacalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "Dark" : "light");
  }
  console.log(theme);

  return (
    <div>
      <h1 className="text-8xl font-bold text-center hover:text-cyan-500 mt-32 items-center">
        Hello Create 5 Projects today 31/25/2024
      </h1>
      <button
        onClick={handleToggleTheme}
        className="border-solid border-slate-800 rounded-full border-4 uppercase  p-3 mt-8 hover:bg-teal-500 hover:text-slate-50 text-3xl"
      >
        Change Theme
      </button>
    </div>
  );
};

export default lightDarkMode;
