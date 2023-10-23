This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Overview

The aim of the project is to have a fully working git sandbox in-browser with the ability to view the git tree and the repository contents at any point. The project will visualise the branches of the repository similar to the one at [learngitbranching.js.org](https://learngitbranching.js.org/). The graph will show the user the tree of branches, the active branch as well as branch names

The user will be able to interact with the repository state at each node of the working tree and see the files present.

The user will be able to use the terminal to not only to use git but to interact with the active branch through basic commands like `touch`, `rm`, `mkdir`, and `mv`.

This concludes the majority of the functionality of the sandbox.

In addition to the above, we will implement a tutorial system that works within the sandbox by providing an objective, the steps required and the capability to run code to test if the objective has been reached.

To recapitulate, the three main components are
- A git sandbox with a fully working implementation of git, linked to a repository tree state.
- A graph to visualise the repository tree state
- A tutorial system that sets objectives and tests the repository state to see if the result was acheived.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
