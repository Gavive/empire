export type Props = {
  /**
   * Title of the panel.
   */
  title?: string;

  /**
   * Sub-title for the panel under the title.
   */
  subTitle?: string;

  /**
   * Indicates if the panel is currently open or not.
   * @default false
   */
  isOpen?: boolean;

  /**
   * Callback for when the close button is clicked on the
   * panel.
   * @default undefined
   */
  onClose?: () => void;

  /**
   * Apart from using the close button on the panel, the panel
   * can also be closed by clicking or tapping the area outside the panel.
   * @default false
   */
  preventLightDismiss?: boolean;
};

export type State = {
};
