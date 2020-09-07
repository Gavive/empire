export type Props<T> = {
  data: T[];
  columns?: TableColumn[];

  /**
   * On hover or selection the background of the row changes as a visual
   * indicator.
   * 
   * @default true
   */
  showRowHoverBackground?: boolean;
};

export type TableColumn = {
  /**
   * Title of the column.
   */
  label: string;

  /**
   * Key to lookup in every data object for the value of each
   * row under the column.
   */
  key: string;
};
