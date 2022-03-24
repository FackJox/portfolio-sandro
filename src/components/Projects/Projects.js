import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Recent Work</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
          <BlogCard key={id}>
          <Img src={image} />
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
              <ExternalLinks href={visit}>View</ExternalLinks>
            </UtilityList>
          </BlogCard>
      )
     )}
    </GridContainer>
  </Section>
);

export default Projects;