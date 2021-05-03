export enum Position {
  Left ="left",
  Right ="right"
};

export type Props = {
  /**
   * Position of the stepped surface.
   * @default Right
   */
  position?: Position;

  /**
   * Width of the stepped surface in pixels. Maximum width of the
   * surface is capped at 50% of the containing component's width.
   * @default 500
   */
  width?: number;
};