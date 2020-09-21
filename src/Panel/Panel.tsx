import React, { Component, ReactNode, Fragment } from "react";
import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";
import { Props, State } from "./Panel.types";
import { motion } from "framer-motion";

const Overlay = styled.div`
  top: 0em;
  left: 0em;
  right: 0em;
  bottom: em;
  background-color: rgba(255, 255, 255, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
`;

const PanelContainer = styled(motion.nav)`
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 25.6px 57.6px 0px,
              rgba(0, 0, 0, 0.18) 0px 4.8px 14.4px 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  background-color: white;
  bottom: 0em;
  top: 0em;
  left: auto;
  height: 100vh;
  width: 25em;
  right: 0em;
  z-index: 2;
`;

const Title = styled.span`
    font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-weight: 600;
    color: rgb(50, 49, 48);
    line-height: 27px;
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    float: left;
`;

const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;
  padding: 0em;

  :after {
    content: none;
  }
  :before {
    content: none;
  }
`;

const NavigationControlSection = styled.div`
`;

const CloseIcon = styled(Close)`
  height: 1.5em;
  width: 1.5em;
  float: right;
  margin-right: 0;
  color: inherit;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: none;

  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

const SubTitle = styled.span`
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
  font-weight: 300;
  margin-left: 1em;
  margin-right: 1em;
`;

export default class Panel extends Component<Props, State> {
  public render(): ReactNode {
    return (
        <Fragment>
          {
            this.props.isOpen &&
            <Overlay
              onClick={() => (
                this.props.onClose && !this.props.preventLightDismiss ?
                  this.props.onClose() :
                  undefined
              )}
            />
          }
          <PanelContainer
            animate={this.props.isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, x: 0, width: "25em" },
              closed: { opacity: 0, x: "100%", width: 0 },
            }}
          >
            <NavigationHeader>
              <Title>{this.props.title}</Title>
              <CloseButton onClick={() => this.props.onClose ? this.props.onClose() : undefined }>
                <CloseIcon />
              </CloseButton>
            </NavigationHeader>
            <SubTitle>{this.props.subTitle}</SubTitle>
            {this.props.children}
          </PanelContainer>
        </Fragment>
    );
  }
}
