import { createUseStyles } from "react-jss";

export function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>The Quizie-Quiz Game</h1>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  headerContainer: {
    color:"black",
    background: "whitesmoke",
    borderBottom: "6px solid gray",
    height: "85px",
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
