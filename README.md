# Front-end assignment

## Quick start

1. Install dependencies
```
npm i
```
2. Run app in development mode
```
npm run dev
```

## Production preview

1. Build the app
```
npm run build
```
2. Run app in production mode
```
npm run preview
```

## Features

1. Set hotel visibility on different channels
2. Dark mode (based on OS setting with prefers-color-scheme)
3. Accessible components
4. Tailwind-based styling
5. Data persistence with LocalStorage

## Libraries

1. React (with Typescript)
2. Tailwind for styling
3. React Aria for implementation of accessible components
4. Vite

## Possible improvements

1. Manual switch for dark mode (https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
2. Use server and database to query and persist data about users, hotels and channels (example: Express + MongoDB + Mongoose)
3. Unit tests for React hooks
4. Refactor dark mode colors (they were not provided in Figma file)
5. Refactor focus, hover and other colors (they were not provided in Figma file)

## Folder structure and configuration
Configuration:
`tailwind.config.js` - theme configuration (color palette, fonts)

Folders:
`src/api` - methods for API endpoints
`src/components` - common app components
`src/pages` - app pages
