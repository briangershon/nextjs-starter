## nextjs-starter

![React tests](https://github.com/briangershon/nextjs-starter/actions/workflows/continuous-integration.yaml/badge.svg)

Starter template for Next.js, with TypeScript, tailwindcss and daisyUI.

![home page screenshot](nextjs-starter.png)

## Features

- **Add Experimental Next.js v13 Support**
  - Uses experimental `/app` layout in Next.js v13 with server components, client components and layouts.
  - `next/head` is now moved into `head.js`, but "currently, the Head export does not re-render on client-side transitions, only on initial render. To work around this for `<title>`, you can use a client component with useEffect that updates document.title. This will be fixed soon in a future release."
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
