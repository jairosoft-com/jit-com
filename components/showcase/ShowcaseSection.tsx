import { ReactNode } from "react";

interface ShowcaseSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function ShowcaseSection({ title, children, className = "", id }: ShowcaseSectionProps) {
  return (
    <section className={`mb-8 sm:mb-12 lg:mb-16 ${className}`} id={id}>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
        {title}
      </h3>
      <div className="bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
        {children}
      </div>
    </section>
  );
}