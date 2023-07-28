import * as React from "react";

import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.SVGAttributes<HTMLOrSVGElement> {
  angular?: boolean;
  circular?: boolean;
  variant?: "primary" | "destructive";
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  angular,
  circular,
  variant = "primary",
  ...rest
}) => {
  return <div />;
};
