# Dr. Deena Berkowitz Personal Website

## Project Overview
This is a modern personal portfolio website for Dr. Deena Berkowitz, a Pediatric Emergency Medicine Specialist. The site serves as a professional digital profile highlighting her expertise, legal consultation services, fellowship leadership, clinical roles, and research publications.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** framer-motion
- **Icons:** lucide-react
- **Fonts:** Geist and Geist Mono (via next/font/google)

## Architectural and Styling Conventions
1. **Single Page Layout:** The application primarily uses a single-page structure in `app/page.tsx` with anchor links (`#expertise`, `#legal`, `#research`, `#contact`) for navigation.
2. **Styling Paradigm:** The styling relies on Tailwind CSS utility classes. Custom colors like `primary` and `secondary` are likely defined (or assumed based on usage like `text-primary`, `bg-primary/10`).
3. **Animations:** Framer Motion is heavily utilized for entrance animations (`fadeIn`, `staggerContainer`) and hover effects. Ensure any new components match this animated, modern aesthetic.
4. **Icons:** All icons must be sourced from `lucide-react`.
5. **Component Structure:** As the site grows, consider breaking down `app/page.tsx` into smaller, reusable components (e.g., `HeroSection`, `ExpertiseSection`, `PublicationsSection`) if the file becomes too large or complex.
6. **Images:** The `next/image` component is used for optimized image rendering (e.g., the hero portrait).

## Development Commands
- `npm run dev`: Start the development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.

## Content Management (CMS)
- **Tool:** Keystatic (Git-based CMS)
- **Usage:** Administrators can visually edit the website content by navigating to `/keystatic` when the site is running. 
- **Configuration:** The schema is defined in `keystatic.config.ts`.
- **Data Storage:** Content is stored locally in the `/content` directory as JSON files. In production, Keystatic syncs directly with the GitHub repository.
- **Frontend Integration:** Because the main UI (`HomeClient.tsx`) heavily utilizes `framer-motion` (requiring a Client Component), `app/page.tsx` acts as an asynchronous Server Component that reads from the `lib/keystatic` reader and passes the dynamic `homepageData` and `publicationsData` to the Client Component as props.
