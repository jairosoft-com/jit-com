import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Code, Database, Palette, Zap, Shield, Rocket } from "lucide-react";
import { Badge } from "../ui/badge";

export function CardShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-border">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg">Basic Card</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Simple card with header and content area for standard layouts
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is the card content area with proper spacing and typography.
          </p>
        </CardContent>
      </Card>

      <Card className="group border-2 border-primary/30 bg-primary/5 hover:border-primary/50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg">Featured Card</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Card with primary border and background highlight
              </CardDescription>
            </div>
            <Badge variant="default" className="ml-2 text-xs">Featured</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This card is highlighted with primary colors and includes a feature badge.
          </p>
        </CardContent>
      </Card>

      <Card className="group bg-muted/50 border-muted-foreground/20 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Palette className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="text-lg">Muted Card</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Card with muted background for subtle presentation
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This card uses muted colors for a more subdued appearance in layouts.
          </p>
        </CardContent>
      </Card>

      {/* Additional cards for more comprehensive showcase */}
      <Card className="group border-amber-200 bg-amber-50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] dark:border-amber-800 dark:bg-amber-900/20">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 dark:from-amber-800 dark:to-amber-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <CardTitle className="text-lg text-amber-800 dark:text-amber-200">Warning Card</CardTitle>
          <CardDescription className="text-sm leading-relaxed text-amber-700 dark:text-amber-300">
            Card with warning colors for important information
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
            Use this style for warnings, alerts, or important notices.
          </p>
        </CardContent>
      </Card>

      <Card className="group border-green-200 bg-green-50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] dark:border-green-800 dark:bg-green-900/20">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-100 dark:from-green-800 dark:to-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">Success Card</CardTitle>
          <CardDescription className="text-sm leading-relaxed text-green-700 dark:text-green-300">
            Card with success colors for positive feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
            Perfect for success messages, confirmations, and positive status indicators.
          </p>
        </CardContent>
      </Card>

      <Card className="group border-purple-200 bg-purple-50 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] dark:border-purple-800 dark:bg-purple-900/20">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-100 dark:from-purple-800 dark:to-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <CardTitle className="text-lg text-purple-800 dark:text-purple-200">Premium Card</CardTitle>
          <CardDescription className="text-sm leading-relaxed text-purple-700 dark:text-purple-300">
            Card with premium styling for special content
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
            Use this style for premium features, special offers, or highlighted content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}