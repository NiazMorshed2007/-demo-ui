import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/utils";
import { Spinner } from "./Spinner";

const buttonVariants = cva(
  "inline-flex items-center gap-2 border border-transparent font-medium justify-center rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 transition-shadow focus-visible:ring-offset-1 focus-visible:ring-offset-primary-foreground focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: cn(
          "bg-primary text-primary-foreground hover:bg-primary-accent7 active:bg-primary-accent1 active:text-primary active:border-primary-accent5 disabled:bg-primary-accent2 disabled:text-primary-accent3",
          "dark:hover:bg-dark-light3 dark:active:bg-dark-shape2 dark:active:border-dark-light3 dark:disabled:bg-dark-shape2 dark:disabled:text-primary-accent4"
        ),
        secondary: cn(
          "bg-transparent text-primary border-primary-accent2 hover:text-primary hover:bg-primary-accent1 active:bg-primary-accent1 active:border-primary-accent5 disabled:bg-transparent disabled:text-primary-accent3 disabled:border-border",
          "dark:border-primary-accent6 dark:hover:border-transparent dark:hover:bg-border dark:active:bg-dark-shape2 dark:active:border-primary-accent3 dark:focus-visible:border-transparent dark:focus-visible:bg-dark-shape"
        ),
        destructive: cn(
          "bg-destructive-light text-primary-foreground hover:bg-destructive-dark active:bg-destructive-lighter active:border-destructive active:text-destructive-dark focus-visible:bg-destructive-dark disabled:bg-destructive-lighter disabled:text-destructive-light",
          "dark:bg-destructive dark:text-primary dark:hover:bg-destructive-light dark:active:bg-destructive-lighter dark:active:text-destructive dark:disabled:bg-destructive-lighter dark:disabled:text-destructive-light dark:disabled:border-transparent"
        ),
        ghost: cn(
          "hover:border-primary-accent4 active:bg-primary-accent8 active:text-primary-foreground focus-visble:bg-accent/20 focus-visible:bg-primary-accent1 disabled:text-primary-accent3",
          "dark:text-primary dark:hover:border-dark-light3 dark:active:bg-dark-shape2 dark:disabled:text-primary-accent4"
        ),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-5",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled || loading}
      >
        {loading && (
          <Spinner
            circular
            variant={variant === "destructive" ? "destructive" : "primary"}
          />
        )}{" "}
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
