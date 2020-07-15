import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { LaunchShoe } from "./components/Launch";
import { Launch } from "./components/Launch";
import { Home } from "./components/Home";
import { Product } from "./components/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: -1,
  },
}));

export default function App() {
  const classes = useStyles();

  // <<<<<<<<<<<<<<  return  Portion>>>>>>>>>>>>>>>>>
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shoezy
          </Typography>
          <div style={{ marginLeft: "6%" }}></div>
          <Link to="/">
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                margin: "6px",
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/product">
            <Button style={{ backgroundColor: "black", color: "white" }}>
              Product
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="/" element={<Launch />} />
          <Route path=":id" element={<LaunchShoe />} />
        </Route>
      </Routes>
    </div>
  );
}
