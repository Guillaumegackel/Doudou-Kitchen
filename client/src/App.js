import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import doudou from "./images/doudou.jpg";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './Styles'
import { useState, useEffect } from "react";
import { getPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          DOUDOU KITCHEN
        </Typography>
        <img className={classes.image} src={doudou} alt="doudou kitchen" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
