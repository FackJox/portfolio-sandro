import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper> 
    <LinkList>

      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+44 7880 352909">+44 7880 352909 </LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:sandro.gromen-hayes@live.com">sandrog.h@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Capturing minds and imaginations.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.youtube.com/channel/UCxDKRihDBI05H9GvNOR5RWA">
        <AiFillYoutube size ="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/sandro.g.h/">
        <AiFillInstagram size ="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
     </FooterWrapper>
  );
};

export default Footer;
