import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const onclick= () => {
   window.location = 'https://google.com'
 }
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Diganta's Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Full-Stack Developer from Kolkata,India.<br />
        <br />
        I enjoy taking complex problems and turning them<br />
        into simple and beautiful designs, striving to write <br />
        efficient code everytime, whether it be HTML, CSS or jQuery.
      </SectionText>
      <Button onClick={onclick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;