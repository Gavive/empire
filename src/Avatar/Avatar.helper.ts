import { AvatarSize } from "./Avatar.types";

export function getSizeStyle(size: AvatarSize | undefined): string {
  switch (size) {
    case AvatarSize.ExtraSmall:
      return "25px";

    case AvatarSize.Small:
      return "50px";

    case AvatarSize.Medium:
      return "100px";

    case AvatarSize.Large:
      return "150px";

    case AvatarSize.ExtraLarge:
      return "200px";

    default:
      return "100px";
  };
}
