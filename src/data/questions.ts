export interface Question {
  id: number;
  question: string;
  answer: string;
  category: 'html' | 'css' | 'javascript' | 'nextjs' | 'react' | 'output-based';
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
    question: "What is the use of doctype in HTML?",
    answer: "The <!DOCTYPE> declaration in HTML is used to tell the browser which version of HTML the page is written in. It's not an HTML tag, but an instruction for the browser. In modern web development, we usually write <!DOCTYPE html> which indicates HTML5. Its main purpose is to ensure the browser renders the page in standards mode instead of quirks mode. Standards mode follows the official HTML and CSS specifications, while quirks mode tries to emulate old, non-standard behavior for legacy pages. By declaring the doctype, we make sure our page is interpreted consistently across different browsers, which improves compatibility and prevents unexpected layout or styling issues.",
    category: "html"
  },
  {
    id: 3,
    question: "What is the difference between HTML and HTML5?",
    answer: "HTML (older versions, like HTML 4.01) was primarily focused on structuring content with limited support for multimedia, semantic elements, and modern web APIs, more reliant on external plugins (like Flash) for audio, video, and interactive content. HTML5 is designed for modern web development with rich features. It introduces semantic tags like <header>, <nav>, <section>, <article>, <footer> for better structure. HTML5 natively supports audio, video, canvas, SVG, and offline storage without plugins. It includes new APIs like Geolocation, Web Storage, Web Workers, and Drag & Drop. HTML5 focuses on performance, accessibility, and cross-device compatibility. In short: HTML = basic structure, HTML5 = modern, semantic, multimedia-rich, and API-enabled web standard.",
    category: "html"
  },
  {
    id: 4,
    question: "What is the use of head tag?",
    answer: "The <head> tag in HTML is used to hold metadata and resources about the web page that are not directly displayed to the user. It can include things like the page <title>, links to CSS stylesheets, JavaScript files, meta tags for SEO and responsiveness, favicons, and other information needed for the browser and search engines. In short, the <head> acts as the configuration section of the web page—helping with styling, behavior, and optimization—while the <body> is for the actual visible content.",
    category: "html"
  },
  {
    id: 5,
    question: "What is the difference between async and defer?",
    answer: "In HTML, both async and defer are attributes used when loading external JavaScript files with the <script> tag, and both help improve page performance by preventing the script from blocking HTML parsing. async: The script is downloaded in parallel with the HTML parsing and executes immediately once it's ready, even if the HTML is still being parsed. This means scripts load faster, but execution order is not guaranteed if multiple async scripts are used. defer: The script is also downloaded in parallel but executes only after the HTML is fully parsed, and in the order they appear in the document. This ensures scripts don't interfere with rendering and maintain predictable execution order. Use async for independent scripts (like analytics) and defer for scripts that rely on the DOM structure or need to run in sequence.",
    category: "html"
  },
  {
    id: 6,
    question: "List of new HTML5 semantic tags?",
    answer: "HTML5 introduced several semantic tags that give meaning to the structure of a web page. Unlike generic <div> and <span>, these tags describe the role of the content, which improves readability, accessibility, and SEO. Some important semantic tags are: <header> (top section of a page or section), <nav> (navigation links), <section> (thematic grouping of content), <article> (independent, self-contained content like blogs or news), <aside> (side content such as ads or sidebars), <footer> (footer of a page or section), <main> (main content of the document), <figure> and <figcaption> (images/illustrations with captions), <mark> (highlighting text), and <time> (dates and times). These tags make the structure more meaningful for both browsers and developers.",
    category: "html"
  },
  {
    id: 7,
    question: "What is the difference between block level and inline element in HTML?",
    answer: "In HTML, elements are broadly classified as block-level and inline elements based on how they behave in the document flow. Block-level elements always start on a new line, take up the full width available (by default), and can contain other block-level and inline elements. Examples: <div>, <p>, <section>, <header>, <article>. Inline elements do not start on a new line, only take up as much width as their content requires, and are usually used for styling or small parts of text. Examples: <span>, <a>, <strong>, <em>, <img>.",
    category: "html"
  },
  {
    id: 8,
    question: "What is the difference between HTML, XHTML, and HTML5?",
    answer: "HTML (HyperText Markup Language) is the original standard for creating web pages - more flexible and forgiving where browsers can still render pages even if the code has errors. XHTML (Extensible HTML) is a stricter version of HTML that follows XML rules where tags must be properly closed, nested, and written in lowercase (e.g., <br /> instead of <br>), designed for cleaner, well-structured documents but was considered too rigid. HTML5 is the latest and current standard - more flexible than XHTML but more structured than old HTML. It introduced semantic tags, multimedia support (<audio>, <video>), APIs (local storage, canvas, geolocation), and better support for modern devices. HTML5 focuses on performance, cross-platform compatibility, and reducing the need for external plugins like Flash.",
    category: "html"
  },
  {
    id: 9,
    question: "What is the difference between <div> and <span>?",
    answer: "<div> (Division) is a block-level element used to group larger chunks of content or layout sections. It always starts on a new line and takes full width by default (example: wrapping a section of a webpage like a header or sidebar). <span> is an inline element used to style or group small portions of text or inline content. It does not start on a new line and only takes as much width as its content (example: highlighting a single word inside a paragraph). In short: <div> = structural grouping (block), <span> = inline styling or grouping (inline).",
    category: "html"
  },
  {
    id: 10,
    question: "What is the difference between HTML tags and attributes?",
    answer: "Tags define the structure and elements of a webpage, usually coming in pairs with an opening tag and closing tag. Example: <h1>Heading</h1> - here <h1> is the tag that defines a heading element. Attributes provide additional information or properties about an element, always written inside the opening tag as name='value'. Example: <img src='image.jpg' alt='My Image'> - here src and alt are attributes that describe the image. In short: Tags = define the element, Attributes = define the element's behavior or properties.",
    category: "html"
  },
  {
    id: 11,
    question: "What is the difference between id and class?",
    answer: "id is used to uniquely identify a single element on a page and should not be repeated within the same document. It's typically used for targeting specific elements (e.g., with JavaScript or anchor links). Example: <div id='header'></div>. class is used to group multiple elements with the same style or behavior, can be applied to many elements on the same page, and is commonly used for styling with CSS or applying shared JavaScript functionality. Example: <div class='card'></div> <p class='card'></p>. In short: id = unique identifier (one element), class = reusable style/behavior (many elements).",
    category: "html"
  },
  {
    id: 12,
    question: "Why do we use meta tags in HTML? (e.g., viewport, charset, description)",
    answer: "Meta tags in HTML provide metadata - information about the web page that isn't directly visible to users but is important for browsers, search engines, and social platforms. Common examples: charset defines the character encoding (e.g., UTF-8) so the page displays special characters correctly; viewport controls how the page is displayed on mobile devices, making it responsive; description provides a summary of the page content, often shown in search engine results; keywords (older use, less relevant now) specifies keywords for SEO; author defines the author of the document. Meta tags help with proper rendering, SEO optimization, accessibility, and responsiveness.",
    category: "html"
  },
  {
    id: 13,
    question: "What is the difference between <link> and <a> tag?",
    answer: "<link> tag is used to define a relationship between the current HTML document and an external resource, most commonly used to link external stylesheets (<link rel='stylesheet' href='style.css'>). It's always placed inside the <head> and doesn't create clickable links for users - it's for the browser. <a> tag (anchor) is used to create hyperlinks that users can click to navigate to another page, section, or resource. Example: <a href='about.html'>About Us</a>. It's placed in the <body> since it's part of visible content.",
    category: "html"
  },
  {
    id: 14,
    question: "Where should we place CSS and JavaScript files - head or body? Why?",
    answer: "CSS files should always be placed in the <head> using <link>. Reason: CSS is needed to style the page before it's rendered. If it's loaded late, the user might see an unstyled or 'flashy' page (FOUC - Flash of Unstyled Content). JavaScript files are usually placed at the end of the <body> or loaded with defer/async. Reason: JavaScript can block HTML parsing. If scripts are in the <head> without defer/async, they delay page rendering. Placing them at the end allows the HTML to load first, improving page performance.",
    category: "html"
  },
  {
    id: 15,
    question: "How do you make a website mobile friendly?",
    answer: "To make a website mobile-friendly, use responsive design techniques including: viewport meta tag (<meta name='viewport' content='width=device-width, initial-scale=1.0'>), CSS media queries to adapt layouts for different screen sizes, flexible layouts using Flexbox or CSS Grid, relative units (%, em, rem) instead of fixed pixels, mobile-first approach (design for mobile first, then scale up), touch-friendly buttons and links (minimum 44x44px tap targets), responsive images that scale properly, and testing on actual devices or browser dev tools. These techniques ensure your website looks good and functions well on all devices.",
    category: "html"
  },

  // CSS Questions
  {
    id: 16,
    question: "What is the CSS Box Model?",
    answer: "The CSS Box Model describes how elements are rendered on a page. It consists of four parts: Content (the actual content), Padding (space around content), Border (surrounds the padding), and Margin (space outside the border). The total width/height includes all these layers.",
    category: "css"
  },
  {
    id: 17,
    question: "What is the difference between 'position: relative', 'absolute', 'fixed', and 'sticky'?",
    answer: "relative: positioned relative to its normal position. absolute: positioned relative to nearest positioned ancestor. fixed: positioned relative to viewport, stays in place when scrolling. sticky: toggles between relative and fixed based on scroll position.",
    category: "css"
  },
  {
    id: 18,
    question: "Explain Flexbox and its main properties.",
    answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Main properties include: display: flex (enables flexbox), flex-direction (row/column), justify-content (main axis alignment), align-items (cross axis alignment), flex-wrap (wrapping behavior), and gap (spacing between items).",
    category: "css"
  },
  {
    id: 19,
    question: "What is CSS Grid and when would you use it?",
    answer: "CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns. Use it when you need precise control over both horizontal and vertical layout, creating magazine-style layouts, or building complex responsive designs. It's more powerful than Flexbox for 2D layouts.",
    category: "css"
  },
  {
    id: 20,
    question: "What are CSS preprocessors and name some examples?",
    answer: "CSS preprocessors are scripting languages that extend CSS with features like variables, nesting, mixins, and functions. They compile to standard CSS. Examples include Sass (SCSS), Less, and Stylus. They help write more maintainable and DRY (Don't Repeat Yourself) CSS code.",
    category: "css"
  },
  {
    id: 21,
    question: "What is the difference between px, em, %, and rem?",
    answer: "Pixels (px) are absolute units with fixed size that does not change relative to anything else (e.g., font-size: 16px is always 16 pixels). Ems (em) are relative units relative to the font size of the parent element (if parent font is 16px, 2em = 32px), useful for scalable and responsive text sizing. Percentage (%) is a relative unit relative to the parent element's size (width, height, or font size depending on the property), very useful for fluid layouts and responsiveness (e.g., width: 50% is half the width of the parent container). Rem (root em) is relative to the root element's (html) font size, making it more predictable than em.",
    category: "css"
  },
  {
    id: 22,
    question: "What is the difference between CSS Grid and Flexbox?",
    answer: "Flexbox (Flexible Box Layout) is designed for one-dimensional layouts (either row or column), great for aligning and distributing space among items in a single line. Examples include navigation bars, buttons in a row, or vertically centering elements. It supports properties like justify-content, align-items, flex-wrap. CSS Grid is designed for two-dimensional layouts (rows and columns simultaneously), ideal for complex page layouts, like grids of cards or full web page layouts. It supports properties like grid-template-columns, grid-template-rows, grid-gap. In short: Flexbox = 1D (row or column), simpler alignment. Grid = 2D (rows + columns), complex layout control.",
    category: "css"
  },
  {
    id: 23,
    question: "Why do we use semantic elements instead of div?",
    answer: "We use semantic elements instead of generic <div>s because semantic tags add meaning to the structure of a webpage. Benefits include: (1) Readability - Semantic tags like <header>, <nav>, <article>, and <footer> clearly describe their purpose, making the code easier to read and maintain for developers. (2) Accessibility - Screen readers and assistive technologies can better interpret the page structure, improving accessibility for users with disabilities. (3) SEO Benefits - Search engines use semantic elements to better understand page content, which can improve search rankings. (4) Best Practices - Reduces the overuse of <div>s (also called 'div soup') and leads to cleaner, more organized markup.",
    category: "css"
  },

  // JavaScript Questions
  {
    id: 24,
    question: "What is JavaScript?",
    answer: "JavaScript is a lightweight, interpreted, prototype-based, single-threaded, and event-driven programming language that enables dynamic behavior and interactivity in web applications, making it the core of modern front-end development. It runs in the browser and can also run on servers using Node.js.",
    category: "javascript"
  },
  {
    id: 25,
    question: "What does 'interpreted' mean in JavaScript?",
    answer: "Interpreted means the code is executed line by line at runtime by an interpreter (like the browser's JavaScript engine), instead of being fully translated into machine code beforehand like compiled languages such as C++ or Java. This makes JavaScript flexible and platform-independent.",
    category: "javascript"
  },
  {
    id: 26,
    question: "What is prototype-based programming?",
    answer: "It means that objects in JavaScript can inherit properties and methods directly from other objects through a prototype chain, instead of using classes like in classical OOP. For example, when you create an object with a constructor function, methods added to the constructor's prototype are inherited by all instances without being stored in each instance separately.",
    category: "javascript"
  },
  {
    id: 27,
    question: "What are the different data types in JavaScript?",
    answer: "JavaScript has 8 data types divided into Primitive and Non-Primitive. Primitives (7): Number (integers and floats), String (text), Boolean (true/false), Undefined (declared but not assigned), Null (intentional empty value), Symbol (unique identifiers), BigInt (large integers). Non-Primitive (1): Object (includes objects, arrays, functions, dates). Primitives are immutable and stored by value, while objects are mutable and stored by reference.",
    category: "javascript"
  },
  {
    id: 28,
    question: "What is the difference between mutable and immutable?",
    answer: "Immutable means once created, the value cannot be changed. All primitive types (string, number, boolean, etc.) are immutable. When you modify a primitive, you create a new value. Mutable means the object's contents can be modified after creation. All non-primitive types (objects, arrays) are mutable. Changes affect the original object. For example, strings are immutable - you can't change a character, but objects are mutable - you can add/modify properties.",
    category: "javascript"
  },
  {
    id: 29,
    question: "What is the difference between let, var, and const?",
    answer: "var is function-scoped, hoisted as undefined, can be redeclared and reassigned. let is block-scoped, hoisted in Temporal Dead Zone, cannot be redeclared but can be reassigned. const is block-scoped, hoisted in TDZ, cannot be redeclared or reassigned (though object properties can be modified). Modern best practice: use const by default, let when reassignment is needed, avoid var.",
    category: "javascript"
  },
  {
    id: 30,
    question: "What is the difference between declaration and initialization?",
    answer: "Declaration is telling JavaScript that a variable exists and reserving space in memory (e.g., let name;). Initialization is assigning a value to the declared variable (e.g., name = 'Alice'). They can happen together (let name = 'Alice') or separately. const requires both declaration and initialization together, while let and var can be declared first and initialized later.",
    category: "javascript"
  },
  {
    id: 31,
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. var declarations are hoisted as undefined. let/const declarations are hoisted but placed in Temporal Dead Zone (TDZ) until initialized. Function declarations are fully hoisted (both declaration and definition). Function expressions only have their variable declaration hoisted. Only declarations are hoisted, not initializations.",
    category: "javascript"
  },
  {
    id: 32,
    question: "Explain scope in JavaScript (global, function, block)",
    answer: "Scope determines where variables can be accessed. Global scope: variables declared outside functions, accessible everywhere. Function scope: variables declared inside functions (var, let, const), only accessible within that function. Block scope: variables declared inside {} blocks (let, const only), accessible only within that block. JavaScript uses lexical scoping where inner functions can access outer scope variables (scope chain).",
    category: "javascript"
  },
  {
    id: 33,
    question: "What is the difference between == and ===?",
    answer: "== (loose equality) checks only value with type coercion - converts values to the same type before comparison (e.g., 5 == '5' is true). === (strict equality) checks both value and data type without conversion (e.g., 5 === '5' is false). Always prefer === to avoid unexpected behavior and bugs from automatic type conversion.",
    category: "javascript"
  },
  {
    id: 34,
    question: "What are truthy and falsy values?",
    answer: "In JavaScript, every value is either truthy (treated as true) or falsy (treated as false) in Boolean contexts. Falsy values (8): false, 0, -0, 0n (BigInt zero), '' (empty string), null, undefined, NaN. Everything else is truthy, including: '0', 'false', [], {}, and any non-zero number.",
    category: "javascript"
  },
  {
    id: 35,
    question: "What is a closure and why is it used?",
    answer: "A closure is when an inner function has access to variables from its outer function's scope even after the outer function has finished executing. The inner function 'remembers' the environment where it was created. Closures are used for: data privacy (private variables), creating factory functions, maintaining state, callbacks, and event handlers. They're fundamental to JavaScript's functional programming capabilities.",
    category: "javascript"
  },
  {
    id: 36,
    question: "What is the difference between function declaration and function expression?",
    answer: "Function Declaration: defined with function keyword and name, fully hoisted (can be called before definition), syntax: function greet() {}. Function Expression: function assigned to a variable, not hoisted (can only be called after definition), can be anonymous or named, syntax: const greet = function() {}. Arrow functions are also function expressions.",
    category: "javascript"
  },
  {
    id: 37,
    question: "What is the difference between synchronous and asynchronous JavaScript?",
    answer: "Synchronous JavaScript executes code line by line and blocks further execution until a task finishes. Each operation must complete before the next one starts. Asynchronous JavaScript allows non-blocking execution where tasks like API calls, timers, or file operations run in the background and complete later via callbacks, promises, or async/await. This prevents the browser from freezing during long operations.",
    category: "javascript"
  },
  {
    id: 38,
    question: "What is the difference between map() and forEach()?",
    answer: "map() creates and returns a new array with transformed values based on the callback function, doesn't modify the original array. forEach() executes a function on each element for side effects, returns undefined, doesn't create a new array. Use map() when you need a transformed result array, use forEach() for side effects like logging or updating external variables.",
    category: "javascript"
  },
  {
    id: 39,
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but hasn't been assigned any value yet, or a function doesn't return anything. It's JavaScript's default for uninitialized variables. null is an intentional empty value explicitly set by the developer to represent 'no value' or 'empty object'. typeof null returns 'object' (a known quirk), while typeof undefined returns 'undefined'.",
    category: "javascript"
  },
  {
    id: 40,
    question: "What is the difference between arrow functions and normal functions?",
    answer: "Arrow functions: don't have their own 'this' (inherit from surrounding scope), no 'arguments' object, cannot be used as constructors (no 'new'), no prototype property, shorter syntax. Normal functions: have their own 'this' based on how they're called, have 'arguments' object, can be constructors, have prototype. Use arrow functions for callbacks and when you want lexical 'this', use normal functions for methods and constructors.",
    category: "javascript"
  },
  {
    id: 41,
    question: "What is the difference between for...in and for...of loops?",
    answer: "for...in iterates over enumerable property names (keys) of an object, including inherited properties. Works with objects and arrays (but gives indices for arrays). for...of iterates over iterable values (array elements, string characters, Map/Set values). Only works with iterables, not plain objects. Use for...in for object properties, for...of for array/string values.",
    category: "javascript"
  },
  {
    id: 42,
    question: "What is the difference between call(), apply(), and bind()?",
    answer: "call() invokes a function immediately with 'this' context and arguments passed individually (func.call(thisArg, arg1, arg2)). apply() invokes immediately with 'this' context and arguments as an array (func.apply(thisArg, [arg1, arg2])). bind() returns a new function with fixed 'this' context that can be invoked later (const newFunc = func.bind(thisArg)). Use call/apply for immediate invocation, bind for delayed execution.",
    category: "javascript"
  },
  {
    id: 43,
    question: "What is the difference between setTimeout() and setInterval()?",
    answer: "setTimeout() executes a function once after a specified delay in milliseconds. It runs the code one time after waiting. setInterval() repeatedly executes a function at regular intervals until stopped with clearInterval(). Use setTimeout() for single delayed execution (e.g., showing a message after 3 seconds), use setInterval() for repeated execution (e.g., updating a clock every second).",
    category: "javascript"
  },
  {
    id: 44,
    question: "What is the difference between localStorage, sessionStorage, and cookies?",
    answer: "localStorage: stores data with no expiration (persists after browser close), ~5-10MB limit, data not sent to server, used for user preferences. sessionStorage: stores data for current session only (cleared when tab closes), ~5-10MB limit, not sent to server. Cookies: ~4KB limit, can set expiration time, sent with every HTTP request to server, used for authentication/tracking. localStorage and sessionStorage are for client-side only, cookies work with server.",
    category: "javascript"
  },
  {
    id: 45,
    question: "What is the difference between shallow copy and deep copy?",
    answer: "Shallow copy copies only the top-level properties. Nested objects/arrays keep references to originals - changes in nested data affect both copies. Methods: Object.assign(), spread operator {...obj}, array.slice(). Deep copy duplicates everything recursively, creating completely independent copies. Changes don't affect the original. Methods: JSON.parse(JSON.stringify(obj)) (limited), structuredClone() (modern), or libraries like Lodash's cloneDeep().",
    category: "javascript"
  },
  {
    id: 46,
    question: "What is the difference between event bubbling and event capturing?",
    answer: "Event Capturing (trickling): event starts from outermost element (document) and travels down to the target element. Event Bubbling: event starts from target element and bubbles up through parent elements to the document. Bubbling is the default behavior. You can control which phase with addEventListener's third parameter: addEventListener('click', handler, true) for capturing, false/omitted for bubbling.",
    category: "javascript"
  },
  {
    id: 47,
    question: "What is the difference between slice() and splice() in arrays?",
    answer: "slice(start, end): creates a new array by copying elements, doesn't modify original array, end index is exclusive, returns selected elements. splice(start, deleteCount, item1, item2...): modifies the original array by removing/adding elements at specific index, returns array of removed elements. Use slice() to extract portions without changing original, splice() to add/remove elements and modify original.",
    category: "javascript"
  },
  {
    id: 48,
    question: "What is the difference between Object.freeze() and Object.seal()?",
    answer: "Object.freeze(): completely prevents any changes - can't add, delete, or modify properties. Object becomes fully immutable. Objects are shallow frozen. Object.seal(): prevents adding or deleting properties but allows modifying existing property values. You can change values but not the structure. Use freeze() for complete immutability, seal() when you want to allow value updates but lock the structure.",
    category: "javascript"
  },
  {
    id: 49,
    question: "What is the difference between Promise.all(), Promise.race(), and Promise.allSettled()?",
    answer: "Promise.all(): waits for all promises to resolve, rejects immediately if any promise rejects, returns array of all results. Promise.race(): returns result of first settled promise (resolved or rejected), useful for timeout scenarios. Promise.allSettled(): waits for all promises to settle (resolve or reject), returns array with status and value/reason for each, never rejects. Use all() when all must succeed, race() for first result, allSettled() to know all outcomes.",
    category: "javascript"
  },
  {
    id: 50,
    question: "What is the difference between find() and filter()?",
    answer: "find(): returns the first element that satisfies the condition, stops searching after finding first match, returns undefined if no match found, returns a single element. filter(): returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use find() to get one specific element, filter() to get all matching elements.",
    category: "javascript"
  },
  {
    id: 51,
    question: "What is the Event Loop?",
    answer: "The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations while being single-threaded. It works by: executing functions in the call stack, sending async operations (setTimeout, fetch) to Web APIs, adding completed async callbacks to task queue, checking if call stack is empty, moving callbacks from queue to stack for execution. This enables non-blocking behavior - JavaScript can continue executing code while waiting for async operations.",
    category: "javascript"
  },
  {
    id: 52,
    question: "What is a prototype in JavaScript?",
    answer: "A prototype is an object that every function and object has by default. It's used to add properties and methods that can be shared across instances. This is how JavaScript implements inheritance. When you access a property on an object, JavaScript first looks at the object itself, then looks up the prototype chain until it finds the property or reaches null. Methods defined on a prototype are shared by all instances, saving memory.",
    category: "javascript"
  },
  {
    id: 53,
    question: "What is the Temporal Dead Zone (TDZ)?",
    answer: "Temporal Dead Zone is the time between the start of a block and the point where a let/const variable is declared, during which the variable exists but cannot be accessed. Trying to access the variable in the TDZ throws a ReferenceError. This happens because let/const are hoisted but not initialized until their declaration line is executed. TDZ ensures variables are used only after proper declaration, preventing bugs.",
    category: "javascript"
  },
  {
    id: 54,
    question: "What is the difference between spread and rest operator?",
    answer: "Both use ... syntax but serve opposite purposes. Spread operator: expands/spreads elements of an array or object into individual elements, used when combining arrays ([...arr1, ...arr2]), copying objects ({...obj}), or passing arguments. Rest operator: collects multiple elements into a single array/object, used in function parameters (function(...args)) to gather remaining arguments, or in destructuring ([first, ...rest] = array) to collect remaining elements.",
    category: "javascript"
  },
  {
    id: 55,
    question: "What is event delegation?",
    answer: "Event delegation is a technique where instead of attaching event handlers to multiple child elements, you attach a single handler to their parent element. The event bubbles up from the child to parent, and you handle it there using event.target to identify which child triggered it. Benefits: better performance (fewer event listeners), works for dynamically added elements, easier to manage. Commonly used for lists or tables with many interactive items.",
    category: "javascript"
  },
  {
    id: 56,
    question: "What is the difference between debouncing and throttling?",
    answer: "Debouncing: delays function execution until after a certain time has passed without the event being triggered again. Function runs once after user stops triggering event. Used for: search input (wait until user stops typing). Throttling: limits function execution to run at most once every specified time interval, regardless of how many times event fires. Function runs at regular intervals. Used for: scroll events, window resize. Debouncing = wait for pause, Throttling = limit frequency.",
    category: "javascript"
  },
  {
    id: 57,
    question: "What is the difference between every() and find()?",
    answer: "every(): checks if all elements in array satisfy a condition, returns true if all pass or false if any fail, stops checking when it finds an element that fails. find(): searches array and returns the first element that satisfies the condition, returns undefined if no match found, stops after finding first match. Use every() to validate all elements meet criteria, find() to locate a specific element.",
    category: "javascript"
  },
  {
    id: 58,
    question: "What is the difference between shift() and unshift()?",
    answer: "shift(): removes the first element from an array, modifies original array, returns the removed element, decreases array length by 1. unshift(item1, item2...): adds one or more elements to the beginning of an array, modifies original array, returns new length of array. Both work at the beginning of array. shift() removes, unshift() adds. Both are opposite of pop() (removes last) and push() (adds last).",
    category: "javascript"
  },
  {
    id: 59,
    question: "What is split() in JavaScript?",
    answer: "The split() method splits a string into an array of substrings based on a specified separator. The separator can be a character, word, or regular expression. If separator is not found, returns array with whole string. If separator is empty string '', splits into individual characters. Optionally takes a limit parameter to specify maximum array length. Commonly used for parsing CSV data, splitting sentences into words, or processing formatted strings.",
    category: "javascript"
  },
  {
    id: 60,
    question: "What is the difference between indexOf() and findIndex()?",
    answer: "indexOf(value): finds the index of a specific value in an array using strict equality (===), returns -1 if not found, cannot use custom logic, only searches for exact values. findIndex(callback): finds the index of first element that satisfies a condition/logic in the callback function, returns -1 if not found, can use custom comparison logic. Use indexOf() for simple value search, findIndex() for complex condition-based search.",
    category: "javascript"
  },
  {
    id: 61,
    question: "What are Promises in JavaScript?",
    answer: "A Promise is an object used to handle asynchronous tasks in JavaScript. It has three states: pending (initial state), fulfilled (operation completed successfully), and rejected (operation failed). Promises help write cleaner async code without callback hell. You create a Promise with new Promise((resolve, reject) => {}), then handle results with .then() for success, .catch() for errors, and .finally() for cleanup that runs regardless of outcome.",
    category: "javascript"
  },
  {
    id: 62,
    question: "What is Promise chaining and how does it work?",
    answer: "Promise chaining is a technique where multiple asynchronous operations are executed in sequence by returning a new Promise from one .then() and handling it in the next .then(). Each .then() passes its result to the next one. This allows running async tasks step by step. If an error happens anywhere in the chain, it can be caught in a single .catch() at the end. This makes async code more readable and maintainable than nested callbacks.",
    category: "javascript"
  },
  {
    id: 63,
    question: "What happens if you don't return a value in a .then() block?",
    answer: "If you don't explicitly return a value in a .then() block, the next .then() in the chain will receive undefined as its input. This can break the chain if subsequent operations expect a value. Always return a value or a Promise from .then() to pass data to the next handler in the chain.",
    category: "javascript"
  },
  {
    id: 64,
    question: "What is the difference between returning a value vs returning a Promise in .then()?",
    answer: "Returning a regular value passes it immediately to the next .then() - the value is automatically wrapped in a resolved Promise. Returning a Promise makes the next .then() wait until that Promise resolves before executing. This is useful for sequential async operations. If you return a value, the chain continues immediately; if you return a Promise, the chain waits for that Promise to settle.",
    category: "javascript"
  },
  {
    id: 65,
    question: "What is the difference between Promise.all, Promise.allSettled, Promise.any, and Promise.race?",
    answer: "Promise.all waits for all promises to resolve but fails immediately if one rejects. Promise.allSettled waits for all promises and gives results of both fulfilled and rejected (never rejects). Promise.any returns the first fulfilled promise and ignores rejections (only fails if all reject). Promise.race returns the result of the first promise that settles, whether resolved or rejected. Use all() when all must succeed, allSettled() to know all outcomes, any() for first success, race() for first result.",
    category: "javascript"
  },
  {
    id: 66,
    question: "How does Promise.all behave when one Promise rejects?",
    answer: "If one promise rejects in Promise.all, it immediately rejects with that error and stops waiting for other promises. The results of successfully resolved promises are ignored. This fail-fast behavior means Promise.all is suitable only when all operations must succeed. If you need results from all promises regardless of failures, use Promise.allSettled instead.",
    category: "javascript"
  },
  {
    id: 67,
    question: "When should you use Promise.allSettled() instead of Promise.all()?",
    answer: "Use Promise.allSettled when you want results of all promises, even if some fail. It's useful when loading multiple resources where failure of one doesn't stop others (e.g., loading user profile, settings, and notifications - you want to show whatever loaded successfully). Promise.allSettled never rejects and returns an array with status (fulfilled/rejected) and value/reason for each promise. Use Promise.all only when all operations must succeed.",
    category: "javascript"
  },
  {
    id: 68,
    question: "What happens if you resolve or reject a Promise multiple times?",
    answer: "A promise can only settle once. After it is resolved or rejected, further resolve or reject calls are ignored. The promise locks into its first settled state. This immutability ensures predictable behavior - once a promise completes, its result cannot change. Subsequent calls to resolve/reject have no effect, and no error is thrown.",
    category: "javascript"
  },
  {
    id: 69,
    question: "What is the difference between microtask queue (Promises) and macrotask queue (setTimeout)?",
    answer: "Promises use the microtask queue, so their callbacks run before macrotasks like setTimeout, setInterval, or I/O operations. Microtasks have higher priority than macrotasks. After each macrotask, the event loop processes all microtasks before moving to the next macrotask. This means Promise.then() callbacks execute before setTimeout callbacks, even if setTimeout has zero delay. Order: Call stack → Microtasks (Promises) → Macrotasks (setTimeout).",
    category: "javascript"
  },
  {
    id: 70,
    question: "How does error propagation work in Promise chains?",
    answer: "If an error happens in a promise chain (either a rejection or a thrown error), it propagates down the chain to the nearest .catch() handler. All .then() handlers in between are skipped. If no .catch() is present, it causes an unhandled promise rejection. You can have multiple .catch() handlers - after catching an error, you can return a value to recover and continue the chain. Errors can be re-thrown in .catch() to propagate further.",
    category: "javascript"
  },
  {
    id: 71,
    question: "What is async/await in JavaScript?",
    answer: "Async/await is a way to handle asynchronous operations in JavaScript with cleaner syntax. When you put 'async' before a function, it always returns a Promise. Inside that function, you can use the 'await' keyword to pause execution until a Promise resolves or rejects. It makes asynchronous code look like synchronous code, making it easier to read and maintain compared to chaining .then() methods. Errors can be caught using try/catch blocks.",
    category: "javascript"
  },
  {
    id: 72,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a feature in JavaScript where an inner function can continue to use variables from its parent function's scope, even after the parent function has finished executing. The inner function 'closes over' the variables it needs. Closures are created every time a function is created. They're used for data privacy (private variables), creating factory functions, maintaining state in callbacks, and implementing module patterns. The inner function maintains a reference to its outer scope.",
    category: "javascript"
  },
  {
    id: 73,
    question: "What is a currying function?",
    answer: "Currying is a technique in JavaScript where a function is transformed into a sequence of functions, each taking a single argument. Instead of passing all arguments at once (func(a, b, c)), you pass them one by one (func(a)(b)(c)). Each function returns another function until all arguments are received. Benefits: partial application (pre-fill some arguments), reusability, and functional composition. Example: const add = a => b => c => a + b + c; add(1)(2)(3) returns 6.",
    category: "javascript"
  },
  {
    id: 74,
    question: "What is a higher-order function?",
    answer: "A higher-order function is a function that either takes another function as an argument, returns a function as its result, or both. It's a fundamental concept in functional programming that helps make code more reusable and composable. Common examples: map(), filter(), reduce() (take functions as arguments), function factories (return functions). They enable powerful patterns like callbacks, closures, and function composition.",
    category: "javascript"
  },
  {
    id: 75,
    question: "What is the difference between React.memo and useMemo?",
    answer: "React.memo is a higher-order component that prevents unnecessary re-rendering of a component by comparing props - if props haven't changed, React skips rendering. It wraps the entire component (export default React.memo(MyComponent)). useMemo is a hook used inside a component to memoize the result of an expensive calculation. It caches the value and only recalculates when dependencies change. Use memo for component-level optimization, useMemo for value/calculation optimization within a component.",
    category: "javascript"
  },
  {
    id: 76,
    question: "What is the difference between shallow copy and deep copy?",
    answer: "Shallow copy creates a new object but only copies top-level properties. Nested objects/arrays still refer to the same reference in memory - changes in nested data affect both objects. Methods: spread operator {...obj}, Object.assign(), array.slice(). Deep copy creates a completely new object with all nested objects and arrays duplicated. Changes in the copy don't affect the original. Methods: JSON.parse(JSON.stringify(obj)) (has limitations - no functions, dates, undefined), structuredClone() (modern), or libraries like Lodash cloneDeep(). Use shallow copy for simple objects, deep copy for nested structures.",
    category: "javascript"
  },
  {
    id: 77,
    question: "What is the output of console.log('2' == 2)?",
    answer: "Output: true. Explanation: The == operator checks value equality with type coercion. The string '2' is automatically converted to number 2 before comparison, so '2' == 2 evaluates to true. This is why === is preferred for comparisons to avoid unexpected type coercion.",
    category: "output-based"
  },
  {
    id: 78,
    question: "What is the output of console.log('2' === 2)?",
    answer: "Output: false. Explanation: The === operator checks strict equality without type coercion. '2' is a string and 2 is a number. Since they are different types, === returns false. Always use === to avoid type coercion bugs.",
    category: "output-based"
  },
  {
    id: 79,
    question: "What is the output of console.log([] == [])?",
    answer: "Output: false. Explanation: Arrays are reference types, and == compares references (memory addresses), not values. Two different empty arrays do not reference the same object in memory, so it returns false even though they look identical.",
    category: "output-based"
  },
  {
    id: 80,
    question: "What is the output of console.log([] === [])?",
    answer: "Output: false. Explanation: Same as ==, the === operator compares references for objects and arrays. Two separate empty arrays are different objects stored at different memory locations, so === returns false.",
    category: "output-based"
  },
  {
    id: 81,
    question: "What is the output of console.log([1,2,3] + [5,6,7])?",
    answer: "Output: '1,2,35,6,7' (a string). Explanation: The + operator with arrays triggers string concatenation. Each array is first converted to a string: [1,2,3] becomes '1,2,3' and [5,6,7] becomes '5,6,7'. Then they are concatenated as strings, resulting in '1,2,35,6,7'.",
    category: "output-based"
  },
  {
    id: 82,
    question: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
    answer: "Output: false. Explanation: Floating-point numbers in JavaScript are not always exact due to binary representation (IEEE 754 standard). 0.1 + 0.2 actually evaluates to 0.30000000000000004, not exactly 0.3. This is a common gotcha in JavaScript. Use Number.EPSILON or toFixed() for precise decimal comparisons.",
    category: "output-based"
  },
  {
    id: 83,
    question: "What is the output of console.log({} == {})?",
    answer: "Output: false. Explanation: Objects are reference types. The == operator compares references, not the content. Two different empty objects are stored at different memory locations, so they are not equal even though they appear identical.",
    category: "output-based"
  },
  {
    id: 84,
    question: "What is the output of console.log({} === {})?",
    answer: "Output: false. Explanation: Same as ==, the === operator compares object references. Two separate object literals are different objects in memory, so === returns false. Objects are only equal if they reference the exact same object.",
    category: "output-based"
  },
  {
    id: 85,
    question: "What is the output of: let obj = {a:1}; let copy = obj; copy.a = 5; console.log(obj.a)?",
    answer: "Output: 5. Explanation: Objects are reference types. When you assign copy = obj, both variables point to the same object in memory. Modifying copy.a also affects obj.a because they reference the same object. To avoid this, create a shallow copy with {...obj} or a deep copy.",
    category: "output-based"
  },
  {
    id: 86,
    question: "What is the output of console.log(2 + '2')?",
    answer: "Output: '22' (a string). Explanation: The + operator is used for both addition and string concatenation. If either operand is a string, JavaScript converts the other into a string and concatenates. So 2 + '2' becomes '2' + '2', resulting in '22'.",
    category: "output-based"
  },
  {
    id: 87,
    question: "What is the output of console.log(2 - '2')?",
    answer: "Output: 0. Explanation: The - operator is only for numeric subtraction, not concatenation. JavaScript attempts to convert '2' (string) into a number. So 2 - '2' becomes 2 - 2, which equals 0.",
    category: "output-based"
  },
  {
    id: 88,
    question: "What is the output of console.log('2' + 2 - 2)?",
    answer: "Output: 20. Explanation: Operations are evaluated left to right. First, '2' + 2: since '2' is a string, 2 is converted to string, resulting in '22' (string). Then '22' - 2: the - operator converts '22' to number 22, then 22 - 2 = 20.",
    category: "output-based"
  },
  {
    id: 89,
    question: "What is the output of console.log(true + true)?",
    answer: "Output: 2. Explanation: In numeric context, true is converted to 1 and false is converted to 0. So true + true becomes 1 + 1 = 2.",
    category: "output-based"
  },
  {
    id: 90,
    question: "What is the output of console.log(false + true)?",
    answer: "Output: 1. Explanation: false converts to 0 and true converts to 1 in numeric context. So false + true becomes 0 + 1 = 1.",
    category: "output-based"
  },
  {
    id: 91,
    question: "What is the output of console.log(true - false)?",
    answer: "Output: 1. Explanation: In arithmetic operations, true converts to 1 and false converts to 0. So true - false becomes 1 - 0 = 1.",
    category: "output-based"
  },
  {
    id: 92,
    question: "What is the output of console.log(null + 1)?",
    answer: "Output: 1. Explanation: null is converted to 0 in numeric context. So null + 1 becomes 0 + 1 = 1.",
    category: "output-based"
  },
  {
    id: 93,
    question: "What is the output of console.log(undefined + 1)?",
    answer: "Output: NaN. Explanation: undefined cannot be converted to a valid number, so it becomes NaN (Not a Number). Any arithmetic operation with NaN results in NaN. So undefined + 1 = NaN.",
    category: "output-based"
  },
  {
    id: 94,
    question: "What is the output of console.log([1,2] + [3,4])?",
    answer: "Output: '1,23,4' (a string). Explanation: Arrays are converted to strings when using the + operator. [1,2] becomes '1,2' and [3,4] becomes '3,4'. Then they are concatenated as strings: '1,2' + '3,4' = '1,23,4'.",
    category: "output-based"
  },
  {
    id: 95,
    question: "What is the output of console.log([] + [])?",
    answer: "Output: '' (empty string). Explanation: Empty arrays convert to empty strings when using the + operator. So [] + [] becomes '' + '', resulting in an empty string ''.",
    category: "output-based"
  },
  {
    id: 96,
    question: "What is the output of console.log([] + {})?",
    answer: "Output: '[object Object]'. Explanation: Empty array [] converts to empty string '', and empty object {} converts to '[object Object]'. So [] + {} becomes '' + '[object Object]' = '[object Object]'.",
    category: "output-based"
  },
  {
    id: 97,
    question: "What is the output of console.log({} + [])?",
    answer: "Output: 0 or '[object Object]' (depends on context). Explanation: In some JavaScript engines, {} at the start is interpreted as an empty code block (not an object), so +[] converts empty array to 0. In other contexts, it's treated as object concatenation resulting in '[object Object]'. Use parentheses ({} + []) for consistent behavior.",
    category: "output-based"
  },
  {
    id: 98,
    question: "What is the output of console.log('' == 0)?",
    answer: "Output: true. Explanation: The == operator performs type coercion. Empty string '' is converted to 0 in numeric comparison. So '' == 0 becomes 0 == 0, which is true.",
    category: "output-based"
  },
  {
    id: 99,
    question: "What is the output of console.log('' === 0)?",
    answer: "Output: false. Explanation: The === operator checks strict equality without type coercion. '' is a string and 0 is a number, so they are different types and === returns false.",
    category: "output-based"
  },
  {
    id: 100,
    question: "What is the output of console.log(false == '0')?",
    answer: "Output: true. Explanation: With ==, both false and '0' are converted to numbers. false becomes 0, and '0' also becomes 0. So false == '0' becomes 0 == 0, which is true.",
    category: "output-based"
  },
  {
    id: 101,
    question: "What is the output of console.log(false === '0')?",
    answer: "Output: false. Explanation: The === operator compares without type coercion. false is a boolean and '0' is a string, so they are different types and === returns false.",
    category: "output-based"
  },
  {
    id: 102,
    question: "What is the output of console.log([0] == 0)?",
    answer: "Output: true. Explanation: Array [0] is converted to string '0', then '0' is converted to number 0. So [0] == 0 becomes 0 == 0, which is true. This is a quirky behavior of type coercion with ==.",
    category: "output-based"
  },
  {
    id: 103,
    question: "What is the output of console.log([1] == 1)?",
    answer: "Output: true. Explanation: Array [1] is converted to string '1', then '1' is converted to number 1. So [1] == 1 becomes 1 == 1, which is true.",
    category: "output-based"
  },
  {
    id: 104,
    question: "What is the output of console.log([1,2] == '1,2')?",
    answer: "Output: true. Explanation: Array [1,2] is converted to string '1,2'. The == operator then compares '1,2' == '1,2', which is true. This shows how arrays are stringified in comparisons.",
    category: "output-based"
  },
  {
    id: 105,
    question: "How to filter people with age greater than 20 using map?",
    answer: "You shouldn't use map for filtering - use filter instead. map returns an array with the same length, just transformed. Correct approach: const result = people.filter(person => person.age > 20).map(person => person.name). This first filters people over 20, then maps to their names. Remember: filter() for filtering data, map() for transforming data. map always returns an array of the same length as input.",
    category: "output-based"
  },

  // Next.js Questions
  {
    id: 106,
    question: "What is Next.js and why use it?",
    answer: "Next.js is a React framework that provides features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, and file-based routing. It improves performance, SEO, and developer experience while simplifying React application development.",
    category: "nextjs"
  },
  {
    id: 107,
    question: "What is the difference between SSR, SSG, and ISR in Next.js?",
    answer: "SSR (Server-Side Rendering) generates HTML on each request. SSG (Static Site Generation) pre-renders pages at build time. ISR (Incremental Static Regeneration) allows updating static content after build without rebuilding the entire site. Choose based on content update frequency and personalization needs.",
    category: "nextjs"
  },
  {
    id: 108,
    question: "Explain the App Router vs Pages Router in Next.js.",
    answer: "Pages Router (legacy) uses the /pages directory with file-based routing. App Router (Next.js 13+) uses /app directory with React Server Components, improved layouts, nested routing, and streaming. App Router offers better performance and more flexibility, representing the future of Next.js.",
    category: "nextjs"
  },
  {
    id: 109,
    question: "What are Server Components and Client Components in Next.js?",
    answer: "Server Components render on the server, reducing JavaScript bundle size and improving performance. They can't use hooks or browser APIs. Client Components ('use client') render on the client, support interactivity and hooks. By default, components in the App Router are Server Components.",
    category: "nextjs"
  },
  {
    id: 110,
    question: "How does Next.js handle image optimization?",
    answer: "Next.js provides the Image component that automatically optimizes images through lazy loading, responsive sizing, modern formats (WebP/AVIF), blur placeholders, and on-demand optimization. It significantly improves performance and Core Web Vitals without manual configuration.",
    category: "nextjs"
  },

  // React Questions
  {
    id: 111,
    question: "What is React and what makes it popular?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. Its popularity comes from: component-based architecture, virtual DOM for efficient updates, one-way data flow, strong ecosystem, large community, and ability to build both web and mobile apps (React Native).",
    category: "react"
  },
  {
    id: 112,
    question: "What are React Hooks and name the most common ones?",
    answer: "Hooks are functions that let you use state and other React features in functional components. Most common: useState (state management), useEffect (side effects), useContext (context consumption), useRef (mutable refs), useMemo (memoized values), useCallback (memoized callbacks), and useReducer (complex state logic).",
    category: "react"
  },
  {
    id: 113,
    question: "Explain the Virtual DOM and how React uses it.",
    answer: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new Virtual DOM tree, compares it with the previous one (diffing), calculates the minimal changes needed, and updates only those parts in the real DOM. This makes updates efficient.",
    category: "react"
  },
  {
    id: 114,
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled components: Form data is handled by React state, with value and onChange props. React is the 'single source of truth'. Uncontrolled components: Form data is handled by the DOM itself, accessed via refs. Controlled components are recommended for most cases as they provide better control.",
    category: "react"
  },
  {
    id: 115,
    question: "What is prop drilling and how can you avoid it?",
    answer: "Prop drilling is passing props through multiple component layers to reach deeply nested components. Solutions: Context API (for global state), composition (children props), custom hooks, or state management libraries (Redux, Zustand). Choose based on application size and complexity.",
    category: "react"
  },
];

export const getCategoryQuestions = (category: Question['category']): Question[] => {
  return questions.filter(q => q.category === category);
};

