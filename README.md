### MyPlatform is an LMS designed for creating, managing, and delivering courses online.

![MyPlatform dashboard page](public/MyPlatform_Dashboard.png)

MyPlatform is an LMS platform inspired by the Code With Antonio video Building a Fullstack LMS With Next.js, Prisma, and Tailwind CSS.
Initially, I followed the course, but I realized I was just copying his code and not really learning. So, I decided to stop following the course and use the video as a reference, developing the platform by myself.

During the development process, I learned a lot about Next.js, Prisma, TypeScript, Uploadthing, Tailwind CSS, Shadcn/ui, Zod, and many other things, including how to host a PostgreSQL database online and how to work with it. Initially, I used Vercel for hosting, but later switched to SupaBase for more database space.

## Getting Started

First, clone the repository

```shell
git clone https://github.com/marceloxhenrique/myPlatform2.0.git
# or
yarn dev
# or
pnpm dev
```

## Install packages

```shell
npm install
```

## Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_TEACHER_ID1=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## Setup Prisma

```shell
npm prisma generate
npx prisma db push
```

## Start the app

```shell
npm run dev
```
