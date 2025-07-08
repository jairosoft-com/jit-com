import { ShowcaseSection } from "./ShowcaseSection";
import { ButtonShowcase } from "./ButtonShowcase";
import { CardShowcase } from "./CardShowcase";
import { FormElementsShowcase } from "./FormElementsShowcase";
import { BadgeAvatarShowcase } from "./BadgeAvatarShowcase";
import { TypographyShowcase } from "./TypographyShowcase";
import { ColorPaletteShowcase } from "./ColorPaletteShowcase";

export function ComponentLibraryShowcase() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30 dark:bg-muted/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            Component Library for Figma
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of UI components built with Tailwind CSS, ready for screenshot and import to Figma. 
            Each component follows design system best practices and accessibility guidelines.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <ShowcaseSection title="Buttons" className="scroll-mt-20" id="buttons">
            <ButtonShowcase />
          </ShowcaseSection>

          <ShowcaseSection title="Cards" className="scroll-mt-20" id="cards">
            <CardShowcase />
          </ShowcaseSection>

          <ShowcaseSection title="Form Elements" className="scroll-mt-20" id="forms">
            <FormElementsShowcase />
          </ShowcaseSection>

          <ShowcaseSection title="Badges & Avatars" className="scroll-mt-20" id="badges-avatars">
            <BadgeAvatarShowcase />
          </ShowcaseSection>

          <ShowcaseSection title="Typography Scale" className="scroll-mt-20" id="typography">
            <TypographyShowcase />
          </ShowcaseSection>

          <ShowcaseSection title="Color Palette" className="scroll-mt-20" id="colors">
            <ColorPaletteShowcase />
          </ShowcaseSection>
        </div>

        {/* Quick Navigation */}
        <nav className="mt-16 sm:mt-20 lg:mt-24 p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 text-center">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: "Buttons", href: "#buttons" },
              { name: "Cards", href: "#cards" },
              { name: "Forms", href: "#forms" },
              { name: "Badges", href: "#badges-avatars" },
              { name: "Typography", href: "#typography" },
              { name: "Colors", href: "#colors" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}