import { Button, Avatar, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup]= useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode =()=>{
setIsSignup((prevIsSignup)=>!prevIsSignup);
handleShowPassword(false);
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
		<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}
		</Button>
		<Grid container justifyContent="flex-end">
			<Grid item>
<Button onClick={switchMode}>
	{isSignup ? 'Tu as déjà un compte ? Sign In': "Tu n'as pas déjà un compte? Inscris toi ;)"}
</Button>
			</Grid>
		</Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
