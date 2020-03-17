import React from 'react';
import Hero from '../globals/Hero';
import aboutBcg from '../../images/aboutBcg.jpg';

const Header = () => {
  return (
    <div>
      <Hero img={aboutBcg}><h1>hello world!</h1></Hero>
    </div>
  )
}

export default Header
