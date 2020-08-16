export type Props = {
  title: string;

  /**
   * Base color of the text and base features of the
   * drop down.
   */
  color?: string;

  /**
   * Options of the dropdown. If nothing is provided then the
   * title of the drop-down acts as a link.
   */
  options?: DropDownOption[];
};

export type DropDownOption = {
    /**
     * Label of the option in the drop down.
     */
    label: string;

    /**
     * href link for the option.
     */
    linkTo: string
};

export type State = {
  showBody: boolean;
};
