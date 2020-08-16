export type Props = {
  /**
   * Fixed height of the Tile.
   * 
   * @default 15
   */
  height?: number;

  /**
   * Fixed width of the Tile.
   * 
   * @default: 15
   */
  width?: number;

  /**
   * Background box shadow of the tile. Desaturated shadow has no
   * negative spread whereas saturated shadow has negative spread.
   * 
   * @default saturated
   */
  shadowType?: TileShadow;

  /**
   * Background color of the title.
   * 
   * @default #fff (white)
   */
  background?: string;
};

export type State = {

};

export type TileShadow = "none" | "saturated" | "desaturated";
