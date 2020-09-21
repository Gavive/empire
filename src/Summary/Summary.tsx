import React, { Component, ReactNode } from "react";
import { Props, State } from "./Summary.types";
import styled from "styled-components";

const SummaryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'Avenir', 'Helvetica', sans-serif;
`;

const SummaryItemTitle = styled.span`
  font-weight: 500;
  word-wrap: none;
`;

const SummaryItemValue = styled.span`
`;

const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
  grid-gap: 1.5em;

  :after {
    content: none;
  }
  :before {
    content: none;
  }
`;

export default class Summary extends Component<Props, State> {
  public render(): ReactNode {
    return (
      <SummaryContainer>
        {this.props.items.map(item => (
          <SummaryItemContainer>
            <SummaryItemTitle>{item.label}</SummaryItemTitle>
            <SummaryItemValue>{item.value}</SummaryItemValue>
          </SummaryItemContainer>
        ))}
      </SummaryContainer>
    );
  }
}