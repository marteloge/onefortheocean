import React from 'react';

import StyledContact from './Contact.styled';
import { FormattedMessage } from 'react-intl';

const Contact = () => (
  <StyledContact>
    <h1>
      <FormattedMessage id={'contact.header'} />
    </h1>

    <p>
      <FormattedMessage id={'contact.intro'} />
    </p>
  </StyledContact>
);

export default Contact;
