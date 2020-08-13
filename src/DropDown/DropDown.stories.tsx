import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import React from "react";

import DropDown from './DropDown';

storiesOf("DropDown", module)
  .addDecorator(centered)
  .add("Default", () => <DropDown title="Features" color="#416dea" />)