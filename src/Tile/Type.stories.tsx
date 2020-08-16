import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import styled from "styled-components";
import React from "react";

import Tile from './Tile';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

storiesOf("Tile", module)
  .addDecorator(centered)
  .add("Default", () => (
    <Container>
      <Tile shadowType="desaturated">
        Desaturated shadow, no negative spread
      </Tile>
      <Tile shadowType="saturated">
        Saturated shadow, with negative spread
      </Tile>
    </Container>
  ))