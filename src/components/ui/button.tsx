import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [&:not(:focus)]:shadow hover:bg-primary/90",
        destructive:
          "bg-destructive-foreground text-destructive [&:not(:focus)]:shadow hover:bg-destructive/5 focus:bg-destructive/5 focus:shadow-inner",
        hyperDestructive:
          "bg-destructive text-destructive-foreground [&:not(:focus)]:shadow hover:bg-destructive/5 hover:text-destructive focus:bg-destructive/5 focus:shadow-inner",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-background text-secondary-foreground [&:not(:focus)]:shadow hover:bg-secondary/80 focus:bg-secondary/60 focus:shadow-inner",
        icon: "bg-background text-sky-600 disabled:text-sky-300 disabled:cursor-not-allowed [&:not(:focus)]:shadow hover:bg-secondary/80 focus:bg-secondary/60 focus:shadow-inner",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
