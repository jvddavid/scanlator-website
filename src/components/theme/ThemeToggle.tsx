'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-row gap-2">
        <DropdownMenuItem
          className="w-min"
          onClick={() => {
            setTheme('light')
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-min"
          onClick={() => {
            setTheme('dark')
          }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-min"
          onClick={() => {
            setTheme('system')
          }}
        >
          <Monitor className="h-[1.2rem] w-[1.2rem]" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
