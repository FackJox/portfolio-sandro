import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked on a huge range of technologies in the filmaking world, from drones to images to stills to videos to cameras to tripods.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />   
        <ListContainer>
          <ListTitle>Stills</ListTitle>
          <ListParagraph>
            Experience with <br />
            Shiny Camera
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />   
        <ListContainer>
          <ListTitle>Motion</ListTitle>
          <ListParagraph>
            Experience with <br />
            Shiny video camera
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />   
        <ListContainer>
          <ListTitle>Drone</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flying camera thing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
