# Krina Portfolio

This repository holds a personal portfolio site built with React + Vite. It showcases projects, skills, and a contact form wired to Web3Forms for email delivery.

## Features

- Responsive, accessible UI built with utility-first styles and a few custom CSS helpers
- Animated section reveals using a small `useReveal` hook (IntersectionObserver)
- Project cards with illustrative thumbnails and tech tags
- A Skills component with an interactive layout
- Contact form integrated with Web3Forms for direct email delivery
- Resume download helper (bundled PDF in `src/assets/`)

## Tech stack

- React (JSX)
- Vite (fast dev server + build)
- Tailwind-style utility classes + custom CSS in `src/index.css`

## Project structure (high level)

- `src/`
	- `assets/` — images, resume PDF and other static assets
	- `components/` — `Navbar`, `Hero`, `Projects`, `ProjectCard`, `About`, `Skills`, `Contact`, `Footer`, etc.
	- `hooks/useReveal.js` — small IntersectionObserver hook used for scroll reveals
	- `utils/downloadResume.js` — programmatic resume download helper
	- `index.css` — global styles and animation keyframes

## Local development

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Environment variables

This project uses one client-side environment variable for the contact form:

- `VITE_WEB3FORMS_KEY` — your Web3Forms access key. Place this in a `.env` file at the project root (same level as `package.json`) when you want the contact form to submit to Web3Forms.

Example `.env`:

```text
VITE_WEB3FORMS_KEY=your_web3forms_key_here
```

If the env var is not set (or left as the placeholder), the contact form will show a local preview success message instead of calling the remote API.

## Resume

Drop your resume PDF in `src/assets/` and name it `Krina Khunt Resume.pdf` (or update `src/utils/downloadResume.js` to match your filename). The site includes a download button that programmatically triggers the file download.

## Deployment

You can deploy the built output (`dist/`) to any static host (Vercel, Netlify, GitHub Pages). For Vercel/Netlify, point the deploy root to the repository and use the default Vite build command `npm run build`.

## Contributing

Small fixes and improvements are welcome. Raise pull requests against `main`. Keep changes focused and add a short explanation in the PR description.

## Notes

- The Web3Forms key is used client-side for convenience; if you want to keep secrets private or add spam protection, consider adding a simple serverless function or proxy to submit the form server-side.
- The project respects reduced-motion preferences and tries to keep animations subtle and accessible.

---

If you'd like, I can add a short "How to customize" section (assets, projects list format, or deploy tips).
