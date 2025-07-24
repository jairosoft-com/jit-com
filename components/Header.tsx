"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Bell, Search, User, BookOpen, Award, Phone, Palette, Home, LogIn, UserPlus } from "lucide-react";

export function Header() {
  const router = useRouter();
  return (
    <TooltipProvider>
      <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
                    J
                  </AvatarFallback>
                </Avatar>
                <Link 
                  href="/"
                  className="text-2xl text-primary font-bold hover:text-primary/80 transition-colors"
                >
                  JIT.com
                </Link>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                <Award className="w-3 h-3 mr-1" />
                Accredited
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/"
                    className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer group flex items-center space-x-1"
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Courses</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/showcase"
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <Palette className="w-4 h-4" />
                    <span>Showcase</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/sign-in"
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/sign-up"
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Register</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search courses</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 px-0 relative">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                      3
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              <Separator orientation="vertical" className="h-6" />
              
              <Button size="sm" className="ml-2">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <ThemeToggle />
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                          J
                        </AvatarFallback>
                      </Avatar>
                      <span>JIT.com</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4">
                    {/* Quick Stats */}
                    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="font-bold text-primary">5K+</div>
                            <div className="text-xs text-muted-foreground">Students</div>
                          </div>
                          <div>
                            <div className="font-bold text-primary">95%</div>
                            <div className="text-xs text-muted-foreground">Success Rate</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Separator />
                    
                    {/* Navigation */}
                    <nav className="flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        className="justify-start"
                        asChild
                      >
                        <Link href="/">
                          <div className="flex items-center space-x-2">
                            <span>🏠</span>
                            <span>Home</span>
                          </div>
                        </Link>
                      </Button>
                      
                      <Button variant="ghost" className="justify-start">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Courses</span>
                          <Badge variant="secondary" className="ml-auto text-xs">6</Badge>
                        </div>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        className="justify-start"
                        asChild
                      >
                        <Link href="/showcase">
                          <div className="flex items-center space-x-2">
                            <Palette className="w-4 h-4" />
                            <span>Showcase</span>
                            <Badge variant="outline" className="ml-auto text-xs">New</Badge>
                          </div>
                        </Link>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        className="justify-start"
                        asChild
                      >
                        <Link href="/sign-up">
                          <div className="flex items-center space-x-2">
                            <UserPlus className="w-4 h-4" />
                            <span>Register</span>
                          </div>
                        </Link>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        className="justify-start"
                        asChild
                      >
                        <Link href="/sign-in">
                          <div className="flex items-center space-x-2">
                            <LogIn className="w-4 h-4" />
                            <span>Sign In</span>
                          </div>
                        </Link>
                      </Button>
                    </nav>

                    <Separator />

                    {/* Contact Info */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">+63 (2) 8123-4567</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">📧 info@jit.com</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA Button */}
                    <Button className="w-full" size="lg">
                      Sign Up Now
                    </Button>

                    {/* Trust Badges */}
                    <div className="flex justify-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Accredited
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ✓ Certified
                      </Badge>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}