export function ColorPaletteShowcase() {
  const colorGroups = [
    {
      title: "Primary Colors",
      colors: [
        { name: "Primary", class: "bg-primary", hex: "#4F46E5", description: "Main brand color" },
        { name: "Primary Foreground", class: "bg-primary-foreground border", hex: "#FFFFFF", description: "Text on primary" },
      ]
    },
    {
      title: "Secondary Colors", 
      colors: [
        { name: "Secondary", class: "bg-secondary border", hex: "#F9FAFB", description: "Secondary backgrounds" },
        { name: "Secondary Foreground", class: "bg-secondary-foreground", hex: "#1F2937", description: "Text on secondary" },
      ]
    },
    {
      title: "Neutral Colors",
      colors: [
        { name: "Background", class: "bg-background border", hex: "#FFFFFF", description: "Page background" },
        { name: "Foreground", class: "bg-foreground", hex: "#1F2937", description: "Primary text" },
        { name: "Muted", class: "bg-muted", hex: "#F3F4F6", description: "Subtle backgrounds" },
        { name: "Muted Foreground", class: "bg-muted-foreground", hex: "#6B7280", description: "Secondary text" },
      ]
    },
    {
      title: "Accent Colors",
      colors: [
        { name: "Accent", class: "bg-accent", hex: "#F3F4F6", description: "Accent elements" },
        { name: "Accent Foreground", class: "bg-accent-foreground", hex: "#1F2937", description: "Text on accent" },
      ]
    },
    {
      title: "Status Colors",
      colors: [
        { name: "Destructive", class: "bg-destructive", hex: "#DC2626", description: "Error states" },
        { name: "Destructive Foreground", class: "bg-destructive-foreground", hex: "#FFFFFF", description: "Text on destructive" },
      ]
    },
    {
      title: "UI Colors", 
      colors: [
        { name: "Card", class: "bg-card border", hex: "#FFFFFF", description: "Card backgrounds" },
        { name: "Card Foreground", class: "bg-card-foreground", hex: "#1F2937", description: "Text on cards" },
        { name: "Border", class: "bg-border", hex: "#E5E7EB", description: "Element borders" },
        { name: "Input", class: "bg-input border", hex: "#F9FAFB", description: "Input backgrounds" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {group.title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.colors.map((color, index) => (
              <div key={index} className="group">
                <div className={`w-full h-16 sm:h-20 ${color.class} rounded-xl mb-3 shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5"></div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-sm text-foreground">{color.name}</h5>
                  <p className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {color.hex}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Additional Color Examples */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Extended Palette Examples
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { name: "Red", class: "bg-red-500" },
            { name: "Orange", class: "bg-orange-500" }, 
            { name: "Amber", class: "bg-amber-500" },
            { name: "Yellow", class: "bg-yellow-500" },
            { name: "Lime", class: "bg-lime-500" },
            { name: "Green", class: "bg-green-500" },
            { name: "Emerald", class: "bg-emerald-500" },
            { name: "Teal", class: "bg-teal-500" },
            { name: "Cyan", class: "bg-cyan-500" },
            { name: "Sky", class: "bg-sky-500" },
            { name: "Blue", class: "bg-blue-500" },
            { name: "Indigo", class: "bg-indigo-500" },
            { name: "Violet", class: "bg-violet-500" },
            { name: "Purple", class: "bg-purple-500" },
            { name: "Fuchsia", class: "bg-fuchsia-500" },
            { name: "Pink", class: "bg-pink-500" },
          ].map((color, index) => (
            <div key={index} className="group text-center">
              <div className={`w-full h-12 ${color.class} rounded-lg mb-2 shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105`}></div>
              <p className="text-xs font-medium text-muted-foreground">{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}