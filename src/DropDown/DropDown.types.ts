export type Props = {
  title: string;
  color?: string;
  options?: {
    label: string;
    linkTo: string;
  }[];
};

export type State = {
  showBody: boolean;
};
