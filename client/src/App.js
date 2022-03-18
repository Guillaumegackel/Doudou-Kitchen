import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "./App.css";
import doudou from "./images/doudou.jpg";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          DOUDOU KITCHEN
        </Typography>
        <img src={doudou} alt="doudou kitchen" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
