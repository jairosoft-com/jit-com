# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JIT.com is an educational platform built with Next.js 15, featuring training programs for web development, data science, UI/UX design, and other tech fields. The project uses a comprehensive design system based on shadcn/ui components.

## Key Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### Testing
No test commands are currently configured. When implementing tests, add the test script to package.json.

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router and React Server Components
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with custom design tokens
- **shadcn/ui** components as the foundation
- **Radix UI** primitives for accessibility

### Directory Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with ThemeProvider
├── page.tsx           # Home page
├── program/[id]/      # Dynamic program pages
└── showcase/          # Component showcase

components/            
├── ui/                # shadcn/ui base components (40+ components)
├── showcase/          # Component demo modules
└── [features]/        # Page-level components (Header, Footer, etc.)

styles/                # Global CSS and design tokens
```

### Key Architectural Patterns

1. **Component Composition**: Components use Radix UI primitives and accept `asChild` prop for flexible rendering
2. **Variant System**: Components use `class-variance-authority` for consistent variant APIs
3. **Theme System**: CSS custom properties with dark/light mode support via `next-themes`
4. **Responsive Design**: Custom `useIsMobile()` hook for breakpoint detection
5. **TypeScript Paths**: Use `@/` for root imports, `@/components/*` for components

### Design System

The project has an extensive design system documented in `DESIGN_SYSTEM_USAGE_GUIDE.md`. Key points:
- All components are built on shadcn/ui
- Design tokens are in `design-tokens-complete.json`
- Use the `cn()` utility from `@/components/ui/utils` for className merging
- Follow existing component patterns when creating new components

### Data Handling

Currently, all data is mocked within components. There are no API routes or external service integrations. Program data is statically generated using `generateStaticParams`.

### Important Notes

1. **No Tests Yet**: Testing framework not configured. Ask user for preferred testing approach before implementing tests.
2. **Static Data**: All program and course data is currently hardcoded in components
3. **Image Optimization**: Next.js image optimization is configured but no images are currently used
4. **Build Warnings**: ESLint and TypeScript errors are temporarily ignored in production builds (see next.config.js)

### Common Tasks

When modifying components:
1. Check existing patterns in similar components
2. Use design tokens from CSS custom properties
3. Ensure dark mode compatibility
4. Follow the established variant pattern with CVA
5. Maintain TypeScript strict mode compliance

When adding new features:
1. Place pages in `app/` directory following Next.js App Router conventions
2. Create reusable components in `components/ui/` if they're generic
3. Use Server Components by default, add "use client" only when needed
4. Follow the existing file naming conventions (PascalCase for components)