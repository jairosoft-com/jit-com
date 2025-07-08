import { Button } from "../ui/button";
import { Star, Heart, Settings, Download, Plus, ArrowRight } from "lucide-react";

export function ButtonShowcase() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Button Variants
        </h4>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button className="min-w-[80px]">Primary</Button>
          <Button variant="outline" className="min-w-[80px]">Outline</Button>
          <Button variant="ghost" className="min-w-[80px]">Ghost</Button>
          <Button variant="secondary" className="min-w-[80px]">Secondary</Button>
          <Button variant="destructive" className="min-w-[80px]">Destructive</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Button Sizes
        </h4>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Button size="sm" className="h-8 px-3">Small</Button>
          <Button size="default" className="h-10 px-4">Default</Button>
          <Button size="lg" className="h-12 px-6">Large</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Buttons with Icons
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <Button className="justify-start">
            <Star className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Favorite</span>
          </Button>
          <Button variant="outline" className="justify-start">
            <Heart className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Like</span>
          </Button>
          <Button variant="secondary" className="justify-start">
            <Settings className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Settings</span>
          </Button>
          <Button variant="ghost" className="justify-start">
            <Download className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Download</span>
          </Button>
          <Button className="justify-start">
            <Plus className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Add New</span>
          </Button>
          <Button variant="outline" className="justify-start">
            <span>Continue</span>
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
}