import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section';
};

export function Card({ as: Comp = 'div', className, ...props }: CardProps) {
  return (
    <Comp
      className={cn('rounded-md border-2 border-ink bg-cream/90 shadow-[5px_5px_0_#201815]', className)}
      {...props}
    />
  );
}
