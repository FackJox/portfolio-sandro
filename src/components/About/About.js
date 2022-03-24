import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Portrait, GridContainer, BlogCard, TitleContent, HeaderThree, Hr, CardInfo, TagList, Tag, UtilityList, ExternalLinks } from './AboutStyles';
import { portrait } from '../../constants/constants';

const data = [
  { number: 2000, text: 'Miles walked'},
  { number: 9000, text: 'Altitudes reached', },
  { number: 30000, text: 'Instagram Followers', },
  { number: 5000, text: 'YouTube Subscribers', }
];



const About = () => (
  <Section nopadding id ="about">
    <SectionDivider />
    <SectionTitle>About</SectionTitle>
    <GridContainer>
    {portrait.map(({ id, image, title, description, tags, motion, stills}) => (
          <BlogCard key={id}>
          <Portrait src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, id) => {
                  <Tag key={id}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={motion}>Motion</ExternalLinks>
              <ExternalLinks href={stills}>Stills</ExternalLinks>
            </UtilityList>
          </BlogCard>
      )
     )} 
      </GridContainer>
    <SectionDivider />
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  </Section>
);

export default About;
