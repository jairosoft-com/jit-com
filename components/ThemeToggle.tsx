"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0 transition-all duration-300"
        >
          <div className="relative w-4 h-4">
            <Sun className={`absolute h-4 w-4 transition-all duration-300 ${
              actualTheme === 'light' && theme !== 'system'
                ? 'rotate-0 scale-100' 
                : 'rotate-90 scale-0'
            }`} />
            <Moon className={`absolute h-4 w-4 transition-all duration-300 ${
              actualTheme === 'dark' && theme !== 'system'
                ? 'rotate-0 scale-100' 
                : '-rotate-90 scale-0'
            }`} />
            <Monitor className={`absolute h-4 w-4 transition-all duration-300 ${
              theme === 'system'
                ? 'rotate-0 scale-100' 
                : 'rotate-90 scale-0'
            }`} />
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}