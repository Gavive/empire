import styled from "styled-components";
import React from "react";
import Tile from './Tile';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export default {
  component: Tile ,
  title: 'Tile',
};

export const Default = () => (
  <Container>
    <Tile shadowType="desaturated">
      Desaturated shadow, no negative spread
    </Tile>
    <Tile shadowType="saturated">
      Saturated shadow, with negative spread
    </Tile>
  </Container>
);
