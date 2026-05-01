import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <section
      className={cn(
        "w-full mx-auto px-4 sm:px-6 md:max-w-4xl",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;