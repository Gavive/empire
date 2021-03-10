export type Props = {
  /**
   * List of summary items displayed in a summary set.
   * @default []
   */
  items: SummaryItem[];
};

export type SummaryItem = {
  /**
   * Title of the summary item.
   */
  label: string;

  /**
   * Value of the summary item displayed under
   * the title.
   */
  value: string | number;
}

export type State = {

};
