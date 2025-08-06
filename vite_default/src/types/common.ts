import type { JSX } from "react";

export interface AdminRoute {
  path: string;
  name: string;
  element?: JSX.Element;
  hidden?: boolean;
  children?: AdminRoute[];
}
