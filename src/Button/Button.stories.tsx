import React from "react";
import Button from "./Button";

export default {
  component: Button ,
  title: "Button"
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  label: "Hello Storybook"
};