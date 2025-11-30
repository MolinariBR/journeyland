# Re-Journey Landing Page

**Description**: Official landing page for Re-Journey, a scientific Revalida preparation platform featuring a Dark/Black Paper aesthetic for visual ergonomics.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS | Backend: N/A (Static Landing) | Auth: N/A

## User Preferences
- **Language**: Portuguese (pt-BR)
- **Theme**: Dark / Black Paper (Low contrast, ergonomic)
- **Design**: Scientific, premium, minimalist

## Directory Structure
- `/src/components`: UI sections (Hero, Methodology, ScientificBasis, etc.)
- `/src/App.tsx`: Main layout assembly
- `/src/index.css`: Global styles

## Current Features

### Implemented
1. **Hero Section**: High impact intro with daily questions highlight - `src/components/Hero.tsx`
2. **Methodology**: 6 pillars including Edital Esquematizado - `src/components/Methodology.tsx`
3. **Scientific Basis**: Evidence-based links - `src/components/ScientificBasis.tsx`
4. **Ergonomics**: Visual comfort explanation - `src/components/Ergonomics.tsx`
5. **How It Works**: 4-step process guide - `src/components/HowItWorks.tsx`
6. **Features**: Grid of platform capabilities - `src/components/Features.tsx`
7. **Evolution**: Before/After student stats - `src/components/Evolution.tsx`
8. **Testimonials**: Student success stories - `src/components/Testimonials.tsx`
9. **Pricing**: 6 and 12 month plans with trial badge - `src/components/Pricing.tsx`
10. **FAQ**: Accordion with Edital Esquematizado methodology - `src/components/FAQ.tsx`
11. **Terms of Service**: Complete legal terms page - `src/pages/TermsOfService.tsx`
12. **Privacy Policy**: LGPD-compliant privacy page - `src/pages/Privacy.tsx`
13. **Contact**: Contact form and information - `src/pages/Contact.tsx`
14. **Success Page**: Post-payment confirmation with session validation - `src/pages/Success.tsx`
15. **404 Page**: Custom not found page with navigation - `src/pages/NotFound.tsx`
16. **Documentation**: Complete usage guide with Lucide icons - `src/pages/Docs.tsx`
17. **SEO Optimization**: Meta tags, Open Graph, Twitter Cards, Structured Data (JSON-LD) - `index.html`
18. **Accessibility**: ARIA labels, keyboard navigation, skip links
19. **Analytics Ready**: Placeholders for Google Analytics and Meta Pixel
20. **Sitemap**: XML sitemap for search engines - `public/sitemap.xml`
21. **Security**: CORS restrictions, input validation, balanced rate limiting (20 req/min), sanitization - `functions/create-checkout/index.ts`
22. **Performance**: Code splitting, lazy loading, bundle optimization - `vite.config.ts`, `src/main.tsx`

### Known Limitations
- Stripe secret key needs environment variable migration (planned)
- Analytics tracking IDs need configuration (placeholders ready)
- OG image needs to be created and uploaded to /public/og-image.jpg

## Database Schema

## Deno Functions

## API Endpoints

## Improvement Opportunities

### High Priority

### Medium Priority

### Low Priority / Future Enhancements
