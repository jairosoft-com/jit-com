"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Search, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function FormElementsShowcase() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-8">
      {/* Input States */}
      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Input States
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email-input" className="text-sm font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email-input"
                type="email" 
                placeholder="Enter your email" 
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password-input" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password-input"
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password" 
                className="pl-10 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="search-input" className="text-sm font-medium">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="search-input"
                placeholder="Search..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input Variations */}
      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Input Variations
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Input 
              placeholder="Default input" 
              className="transition-all duration-200 focus:scale-[1.02]"
            />
            <Input 
              placeholder="Focused input" 
              className="border-primary ring-1 ring-primary/20 transition-all duration-200"
            />
            <Input 
              placeholder="Success state" 
              className="border-green-500 bg-green-50 dark:bg-green-900/20 transition-all duration-200"
            />
          </div>
          <div className="space-y-3">
            <Input 
              placeholder="Error state" 
              className="border-destructive bg-destructive/5 transition-all duration-200"
            />
            <Input 
              placeholder="Disabled input" 
              disabled 
              className="opacity-50 cursor-not-allowed"
            />
            <Input 
              placeholder="Large input" 
              className="h-12 text-base transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Other Form Elements */}
      <div className="space-y-6">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Form Controls
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="textarea" className="text-sm font-medium">Message</Label>
              <Textarea 
                id="textarea"
                placeholder="Type your message here..." 
                className="min-h-[100px] resize-y transition-all duration-200 focus:scale-[1.01]"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Country</Label>
              <Select>
                <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ph">Philippines</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Preferences</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications" />
                  <Label htmlFor="notifications" className="text-sm font-normal cursor-pointer">
                    Email notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
                    Newsletter subscription
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm font-normal cursor-pointer">
                    Marketing emails
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Label className="text-sm font-medium">Account Type</Label>
              <RadioGroup defaultValue="personal" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="text-sm font-normal cursor-pointer">
                    Personal
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="text-sm font-normal cursor-pointer">
                    Business
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="enterprise" />
                  <Label htmlFor="enterprise" className="text-sm font-normal cursor-pointer">
                    Enterprise
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}