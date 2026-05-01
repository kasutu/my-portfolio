'use client'

import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div>
      <div className='relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium'>
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          className='peer data-[state=unchecked]:bg-input/50 absolute inset-0 data-[size=default]:h-[inherit] data-[size=default]:w-14 [&_span]:z-10 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:group-data-[size=default]/switch:size-6.5 [&_span]:data-[state=checked]:translate-x-7 [&_span]:data-[state=checked]:rtl:-translate-x-7'
          aria-label='Switch with permanent icon indicators'
        />
        <span className='pointer-events-none relative ml-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-6 peer-data-[state=unchecked]:rtl:-translate-x-6'>
          <Sun className='size-4' aria-hidden='true' />
        </span>
        <span className='peer-data-[state=checked]:text-background pointer-events-none relative flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full'>
          <Moon className='size-4' aria-hidden='true' />
        </span>
      </div>
    </div>
  )
}

