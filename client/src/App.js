import React from 'react';
import { Container } from "@material-ui/core";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';

import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path='/auth' exact element={<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>
  );

export default App;
