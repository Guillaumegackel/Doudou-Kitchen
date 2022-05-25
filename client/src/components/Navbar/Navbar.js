import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Avatar } from "@material-ui/core";
import * as actionType from "../../constants/actionTypes";
import meal from "../../images/meal.png"
import note from "../../images/note.png"
import drink from "../../images/drink.png"

import useStyles from "./styles";

const Navbar = () => {
  // Pour recuperer en local le token
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  // Pour eviter le refresh de log (inutile avec logout)
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
      <Link to="/" className={classes.heading}
>
      <div className={classes.brandContainer}>
      {/* <img className={classes.image} src={meal} alt="meal" height="45" />          */}
      <Typography
          className={classes.heading}
          variant="h2"
          align="center"
        >
          DOUDOU KITCHEN
        </Typography>
        <img className={classes.image} src={meal} alt="drink" height="45" />    
        <img className={classes.image} src={drink} alt="drink" height="45" />    
        <img className={classes.image} src={note} alt="drink" height="45" />    
      </div>
      </Link>
      

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
