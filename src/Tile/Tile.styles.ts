import { Props } from "./Tile.types";

/**
 * Get the accurate box-shadow styling for the Tile component based
 * on the shadowType prop.
 * 
 * @param props Tile props
 */
export const getBoxShadow = ({ shadowType }: Props) => {
  switch (shadowType) {
    case "none":
      return "none";

    case "saturated":
      return "0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%)";

    case "desaturated":
      return "0 1rem 2rem hsl(0 0% 0% / 20%)";

    default:
      return "0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%)";
  }
}
