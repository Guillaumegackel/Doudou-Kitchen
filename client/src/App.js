import React from 'react';
import { Container } from "@material-ui/core";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';

import Auth from './components/Auth/Auth';

const App = () => {

return(

  <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Navigate to='/posts' replace/>} />
      <Route path="/posts" exact element={<Home/>} />
      <Route path="/posts/search" element={<Home/>} />
      <Route path="/posts/:id" exact element={<PostDetails/>} />
      <Route path='/auth' exact element={(<Auth/>)} />
      </Routes>
    </Container>
  </BrowserRouter>
);
};
  

export default App;
