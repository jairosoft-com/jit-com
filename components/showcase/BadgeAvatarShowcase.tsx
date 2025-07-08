import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Star, Shield, Crown, Zap, Heart, Gift } from "lucide-react";

export function BadgeAvatarShowcase() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Badge Variants
        </h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Badge className="text-xs px-3 py-1">Default</Badge>
          <Badge variant="secondary" className="text-xs px-3 py-1">Secondary</Badge>
          <Badge variant="outline" className="text-xs px-3 py-1">Outline</Badge>
          <Badge variant="destructive" className="text-xs px-3 py-1">Destructive</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Badge Styles with Icons
        </h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Badge className="text-xs px-3 py-1 bg-amber-500 hover:bg-amber-600">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
          <Badge variant="outline" className="text-xs px-3 py-1 border-green-500 text-green-700 dark:text-green-400">
            <Shield className="w-3 h-3 mr-1" />
            Verified
          </Badge>
          <Badge className="text-xs px-3 py-1 bg-purple-500 hover:bg-purple-600">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
          <Badge variant="secondary" className="text-xs px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            New
          </Badge>
          <Badge variant="outline" className="text-xs px-3 py-1 border-pink-500 text-pink-700 dark:text-pink-400">
            <Heart className="w-3 h-3 mr-1" />
            Popular
          </Badge>
          <Badge className="text-xs px-3 py-1 bg-emerald-500 hover:bg-emerald-600">
            <Gift className="w-3 h-3 mr-1" />
            Limited
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Badge Sizes
        </h4>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Badge className="text-[10px] px-2 py-0.5 h-5">XS</Badge>
          <Badge className="text-xs px-2 py-1 h-6">Small</Badge>
          <Badge className="text-sm px-3 py-1 h-7">Medium</Badge>
          <Badge className="text-base px-4 py-2 h-8">Large</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Avatar Sizes
        </h4>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-xs">XS</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="text-sm">SM</AvatarFallback>
          </Avatar>
          <Avatar className="w-12 h-12">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="w-16 h-16">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="w-20 h-20">
            <AvatarFallback className="text-xl">XL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Avatar Styles
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary text-primary-foreground">JI</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-secondary text-secondary-foreground">IT</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Secondary</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">GR</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Gradient</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="w-12 h-12 ring-2 ring-primary ring-offset-2 ring-offset-background">
              <AvatarFallback className="bg-emerald-500 text-white">RI</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Ring</span>
          </div>
        </div>
      </div>
    </div>
  );
}