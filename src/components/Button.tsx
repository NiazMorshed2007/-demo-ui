import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center gap-2 border border-transparent justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 active:bg-accent/20 active:text-primary active:border-accent hover:border-accent disabled:bg-primary/20 disabled:text-secondary-foreground ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-dark hover:border-destructive active:bg-destructive/20 active:text-destructive disabled:bg-destructive/20 disabled:text-destructive ",
        secondary:
          "bg-transparent border-accent/50 hover:border-transparent text-secondary-foreground hover:text-white hover:bg-primary/80 active:bg-primary ",
        ghost:
          "hover:border-accent active:bg-primary active:text-primary-foreground focus:bg-accent/20 focus:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-5",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, loading, children, size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          `${loading ? "opacity-40 pointer-events-none" : ""}`
        )}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" size={15} />}{" "}
        {size === "icon" ? (
          <>{loading ? <></> : <>{children}</>}</>
        ) : (
          <>{children}</>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
