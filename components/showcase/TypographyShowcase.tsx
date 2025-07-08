export function TypographyShowcase() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Heading 1 - Hero Title
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-3xl sm:text-4xl lg:text-5xl • font-bold • tracking-tight
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
          Heading 2 - Section Title
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-2xl sm:text-3xl lg:text-4xl • font-semibold • tracking-tight
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
          Heading 3 - Subsection
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-xl sm:text-2xl lg:text-3xl • font-semibold
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground">
          Heading 4 - Component Title
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-lg sm:text-xl lg:text-2xl • font-medium
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <p className="text-base sm:text-lg leading-relaxed text-foreground">
          Body text - This is the main paragraph text used throughout the application for content and descriptions. 
          It maintains excellent readability across all device sizes and provides a comfortable reading experience.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-base sm:text-lg • font-normal • leading-relaxed
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Secondary text - Used for captions, descriptions, and supplementary information. 
          This text maintains hierarchy while providing important context.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-sm sm:text-base • text-muted-foreground • leading-relaxed
        </p>
      </div>
      
      <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50">
        <p className="text-xs sm:text-sm text-muted-foreground/80 uppercase tracking-wider font-medium">
          Small caps text - Labels and metadata
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          text-xs sm:text-sm • uppercase • tracking-wider • font-medium
        </p>
      </div>
      
      {/* Text Styling Examples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="space-y-3 p-4 rounded-lg border border-border/50 bg-card/50">
          <h5 className="font-semibold text-foreground mb-3">Text Emphasis</h5>
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Regular text color</p>
            <p className="text-muted-foreground">Muted text color</p>
            <p className="text-primary">Primary text color</p>
            <p className="text-destructive">Destructive text color</p>
            <p className="font-bold text-foreground">Bold weight</p>
            <p className="font-medium text-foreground">Medium weight</p>
            <p className="italic text-foreground">Italic style</p>
            <p className="underline text-foreground">Underlined text</p>
          </div>
        </div>
        
        <div className="space-y-3 p-4 rounded-lg border border-border/50 bg-card/50">
          <h5 className="font-semibold text-foreground mb-3">Text Utilities</h5>
          <div className="space-y-2 text-sm">
            <p className="text-left">Left aligned text</p>
            <p className="text-center">Center aligned text</p>
            <p className="text-right">Right aligned text</p>
            <p className="uppercase tracking-wide">Uppercase text</p>
            <p className="lowercase">Lowercase text</p>
            <p className="capitalize">Capitalized text</p>
            <p className="truncate w-32">This text will be truncated</p>
            <p className="line-through text-muted-foreground">Strikethrough text</p>
          </div>
        </div>
      </div>
    </div>
  );
}