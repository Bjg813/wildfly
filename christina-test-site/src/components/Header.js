import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/lib/fa';

import * as palette from '../../config/Style';

const Wrapper = styled.div`
    background-color: #ffffff;
    background-image: url("${palette.BG_PATTERN}");
    display: flex;
    position: relative;
`;

const Content = styled.div`
    margin: 0 auto;
    max-width: ${palette.MAX_WIDTH}px;
    padding: 3rem 1.0875rem 10rem 1.0875rem;
    color: ${palette.SECONDARY_COLOR};
    text-align: center;
`;

const Avatar = styled.div`
    height: 135px;
    width: 225px;
    margin: 0 auto;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;

    img {
        border-radius: 0%;
    }
`;

const Name = styled.h1`
    margin: 1rem 0 .25rem 0;
    color: ${palette.COLOR};
`;

const Location = styled.div`
    font-size: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const SocialMedia = styled.div`
    margin-top: 2rem;

    a {
        margin: 0 .3rem;
        font-size: 1.3rem;
    }
`;

const Header = ({
  avatar, name, location,
}) => (
  <Wrapper>
    <Content>
      <Overdrive id="avatar-to-back">
        <Avatar>
          <img src={avatar} alt={name} />
        </Avatar>
      </Overdrive>
      <Overdrive id="name-to-back">
        <Name>{name}</Name>
      </Overdrive>
      <Location>
        {location}
      </Location>
      <SocialMedia>
        <span>
          <a href="tel:1-916-248-0939" rel="noopener noreferrer">
            <FaPhone />
          </a>
          <a href="mailto:info@wildflyphotography.com" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/Wild-Fly-Photography-1945618079020910/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/wildflyphotography/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </SocialMedia>

    </Content>
  </Wrapper>
);

export default Header;
