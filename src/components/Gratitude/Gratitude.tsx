import React from 'react';

import StyledGratitude from './Gratitude.styled';
import { FormattedMessage } from 'react-intl';

const Gratitude = () => (
  <StyledGratitude>
    <h1>
      <FormattedMessage id={'gratitude.header'} />
    </h1>

    <p>
      <FormattedMessage id={'gratitude.intro'} />
    </p>

    <h2>
      <FormattedMessage id={'gratitude.artists.header'} />
    </h2>

    <h2>
      <FormattedMessage id={'gratitude.technology.header'} />
    </h2>
  </StyledGratitude>
);

export default Gratitude;
