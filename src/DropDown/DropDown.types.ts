/**
 * HTML reference for <select />
 * https://www.w3schools.com/tags/tag_select.asp
 */
export type Props = {
  title: string;

  /**
   * Base color of the text and base features of the
   * drop down.
   */
  color?: string;

  /**
   * Specifies that the drop-down list should automatically get focus when the page loads.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Defines which form the drop-down list belongs to.
   * @default undefined
   */
  formId?: string;

  /**
   * Specifies that multiple options can be selected at once.
   * @default false
   */
  multiple?: boolean;

  /**
   * Specifies that a drop-down list should be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines a name for the drop-down list.
   * @default undefined
   */
  name?: string;

  /**
   * Specifies that the user is required to select a value before submitting the form.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the number of visible options in a drop-down list.
   */
  size?: number;

  /**
   * List of option groups under the drop-down. The order in which the option group
   * is provided is the order in which the option groups show up.
   */
  optionGroups: OptionGroup[];

  /**
   * Options of the dropdown. If nothing is provided then the
   * title of the drop-down acts as a link.
   * @default []
   */
  options?: DropDownOption[];
};

/**
 * HTML reference for <optgroup />
 * https://www.w3schools.com/tags/tag_optgroup.asp
 */
export type OptionGroup = {
  /**
   * Unique id for the option group.
   */
  id: string;

  /**
   * Label of the option group.
   */
  label: string;

  /**
   * Specifies that an option-group should be disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * HTML reference for <option />
 * https://www.w3schools.com/tags/tag_option.asp
 */
export type DropDownOption = {
    /**
     * Label of the option in the drop down.
     */
    label: string;

    /**
     * Value of the selected dropdown option
     */
    value: string | number;

    /**
     * Specifies that an option should be pre-selected.
     */
    selected?: boolean;

    /**
     * Specifies that an option should be disabled
     */
    disabled?: boolean;

    /**
     * Associated option group id if this option is part of an
     * option group.
     */
    optionGroupId: string;
};

export type State = {
  showBody: boolean;
};
