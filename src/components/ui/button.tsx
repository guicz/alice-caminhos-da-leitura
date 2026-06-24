import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-12 items-center justify-center rounded-md border-2 border-ink px-5 font-extrabold transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-teal text-cream shadow-[5px_5px_0_#201815]',
        ghost: 'bg-cream text-ink shadow-[5px_5px_0_#201815]',
        compact: 'min-h-10 bg-teal px-4 text-cream'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';
