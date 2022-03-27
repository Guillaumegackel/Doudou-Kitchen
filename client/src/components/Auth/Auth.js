import {
  Button,
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {GoogleLogin} from "react-google-login";
import {useNavigate} from 'react-router-dom';
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";
import Icon from "./icon";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) =>{
const result = res?.profileObj;
const token = res?.tokenId;

try {
  dispatch({type:'AUTH', data: { result, token } });

  // Pour rediriger vers la HP apres connexion
  navigate('/');
} catch (error) {
  console.log(error);
}
  };

  const googleFailure = (error) =>{
    console.log(error);
console.log("Votre tentative de connexion a échoué - Essayez une nouvelle fois ");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} />
        <Grid container spacing={2}>
          {isSignup && (
            <>
              <Input
                name="firstname"
                label="First Name"
                handleChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="firstname"
                label="First Name"
                handleChange={handleChange}
                half
              />
            </>
          )}
          <Input
            name="email"
            label="Email Adress"
            handleChange={handleChange}
            type="email"
          />
          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && (
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          )}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>
        <GoogleLogin
          clientId="1000137865609-7b740lqlfn45jiq39thdsgudu3ldopah.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.googleButton}
              color="primary"
              fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="contained"
            >
            Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              {isSignup
                ? "Tu as déjà un compte ? Sign In"
                : "Tu n'as pas déjà un compte? Inscris toi ;)"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
