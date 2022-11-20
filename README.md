## nextjs-starter

![React tests](https://github.com/briangershon/nextjs-starter/actions/workflows/continuous-integration.yaml/badge.svg)

Starter template for Next.js, with TypeScript, tailwindcss and daisyUI.

![home page screenshot](nextjs-starter.png)

## Features

- **Add Next.js v13 with experimental /app support**
  - Uses experimental `/app` layout in Next.js v13 with server components, client components and layouts.
  - Adds example server-rendered component populated with fetch (using data from jokes API). Display message while loading.
  - Note that `fetch` not usable in client components. Use server components or third-party client-side library like Axios if needed. https://beta.nextjs.org/docs/data-fetching/fetching
- Start with minimal [Next.js](https://nextjs.org/) app (using `npm`) via `npx create-next-app nextjs-starter --ts` and simplify content
- Add [tailwindcss](https://tailwindcss.com/) and [daisyUI](https://daisyui.com)
- Add navigation, site layout and two pages
- Add Jest, React Testing Library, GitHub action to run tests, README badge, sample test
- Add Prettier config
- Add health check endpoint (`/api/health`)
- Add placeholder `favicon.ico`

## Run locally

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run tests

```bash
yarn
yarn test
```
