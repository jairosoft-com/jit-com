import { ReactNode } from "react";

interface WebsiteSectionProps {
  title: string;
  children: ReactNode;
}

export function WebsiteSection({ title, children }: WebsiteSectionProps) {
  return (
    <section className="border-b-4 border-primary/20 bg-background overflow-hidden">
      <div className="bg-primary/5 border-b border-primary/10 px-4 py-3 sm:py-4 text-center">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-primary tracking-tight">
          {title}
        </h2>
      </div>
      <div className="relative">
        {children}
      </div>
    </section>
  );
}