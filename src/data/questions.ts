export interface Question {
  id: number;
  question: string;
  answer: string;
  category: "html" | "css" | "javascript" | "nextjs" | "react" | "output-based";
}

export const questions: Question[] = [
  // HTML Questions
  {
    id: 1,
    question: "What is HTML and what does it stand for?",
    answer:
      "HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure content on the web. HTML uses a system of tags to define elements like headings, paragraphs, links, images, and other content.",
    category: "html",
  },
  {
    id: 2,
    question: "What is the use of doctype in HTML?",
    answer:
      "The <!DOCTYPE> declaration in HTML is used to tell the browser which version of HTML the page is written in. It's not an HTML tag, but an instruction for the browser. In modern web development, we usually write <!DOCTYPE html> which indicates HTML5. Its main purpose is to ensure the browser renders the page in standards mode instead of quirks mode. Standards mode follows the official HTML and CSS specifications, while quirks mode tries to emulate old, non-standard behavior for legacy pages. By declaring the doctype, we make sure our page is interpreted consistently across different browsers, which improves compatibility and prevents unexpected layout or styling issues.",
    category: "html",
  },
  {
    id: 3,
    question: "What is the difference between HTML and HTML5?",
    answer:
      "Aspect\tHTML\tHTML5\nDoctype\tLong & complex\tSimple: <!DOCTYPE html>\nMultimedia\tNeeds plugins (Flash)\t<audio>, <video>\nGraphics\tNo native support\t<canvas>, <svg>\nForms\tBasic inputs\tNew inputs: email, date, etc.\nSemantic Tags\tUses <div> mostly\t<header>, <footer>, <article>\nAPIs\tNone\tGeolocation, Web Storage, etc.",
    category: "html",
  },
  {
    id: 3.112,
    question: "What are the new input types in HTML5?",
    answer:
      "New input types in HTML5 include: \n1.email, \n2.date, \n3.time, \n4.number, \n5.range, \n6.color, and \n7.search. These provide more specific input validation and better user experience for specific data types.",
    category: "html",
  },
  {
    id: 3.2,
    question: "What are the new semantic tags in HTML5?",
    answer:
      "New semantic tags in HTML5 include: \n1.header, \n2.footer, \n3.article, \n4.section, \n5.aside, and \n6.nav. These tags provide more meaning to the structure of the web page and improve accessibility and SEO.",
    category: "html",
  },
  {
    id: 3.3,
    question: "What is HTML tag?",
    answer:
      "HTML tag is used to define the structure of the web page. It is a container for the content of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the content and the closing tag is used to define the end of the content. The content is the text that is displayed on the web page. \n\nExample: <html> <body> <h1>Hello World</h1> </body> </html>",
    category: "html",
  },
  {
    id: 3.4,
    question: "What is HTML attribute?",
    answer:
      "HTML attribute is used to define the extra information or properties of the HTML tag. It is a pair of name and value. The name is the property of the HTML tag and the value is the value of the property. \n\nExample: <img src='image.jpg' alt='My Image'> src and alt are attributes of the img tag. \n\nExample: <a href='https://www.google.com'>Google</a> href is an attribute of the a tag.",
    category: "html",
  },
  {
    id: 3.5,
    question: "What is HTML element?",
    answer:
      "HTML element is used to define the structure of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the content and the closing tag is used to define the end of the content. The content is the text that is displayed on the web page. \n\nExample: <html> <body> <h1>Hello World</h1> </body> </html> html, body, h1 are elements of the html tag.",
    category: "html",
  },
  {
    id: 3.6,
    question: "What is HTML comment?",
    answer:
      "HTML comment is used to define the comment of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the comment and the closing tag is used to define the end of the comment. The comment is the text that is displayed on the web page. \n\nExample: <!-- This is a comment -->",
    category: "html",
  },
  {
    id: 3.7,
    question: "What is HTML form?",
    answer:
      "HTML form is used to define the form of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the form and the closing tag is used to define the end of the form. The form is the text that is displayed on the web page. \n\nExample: <form> <input type='text' name='username'> <input type='password' name='password'> </form>",
    category: "html",
  },
  {
    id: 3.8,
    question: "What is HTML table?",
    answer:
      "HTML table is used to define the table of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the table and the closing tag is used to define the end of the table. The table is the text that is displayed on the web page. \n\nExample: <table> <tr> <td>Hello</td> <td>World</td> </tr> </table> tr and td are elements of the table tag.",
    category: "html",
  },
  {
    id: 3.9,
    question: "What is HTML list?",
    answer:
      "HTML list is used to define the list of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the list and the closing tag is used to define the end of the list. The list is the text that is displayed on the web page. \n\nExample: <ul> <li>Hello</li> <li>World</li> </ul> ul and li are elements of the list tag.",
    category: "html",
  },
  {
    id: 3.1,
    question: "What is HTML link?",
    answer:
      "HTML link is used to define the link of the web page. It is a pair of opening and closing tags. The opening tag is used to define the start of the link and the closing tag is used to define the end of the link. The link is the text that is displayed on the web page. \n\nExample: <a href='https://www.google.com'>Google</a> a and href are elements of the link tag.",
    category: "html",
  },
  {
    id: 3.12,
    question:
      "List out 10 inline elements in HTML and 10 block elements in HTML?",
    answer:
      "Inline elements: \n1.span, \n2.a, \n3.strong, \n4.em, \n5.img, \n6.small, \n7.sup, \n8.sub, \n9.input, \n10.label. \n\nBlock elements: \n1.div, \n2.p, \n3.h1, \n4.h2, \n5.h3, \n6.h4, \n7.h5, \n8.h6, \n9.ul, \n10.ol.",
    category: "html",
  },
  {
    id: 3.13,
    question: "What is the difference between <strong> and <em> tags?",
    answer:
      "strong tag: \n1. Represents text with strong importance or seriousness. \n2. Browsers typically render it in bold. \n3. It conveys semantic meaning for screen readers and SEO. \n\nem tag: \n1. Represents emphasized text, usually stress or tone change. \n2. Browsers typically render it in italic. \n3. It also carries semantic meaning for screen readers and SEO.",
    category: "html",
  },
  {
    id: 4,
    question: "What is the use of head tag?",
    answer:
      "The <head> tag in HTML is used to hold metadata and resources about the web page that are not directly displayed to the user. It can include things like the page <title>, links to CSS stylesheets, JavaScript files, meta tags for SEO and responsiveness, favicons, and other information needed for the browser and search engines. In short, the <head> acts as the configuration section of the web page—helping with styling, behavior, and optimization—while the <body> is for the actual visible content.",
    category: "html",
  },
  {
    id: 5,
    question: "What is the difference between async and defer?",
    answer:
      "In HTML, both async and defer are attributes used when loading external JavaScript files with the <script> tag, and both help improve page performance by preventing the script from blocking HTML parsing. \n\nasync: The script is downloaded in parallel with the HTML parsing and executes immediately once it's ready, even if the HTML is still being parsed. This means scripts load faster, but execution order is not guaranteed if multiple async scripts are used. \n\ndefer: The script is also downloaded in parallel but executes only after the HTML is fully parsed, and in the order they appear in the document. This ensures scripts don't interfere with rendering and maintain predictable execution order. Use async for independent scripts (like analytics) and defer for scripts that rely on the DOM structure or need to run in sequence.",
    category: "html",
  },
  {
    id: 6,
    question: "List of new HTML5 semantic tags?",
    answer:
      "HTML5 introduced several semantic tags that give meaning to the structure of a web page. Unlike generic <div> and <span>, these tags describe the role of the content, which improves readability, accessibility, and SEO. Some important semantic tags are: \n\n<header> (top section of a page or section), \n\n<nav> (navigation links), \n\n<section> (thematic grouping of content), \n\n<article> (independent, self-contained content like blogs or news), \n\n<aside> (side content such as ads or sidebars), \n\n<footer> (footer of a page or section), \n\n<main> (main content of the document), \n\n<figure> and <figcaption> (images/illustrations with captions), \n\n<mark> (highlighting text), and \n\n<time> (dates and times). These tags make the structure more meaningful for both browsers and developers.",
    category: "html",
  },
  {
    id: 7,
    question:
      "What is the difference between block level and inline element in HTML?",
    answer:
      "In HTML, elements are broadly classified as block-level and inline elements based on how they behave in the document flow. \n\nBlock-level elements always start on a new line, take up the full width available (by default), and can contain other block-level and inline elements. Examples: <div>, <p>, <section>, <header>, <article>. \n\nInline elements do not start on a new line, only take up as much width as their content requires, and are usually used for styling or small parts of text. Examples: <span>, <a>, <strong>, <em>, <img>.",
    category: "html",
  },
  {
    id: 8,
    question: "What is the difference between HTML, XHTML, and HTML5?",
    answer:
      "HTML (HyperText Markup Language) is the original standard for creating web pages - more flexible and forgiving where browsers can still render pages even if the code has errors. \n\nXHTML (Extensible HTML) is a stricter version of HTML that follows XML rules where tags must be properly closed, nested, and written in lowercase (e.g., <br /> instead of <br>), designed for cleaner, well-structured documents but was considered too rigid. \n\nHTML5 is the latest and current standard - more flexible than XHTML but more structured than old HTML. It introduced semantic tags, multimedia support (<audio>, <video>), APIs (local storage, canvas, geolocation), and better support for modern devices. HTML5 focuses on performance, cross-platform compatibility, and reducing the need for external plugins like Flash.",
    category: "html",
  },
  {
    id: 9,
    question: "What is the difference between <div> and <span>?",
    answer:
      "<div> (Division) is a block-level element used to group larger chunks of content or layout sections. It always starts on a new line and takes full width by default \n\n(example: wrapping a section of a webpage like a header or sidebar). \n\n<span> is an inline element used to style or group small portions of text or inline content. It does not start on a new line and only takes as much width as its content (example: highlighting a single word inside a paragraph). In short: <div> = structural grouping (block), <span> = inline styling or grouping (inline).",
    category: "html",
  },
  {
    id: 10,
    question: "What is the difference between HTML tags and attributes?",
    answer:
      "Tags define the structure and elements of a webpage, usually coming in pairs with an opening tag and closing tag. Example: <h1>Heading</h1> - here <h1> is the tag that defines a heading element. \n\nAttributes : Attributes provide additional information or properties about an element, always written inside the opening tag as name='value'. Example: <img src='image.jpg' alt='My Image'> - here src and alt are attributes that describe the image. In short: Tags = define the element, Attributes = define the element's behavior or properties.",
    category: "html",
  },
  {
    id: 11,
    question: "What is the difference between id and class?",
    answer:
      "Id:id is used to uniquely identify a single element on a page and should not be repeated within the same document. It's typically used for targeting specific elements (e.g., with JavaScript or anchor links). Example: <div id='header'></div>. \n\nClass: class is used to group multiple elements with the same style or behavior, can be applied to many elements on the same page, and is commonly used for styling with CSS or applying shared JavaScript functionality. Example: <div class='card'></div> <p class='card'></p>. In short: id = unique identifier (one element), class = reusable style/behavior (many elements).",
    category: "html",
  },
  {
    id: 12,
    question:
      "Why do we use meta tags in HTML? (e.g., viewport, charset, description)",
    answer:
      "Meta tags in HTML provide metadata - information about the web page that isn't directly visible to users but is important for browsers, search engines, and social platforms.\n\n Common examples: charset defines the character encoding (e.g., UTF-8) so the page displays special characters correctly; viewport controls how the page is displayed on mobile devices, making it responsive; description provides a summary of the page content, often shown in search engine results; keywords (older use, less relevant now) specifies keywords for SEO; author defines the author of the document. Meta tags help with proper rendering, SEO optimization, accessibility, and responsiveness.",
    category: "html",
  },
  {
    id: 13,
    question: "What is the difference between <link> and <a> tag?",
    answer:
      "Link: <link> tag is used to define a relationship between the current HTML document and an external resource, most commonly used to link external stylesheets (<link rel='stylesheet' href='style.css'>). It's always placed inside the <head> and doesn't create clickable links for users - it's for the browser.\n\n <a> tag (anchor) is used to create hyperlinks that users can click to navigate to another page, section, or resource. Example: <a href='about.html'>About Us</a>. It's placed in the <body> since it's part of visible content.",
    category: "html",
  },
  {
    id: 14,
    question:
      "Where should we place CSS and JavaScript files - head or body? Why?",
    answer:
      "CSS files should always be placed in the <head> using <link>. Reason: CSS is needed to style the page before it's rendered. If it's loaded late, the user might see an unstyled or 'flashy' page (FOUC - Flash of Unstyled Content). JavaScript files are usually placed at the end of the <body> or loaded with defer/async. Reason: JavaScript can block HTML parsing. If scripts are in the <head> without defer/async, they delay page rendering. Placing them at the end allows the HTML to load first, improving page performance.",
    category: "html",
  },
  {
    id: 15,
    question: "How do you make a website mobile friendly?",
    answer:
      "To make a website mobile-friendly, use responsive design techniques including:\n\n viewport meta tag (<meta name='viewport' content='width=device-width, initial-scale=1.0'>), CSS media queries to adapt layouts for different screen sizes, flexible layouts using Flexbox or CSS Grid, relative units (%, em, rem) instead of fixed pixels, mobile-first approach (design for mobile first, then scale up), touch-friendly buttons and links (minimum 44x44px tap targets), responsive images that scale properly, and testing on actual devices or browser dev tools. These techniques ensure your website looks good and functions well on all devices.",
    category: "html",
  },
  {
    id: 15.1,
    question: "What are the difference between table row and table data?",
    answer:
      "Table row is used to create a row in a table, while table data is used to create a cell in a row. Table row is represented by the <tr> tag, while table data is represented by the <td> tag.",
    category: "html",
  },

  // CSS Questions
  {
    id: 16,
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model describes how elements are rendered on a page. It consists of four parts: \n\n 1.Content (the actual content), \n\n 2.Padding (space around content), \n\n 3.Border (surrounds the padding), and \n\n 4.Margin (space outside the border). The total width/height includes all these layers.",
    category: "css",
  },
  {
    id: 17,
    question:
      "What is the difference between 'position: relative', 'absolute', 'fixed', and 'sticky'?",
    answer:
      "relative: positioned relative to its normal position.\n\n absolute: positioned relative to nearest positioned ancestor.\n\n fixed: positioned relative to viewport, stays in place when scrolling.\n\n sticky: toggles between relative and fixed based on scroll position.",
    category: "css",
  },
  {
    id: 18,
    question: "Explain Flexbox and its main properties.",
    answer:
      "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Main properties include: \n\n 1.display: flex (enables flexbox), \n\n 2.flex-direction (row/column), \n\n 3.justify-content (main axis alignment), \n\n 4.align-items (cross axis alignment), \n\n 5.flex-wrap (wrapping behavior), and \n\n 6.gap (spacing between items).",
    category: "css",
  },
  {
    id: 18.1,
    question: "Expalin flex shorthand property:\n\n flex:  flex: 1 0 200px;",
    answer: "flex: <flex-grow> <flex-shrink> <flex-basis>;",
    category: "css",
  },
  {
    id: 18.2,
    question:
      "Explain padding and margin shorthand property: padding: 10px 20px 30px 40px and margin: 10px 20px 30px 40px",
    answer:
      "Shorthand properties define values for all four sides in one line.\n\nOrder: top, right, bottom, left (clockwise from top).\n\npadding: 10px 20px 30px 40px means:\n- top: 10px\n- right: 20px\n- bottom: 30px\n- left: 40px\n\nmargin follows the same pattern.\n\nOther shorthand patterns:\n- 1 value: all sides (padding: 10px)\n- 2 values: vertical, horizontal (padding: 10px 20px)\n- 3 values: top, horizontal, bottom (padding: 10px 20px 30px)\n- 4 values: top, right, bottom, left",
    category: "css",
  },
  {
  id: 19,
  question: "What is CSS Grid and when would you use it?",
  answer:
    "CSS Grid is a powerful two-dimensional layout system in CSS that lets you design layouts using rows and columns at the same time. It provides precise control over spacing, alignment, and complex layouts that are difficult to achieve with Flexbox alone. Grid is ideal for structured page layouts like dashboards, galleries, landing pages, and any UI that requires both row and column alignment.\n\nIn short: use CSS Grid for full-page or complex 2D layouts, and use Flexbox when arranging elements in a single direction.",
  category: "css",
}
,
  {
  id: 20,
  question: "What are CSS preprocessors and name some examples?",
  answer:
    "CSS preprocessors are tools that add advanced features to CSS, such as variables, nesting, mixins, functions, and reusable code patterns. They help write cleaner, more organized, and maintainable styles, especially in large projects. The preprocessor code is compiled into standard CSS before being sent to the browser.\n\nCommon examples include Sass (SCSS), Less, and Stylus. Sass/SCSS is the most widely used due to its powerful features and strong community support.",
  category: "css",
}
,
  {
  id: 21,
  question: "What is the difference between px, em, %, and rem?",
  answer:
    "px is an absolute unit — its size is fixed and does not scale with the parent or root font size.\n\nem is a relative unit based on the parent element’s font size (e.g., if parent is 16px, then 2em = 32px). It can compound, so nesting affects the final size.\n\n% is relative to the parent’s size and is commonly used for responsive widths, heights, and layout calculations.\n\nrem is relative to the root html font size, making it more predictable than em. It is widely used for responsive typography because it keeps scaling consistent across the whole application.",
  category: "css",
}
,
  {
    id: 22,
    question: "What is the difference between CSS Grid and Flexbox?",
    answer:
      "Flexbox (Flexible Box Layout) is designed for one-dimensional layouts (either row or column), great for aligning and distributing space among items in a single line. \n\n Examples include navigation bars, buttons in a row, or vertically centering elements. It supports properties like justify-content, align-items, flex-wrap. \n\n CSS Grid is designed for two-dimensional layouts (rows and columns simultaneously), ideal for complex page layouts, like grids of cards or full web page layouts. It supports properties like grid-template-columns, grid-template-rows, grid-gap. In short: Flexbox = 1D (row or column), simpler alignment. Grid = 2D (rows + columns), complex layout control.",
    category: "css",
  },
  {
    id: 23,
    question: "Why do we use semantic elements instead of div?",
    answer:
      "We use semantic elements instead of generic <div>s because semantic tags add meaning to the structure of a webpage. Benefits include: \n\n 1.Readability - Semantic tags like <header>, <nav>, <article>, and <footer> clearly describe their purpose, making the code easier to read and maintain for developers. \n\n 2.Accessibility - Screen readers and assistive technologies can better interpret the page structure, improving accessibility for users with disabilities. \n\n 3.SEO Benefits - Search engines use semantic elements to better understand page content, which can improve search rankings. \n\n 4.Best Practices - Reduces the overuse of <div>s (also called 'div soup') and leads to cleaner, more organized markup.",
    category: "css",
  },
  {
    id: 23.1,
    question: "What are the default property of flex-direction?",
    answer: "The default property of flex-direction is row.",
    category: "css",
  },
  {
    id: 23.2,
    question: "What are the default property of flex-wrap?",
    answer: "The default property of flex-wrap is nowrap.",
    category: "css",
  },
  {
    id: 23.3,
    question: "What are the default property of justify-content?",
    answer: "The default property of justify-content is flex-start.",
    category: "css",
  },
  {
    id: 23.4,
    question: "What are the default property of align-items?",
    answer: "The default property of align-items is stretch.",
    category: "css",
  },
  {
    id: 23.5,
    question: "What is iframe?",
    answer:
      "iFrame is a HTML tag that allows you to embed another HTML page within a page.",
    category: "css",
  },
  {
    id: 23.6,
    question: "How many ways to access class and id in CSS?",
    answer:
      "1. Class: .class-name \n2. Id: #id-name \n3. Tag: tag-name \n4. Universal: * \n5. Attribute: [attribute-name] \n6. Pseudo-class: :pseudo-class-name \n7. Pseudo-element: ::pseudo-element-name",
    category: "css",
  },
  {
    id: 23.7,
    question: "What are the css selectors?",
    answer:
      "1. Class: .class-name \n2. Id: #id-name \n3. Tag: tag-name \n4. Universal: * \n5. Attribute: [attribute-name] \n6. Pseudo-class: :pseudo-class-name \n7. Pseudo-element: ::pseudo-element-name",
    category: "css",
  },
  {
    id: 23.8,
    question:
      "What is the difference between querySelector and querySelectorAll?",
    answer:
      "querySelector: querySelector method returns the first element that satisfies the condition, stops searching after finding first match, returns undefined if no match found, returns a single element. \n\n querySelectorAll: querySelectorAll method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use querySelector to get one specific element, querySelectorAll to get all matching elements.",
    category: "css",
  },
  {
    id: 23.9,
    question:
      "What is the difference between getElementById and getElementsByClassName?",
    answer:
      "getElementById: getElementById method returns the first element that satisfies the condition, stops searching after finding first match, returns undefined if no match found, returns a single element. \n\n getElementsByClassName: getElementsByClassName method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use getElementById to get one specific element, getElementsByClassName to get all matching elements.",
    category: "css",
  },
  {
    id: 223.1,
    question:
      "What is the difference between getElementsByTagName and getElementsByClassName?",
    answer:
      "getElementsByTagName: getElementsByTagName method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use getElementsByTagName to get all matching elements. \n\n getElementsByClassName: getElementsByClassName method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use getElementsByClassName to get all matching elements.",
    category: "css",
  },
  {
    id: 230.11,
    question:
      "What is the difference between getElementsByTagName and getElementsByClassName?",
    answer:
      "getElementsByTagName: getElementsByTagName method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use getElementsByTagName to get all matching elements. \n\n getElementsByClassName: getElementsByClassName method returns all elements that satisfy the condition as a new array, searches entire array, returns empty array if no matches, returns an array. Use getElementsByClassName to get all matching elements.",
    category: "css",
  },
  {
    id: 230.12,
    question: "How many ways we have to center a div?",
    answer:
      "1. Using margin: auto; \n2. Using flexbox: display: flex; justify-content: center; align-items: center; \n3. Using grid: display: grid; place-items: center; \n4. Using text-align: center; \n5. Using transform: translate(-50%, -50%);",
    category: "css",
  },
  // JavaScript Questions
  {
    id: 24,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a prototype-based, multi-paradigm language that supports functional, object-oriented, and event-driven programming. It executes inside the browser using a single-threaded event loop but handles asynchronous tasks using callbacks, promises, and async/await. JavaScript enables dynamic UI updates, DOM manipulation, API communication, and real-time interactivity, making it essential for building modern web applications. With Node.js, it extends beyond the browser and enables full-stack development.",
    category: "javascript",
  },
  {
    id: 2345,
    question: "What does 'interpreted' mean in JavaScript?",
    answer:
      "Interpreted means the code is executed line by line at runtime by an interpreter (like the browser's JavaScript engine), instead of being fully translated into machine code beforehand like compiled languages such as C++ or Java. This makes JavaScript flexible and platform-independent.",
    category: "javascript",
  },
  {
    id: 98341,
    question: "What is prototype-based in JavaScript?",
    answer:
      "JavaScript uses prototypes instead of classical classes. Every object inherits properties and methods from another object called its prototype, forming a prototype chain.",
    category: "javascript",
  },
  {
    id: 52789,
    question: "What is a multi-paradigm language?",
    answer:
      "JavaScript supports multiple programming styles such as functional, object-oriented, and procedural programming, allowing developers to choose the best approach for each problem.",
    category: "javascript",
  },

  {
    id: 67412,
    question: "What is event-driven programming?",
    answer:
      "JavaScript executes code in response to events like clicks, API calls, timers, and user interactions. These events trigger callback functions that make applications interactive.",
    category: "javascript",
  },

  {
    id: 41357,
    question: "Why is JavaScript called single-threaded?",
    answer:
      "JavaScript executes code on a single call stack, meaning only one instruction runs at a time. It cannot execute multiple lines simultaneously.",
    category: "javascript",
  },
  {
    id: 30346,
    question: "What is Event Delegation in JavaScript?",
    answer:
      "Event Delegation is a technique where instead of adding event listeners to many child elements, we add a single listener to a common parent. The event bubbles up from the child to the parent, and the parent decides which element triggered it. This improves performance, reduces memory usage, and makes handling dynamic elements easier.",
    category: "javascript",
  },

  {
    id: 27,
    question: "What are the different data types in JavaScript?",
    answer:
      "JavaScript has 8 data types divided into Primitive and Non-Primitive. \n\n Primitives (7): \n\n 1.Number (integers and floats), \n\n 2.String (text), \n\n 3.Boolean (true/false), \n\n 4.Undefined (declared but not assigned), \n\n 5.Null (intentional empty value), \n\n 6.Symbol (unique identifiers), \n\n 7.BigInt (large integers). \n\n Non-Primitive \n\n(1): Object (includes objects, arrays, functions, dates). \n\nNote:Primitives are immutable and stored by value, while objects are mutable and stored by reference.",
    category: "javascript",
  },
  {
    id: 28,
    question: "What is the difference between mutable and immutable?",
    answer:
      "Immutable:Immutable means once created, the value cannot be changed. All primitive types (string, number, boolean, etc.) are immutable. When you modify a primitive, you create a new value. \n\n Mutable: means the object's contents can be modified after creation. All non-primitive types (objects, arrays) are mutable. Changes affect the original object. For example, strings are immutable - you can't change a character, but objects are mutable - you can add/modify properties.",
    category: "javascript",
  },
  {
    id: 67291,
    question: "What is the difference between let, var, and const?",
    answer:
      "var:var is function-scoped and hoisted as undefined. It can be redeclared and reassigned. let:let is block-scoped and hoisted but stays in the Temporal Dead Zone; it cannot be redeclared but can be reassigned. const:const is also block-scoped, cannot be redeclared or reassigned, but object properties can still be modified. Best practice is to use const by default, let when reassignment is required, and avoid var.",
    category: "javascript",
  },

  {
    id: 30,
    question: "What is the difference between declaration and initialization?",
    answer:
      "Declaration is telling JavaScript that a variable exists and reserving space in memory (e.g., let name;). \n\n Initialization is assigning a value to the declared variable (e.g., name = 'Alice'). They can happen together (let name = 'Alice') or separately. const requires both declaration and initialization together, while let and var can be declared first and initialized later.",
    category: "javascript",
  },
  {
    id: 31,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code actually runs. Because of this, variables or functions can technically be accessed before they appear in the code, but with different rules.\n\nvar is hoisted and initialized with undefined.\n\nlet and const are hoisted but stay in the Temporal Dead Zone (TDZ) until they are initialized.\n\nFunction declarations are fully hoisted, so they can be called before their definition.\n\nFunction expressions only hoist the variable, not the function value.\n\nIn simple terms, JavaScript reads declarations first but does not hoist the actual value or initialization.",
    category: "javascript",
  },
  {
    id: 32,
    question: "Explain scope in JavaScript (global, function, block)",
    answer:
      "Scope determines where variables can be accessed. \n\n Global scope: variables declared outside functions, accessible everywhere. \n\n Function scope: variables declared inside functions (var, let, const), only accessible within that function. \n\n Block scope: variables declared inside {} blocks (let, const only), accessible only within that block. \n\n JavaScript uses lexical scoping where inner functions can access outer scope variables (scope chain).",
    category: "javascript",
  },
  {
    id: 33,
    question: "What is the difference between == and ===?",
    answer:
      "== (loose equality) Checks only value, not the data type. \n\n === (strict equality) checks both value and data type without conversion (e.g., 5 === '5' is false). \n\n Always prefer === to avoid unexpected behavior and bugs from automatic type conversion.",
    category: "javascript",
  },
  {
    id: 34,
    question: "What are truthy and falsy values?",
    answer:
      "In JavaScript, every value is either truthy (treated as true) or falsy (treated as false) in Boolean contexts. \n\n Falsy values (8): \n\n 1.false, \n\n 2.0, \n\n 3.-0, \n\n 4.0n (BigInt zero), \n\n 5.'' (empty string), \n\n 6.null, \n\n 7.undefined, \n\n 8.NaN. \n\n Everything else is truthy, including: '0', 'false', [], {}, and any non-zero number.",
    category: "javascript",
  },
  {
    id: 35,
    question: "What is a closure and why is it used?",
    answer:
      "A closure is a function that remembers and can access variables from its outer function’s scope even after the outer function has finished executing.\n\nIt happens because JavaScript stores both the function and the surrounding lexical environment together.\n\nClosures are used for:\n\n• Data privacy (private variables)\n• State management\n• Function factories\n• Callbacks & event handlers",
    category: "javascript",
  },
  {
    id: 36,
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "A function declaration defines a named function using the 'function' keyword and is hoisted, meaning it can be called before its definition. A function expression assigns a function to a variable and is not hoisted, so it cannot be called before being defined. Function declarations are typically used for reusable named functions, while function expressions are commonly used for callbacks, closures, and anonymous functions.",
    category: "javascript",
  },
  {
    id: 37,
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous JavaScript executes code line by line and blocks further execution until a task finishes. Each operation must complete before the next one starts. \n\n Asynchronous JavaScript allows non-blocking execution where tasks like API calls, timers, or file operations run in the background and complete later via callbacks, promises, or async/await. This prevents the browser from freezing during long operations.",
    category: "javascript",
  },
  {
    id: 38,
    question: "What is the difference between map() and forEach()?",
    answer:
      "map and forEach are both array iteration methods, but they serve different purposes.\n\nmap returns a new array by transforming each element using the callback function. It does not modify the original array and is used when you need a transformed output.\n\nforEach executes the callback for every element but does not return anything. It’s mainly used for side effects like logging, updating external variables, or modifying existing data. It cannot be chained because it returns undefined.",
    category: "javascript",
  },
  {
    id: 39,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but hasn't been assigned any value yet, or a function doesn't return anything. It's JavaScript's default for uninitialized variables. \n\n null is an intentional empty value explicitly set by the developer to represent 'no value' or 'empty object'. \n\n typeof null returns 'object' (a known quirk), while typeof undefined returns 'undefined'.",
    category: "javascript",
  },
  {
    id: 40,
    question:
      "What is the difference between arrow functions and normal functions?",
    answer:
      "Arrow functions: Arrow function introduce by ES6 don't have their own 'this' (inherit from surrounding scope), no 'arguments' object, cannot be used as constructors (no 'new'), no prototype property, shorter syntax. \n\n Normal functions: have their own 'this' based on how they're called, have 'arguments' object, can be constructors, have prototype. Use arrow functions for callbacks and when you want lexical 'this', use normal functions for methods and constructors.",
    category: "javascript",
  },
  {
    id: 41,
    question: "What is the difference between for...in and for...of loops?",
    answer:
      "for...in iterates over the enumerable property keys of an object. It is mainly used for objects, and when used on arrays it returns the index, not the actual value.\n\nfor...of iterates over the values of an iterable, such as arrays, strings, Maps, and Sets. It cannot iterate over plain objects because they are not iterable.\n\nIn short: use for...in to loop through object keys, and use for...of to loop through iterable values.",
    category: "javascript",
  },
  {
    id: 42,
    question: "What is the difference between call(), apply(), and bind()?",
    answer:
      "call() invokes a function immediately with 'this' context and arguments passed individually (func.call(thisArg, arg1, arg2)). \n\n apply() invokes immediately with 'this' context and arguments as an array (func.apply(thisArg, [arg1, arg2])). \n\n bind() returns a new function with fixed 'this' context that can be invoked later (const newFunc = func.bind(thisArg)). Use call/apply for immediate invocation, bind for delayed execution.",
    category: "javascript",
  },
  {
    id: 43,
    question: "What is the difference between setTimeout() and setInterval()?",
    answer:
      "setTimeout() executes a function once after a specified delay in milliseconds. It runs the code one time after waiting. setInterval() repeatedly executes a function at regular intervals until stopped with clearInterval(). Use setTimeout() for single delayed execution (e.g., showing a message after 3 seconds), use setInterval() for repeated execution (e.g., updating a clock every second).",
    category: "javascript",
  },
  {
    id: 44,
    question:
      "What is the difference between localStorage, sessionStorage, and cookies?",
    answer:
      "localStorage: stores data with no expiration (persists after browser close), ~5-10MB limit, data not sent to server, used for user preferences. \n\n sessionStorage: stores data for current session only (cleared when tab closes), ~5-10MB limit, not sent to server. \n\n Cookies: ~4KB limit, can set expiration time, sent with every HTTP request to server, used for authentication/tracking. localStorage and sessionStorage are for client-side only, cookies work with server.",
    category: "javascript",
  },
  {
    id: 45,
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "A shallow copy creates a new object but only copies the top-level properties. Any nested objects or arrays are still referenced, meaning changes in the nested structure affect both the original and the copy. Common methods include Object.assign(), the spread operator {...obj}, and array.slice().\n\nA deep copy recursively copies all levels of the object, creating a completely independent clone. Changes to the copy do not affect the original. Deep copying can be done using JSON.parse(JSON.stringify(obj)) for simple data, structuredClone() for modern browsers, or utility libraries like Lodash's cloneDeep().",
    category: "javascript",
  },
  {
    id: 46,
    question:
      "What is the difference between event bubbling and event capturing?",
    answer:
      "Event capturing and event bubbling describe the two phases of event propagation in the DOM. In event capturing (top-down), the event travels from the window → document → parent elements → target. In event bubbling (bottom-up), the event starts at the target element and moves upward through its ancestors. Bubbling is JavaScript's default propagation phase.\n\nYou can choose the phase when attaching listeners using addEventListener: passing true listens during the capturing phase, and false (default) listens during the bubbling phase.",
    category: "javascript",
  },
  {
    id: 47,
    question: "What is the difference between slice() and splice() in arrays?",
    answer:
      "slice() is used to create a shallow copy of a portion of an array. It does not modify the original array, and the end index is non-inclusive. It is mainly used for extracting or cloning data.\n\nsplice() is used to modify the original array by removing, replacing, or inserting elements at a specific index. It returns the removed elements and is commonly used when you need to update the actual array structure.\n\nIn short: slice() is non-mutating and returns a new array, while splice() is mutating and changes the original array.",
    category: "javascript",
  },
  {
    id: 48,
    question:
      "What is the difference between Object.freeze() and Object.seal()?",
    answer:
      "Object.freeze(): completely prevents any changes - can't add, delete, or modify properties. Object becomes fully immutable. Objects are shallow frozen. \n\n Object.seal(): prevents adding or deleting properties but allows modifying existing property values. You can change values but not the structure. Use freeze() for complete immutability, seal() when you want to allow value updates but lock the structure.",
    category: "javascript",
  },
  {
    id: 49,
    question:
      "What is the difference between Promise.all(), Promise.race(), and Promise.allSettled()?",
    answer:
      "Promise.all() runs all promises in parallel and resolves only when every promise succeeds. If any one promise rejects, the entire Promise.all() rejects immediately. It returns an array of resolved values.\n\nPromise.race() settles as soon as the first promise resolves or rejects. It is commonly used for timeout logic or selecting the fastest response.\n\nPromise.allSettled() waits for all promises to finish, regardless of success or failure. It never rejects and returns an array of objects containing each promise's status and value or reason. It is useful when you need the outcome of all promises without stopping on errors.",
    category: "javascript",
  },
  {
    id: 50,
    question: "What is the difference between find() and filter()?",
    answer:
      "find() returns the first element in the array that satisfies the given condition. It stops execution as soon as a match is found and returns undefined if no element matches. It always returns a single value.\n\nfilter() returns all elements that satisfy the condition as a new array. It checks the entire array and returns an empty array if no matches are found. It always returns an array.\n\nIn short: use find() when you need only one matching element, and use filter() when you need multiple results.",
    category: "javascript",
  },
  {
    id: 51,
    question: "What is the Event Loop?",
    answer:
      "The Event Loop is the mechanism that enables JavaScript to handle asynchronous operations while remaining single-threaded. It continuously checks the call stack and, when the stack is empty, it processes pending callbacks from the task queues.\n\nJavaScript has two important queues:\n\n• Microtask Queue: contains high-priority tasks like Promise callbacks, queueMicrotask(), and MutationObserver. Microtasks run immediately after the currently executing script, before any rendering or macrotasks.\n\n• Macrotask Queue: contains lower-priority tasks such as setTimeout, setInterval, setImmediate, I/O callbacks, and event callbacks. Macrotasks run after all microtasks finish.\n\nThe Event Loop ensures that JavaScript executes synchronous code first, then processes all microtasks, and finally moves on to macrotasks, enabling non-blocking asynchronous behavior.",
    category: "javascript",
  },
  {
    id: 53,
    question: "What is the Temporal Dead Zone (TDZ)?",
    answer:
      "The Temporal Dead Zone (TDZ) is the period between entering a block scope and reaching the declaration of a let or const variable. In this phase, the variable is hoisted but not initialized, so any access to it results in a ReferenceError. TDZ ensures predictable behavior by preventing the use of variables before their declaration, unlike var which is initialized to undefined. This helps avoid accidental bugs and makes block-scoped variables more reliable.",
    category: "javascript",
  },
  {
    id: 54,
    question: "What is the difference between the spread and rest operator?",
    answer:
      "Both use the ... syntax but are used for opposite purposes.\n\nThe spread operator expands an array or object into individual elements. It is commonly used for copying or merging arrays and objects, and for passing array values as function arguments.\n\nThe rest operator collects multiple values into a single array or object. It is used in function parameters to gather remaining arguments, and in destructuring to group leftover elements.\n\nIn short: spread expands values, rest gathers values.",
    category: "javascript",
  },
  {
    id: 56,
    question: "What is the difference between debouncing and throttling?",
    answer:
      "Debouncing ensures a function runs only after a specified delay has passed without the event being triggered again. It waits for the user's pause before executing. This is ideal for actions like search inputs, auto-suggestions, and form validations where you only want to execute after the user stops typing.\n\nThrottling limits how often a function can run by ensuring it executes at most once in a defined interval, even if the event fires repeatedly. This is useful for performance-heavy events like scroll, resize, and mouse movement.\n\nIn short: Debouncing waits for a pause before running the function, while throttling enforces a fixed execution rate.",
    category: "javascript",
  },
  {
    id: 57,
    question: "What is the difference between every() and find()?",
    answer:
      "every() tests whether all elements in an array satisfy a given condition. It returns true only if every element passes and stops early as soon as one element fails.\n\nfind() returns the first element that matches a given condition and stops once a match is found. If no element satisfies the condition, it returns undefined.\n\nIn short: every() validates all elements, find() locates a single matching element.",
    category: "javascript",
  },
  {
    id: 58,
    question: "What is the difference between shift() and unshift()?",
    answer:
      "shift() removes the first element of an array, mutates the original array, and returns the removed element.\n\nunshift() adds one or more elements to the beginning of an array, mutates the original array, and returns the new length.\n\nIn short: shift() removes from the start, unshift() adds to the start. They are the opposite of pop() and push() which work at the end.",
    category: "javascript",
  },
  {
    id: 59,
    question: "What is split() in JavaScript?",
    answer:
      "split() is a string method that divides a string into an array of substrings based on a given separator. The separator can be a character, string, or regular expression. If the separator is not found, it returns an array with the original string. Using an empty string ('') splits the string into characters. An optional limit parameter restricts the number of elements returned. It is commonly used for parsing text, tokenizing sentences, or handling formatted data.",
    category: "javascript",
  },
  {
    id: 60,
    question: "What is the difference between indexOf() and findIndex()?",
    answer:
      "indexOf() searches for an exact value in an array using strict equality (===) and returns the index, or -1 if not found. It cannot use custom logic.\n\nfindIndex() executes a callback function and returns the index of the first element that satisfies the condition, or -1 if none match.\n\nIn short: indexOf() is for direct value lookup, findIndex() is for condition-based searches.",
    category: "javascript",
  },
  {
    id: 61,
    question: "What are Promises in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected. Promises help manage asynchronous code and avoid callback hell.\n\nA Promise is created using new Promise((resolve, reject) => {}). You handle results with .then() for fulfillment, .catch() for errors, and .finally() for cleanup. Promises are also the basis of async/await in modern JavaScript.",
    category: "javascript",
  },
  {
    id: 62,
    question: "What is Promise chaining and how does it work?",
    answer:
      "Promise chaining is a technique where multiple asynchronous operations are executed in sequence by returning a new Promise from one .then() and handling it in the next .then(). Each .then() passes its result to the next one. This allows running async tasks step by step. If an error happens anywhere in the chain, it can be caught in a single .catch() at the end. This makes async code more readable and maintainable than nested callbacks.",
    category: "javascript",
  },
  {
    id: 63,
    question: "What happens if you don't return a value in a .then() block?",
    answer:
      "If you don't explicitly return a value in a .then() block, the next .then() in the chain will receive undefined as its input. This can break the chain if subsequent operations expect a value. Always return a value or a Promise from .then() to pass data to the next handler in the chain.",
    category: "javascript",
  },
  {
    id: 64,
    question:
      "What is the difference between returning a value vs returning a Promise in .then()?",
    answer:
      "Returning a regular value passes it immediately to the next .then() - the value is automatically wrapped in a resolved Promise. \n\nReturning a Promise makes the next .then() wait until that Promise resolves before executing. This is useful for sequential async operations. If you return a value, the chain continues immediately; if you return a Promise, the chain waits for that Promise to settle.",
    category: "javascript",
  },
  {
    id: 65,
    question:
      "What is the difference between Promise.all, Promise.allSettled, Promise.any, and Promise.race?",
    answer:
      "Promise.all waits for all promises to resolve but fails immediately if one rejects. \n\n Promise.allSettled waits for all promises and gives results of both fulfilled and rejected (never rejects). \n\n Promise.any returns the first fulfilled promise and ignores rejections (only fails if all reject). \n\n Promise.race returns the result of the first promise that settles, whether resolved or rejected. Use all() when all must succeed, allSettled() to know all outcomes, any() for first success, race() for first result.",
    category: "javascript",
  },
  {
    id: 66,
    question: "How does Promise.all behave when one Promise rejects?",
    answer:
      "If one promise rejects in Promise.all, it immediately rejects with that error and stops waiting for other promises. The results of successfully resolved promises are ignored. This fail-fast behavior means Promise.all is suitable only when all operations must succeed. \n\n If you need results from all promises regardless of failures, use Promise.allSettled instead.",
    category: "javascript",
  },
  {
    id: 67,
    question:
      "When should you use Promise.allSettled() instead of Promise.all()?",
    answer:
      "Use Promise.allSettled when you want results of all promises, even if some fail. It's useful when loading multiple resources where failure of one doesn't stop others (e.g., loading user profile, settings, and notifications - you want to show whatever loaded successfully). Promise.allSettled never rejects and returns an array with status (fulfilled/rejected) and value/reason for each promise. Use Promise.all only when all operations must succeed.",
    category: "javascript",
  },
  {
    id: 68,
    question: "What happens if you resolve or reject a Promise multiple times?",
    answer:
      "A promise can only settle once. After it is resolved or rejected, further resolve or reject calls are ignored. The promise locks into its first settled state. This immutability ensures predictable behavior - once a promise completes, its result cannot change. Subsequent calls to resolve/reject have no effect, and no error is thrown.",
    category: "javascript",
  },
  {
    id: 69,
    question:
      "What is the difference between the microtask queue (Promises) and the macrotask queue (setTimeout)?",
    answer:
      "The microtask queue contains high-priority tasks such as Promise callbacks, queueMicrotask(), and MutationObserver. The macrotask queue contains lower-priority tasks like setTimeout, setInterval, DOM events, and network callbacks.\n\nMicrotasks always run before macrotasks. After the call stack becomes empty, the event loop first processes all microtasks, and only then picks the next macrotask. This is why Promise.then() executes before setTimeout, even with a 0 ms delay.\n\nOrder of execution: Call Stack → Microtasks → Macrotasks.",
    category: "javascript",
  },
  {
    id: 70,
    question: "How does error propagation work in Promise chains?",
    answer:
      "If an error happens in a promise chain (either a rejection or a thrown error), it propagates down the chain to the nearest .catch() handler. All .then() handlers in between are skipped. If no .catch() is present, it causes an unhandled promise rejection. You can have multiple .catch() handlers - after catching an error, you can return a value to recover and continue the chain. Errors can be re-thrown in .catch() to propagate further.",
    category: "javascript",
  },
  {
    id: 71,
    question: "What is async/await in JavaScript?",
    answer:
      "Async/await is a way to handle asynchronous operations in JavaScript with cleaner syntax. When you put 'async' before a function, it always returns a Promise. Inside that function, you can use the 'await' keyword to pause execution until a Promise resolves or rejects. It makes asynchronous code look like synchronous code, making it easier to read and maintain compared to chaining .then() methods. Errors can be caught using try/catch blocks.",
    category: "javascript",
  },
  {
    id: 72,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature in JavaScript where an inner function can continue to use variables from its parent function's scope, even after the parent function has finished executing. The inner function 'closes over' the variables it needs. Closures are created every time a function is created. They're used for data privacy (private variables), creating factory functions, maintaining state in callbacks, and implementing module patterns. The inner function maintains a reference to its outer scope.",
    category: "javascript",
  },
  {
    id: 73,
    question: "What is a currying function?",
    answer:
      "Currying is a technique in JavaScript where a function is transformed into a sequence of functions, each taking a single argument. Instead of passing all arguments at once (func(a, b, c)), you pass them one by one (func(a)(b)(c)). Each function returns another function until all arguments are received. Benefits: partial application (pre-fill some arguments), reusability, and functional composition. Example: const add = a => b => c => a + b + c; add(1)(2)(3) returns 6.",
    category: "javascript",
  },
  {
    id: 74,
    question: "What is a higher-order function?",
    answer:
      "A higher-order function is a function that either takes another function as an argument, returns a function, or does both. It enables reusable logic, functional composition, and more expressive code. Common examples include array methods like map(), filter(), and reduce(), which accept callback functions. Higher-order functions are widely used in callbacks, event handlers, closures, and functional programming patterns.",
    category: "javascript",
  },
  {
    id: 75.21,
    question: "What is a callback function?",
    answer:
      "A callback function is a function passed as an argument to another function to be executed later, usually after a task completes. Callbacks allow functions to run asynchronously, letting JavaScript continue executing without blocking. They are commonly used in event handling, timers, and asynchronous operations like network requests. Callbacks form the foundation for Promises and async/await.",
    category: "javascript",
  },
  {
    id: 75.22,
    question: "List out type of function in JavaScript?",
    answer:
      " \n\n1. Anonymous function example: function() { console.log('Hello'); } \n2. Arrow function example: () => { console.log('Hello'); } \n3. Named function example: function myFunction() { console.log('Hello'); } \n4. Constructor function example: function MyConstructor() { this.name = 'John'; } \n5. Generator function example: function* myGenerator() { yield 1; yield 2; yield 3; } \n6. Async function example: async function myAsyncFunction() { await new Promise(resolve => setTimeout(resolve, 1000)); console.log('Hello'); }",
    category: "javascript",
  },
  {
    id: 75,
    question: "What is the difference between React.memo and useMemo?",
    answer:
      "React.memo is a higher-order component that prevents unnecessary re-rendering of a component by comparing props - if props haven't changed, React skips rendering. It wraps the entire component (export default React.memo(MyComponent)). useMemo is a hook used inside a component to memoize the result of an expensive calculation. It caches the value and only recalculates when dependencies change. Use memo for component-level optimization, useMemo for value/calculation optimization within a component.",
    category: "javascript",
  },
  {
    id: 76.1,
    question: "Explain ES6 new features?",
    answer:
      "ES6 (ES2015) introduced many important features that modernized JavaScript:\n\n1. **let and const**: Block-scoped variable declarations\n\n2. **Arrow Functions**: Shorter syntax with lexical 'this' binding (=>)\n\n3. **Template Literals**: String interpolation using backticks (`Hello ${name}`)\n\n4. **Destructuring**: Extract values from arrays/objects ({name, age} = obj)\n\n5. **Default Parameters**: function greet(name = 'Guest')\n\n6. **Spread Operator**: Expand arrays/objects (...array, ...obj)\n\n7. **Rest Parameters**: Collect remaining arguments (...args)\n\n8. **Classes**: Syntactic sugar for constructor functions\n\n9. **Promises**: Better async handling\n\n10. **Modules**: import/export for code organization\n\n11. **Enhanced Object Literals**: Shorthand properties, computed keys\n\n12. **for...of Loop**: Iterate over iterable objects\n\n13. **Map and Set**: New data structures\n\n14. **Symbol**: New primitive type for unique identifiers\n\n15. **Iterators and Generators**: Custom iteration with function*",
    category: "javascript",
  },
  {
    id: 76.2,
    question: "What are array methods in JavaScript?",
    answer:
      "Array methods in JavaScript are built-in functions that operate on arrays to perform various operations like sorting, filtering, mapping, and more. Some common array methods are:\n\n1. **map**: Creates a new array with the results of calling a function on every element in the original array\n\n2. **filter**: Creates a new array with all elements that pass the test implemented by the provided function\n\n3. **reduce**: Executes a reducer function on each element of the array, resulting in a single output value\n\n4. **forEach**: Executes a provided function once for each array element\n\n5. **find**: Returns the value of the first element in the array that satisfies the provided testing function\n\n6. **some**: Tests whether at least one element in the array passes the test implemented by the provided function\n\n7. **every**: Tests whether all elements in the array pass the test implemented by the provided function\n\n8. **sort**: Sorts the elements of an array in place and returns the sorted array\n\n9. **concat**: Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array",
    category: "javascript",
  },
  {
    id: 76.3,
    question: "What are object methods in JavaScript?",
    answer:
      "Object methods in JavaScript are built-in functions that operate on objects to perform various operations like creating, updating, and deleting properties, and more. Some common object methods are:\n\n1. **Object.keys**: Returns an array of a given object's own enumerable property names\n\n2. **Object.values**: Returns an array of a given object's own enumerable property values\n\n3. **Object.entries**: Returns an array of a given object's own enumerable property [key, value] pairs\n\n4. **Object.assign**: Copies all enumerable own properties from one or more source objects to a target object\n\n5. **Object.freeze**: Freezes an object: prevents new properties from being added, existing properties from being removed or changed, and existing properties from being set to writable\n\n6. **Object.seal**: Seals an object: prevents new properties from being added, and existing properties from being removed or changed",
    category: "javascript",
  },
  {
    id: 76.4,
    question: "What are string methods in JavaScript?",
    answer:
      "String methods in JavaScript are built-in functions that operate on strings to perform various operations like finding, replacing, and manipulating strings. Some common string methods are:\n\n1. **charAt**: Returns the character at the specified index\n\n2. **charCodeAt**: Returns the Unicode of the character at the specified index\n\n3. **concat**: Combines the text of two or more strings and returns a new string\n\n4. **indexOf**: Returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex\n\n5. **lastIndexOf**: Returns the index within the calling string object of the last occurrence of the specified value, searching backwards from fromIndex\n\n6. **replace**: Returns a new string with some or all matches of a pattern replaced by a replacement string\n\n7. **slice**: Extracts a section of a string and returns it as a new string, without modifying the original string\n\n8. **split**: Splits a string into an array of strings by separating the string into substrings\n\n9. **substring**: Returns the characters in a string between two indices, or to the end of the string",
    category: "javascript",
  },
  {
    id: 76.5,
    question: "What are number methods in JavaScript?",
    answer:
      "Number methods in JavaScript are built-in functions that operate on numbers to perform various operations like rounding, formatting, and more. Some common number methods are:\n\n1. **toFixed**: Formats a number using fixed-point notation\n\n2. **toExponential**: Formats a number using exponential notation\n\n3. **toPrecision**: Formats a number to a specified length\n\n4. **toString**: Converts a number to a string, using a specified radix\n\n5. **isNaN**: Determines whether a value is NaN\n\n6. **isFinite**: Determines whether a value is a finite number",
    category: "javascript",
  },
  {
    id: 76.6,
    question: "What are date methods in JavaScript?",
    answer:
      "Date methods in JavaScript are built-in functions that operate on dates to perform various operations like getting, setting, and manipulating dates. Some common date methods are:\n\n1. **getDate**: Returns the day of the month (1-31)\n\n2. **getDay**: Returns the day of the week (0-6)\n\n3. **getFullYear**: Returns the year (4 digits)\n\n4. **getHours**: Returns the hour (0-23)\n\n5. **getMinutes**: Returns the minute (0-59)\n\n6. **getSeconds**: Returns the second (0-59)\n\n7. **getMilliseconds**: Returns the millisecond (0-999)\n\n8. **getTime**: Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC\n\n9. **setDate**: Sets the day of the month\n\n10. **setFullYear**: Sets the year\n\n11. **setHours**: Sets the hour\n\n12. **setMinutes**: Sets the minute\n\n13. **setSeconds**: Sets the second\n\n14. **setMilliseconds**: Sets the millisecond",
    category: "javascript",
  },
  {
    id: 76.7,
    question: "What are math methods in JavaScript?",
    answer:
      "Math methods in JavaScript are built-in functions that operate on numbers to perform various operations like rounding, formatting, and more. Some common math methods are:\n\n1. **abs**: Returns the absolute value of a number\n\n2. **ceil**: Returns the smallest integer greater than or equal to a number\n\n3. **floor**: Returns the largest integer less than or equal to a number\n\n4. **round**: Rounds a number to the nearest integer\n\n5. **random**: Returns a random number between 0 and 1\n\n6. **max**: Returns the largest of zero or more numbers\n\n7. **min**: Returns the smallest of zero or more numbers\n\n8. **pow**: Returns the base to the exponent power\n\n9. **sqrt**: Returns the square root of a number",
    category: "javascript",
  },
  {
    id: 76.8,
    question: "What are regular expression methods in JavaScript?",
    answer:
      "Regular expression methods in JavaScript are built-in functions that operate on regular expressions to perform various operations like finding, replacing, and manipulating strings. Some common regular expression methods are:\n\n1. **test**: Tests for a match in a string\n\n2. **exec**: Executes a search for a match in a specified string\n\n3. **match**: Finds matches of a regular expression in a string\n\n4. **replace**: Replaces matched substrings with a replacement string\n\n5. **search**: Tests for a match in a string\n\n6. **split**: Splits a string into an array of strings by separating the string into substrings",
    category: "javascript",
  },
  {
    id: 76.9,
    question: "Why do we use 'use strict' in JavaScript?",
    answer:
      "'use strict' enables strict mode and helps write cleaner and safer JavaScript code. It prevents accidental global variables, disallows unsafe actions, throws errors for silent failures, and makes debugging easier. For a 3-year experienced developer, it ensures more predictable and maintainable code in larger projects.",
    category: "javascript",
  },
  {
    id: 77,
    question: "What is the output of console.log('2' == 2)?",
    answer:
      "Output: true. Explanation: The == operator checks value equality with type coercion. The string '2' is automatically converted to number 2 before comparison, so '2' == 2 evaluates to true. This is why === is preferred for comparisons to avoid unexpected type coercion.",
    category: "output-based",
  },
  {
    id: 78,
    question: "What is the output of console.log('2' === 2)?",
    answer:
      "Output: false. Explanation: The === operator checks strict equality without type coercion. '2' is a string and 2 is a number. Since they are different types, === returns false. Always use === to avoid type coercion bugs.",
    category: "output-based",
  },
  {
    id: 79,
    question: "What is the output of console.log([] == [])?",
    answer:
      "Output: false. Explanation: Arrays are reference types, and == compares references (memory addresses), not values. Two different empty arrays do not reference the same object in memory, so it returns false even though they look identical.",
    category: "output-based",
  },
  {
    id: 80,
    question: "What is the output of console.log([] === [])?",
    answer:
      "Output: false. Explanation: Same as ==, the === operator compares references for objects and arrays. Two separate empty arrays are different objects stored at different memory locations, so === returns false.",
    category: "output-based",
  },
  {
    id: 81,
    question: "What is the output of console.log([1,2,3] + [5,6,7])?",
    answer:
      "Output: '1,2,35,6,7' (a string). Explanation: The + operator with arrays triggers string concatenation. Each array is first converted to a string: [1,2,3] becomes '1,2,3' and [5,6,7] becomes '5,6,7'. Then they are concatenated as strings, resulting in '1,2,35,6,7'.",
    category: "output-based",
  },
  {
    id: 82,
    question: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
    answer:
      "Output: false. Explanation: Floating-point numbers in JavaScript are not always exact due to binary representation (IEEE 754 standard). 0.1 + 0.2 actually evaluates to 0.30000000000000004, not exactly 0.3. This is a common gotcha in JavaScript. Use Number.EPSILON or toFixed() for precise decimal comparisons.",
    category: "output-based",
  },
  {
    id: 83,
    question: "What is the output of console.log({} == {})?",
    answer:
      "Output: false. Explanation: Objects are reference types. The == operator compares references, not the content. Two different empty objects are stored at different memory locations, so they are not equal even though they appear identical.",
    category: "output-based",
  },
  {
    id: 84,
    question: "What is the output of console.log({} === {})?",
    answer:
      "Output: false. Explanation: Same as ==, the === operator compares object references. Two separate object literals are different objects in memory, so === returns false. Objects are only equal if they reference the exact same object.",
    category: "output-based",
  },
  {
    id: 85,
    question:
      "What is the output of: let obj = {a:1}; let copy = obj; copy.a = 5; console.log(obj.a)?",
    answer:
      "Output: 5. Explanation: Objects are reference types. When you assign copy = obj, both variables point to the same object in memory. Modifying copy.a also affects obj.a because they reference the same object. To avoid this, create a shallow copy with {...obj} or a deep copy.",
    category: "output-based",
  },
  {
    id: 86,
    question: "What is the output of console.log(2 + '2')?",
    answer:
      "Output: '22' (a string). Explanation: The + operator is used for both addition and string concatenation. If either operand is a string, JavaScript converts the other into a string and concatenates. So 2 + '2' becomes '2' + '2', resulting in '22'.",
    category: "output-based",
  },
  {
    id: 87,
    question: "What is the output of console.log(2 - '2')?",
    answer:
      "Output: 0. Explanation: The - operator is only for numeric subtraction, not concatenation. JavaScript attempts to convert '2' (string) into a number. So 2 - '2' becomes 2 - 2, which equals 0.",
    category: "output-based",
  },
  {
    id: 88,
    question: "What is the output of console.log('2' + 2 - 2)?",
    answer:
      "Output: 20. Explanation: Operations are evaluated left to right. First, '2' + 2: since '2' is a string, 2 is converted to string, resulting in '22' (string). Then '22' - 2: the - operator converts '22' to number 22, then 22 - 2 = 20.",
    category: "output-based",
  },
  {
    id: 89,
    question: "What is the output of console.log(true + true)?",
    answer:
      "Output: 2. Explanation: In numeric context, true is converted to 1 and false is converted to 0. So true + true becomes 1 + 1 = 2.",
    category: "output-based",
  },
  {
    id: 90,
    question: "What is the output of console.log(false + true)?",
    answer:
      "Output: 1. Explanation: false converts to 0 and true converts to 1 in numeric context. So false + true becomes 0 + 1 = 1.",
    category: "output-based",
  },
  {
    id: 91,
    question: "What is the output of console.log(true - false)?",
    answer:
      "Output: 1. Explanation: In arithmetic operations, true converts to 1 and false converts to 0. So true - false becomes 1 - 0 = 1.",
    category: "output-based",
  },
  {
    id: 92,
    question: "What is the output of console.log(null + 1)?",
    answer:
      "Output: 1. Explanation: null is converted to 0 in numeric context. So null + 1 becomes 0 + 1 = 1.",
    category: "output-based",
  },
  {
    id: 93,
    question: "What is the output of console.log(undefined + 1)?",
    answer:
      "Output: NaN. Explanation: undefined cannot be converted to a valid number, so it becomes NaN (Not a Number). Any arithmetic operation with NaN results in NaN. So undefined + 1 = NaN.",
    category: "output-based",
  },
  {
    id: 94,
    question: "What is the output of console.log([1,2] + [3,4])?",
    answer:
      "Output: '1,23,4' (a string). Explanation: Arrays are converted to strings when using the + operator. [1,2] becomes '1,2' and [3,4] becomes '3,4'. Then they are concatenated as strings: '1,2' + '3,4' = '1,23,4'.",
    category: "output-based",
  },
  {
    id: 95,
    question: "What is the output of console.log([] + [])?",
    answer:
      "Output: '' (empty string). Explanation: Empty arrays convert to empty strings when using the + operator. So [] + [] becomes '' + '', resulting in an empty string ''.",
    category: "output-based",
  },
  {
    id: 96,
    question: "What is the output of console.log([] + {})?",
    answer:
      "Output: '[object Object]'. Explanation: Empty array [] converts to empty string '', and empty object {} converts to '[object Object]'. So [] + {} becomes '' + '[object Object]' = '[object Object]'.",
    category: "output-based",
  },
  {
    id: 97,
    question: "What is the output of console.log({} + [])?",
    answer:
      "Output: 0 or '[object Object]' (depends on context). Explanation: In some JavaScript engines, {} at the start is interpreted as an empty code block (not an object), so +[] converts empty array to 0. In other contexts, it's treated as object concatenation resulting in '[object Object]'. Use parentheses ({} + []) for consistent behavior.",
    category: "output-based",
  },
  {
    id: 98,
    question: "What is the output of console.log('' == 0)?",
    answer:
      "Output: true. Explanation: The == operator performs type coercion. Empty string '' is converted to 0 in numeric comparison. So '' == 0 becomes 0 == 0, which is true.",
    category: "output-based",
  },
  {
    id: 99,
    question: "What is the output of console.log('' === 0)?",
    answer:
      "Output: false. Explanation: The === operator checks strict equality without type coercion. '' is a string and 0 is a number, so they are different types and === returns false.",
    category: "output-based",
  },
  {
    id: 100,
    question: "What is the output of console.log(false == '0')?",
    answer:
      "Output: true. Explanation: With ==, both false and '0' are converted to numbers. false becomes 0, and '0' also becomes 0. So false == '0' becomes 0 == 0, which is true.",
    category: "output-based",
  },
  {
    id: 101,
    question: "What is the output of console.log(false === '0')?",
    answer:
      "Output: false. Explanation: The === operator compares without type coercion. false is a boolean and '0' is a string, so they are different types and === returns false.",
    category: "output-based",
  },
  {
    id: 102,
    question: "What is the output of console.log([0] == 0)?",
    answer:
      "Output: true. Explanation: Array [0] is converted to string '0', then '0' is converted to number 0. So [0] == 0 becomes 0 == 0, which is true. This is a quirky behavior of type coercion with ==.",
    category: "output-based",
  },
  {
    id: 103,
    question: "What is the output of console.log([1] == '1')?",
    answer:
      "Output: true. Explanation: Array [1] is converted to string '1', then '1' is converted to number 1. So [1] == 1 becomes 1 == 1, which is true.",
    category: "output-based",
  },
  {
    id: 104,
    question: "What is the output of console.log([1,2] == '1,2')?",
    answer:
      "Output: true. Explanation: Array [1,2] is converted to string '1,2'. The == operator then compares '1,2' == '1,2', which is true. This shows how arrays are stringified in comparisons.",
    category: "output-based",
  },
  {
    id: 105,
    question: "How to filter people with age greater than 20 using map?",
    answer:
      "You shouldn't use map for filtering - use filter instead. map returns an array with the same length, just transformed. Correct approach: const result = people.filter(person => person.age > 20).map(person => person.name). This first filters people over 20, then maps to their names. Remember: filter() for filtering data, map() for transforming data. map always returns an array of the same length as input.",
    category: "output-based",
  },
  {
    id: 106,
    question: "What is the output of console.log(typeof NaN)?",
    answer:
      "Output: 'number'. Explanation: NaN is a special value in JavaScript that represents 'Not a Number'. It's a number type, not a string or boolean.",
    category: "output-based",
  },
  {
    id: 107,
    question: "What is the output of console.log(typeof Infinity)?",
    answer:
      "Output: 'number'. Explanation: Infinity is a special value in JavaScript that represents positive infinity. It's a number type, not a string or boolean.",
    category: "output-based",
  },
  {
    id: 108,
    question: "What is the output of console.log(typeof -Infinity)?",
    answer:
      "Output: 'number'. Explanation: -Infinity is a special value in JavaScript that represents negative infinity. It's a number type, not a string or boolean.",
    category: "output-based",
  },
  {
    id: 109,
    question: "What is the output of console.log(typeof undefined)?",
    answer:
      "Output: 'undefined'. Explanation: undefined is a special value in JavaScript that represents a variable that has been declared but not assigned a value. It's a undefined type, not a string or boolean.",
    category: "output-based",
  },
  {
    id: 2898110,
    question:
      "What is the output of let a =10 ;console.log(a * 10) and console.log(a ** 10)?",
    answer:
      "Output: \nconsole.log(a * 10) → 100\nconsole.log(a ** 10) → 10000000000\n\nExplanation: The * operator performs multiplication, so 10 * 10 = 100. The ** operator is the exponentiation operator (power), so 10 ** 10 means 10 raised to the power of 10, which equals 10,000,000,000 (10 billion). The single asterisk (*) is for multiplication, while the double asterisk (**) is for exponentiation in JavaScript.",
    category: "output-based",
  },
  {
    id: 2898111,
    question:
      "What is the output of function test(){salary=1200; console.log(salary);} test();?",
    answer:
      "Output: 1200\n\nExplanation: When the function test() is called, it creates a global variable salary (because it's not declared with var, let, or const) and assigns it the value 1200. Then console.log(salary) prints 1200. Note: This creates an implicit global variable, which is bad practice. In strict mode ('use strict'), this would throw a ReferenceError.",
    category: "output-based",
  },
  {
    id: 2898112,
    question:
      "What is the output of: function test() { console.log(test.abc); } test(); test.abc = 200; test.abc = 300; test();?",
    answer:
      "Output: \nFirst test() → undefined\nSecond test() → 300\n\nExplanation: In JavaScript, functions are objects and can have properties. Initially, test.abc doesn't exist, so the first test() call logs undefined. Then we assign test.abc = 200, but immediately overwrite it with test.abc = 300. When we call test() again, it logs 300 because that's the current value of the test.abc property. Functions as objects can store properties just like regular objects.",
    category: "output-based",
  },
  {
    id: 2898113,
    question:
      "What is the output of: let a = { name: 'Hemant' };let b = { ...a };b.name = 'Agrahari';console.log(a.name);console.log(b.name);",
    answer:
      "Output: \nHemant\nAgrahari\n\n. Explanation: The ...a is a spread operator that copies the properties of the a object to the b object. So b.name = 'Agrahari' changes the name property of the b object to 'Agrahari', but it does not change the name property of the a object. So a.name = 'Hemant' and b.name = 'Agrahari' are two different objects.",
    category: "output-based",
  },
  // Next.js Questions
  {
    id: 106,
    question: "What is Next.js and why use it?",
    answer:
      "Next.js is a React framework that provides features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, and file-based routing. It improves performance, SEO, and developer experience while simplifying React application development.",
    category: "nextjs",
  },
  {
    id: 201,
    question: "What is SSR in Next.js?",
    answer:
      "SSR (Server-Side Rendering) means the page is generated on every request. When a user visits the page, the server fetches the data and sends fresh HTML each time. It’s perfect for personalized pages, dashboards, or content that changes very frequently.",
    category: "nextjs",
  },
  {
    id: 202,
    question: "What is SSG in Next.js?",
    answer:
      "SSG (Static Site Generation) generates the HTML once at build time. The content is fixed and extremely fast because it’s served from the CDN. It’s great for content that rarely changes, such as marketing pages, documentation, or blogs that don’t update often.",
    category: "nextjs",
  },
  {
    id: 203,
    question: "What is ISR in Next.js?",
    answer:
      "ISR (Incremental Static Regeneration) sits between SSR and SSG. It creates static pages at build time but can re-generate or update them in the background after a set interval. You get the speed of SSG with the flexibility of dynamic updates. It’s ideal for blogs, product pages, or dashboards where data changes but doesn't need real-time updates.",
    category: "nextjs",
  },

  {
    id: 30156576476,
    question: "Explain the App Router vs Pages Router in Next.js.",
    answer:
      "Next.js has two routing systems: the Pages Router and the App Router. The Pages Router is the older system that uses the /pages folder. It renders everything as client components and uses getStaticProps, getServerSideProps, and getStaticPaths for data fetching. It is simple and stable but does not support modern features like nested layouts or server components.\n\nThe App Router was introduced in Next.js 13 and uses the /app folder. It supports React Server Components by default, which improves performance because heavy logic runs on the server. It also introduces nested layouts, loading states, streaming, and more flexible routing like parallel and intercepting routes. Data fetching becomes simpler using async functions and built-in caching. Overall, the App Router is more modern, scalable, and better for large applications, while the Pages Router is easier for small projects and beginners.",
    category: "nextjs",
  },
  {
    id: 3022345,
    question: "What are Server Components and Client Components in Next.js?",
    answer:
      "In Next.js, Server Components run on the server by default. They never ship JavaScript to the browser, so they load faster and improve performance. They are perfect for data fetching, heavy calculations, and rendering UI that doesn’t need interactivity.\n\nClient Components run in the browser and include JavaScript. These are used when you need interactivity, such as buttons, forms, modals, inputs, and hooks like useState or useEffect. To make a component a Client Component, we add 'use client' at the top.\n\nIn short: Server Components are fast and ideal for static or data-driven UI, while Client Components handle anything interactive.",
    category: "nextjs",
  },
  {
    id: 110,
    question: "How does Next.js handle image optimization?",
    answer:
      "Next.js provides the Image component that automatically optimizes images through lazy loading, responsive sizing, modern formats (WebP/AVIF), blur placeholders, and on-demand optimization. It significantly improves performance and Core Web Vitals without manual configuration.",
    category: "nextjs",
  },
  {
    id: 110.1,
    question: "What is the advantage of using Next.js over traditional React?",
    answer:
      "Nextjs advantages:1. Automatic Image Optimization\n2. File-Based Routing\n3. Server-Side Rendering (SSR)\n4. Static Site Generation (SSG)\n5. API Routes\n6. Incremental Static Regeneration (ISR)\n7. TypeScript Support\n8. Automatic Code Splitting\n9. Improved Performance and SEO\n10. Developer Experience \n11. Community and Ecosystem\n\nReact advantages:1. Flexibility\n2. Performance\n3. Ecosystem\n4. Community\n5. Scalability\n6. SEO\n7. Developer Experience\n8. Integration with other libraries and frameworks\n9. Compatibility with existing codebases\n10. Scalability\n11. SEO\n12. Developer Experience\n13. Community and Ecosystem",
    category: "nextjs",
  },

  // React Questions
  {
    id: 111,
    question: "What is React and what makes it popular?",
    answer:
      "React is a JavaScript library for building user interfaces, developed by Facebook. Its popularity comes from: component-based architecture, virtual DOM for efficient updates, one-way data flow, strong ecosystem, large community, and ability to build both web and mobile apps (React Native).",
    category: "react",
  },
  {
    id: 30453,
    question: "What is an Error Boundary in React?",
    answer:
      "An Error Boundary is a special React component that catches JavaScript errors in the UI during rendering. Instead of the whole app crashing, it shows a fallback UI. Error Boundaries catch errors in child components, lifecycle methods, and rendering, but not in event handlers. They are created using class components with componentDidCatch and getDerivedStateFromError. In short, Error Boundaries help prevent the entire React app from breaking when one part has an error, and allow us to show a safe fallback message.",
    category: "react",
  },
  {
    id: 112,
    question: "What are React Hooks and name the most common ones?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. Most common: \n\n 1.useState (state management), \n\n 2.useEffect (side effects), \n\n 3.useContext (context consumption), \n\n 4.useRef (mutable refs), \n\n 5.useMemo (memoized values), \n\n 6.useCallback (memoized callbacks), and \n\n 7.useReducer (complex state logic).",
    category: "react",
  },
  {
  id: 113,
  question: "Explain the Virtual DOM and how React uses it.",
  answer:
    "The Virtual DOM is a lightweight in-memory representation of the real DOM. When a component’s state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a diffing algorithm. Based on this comparison, React calculates the minimal set of changes needed and updates only those specific parts of the real DOM, instead of re-rendering the entire UI.\n\nThis process, known as reconciliation, makes UI updates faster and more efficient because manipulating the real DOM is expensive, while working with the Virtual DOM is much cheaper. React’s Virtual DOM helps achieve high performance by batching updates and applying only the necessary changes.",
  category: "react",
}
,
 {
  id: 124.2,
  question: "What are controlled and uncontrolled components in React?",
  answer:
    "Controlled components are form inputs whose values are fully managed by React state. Every change triggers an onChange handler, updating state and re-rendering the UI. This makes the input’s value predictable, enables real-time validation, formatting, and ensures React is the single source of truth.\n\nUncontrolled components store their values directly in the DOM instead of React state. Their current values are accessed using refs, typically during form submission. They require less code and behave like traditional HTML form elements but offer less control for validation or dynamic updates.\n\nIn short: controlled components keep form data in React state for maximum control, while uncontrolled components rely on the DOM for simplicity but reduced flexibility.",
  category: "react",
},  {
    id: 114,
    question: "What is reconciliation in React?",
    answer:"",
    category: "react",
},
  {
    id: 115,
    question: "What is prop drilling and how can you avoid it?",
    answer:
      "Prop drilling is passing props through multiple component layers to reach deeply nested components. \n\n Solutions: Context API (for global state), composition (children props), custom hooks, or state management libraries (Redux, Zustand). Choose based on application size and complexity.",
    category: "react",
  },
  {
    id: 116,
    question: "What are pure components in React?",
    answer:
      "Pure components are React components that only re-render when their props or state change. They are optimized for performance because they avoid unnecessary re-renders. They are created by extending React.PureComponent or using React.memo. Use them when you have a component that only depends on its props and doesn't need to be re-rendered when parent components change.",
    category: "react",
  },
  {
    id: 117,
    question: "What are the differences between React.memo and useMemo?",
    answer:
      "React.memo is a higher-order component that prevents unnecessary re-rendering of a component by comparing props - if props haven't changed, React skips rendering. It wraps the entire component (export default React.memo(MyComponent)). \n\n useMemo is a hook used inside a component to memoize the result of an expensive calculation. It caches the value and only recalculates when dependencies change. Use memo for component-level optimization, useMemo for value/calculation optimization within a component.",
    category: "react",
  },
  {
    id: 118,
    question: "What are the differences between useCallback and useMemo?",
    answer:
      "useCallback and useMemo are both React hooks used for optimization, but they solve different problems. useCallback is used to memoize a function, meaning it returns the same function instance unless its dependencies change. This is helpful when passing functions to child components, preventing unnecessary re-renders. useMemo, on the other hand, memoizes the result of an expensive calculation. Instead of recalculating a heavy value on every render, useMemo returns a cached value unless the dependencies change. In simple terms: useCallback returns a memoized function, while useMemo returns a memoized value. Use useCallback when you want to avoid re-creating functions, and useMemo when you want to avoid re-running expensive computations. Both help improve performance when used correctly.",
    category: "react",
  },
  {
    id: 119,
    question: "What are the differences between useEffect and useLayoutEffect?",
    answer:
      "useEffect is used to perform side effects - it runs after the component renders. useLayoutEffect is used to perform side effects - it runs before the component renders. useEffect is used for asynchronous operations, useLayoutEffect is used for synchronous operations.",
    category: "react",
  },
  {
    id: 120,
    question:
      "What are the differences between useRef and useImperativeHandle?",
    answer:
      "useRef is used to store a mutable value that doesn't cause re-renders when updated. It's useful for accessing DOM elements or storing values across renders. useImperativeHandle is used to customize the instance value that is exposed when using ref. It's useful for exposing methods to parent components.",
    category: "react",
  },
  {
    id: 121,
    question: "What are the differences between useContext and useReducer?",
    answer:
      "useContext is used to consume context - it provides the current context value. \nuseReducer is used to manage state - it provides a dispatch function to update the state. useContext is used for simple context consumption, useReducer is used for complex state management.",
    category: "react",
  },
  {
    id: 122,
    question: "What are the differences between useCallback and useMemo?",
    answer:
      "useCallback is used to memoize callbacks - it caches the function and only recalculates when dependencies change. \n\n useMemo is used to memoize the result of an expensive calculation. It caches the value and only recalculates when dependencies change. Use memo for component-level optimization, useMemo for value/calculation optimization within a component.",
    category: "react",
  },
  {
    id: 123,
    question: "What is Single Page Application?",
    answer:
      "SPA stands for Single Page Application.\n\nIt’s a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app — instead of reloading the whole page every time.\n\nIn a traditional multi-page application, every time we click a link, the browser sends a request to the server and reloads a new HTML page. But in an SPA, the page doesn’t reload — JavaScript frameworks like React, Angular, or Vue handle routing and content changes on the client side.\n\nFor example, in a React app, when we navigate between pages, React Router changes the URL and updates the view instantly — without a full page refresh.\n\nThis gives a faster, smoother user experience, similar to a desktop app.",

    category: "react",
  },
  {
    id: 124,
    question: "Is nextjs a single page application?",
    answer:
      "Next.js is not purely an SPA, but it supports SPA behavior after the initial load.\n\n Let me explain —\n\n When we build a Next.js app, the first page is rendered either on the server side (SSR) or statically generated (SSG).\n\n After that first page loads in the browser, Next.js hydrates the React components, and from that point on, it behaves like a Single Page Application.\n\n This means that when we navigate between pages using Next.js routing, the page doesn’t fully reload — it just fetches the required data and updates the view client-side, just like a React SPA",

    category: "react",
  },
  {
    id: 124.1,
    question: "What are the differences between props and state?",
    answer:
      "Props are read-only values that are passed from a parent component to a child component. They cannot be modified by the receiving component. State, on the other hand, is mutable and managed inside the component itself. It represents data that can change over time, such as user input or UI updates. In short: props are used for external data passed into a component, while state is used for internal data managed by the component.",
    category: "react",
  },
  {
    id: 124.2666666666,
    question:
      "How can we pass data from child to parent component and pass data from parent to child component?",
    answer:
      "We can pass data from child to parent component using props. We can pass data from parent to child component using props. We can pass data from child to parent component using props. We can pass data from parent to child component using props.",
    category: "react",
  },
  {
    id: 124.3,
    question:
      "What are the differences between functional and class components?",
    answer:
      "Functional components are simple functions that return JSX. Class components are ES6 classes that extend React.Component and return JSX. Functional components are simpler and easier to understand, while class components are more complex and harder to understand. Functional components are used for simple components, while class components are used for complex components.",
    category: "react",
  },
  {
    id: 125,
    question: "What is the difference between Next.js and React?",
    answer:
      "Next.js is a framework for building web applications, while React is a library for building user interfaces. Next.js provides a lot of features that are not available in React, such as server-side rendering, static site generation, and API routes. React is a library for building user interfaces, while Next.js is a framework for building web applications.",

    category: "react",
  },
  {
    id: 126,
    question: "How do you implement dynamic routing in Next.js?",
    answer:
      "In Next.js, dynamic routing is achieved using the [dynamic] tag in the page directory. For example, pages/posts/[id].tsx creates a dynamic route for posts/[id].\n\n When a user visits /posts/1, the page /posts/[id] is rendered with the id parameter set to 1. \n\n You can also create dynamic routes with multiple parameters, like pages/posts/[category]/[id].tsx. This allows you to create more complex routing patterns.\n\n You can use Nextjs useRouter hook from next/router to access the dynamic part of URL.\n\nExample: const router = useRouter(); const { id } = router.query;",
    category: "react",
  },
  {
    id: 127,
    question:
      "What is the next.config.js file, and what are some common configurations that can be made in it?",
    answer:
      "The next.config.js file in a Next.js project is used to customize the default configuration settings of your Next.js application. It allows you to do things like set environment variables, customize webpack configurations, set up redirects and rewrites, and enable experimental features. For example, you might use it to set up support for CSS modules or integrate with a CDN.Some common configurations include setting up custom headers, enabling image optimization settings, and configuring internationalization (i18n) settings. It's quite powerful and flexible, making it an essential part of optimizing and configuring your Next.js app to suit your specific needs.",
    category: "react",
  },
  {
    id: 128,
    question:
      "What is the difference beetween package.json and package-lock.json?",
    answer: ".",
    category: "react",
  },
  {
    id: 129,
    question: "How does Next.js handle routing out of the box?",
    answer:
      "Next.js uses a file-based routing system, which is super convenient. You simply create a file within the pages directory, and Next.js automatically creates a route based on the file name. For instance, if you create a file called about.js in the pages directory, it automatically sets up a route at /about.Dynamic routing is also straightforward in Next.js. You can create dynamic routes by using square brackets in the file name. For example, a file named [id].js will match any route that has a dynamic segment, like /product/1, /product/2, etc., and you can access that dynamic part in your code using the useRouter hook from next/router.This method makes setting up and understanding routes very intuitive because you spend less time configuring and more time building your app.",
    category: "nextjs",
  },
  {
    id: 130,
    question: "How can you optimize images in a Next.js application?",
    answer:
      "Next.js provides the Image component that automatically optimizes images through lazy loading, responsive sizing, modern formats (WebP/AVIF), blur placeholders, and on-demand optimization. It significantly improves performance and Core Web Vitals without manual configuration.",
    category: "nextjs",
  },
  {
    id: 131,
    question: "How do you handle errors and error pages in Next.js?",
    answer:
      "Next.js provides a built-in error page that can be customized to handle different types of errors. You can create a custom error page by creating a 404.js file in the pages directory. This file will be rendered when a user visits a page that doesn't exist. You can also create a custom error page for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 132,
    question: " How does Next.js handle CSS and styling?",
    answer:
      "Next.js provides a built-in CSS and styling solution that allows you to use CSS modules, global styles, and CSS-in-JS libraries like styled-components. You can use CSS modules by creating a .module.css file and importing it in your component. You can use global styles by creating a global.css file and importing it in your component. You can use CSS-in-JS libraries like styled-components by creating a styled.ts file and importing it in your component.",
    category: "nextjs",
  },
  {
    id: 133,
    question: "Explain the concept of dynamic imports in Next.js.",
    answer:
      "Dynamic imports in Next.js allow you to load modules on demand, which can improve performance by reducing the initial bundle size. You can use dynamic imports by creating a function that returns a promise to the module you want to import. For example, you can create a function called getModule that returns a promise to the module you want to import. You can then use the dynamic import in your component by calling the getModule function. This will return a promise to the module you want to import, and you can then use the module in your component.You use the import() function to dynamically load the module when it's needed, which can help with things like code splitting. Next.js even has a special next/dynamic module that provides more advanced features like server-side rendering support and loading states for dynamic imports.",
    category: "nextjs",
  },
  {
    id: 134,
    question: " How would you handle authentication in a Next.js application?",
    answer:
      "You can use the next/auth package to handle authentication in a Next.js application. You can create a custom authentication page by creating a auth.js file in the pages directory. This file will be rendered when a user visits the authentication page. You can also create a custom authentication page for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 135,
    question:
      "How do you handle internationalization in a Next.js application?",
    answer:
      "You can use the next/i18n package to handle internationalization in a Next.js application. You can create a custom internationalization page by creating a i18n.js file in the pages directory. This file will be rendered when a user visits the internationalization page. You can also create a custom internationalization page for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 136,
    question: "How do you handle API routes in a Next.js application?",
    answer:
      "You can use the next/api package to handle API routes in a Next.js application. You can create a custom API route by creating a api.js file in the pages directory. This file will be rendered when a user visits the API route. You can also create a custom API route for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 137,
    question: "what are the difference between App route and page route?",
    answer:
      "Page Routes are the traditional pages/-based routes in Next.js, whereas App Routes in app/ support React Server Components, nested layouts, and more flexible data fetching for modern applications. Page routes are suitable for small projects, while App routes are suitable for large projects.",
    category: "nextjs",
  },
  {
    id: 138,
    question: "How do you handle SEO in a Next.js application?",
    answer:
      "You can use the next/seo package to handle SEO in a Next.js application. You can create a custom SEO page by creating a seo.js file in the pages directory. This file will be rendered when a user visits the SEO page. You can also create a custom SEO page for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 139,
    question:
      "How would you handle environment variables in a Next.js application?",
    answer:
      "Environment variables in Next.js can be managed by creating a .env file at the root of your project. Prefix the variable names with NEXT_PUBLIC_ if they need to be available on the client-side as well as the server-side. For example, to create a variable called API_URL, you can define it in your .env file like this:NEXT_PUBLIC_API_URL=https://api.example.com\n\nThen, you can access these variables in your code using process.env.NEXT_PUBLIC_API_URL. Using these prefixed variables ensures that they are embedded into the client-side bundle, which is key for any frontend integrations. Also, remember to add your .env file to .gitignore to keep it out of your version control for security reasons.Then, you can access these variables in your code using process.env.NEXT_PUBLIC_API_URL. Using these prefixed variables ensures that they are embedded into the client-side bundle, which is key for any frontend integrations. Also, remember to add your .env file to .gitignore to keep it out of your version control for security reasons.",
    category: "nextjs",
  },
  {
    id: 140,
    question: "How do you handle API routes in a Next.js application?",
    answer:
      "You can use the next/api package to handle API routes in a Next.js application. You can create a custom API route by creating a api.js file in the pages directory. This file will be rendered when a user visits the API route. You can also create a custom API route for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 141,
    question: "Explain the role of the Link component in Next.js",
    answer:
      "The Link component in Next.js is used for client-side navigation between pages of the app. Instead of triggering a full page reload, it leverages the power of the Next.js router to perform navigation dynamically, resulting in faster transitions. You wrap your anchor tag with Link, providing the href attribute to indicate the path you want to navigate to, like this:import Link from 'next/link';<Link href='/about'>About</Link>",
    category: "nextjs",
  },
  {
    id: 142,
    question: "How does code splitting work in Next.js?",
    answer:
      "In Next.js, code splitting is handled automatically. When you create a new page in the pages directory, Next.js automatically splits each page into its own bundle. This means that when a user navigates to a different page, only the necessary JavaScript for that page is loaded, making the initial load faster. You can also manually implement dynamic imports using the next/dynamic module for components that you want to load lazily. This further optimizes performance by ensuring that parts of your application are only loaded when they are actually needed, instead of bundling everything together.",
    category: "nextjs",
  },
  {
    id: 142.1,
    question: "Can you explain the usage of the Head component in Next.js?",
    answer:
      "The Head component in Next.js is used to modify the head section of your HTML document, allowing you to customize elements like the title, meta tags, and link tags on a per-page basis. It's particularly useful for setting meta tags for SEO, adding stylesheet links, or inserting any other element that would usually go inside the tag of an HTML document. You simply import Head from 'next/head' and then wrap your head elements within the Head component inside your component's render method. This way, each page can have its own unique head content, making your application more flexible and enhancing its SEO performance.",
    category: "nextjs",
  },
  {
    id: 143,
    question: "Describe the file-based routing system in Next.js.",
    answer:
      "Next.js uses a file-based routing system, which is super convenient. You simply create a file within the pages directory, and Next.js automatically creates a route based on the file name. For instance, if you create a file called about.js in the pages directory, it automatically sets up a route at /about.Dynamic routing is also straightforward in Next.js. You can create dynamic routes by using square brackets in the file name. For example, a file named [id].js will match any route that has a dynamic segment, like /product/1, /product/2, etc., and you can access that dynamic part in your code using the useRouter hook from next/router.This method makes setting up and understanding routes very intuitive because you spend less time configuring and more time building your app.",
    category: "nextjs",
  },
  {
    id: 144,
    question: "What are the differences between Link and NavLink in Next.js?",
    answer:
      "Link is for client-side navigation in Next.js, while NavLink is a React Router component that adds active styling to the current route",
    category: "nextjs",
  },
  {
    id: 145,
    question: "How do you handle form validation and submission in Next.js?",
    answer:
      "You can use the next/form package to handle form validation and submission in Next.js. You can create a custom form by creating a form.js file in the pages directory. This file will be rendered when a user visits the form page. You can also create a custom form for specific errors by creating a error.js file in the pages directory. This file will be rendered when a specific error occurs.",
    category: "nextjs",
  },
  {
    id: 146,
    question:
      "What is the key difference between next/router and next/navigation?",
    answer:
      "next/navigation is used on the client side for navigating between pages or reading URL data using hooks like useRouter, usePathname, and useSearchParams — it allows smooth navigation without a full page reload, just like a SPA. On the other hand, \n\n next/route (used in route handlers under app/api/.../route.ts) works on the server side to handle API requests, responses, and server-side redirects using NextResponse",
    category: "nextjs",
  },
  {
    id: 147,
    question:
      "How can I fetch the pathname from a URL that contains query parameters in Next.js?",
    answer:
      "To fetch the pathname from a URL that includes query parameters in Next.js, you can use the built-in JavaScript URL object. By passing the full URL string to new URL(), you can easily access its components, including the pathname. For example, calling new URL('https://example.com/profile?id=123').pathname will return '/profile'. If you are working inside a Next.js App Router component and want to get the current page's pathname directly, you can use the usePathname() hook from next/navigation. This hook returns the current route path (e.g., '/profile'), making it ideal for client components that need to know the active route.",
    category: "nextjs",
  },
  {
    id: 148,
    question:
      "What is the difference between usePathname() and useSearchParams()?",
    answer:
      "In Next.js App Router, both usePathname() and useSearchParams() are hooks from next/navigation used to read information about the current URL. The usePathname() hook returns the current route path (for example, '/dashboard' or '/profile/settings'), making it useful when you need to know which page or route is active. On the other hand, the useSearchParams() hook allows you to read and manage the query parameters in the URL (for example, ?id=123 or ?filter=active). You can use methods like get() on the returned object to access specific parameters. In short, usePathname() is for the path part of the URL, while useSearchParams() is for the query string part.",
    category: "nextjs",
  },
  {
    id: 149,
    question:
      "Can you use useSearchParams() in server components? Why or why not?",
    answer:
      "No, you cannot use the useSearchParams() hook directly in server components because it is a client-side hook that relies on React state and browser APIs to track URL changes. Server components are rendered on the server and do not have access to client-side features like the browser's URL or navigation state. Instead, in server components, you can access search parameters using the searchParams prop available in the page or layout component's function signature, which Next.js automatically provides during server-side rendering.",
    category: "nextjs",
  },
  {
    id: 150,
    question:
      "How would you display query parameters like /profile?id=10&ref=google on a page?",
    answer:
      "In Next.js App Router, you can display query parameters from the URL using the useSearchParams() hook from next/navigation. This hook lets you read the values of query parameters in a client component. For example, you can use const searchParams = useSearchParams(); and then access them with searchParams.get('id') or searchParams.get('ref'). If the URL is /profile?id=10&ref=google, calling searchParams.get('id') will return '10' and searchParams.get('ref') will return 'google'. You can then render these values directly on the page.",
    category: "nextjs",
  },
  {
    id: 151,
    question:
      "What is the difference between route parameters and query parameters?",
    answer:
      "In Next.js, route parameters and query parameters are two ways to pass data through the URL, but they serve different purposes. Route parameters are part of the URL path itself and are defined in dynamic routes using brackets, such as /profile/[id], where 'id' is the route parameter. They are typically used to identify a specific resource or page. Query parameters, on the other hand, appear after the '?' in the URL, like /profile?id=10&ref=google, and are used to pass optional data, filters, or additional information to the page. In summary, route parameters are part of the path and usually required, while query parameters are part of the URL string and usually optional.",
    category: "nextjs",
  },
  {
    id: 152,
    question:
      "What’s the best way to handle missing or invalid query parameters in Next.js?",
    answer:
      "The best way to handle missing or invalid query parameters in Next.js depends on whether you are using the Pages Router or App Router. In the App Router, you can check query parameters using the useSearchParams() hook in client components or the searchParams prop in server components. If a required parameter is missing or invalid, you can use the redirect() function from next/navigation to redirect the user to a fallback page, or use notFound() to show a 404 page. In client components, you can also render a friendly error message or fallback UI. Validating and handling query parameters proactively ensures better user experience and prevents unexpected errors.",
    category: "nextjs",
  },
  {
    id: 153,
    question:
      "How can you share query parameters across multiple components efficiently?",
    answer:
      "To share query parameters across multiple components efficiently in Next.js, you can use a combination of React state or context with the useSearchParams() hook from next/navigation. For client components, you can read the parameters once using useSearchParams() and then provide them through a React Context or a state management solution like Redux or Zustand. This avoids reading the URL multiple times and ensures that all components have consistent access to the query data. In server components, you can pass the searchParams prop down to child components as props, allowing multiple components to access the parameters without repeatedly reading the URL.",
    category: "nextjs",
  },
  {
    id: 154,
    question: "How can you update query parameters without reloading the page?",
    answer:
      "In Next.js App Router, you can update query parameters without reloading the page using the useRouter() hook from next/navigation. The router object provides methods like router.replace() or router.push() that let you modify the URL and query parameters client-side while staying on the same page. For example, calling router.push(`/profile?id=20&ref=google`) will update the URL and the page state without a full reload. This is useful for maintaining client-side state, filters, or pagination while providing a smooth user experience.",
    category: "nextjs",
  },
  {
    id: 155,
    question:
      "How do you sync the UI state (like filters or tabs) with URL query parameters in Next.js?",
    answer:
      "To sync UI state with URL query parameters in Next.js, you can use the useSearchParams() and useRouter() hooks from next/navigation in client components. First, read the current query parameters using useSearchParams() and initialize your UI state (like active tab or selected filter) based on these values. Then, whenever the UI state changes, update the URL using router.push() or router.replace() with the new query parameters. This approach keeps the UI in sync with the URL, allowing users to share or bookmark the current state without triggering a full page reload.",
    category: "nextjs",
  },
];

export const getCategoryQuestions = (
  category: Question["category"]
): Question[] => {
  return questions.filter((q) => q.category === category);
};
