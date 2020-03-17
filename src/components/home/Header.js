import React from 'react';
import Hero from '../globals/Hero';
import homeBcg from '../../images/homeBcg.jpg';
import Banner from '../globals/Banner';
import { PrimaryButton } from '../globals/Button';

const Header = () => {
  return (
    <div>
      <Hero img={homeBcg}>
        <Banner
          greeting="Welcome to "
          title="Beach Walk Resort"
          text="Dolore velit culpa commodo excepteur 
          nisi eiusmod culpa officia eiusmod minim ullamco. 
          Laboris magna dolore aute tempor sunt amet cupidatat 
          aute fugiat ex pariatur. Nostrud elit cupidatat esse 
          laboris officia eiusmod proident sint cillum labore Lorem amet. 
          Qui id aliquip ad velit reprehenderit dolor ad ea reprehenderit 
          ullamco ipsum."
        >
          <PrimaryButton top='1rem'>view details</PrimaryButton>
        </Banner>
      </Hero>
    </div>
  )
}

export default Header
