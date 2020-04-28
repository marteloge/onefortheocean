import React from 'react';

import { FormattedMessage } from 'react-intl';

import StyledAbout from './About.styled';

const About = () => (
  <StyledAbout>
    <h1>
      <FormattedMessage id={'about.header'} />
    </h1>
    <p></p>
  </StyledAbout>
);

export default About;
