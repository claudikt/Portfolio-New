// Allow importing common asset file types (e.g. .txt, .pdf) as URLs in TypeScript for Vite projects
declare module '*.txt' {
  const src: string;
  export default src;
}

declare module '*.pdf' {
  const src: string;
  export default src;
}

// Fallback for other static assets (images, fonts) if needed
declare module '*?url' {
  const src: string;
  export default src;
}
