// src/pages/Home.js

import Carousel from '../Carousel';
import React from 'react';
import Jammugym from '../components/Jammugym';
import Mycard from '../Mycard';
import Seprator from '../components/Seprator';
import MyReasturent from './MyReasturent';
import Insta from './Insta';

function Home() {
  return(
    <div>
      <h1>Welcome to our Home Page</h1>
      <Carousel></Carousel>
      <Jammugym></Jammugym>
      <Mycard></Mycard>
      <Seprator></Seprator>
      <MyReasturent></MyReasturent>
      <Insta></Insta>
    </div>
  );
}

export default Home;
