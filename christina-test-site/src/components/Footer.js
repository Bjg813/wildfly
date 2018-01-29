import React from 'react';
import styled from 'styled-components';

import * as palette from '../../config/Style';

const Content = styled.p`
    color: ${palette.SECONDARY_COLOR};
    padding: 0 ${palette.CONTENT_PADDING};
    text-align: center;
`;

const Footer = () => (
  <Content>
      &copy; 2018 by <a href="mailto:info@wildflyphotography.com" target="_blank" rel="noopener noreferrer">Wild Fly Photography</a>.
    <br />
  </Content>
);

export default Footer;
