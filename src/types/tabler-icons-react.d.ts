// Ambient declaration for @tabler/icons-react.
// The installed build (3.35.0) ships without bundled type declarations, so we
// declare the module here. Icons are React components accepting standard SVG
// props plus optional `size` and `stroke`. This adds no runtime behavior.
declare module "@tabler/icons-react" {
  import { FunctionComponent, SVGProps } from "react";

  export interface TablerIconsProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    stroke?: string | number;
  }

  export type Icon = FunctionComponent<TablerIconsProps>;

  export const IconArrowLeft: Icon;
  export const IconArrowRight: Icon;
}
