# JIT.com Educational Platform - Next.js 15

A modern educational platform built with Next.js 15 and shadcn/ui components, featuring a comprehensive design system and training programs.

## Features

- **Next.js 15**: Latest Next.js with App Router and React Server Components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Complete theme system with smooth transitions
- **Component Library**: Extensive collection of reusable UI components
- **Training Programs**: Detailed program pages with curriculum information
- **Design System**: Comprehensive design tokens and component showcase
- **Accessibility**: WCAG compliant components with proper focus management
- **SEO Optimized**: Built-in SEO with metadata API
- **Performance**: Optimized with automatic code splitting and image optimization

## Tech Stack

- **Next.js 15**: React framework with App Router
- **React 18**: Latest React with Server Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Latest utility-first CSS framework
- **shadcn/ui**: High-quality, accessible component library
- **Lucide React**: Beautiful icons with consistent styling

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jit-educational-platform.git
   cd jit-educational-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── showcase/       # Component showcase page
│   ├── program/[id]/   # Dynamic program pages
│   └── not-found.tsx   # 404 page
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── showcase/       # Component showcase modules
│   └── ...             # Feature-specific components
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Routes

- `/` - Home page with training programs
- `/showcase` - Component library showcase
- `/program/[id]` - Individual training program pages
  - `/program/web-development`
  - `/program/data-science`
  - `/program/ui-ux-design`
  - `/program/digital-marketing`
  - `/program/project-management`
  - `/program/cybersecurity`

## Design System

The application includes a comprehensive design system with:

- **Color Palette**: CSS custom properties with dark/light mode support
- **Typography**: Responsive typography scale
- **Spacing**: Consistent spacing system
- **Components**: 30+ reusable UI components
- **Icons**: Lucide React icon library
- **Animations**: Smooth transitions and micro-interactions

## Key Features

### App Router Benefits
- **Server Components**: Better performance with server-side rendering
- **Nested Layouts**: Shared layouts with nested routing
- **Loading States**: Built-in loading UI
- **Error Handling**: Automatic error boundaries
- **Metadata API**: Dynamic SEO and social sharing

### Component Showcase
- **Interactive Demos**: Live component demonstrations
- **Responsive Design**: Mobile-first responsive patterns
- **Accessibility**: WCAG 2.1 AA compliant
- **Tailwind Integration**: Comprehensive Tailwind CSS usage

### Training Programs
- **Dynamic Routing**: SEO-friendly program URLs
- **Rich Content**: Detailed curriculum and instructor information
- **Responsive Design**: Optimized for all devices
- **Performance**: Fast page loads with Next.js optimization

## Customization

### Theme Configuration
The theme system uses CSS custom properties in `styles/globals.css`:

```css
:root {
  --primary: #4f46e5;
  --background: #ffffff;
  /* ... other design tokens */
}

.dark {
  --primary: #6366f1;
  --background: #111827;
  /* ... dark mode tokens */
}
```

### Adding New Pages
Create new pages in the `app` directory:

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>
}
```

## Performance Optimizations

- **Automatic Code Splitting**: Route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Automatic font optimization
- **Bundle Analysis**: Built-in bundle analyzer
- **Server Components**: Reduced client-side JavaScript

## SEO & Metadata

Dynamic metadata for better SEO:

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
  },
}
```

## Development

### Building for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript is configured with strict mode for better code quality.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Radix UI](https://www.radix-ui.com/) for the accessible primitives

## Contact

For questions or support, please contact us at:
- Email: info@jit.com
- Website: [https://jit.com](https://jit.com)

---

Built with ❤️ by the JIT.com team using Next.js 15