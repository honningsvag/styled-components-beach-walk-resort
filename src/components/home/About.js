import React from 'react';
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/aboutBcg.jpg';
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles';
import { PrimaryButton } from '../globals/Button';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className='about-img'>
          <img src={aboutImg} alt='about-bg'/>
        </div>
        <div className='about-info'>
          <Title title='about us' center />
          <p>
            Amet cillum minim commodo veniam in 
            proident occaecat. Aliquip cupidatat ad 
            commodo commodo dolore exercitation nulla 
            anim sint eu exercitation. 
            Culpa eiusmod cupidatat mollit velit. 
            Commodo occaecat labore ullamco et sint deserunt. 
            Proident anim laborum aliquip sit irure voluptate 
            duis proident.
          </p>
          <PrimaryButton>read more</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div`
  .about-img, .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder( {width:setRem(6), color: setColor.primaryColor})};
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};

    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
    .about-img, .about-info {
      padding: ${setRem(0)};
    }
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img, .about-info {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `}
`;

export default About
