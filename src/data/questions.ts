export interface Question {
  id: number;
  question: string;
  answer: string;
  category: 'html' | 'css' | 'javascript' | 'nextjs' | 'react';
}

export const questions: Question[] = [
  // HTML Questions
  {
    id: 1,
    question: "What is HTML and what does it stand for?",
    answer: "HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure content on the web. HTML uses a system of tags to define elements like headings, paragraphs, links, images, and other content.",
    category: "html"
  },
  {
    id: 2,
    question: "What is the difference between <div> and <span>?",
    answer: "<div> is a block-level element that creates a new line before and after itself, taking up the full width available. <span> is an inline element that only takes up as much width as necessary and doesn't create line breaks.",
    category: "html"
  },
  {
    id: 3,
    question: "What are semantic HTML elements?",
    answer: "Semantic HTML elements clearly describe their meaning to both the browser and developer. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. They improve accessibility, SEO, and code readability.",
    category: "html"
  },
  {
    id: 4,
    question: "What is the purpose of the DOCTYPE declaration?",
    answer: "The DOCTYPE declaration tells the browser which version of HTML the page is written in and ensures the page is rendered in standards mode. For HTML5, it's simply <!DOCTYPE html>.",
    category: "html"
  },
  {
    id: 5,
    question: "What is the difference between <script>, <script async>, and <script defer>?",
    answer: "Regular <script> blocks HTML parsing until the script is downloaded and executed. <script async> downloads the script in parallel and executes it as soon as it's ready, potentially interrupting HTML parsing. <script defer> downloads in parallel but waits to execute until HTML parsing is complete.",
    category: "html"
  },

  // CSS Questions
  {
    id: 6,
    question: "What is the CSS Box Model?",
    answer: "The CSS Box Model describes how elements are rendered on a page. It consists of four parts: Content (the actual content), Padding (space around content), Border (surrounds the padding), and Margin (space outside the border). The total width/height includes all these layers.",
    category: "css"
  },
  {
    id: 7,
    question: "What is the difference between 'position: relative', 'absolute', 'fixed', and 'sticky'?",
    answer: "relative: positioned relative to its normal position. absolute: positioned relative to nearest positioned ancestor. fixed: positioned relative to viewport, stays in place when scrolling. sticky: toggles between relative and fixed based on scroll position.",
    category: "css"
  },
  {
    id: 8,
    question: "Explain Flexbox and its main properties.",
    answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Main properties include: display: flex (enables flexbox), flex-direction (row/column), justify-content (main axis alignment), align-items (cross axis alignment), flex-wrap (wrapping behavior), and gap (spacing between items).",
    category: "css"
  },
  {
    id: 9,
    question: "What is CSS Grid and when would you use it?",
    answer: "CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns. Use it when you need precise control over both horizontal and vertical layout, creating magazine-style layouts, or building complex responsive designs. It's more powerful than Flexbox for 2D layouts.",
    category: "css"
  },
  {
    id: 10,
    question: "What are CSS preprocessors and name some examples?",
    answer: "CSS preprocessors are scripting languages that extend CSS with features like variables, nesting, mixins, and functions. They compile to standard CSS. Examples include Sass (SCSS), Less, and Stylus. They help write more maintainable and DRY (Don't Repeat Yourself) CSS code.",
    category: "css"
  },

  // JavaScript Questions
  {
    id: 11,
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer: "var is function-scoped and can be redeclared/updated. let is block-scoped, can be updated but not redeclared in the same scope. const is block-scoped, cannot be updated or redeclared (though object properties can be modified). Use const by default, let when you need to reassign, avoid var.",
    category: "javascript"
  },
  {
    id: 12,
    question: "Explain closures in JavaScript.",
    answer: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created every time a function is created. They're useful for data privacy, creating factory functions, and callbacks.",
    category: "javascript"
  },
  {
    id: 13,
    question: "What is the Event Loop in JavaScript?",
    answer: "The Event Loop is JavaScript's concurrency model that handles asynchronous operations. It continuously checks the call stack and task queues. When the call stack is empty, it takes tasks from the queue and executes them. This allows JavaScript to be non-blocking despite being single-threaded.",
    category: "javascript"
  },
  {
    id: 14,
    question: "What are Promises and how do they work?",
    answer: "Promises represent the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, or rejected. You can chain .then() for success, .catch() for errors, and .finally() for cleanup. They help avoid callback hell and make async code more readable.",
    category: "javascript"
  },
  {
    id: 15,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "== (loose equality) performs type coercion before comparison, converting values to the same type. === (strict equality) compares both value and type without coercion. For example, 5 == '5' is true, but 5 === '5' is false. Always prefer === to avoid unexpected behavior.",
    category: "javascript"
  },

  // Next.js Questions
  {
    id: 16,
    question: "What is Next.js and why use it?",
    answer: "Next.js is a React framework that provides features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, and file-based routing. It improves performance, SEO, and developer experience while simplifying React application development.",
    category: "nextjs"
  },
  {
    id: 17,
    question: "What is the difference between SSR, SSG, and ISR in Next.js?",
    answer: "SSR (Server-Side Rendering) generates HTML on each request. SSG (Static Site Generation) pre-renders pages at build time. ISR (Incremental Static Regeneration) allows updating static content after build without rebuilding the entire site. Choose based on content update frequency and personalization needs.",
    category: "nextjs"
  },
  {
    id: 18,
    question: "Explain the App Router vs Pages Router in Next.js.",
    answer: "Pages Router (legacy) uses the /pages directory with file-based routing. App Router (Next.js 13+) uses /app directory with React Server Components, improved layouts, nested routing, and streaming. App Router offers better performance and more flexibility, representing the future of Next.js.",
    category: "nextjs"
  },
  {
    id: 19,
    question: "What are Server Components and Client Components in Next.js?",
    answer: "Server Components render on the server, reducing JavaScript bundle size and improving performance. They can't use hooks or browser APIs. Client Components ('use client') render on the client, support interactivity and hooks. By default, components in the App Router are Server Components.",
    category: "nextjs"
  },
  {
    id: 20,
    question: "How does Next.js handle image optimization?",
    answer: "Next.js provides the Image component that automatically optimizes images through lazy loading, responsive sizing, modern formats (WebP/AVIF), blur placeholders, and on-demand optimization. It significantly improves performance and Core Web Vitals without manual configuration.",
    category: "nextjs"
  },

  // React Questions
  {
    id: 21,
    question: "What is React and what makes it popular?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. Its popularity comes from: component-based architecture, virtual DOM for efficient updates, one-way data flow, strong ecosystem, large community, and ability to build both web and mobile apps (React Native).",
    category: "react"
  },
  {
    id: 22,
    question: "What are React Hooks and name the most common ones?",
    answer: "Hooks are functions that let you use state and other React features in functional components. Most common: useState (state management), useEffect (side effects), useContext (context consumption), useRef (mutable refs), useMemo (memoized values), useCallback (memoized callbacks), and useReducer (complex state logic).",
    category: "react"
  },
  {
    id: 23,
    question: "Explain the Virtual DOM and how React uses it.",
    answer: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new Virtual DOM tree, compares it with the previous one (diffing), calculates the minimal changes needed, and updates only those parts in the real DOM. This makes updates efficient.",
    category: "react"
  },
  {
    id: 24,
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled components: Form data is handled by React state, with value and onChange props. React is the 'single source of truth'. Uncontrolled components: Form data is handled by the DOM itself, accessed via refs. Controlled components are recommended for most cases as they provide better control.",
    category: "react"
  },
  {
    id: 25,
    question: "What is prop drilling and how can you avoid it?",
    answer: "Prop drilling is passing props through multiple component layers to reach deeply nested components. Solutions: Context API (for global state), composition (children props), custom hooks, or state management libraries (Redux, Zustand). Choose based on application size and complexity.",
    category: "react"
  },
];

export const getCategoryQuestions = (category: Question['category']): Question[] => {
  return questions.filter(q => q.category === category);
};

