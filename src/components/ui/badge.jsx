import React from "react";
import { cva } from "class-variance-authority";

/* Simple cn function */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const badgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider transition-all border",
  {
    variants: {
      variant: {
        default: "bg-black text-white border-black",
        secondary: "bg-white text-black border-black",
        outline: "bg-transparent text-black border-black",
        subtle: "bg-black/5 text-black border-black/20",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}