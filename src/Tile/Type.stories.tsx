import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import styled from "styled-components";
import React from "react";
import Tile from './Tile';

import { text, withKnobs } from '@storybook/addon-knobs';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export default {
  component: Tile ,
  title: 'Tile',
  decorators: [withKnobs],
};

export const Default = () => (
  <Container>
    <Tile shadowType="desaturated">
      {text('Desaturated label', 'Desaturated shadow, no negative spread')}
    </Tile>
    <Tile shadowType="saturated">
      {text('Saturated label', 'Saturated shadow, with negative spread')}
    </Tile>
  </Container>
);
