import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import React from "react";

import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(centered)
  .add("Default", () => <Button label="Click me" />)