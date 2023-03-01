import { useState } from "react";
import { createUseStyles } from "react-jss";
import { DarkMode } from "./DarkMode";

export function Header() {
  const classes = useStyles();
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={
          mode === "light"
            ? classes.headerContainerLight
            : classes.headerContainerDark
        }
      >
        <h1>The Quizie-Quiz Game</h1>
        <DarkMode mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  headerContainerLight: {
    color: "black",
    background: "white",
    borderBottom: "2px solid #3e3a44",
    height: "5.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "1rem 0",
      "@media (min-width: 768px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 1024px)": {
        fontSize: "3rem",
      },
    },
  },
  headerContainerDark: {
    color: "white",
    background: "black",
    borderBottom: "2px solid #3e3a44",
    height: "5.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "1rem 0",

      "@media (min-width: 768px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 1024px)": {
        fontSize: "3rem",
      },
    },
  },
});
