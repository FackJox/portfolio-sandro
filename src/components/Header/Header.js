import Link from 'next/link';
import React from 'react';
import { AiFillYoutube, AiFillInstagram, } from 'react-icons/ai';
import { GiMountaintop } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px', marginLeft: '5px' }}>
          <GiMountaintop size="3rem" /><Span>sandro.gh</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#stills">
          <NavLink>Stills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#motion">
          <NavLink>Motion</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#enquiries">
          <NavLink>Enquiries</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.youtube.com/channel/UCxDKRihDBI05H9GvNOR5RWA">
        <AiFillYoutube size ="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/sandro.g.h/">
        <AiFillInstagram size ="3rem" />
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
