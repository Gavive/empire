export type Props = {
  /**
   * TODO: Update typing for theme using @gavive/theme package
   */
  theme?: any;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * [Accessibility]
   * Label of the button element for screen readers.
   * If nothing is provided the label is used by default.
   */
  ariaLabel?: string;

  /**
   * [Accessibility]
   * Detailed description of the button for screen readers.
   */
  ariaDescription?: string;

  /**
   * [Accessibility]
   * If provided and is true it adds an 'aria-hidden' attribute
   * instructing screen readers to ignore the element.
   */
  ariaHidden?: boolean | "true" | "false";

  /**
   * Callback for when the button is clicked.
   */
  onClick?: () => void;

  /**
   * Label of the button.
   */
  label: string;
};

export type State = {
};
