import { WebsiteSectionsShowcase } from "./showcase/WebsiteSectionsShowcase";
import { ComponentLibraryShowcase } from "./showcase/ComponentLibraryShowcase";

export function FigmaExportShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <WebsiteSectionsShowcase />
      <ComponentLibraryShowcase />
    </div>
  );
}