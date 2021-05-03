export enum AvatarSize {
  ExtraSmall = "extra-small",
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large"
};

export type Props = {
  /**
   * Image source for Avatar.
   */
  image: string;

  /**
   * Size of the Avatar.
   * @default medium
   */
  size?: AvatarSize;

  /**
   * Floating animation switch for Avatar.
   * @default false
   */
  float?: boolean;

  /**
   * Duration of a single float animation is seconds.
   * @default 4
   */
  floatDuration?: number;
};
