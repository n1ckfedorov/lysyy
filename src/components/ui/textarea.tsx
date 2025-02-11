import { cn } from '@/lib/utils';

import * as React from 'react';

const Textarea = ({ ref, className, ...props }: React.ComponentProps<'textarea'> & { ref?: any }) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
Textarea.displayName = 'Textarea';

export { Textarea };
