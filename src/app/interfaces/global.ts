import { Icon } from "iconsax-react";

export type ViewType = "grid" | "row";

export type EmptyResultProps = {
  msg: string;
  color: string;
  Icon: Icon;
  IconClasses?: string;
};
