import React from "react";
import styled from "styled-components";

// TODO: Use theme to cahnge styling
// Inspiration: https://codepen.io/vreddi/pen/XWpvRXV
const Input = styled.input`
  background: linear-gradient(145deg, #F2F7FB, #E9F2FB);
  resize: none;
  box-shadow: inset 8px 8px 15px #D9E3EC;
  border-radius: 12px;
  border: none;
  overflow: auto;
  padding: 10px;
  outline: none;
`;

export class TextBox extends React.Component {
  public render():React.ReactNode {
    return (
      <Input />
    );
  }
}
