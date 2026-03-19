# Lab 08: Server-Side Rendering with Next.js

## Overview
This lab implements SSR, SSG, and ISR using Next.js.  

### Key Pages
- `/` → Home (SSG + ISR)  
- `/posts/[id]` → Dynamic blog posts (SSG)  
- `/dashboard` → User dashboard (SSR)  
- `/about` → About page (SSG)  
- `/about-ssr` → About page (SSR, for comparison)  

### Concepts
- **SSR**: Server renders page on each request → fresh data  
- **SSG**: Page built at build time → fastest load  
- **ISR**: Page rebuilt in background after interval → mix of SSR & SSG  

### Project Structure

pages/
index.tsx # SSG home
posts/[id].tsx # Dynamic post pages
dashboard.tsx # SSR dashboard
about.tsx # SSG about
about-ssr.tsx # SSR about
lib/api.ts # Mock data
types/index.ts # TS interfaces


### How to Run
```bash
npm install
npm run dev

Open http://localhost:3000
