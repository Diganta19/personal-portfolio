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
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      </SectionText>
      <Button onClick={onclick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;