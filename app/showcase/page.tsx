import { FigmaExportShowcase } from '../../components/FigmaExportShowcase'
import { ScrollArea } from '../../components/ui/scroll-area'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Component Showcase - JIT.com',
  description: 'Explore our comprehensive component library built with Tailwind CSS and shadcn/ui, ready for Figma integration.',
  openGraph: {
    title: 'Component Showcase - JIT.com',
    description: 'Explore our comprehensive component library built with Tailwind CSS and shadcn/ui, ready for Figma integration.',
  },
}

export default function ShowcasePage() {
  return (
    <ScrollArea className="h-screen">
      <FigmaExportShowcase />
    </ScrollArea>
  )
}