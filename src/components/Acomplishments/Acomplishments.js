import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '10+', text: 'Open Source Designs'},
  { number: '50+', text: 'LeetCode questions', },
  { number: '1.1k', text: 'Instagram Followers', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personoal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{ card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
