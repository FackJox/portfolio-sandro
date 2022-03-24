import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        High Altitudes & < br />
        Hostile Environments
      </SectionTitle>
    <Button onClick={() => window.location = '#enquiries'}>Enquiries</Button>
   </LeftSection>
  </Section>
);

export default Hero;