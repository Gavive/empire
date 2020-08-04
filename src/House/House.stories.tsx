import React from "react";
import House from "./House";
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

storiesOf("House", module)
  .addDecorator(centered)
  .add("Default", () => <House />)
