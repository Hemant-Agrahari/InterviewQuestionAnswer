export interface Question {
  id: number;
  question: string;
  answer: string;
  category:
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "nextjs"
    | "react"
    | "output-based"
    | "redux"
    | "socket";
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
    id: 3.64,
    question: "What is the difference between HTML and HTML5?",
    answer:
      "HTML is the standard markup language used to structure web pages, while HTML5 is the latest and more advanced version with modern features.\n\n🔵 HTML (Older Version):\n- No support for audio and video tags.\n- Relies on external plugins (Flash, Silverlight) for media.\n- Limited semantic tags.\n- No built-in support for offline storage.\n\n🟣 HTML5 (Latest Version):\n- Introduced new semantic tags like header, footer, nav, article, section.\n- Supports audio and video without plugins.\n- Added new form input types: email, date, number, range.\n- Introduced canvas and svg for graphics and animations.\n- Provides localStorage and sessionStorage for offline data.\n- Better performance and faster loading.\n\n🟡 Key Difference:\nHTML5 is more powerful, supports multimedia, provides semantic structure, and improves performance without relying on external plugins.\n\nIn short: HTML5 is the upgraded, modern version of HTML with new tags, media support, storage APIs, and better browser capabilities.",
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
    id: 6765,
    question: "What are Semantic Tags in HTML?",
    answer:
      "Semantic tags are HTML elements that clearly describe their meaning and purpose to both the browser and developers. Instead of generic divs, semantic tags provide structure and improve accessibility, SEO, and readability.\n\n🔵 Examples of Semantic Tags:\n- header → Defines the top section of a page.\n- nav → Holds navigation links.\n- section → Represents a section of content.\n- article → Represents self-contained content.\n- aside → Sidebar or related content.\n- footer → Bottom section of the page.\n- main → Represents the main content of the document.\n- figure & figcaption → Used for images with captions.\n\n🟣 Why Semantic Tags Are Important:\n- Improve SEO because search engines understand content better.\n- Improve accessibility for screen readers.\n- Make code cleaner, structured, and easier to maintain.\n- Help browsers understand layout and meaning.\n\nIn short: Semantic tags describe the purpose of content, making webpages more meaningful, accessible, and SEO-friendly.",
    category: "html",
  },
  {
    id: 99.66,
    question: "What are HTML tags?",
    answer:
      "HTML tags are predefined keywords enclosed in angle brackets (< >) that tell the browser how to structure and display content on a webpage. Every tag has a specific meaning and purpose.\n\n🔵 Types of HTML Tags:\n1. Structural Tags: <html>, <head>, <body>\n2. Text Formatting Tags: <h1> to <h6>, <p>, <span>, <strong>, <em>\n3. Media Tags: <img>, <video>, <audio>\n4. Link & Navigation Tags: <a>, <nav>\n5. List Tags: <ul>, <ol>, <li>\n6. Table Tags: <table>, <tr>, <td>, <th>\n7. Form Tags: <form>, <input>, <label>, <button>, <select>\n8. Semantic Tags: <header>, <footer>, <section>, <article>, <aside>, <main>\n\n🟣 How HTML Tags Work:\n- Most tags have an opening tag and a closing tag.\n  Example: <p>Content</p>\n- Some are self-closing.\n  Example: <img />, <br />, <input />\n\n🟡 Key Point:\nHTML tags give structure and meaning to content so browsers know how to present it.\n\nIn short: HTML tags are building blocks of a webpage that define structure, layout, and content.",
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
    id: 6.877777,
    question: "What is an HTML Element?",
    answer:
      "An HTML element is the complete structure created by an opening tag, its content, and a closing tag. It represents a piece of content on a webpage such as a paragraph, heading, image, link, or button.\n\nExample:\n<p>Hello World</p>\nHere, <p> is the opening tag, 'Hello World' is the content, and </p> is the closing tag. Together they form an HTML element.\n\n🟣 Types of HTML Elements:\n- Block-level elements: <div>, <p>, <h1>, <section>, <article>\n- Inline elements: <span>, <a>, <img>, <strong>, <em>\n\n🟡 Key Points:\n- Elements define the structure and meaning of content.\n- Most elements have opening and closing tags, but some are self-closing like <img />, <br />, <hr />.\n\nIn short: An HTML element is the complete unit of a tag and its content, used to build and structure a webpage.",
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
    id: 1000.68,
    question: "What is the difference between <link> and <a> tag in HTML?",
    answer:
      'Both <link> and <a> are used for linking, but they serve completely different purposes.\n\n🔵 <link> Tag:\n- Used to link external resources to the HTML document.\n- Does NOT create a clickable link.\n- Commonly used in the <head> section.\n- Used for stylesheets, icons, preloading, fonts, etc.\n\nExample:\n<link rel="stylesheet" href="style.css" />\n\n🟣 <a> Tag:\n- Used to create clickable hyperlinks.\n- Navigates to external pages, internal pages, phone calls, emails, or sections within the same page.\n- Placed inside the body.\n\nExample:\n<a href="https://google.com">Visit Google</a>\n\n🟡 Key Difference:\n- <link> attaches external resources to the page.\n- <a> allows the user to click and navigate.\n\nIn short: <link> is for loading resources, while <a> is for creating clickable links.',
    category: "html",
  },
  {
    id: 69090900999,
    question: "What is the <head> tag in HTML?",
    answer:
      'The <head> tag is a container that holds important metadata and configuration information about the webpage. It does not display anything on the page but provides instructions to the browser.\n\n🔵 What <head> Contains:\n- <title> → Page title shown in the browser tab.\n- <meta> → SEO, charset, viewport, description, keywords.\n- <link> → External CSS, fonts, icons.\n- <style> → Internal CSS.\n- <script> → JS files (optional when placed in head).\n- <base> → Base URL for all relative links.\n\n🟣 Why <head> Is Important:\n- Helps search engines understand the page (SEO).\n- Helps browsers render content correctly.\n- Loads styles, fonts, and metadata.\n- Controls responsive design using viewport.\n\nExample:\n<head>\n  <title>My Website</title>\n  <meta charset="UTF-8" />\n  <link rel="stylesheet" href="style.css" />\n</head>\n\nIn short: The <head> tag stores metadata and resources required for the webpage but does not show visible content to the user.',
    category: "html",
  },
  {
    id: 70.98754333333,
    question:
      "What is the difference between async and defer in JavaScript script loading?",
    answer:
      'async and defer are attributes used in the <script> tag to control how external JavaScript files load and execute, improving page performance.\n\n🔵 async:\n- Script downloads in parallel while the HTML is parsing.\n- Script executes immediately after download (execution can interrupt HTML parsing).\n- Order of execution is NOT guaranteed.\n- Best for independent scripts like analytics or ads.\n\nExample:\n<script src="app.js" async></script>\n\n🟣 defer:\n- Script downloads in parallel while the HTML is parsing.\n- Script executes ONLY after the entire HTML is parsed.\n- Execution order IS guaranteed (in the same order as scripts appear).\n- Best for scripts that depend on DOM or need proper sequence.\n\nExample:\n<script src="main.js" defer></script>\n\n🟡 Key Difference:\n- async → Downloads in parallel, executes immediately → no order guarantee.\n- defer → Downloads in parallel, executes after HTML → execution order guaranteed.\n\nIn short: Use async for independent scripts and defer for scripts that rely on proper load order and DOM parsing.',
    category: "javascript",
  },
  {
    id: 6,
    question: "List of new HTML5 semantic tags?",
    answer:
      "HTML5 introduced several semantic tags that give meaning to the structure of a web page. Unlike generic <div> and <span>, these tags describe the role of the content, which improves readability, accessibility, and SEO. Some important semantic tags are: \n\n<header> (top section of a page or section), \n\n<nav> (navigation links), \n\n<section> (thematic grouping of content), \n\n<article> (independent, self-contained content like blogs or news), \n\n<aside> (side content such as ads or sidebars), \n\n<footer> (footer of a page or section), \n\n<main> (main content of the document), \n\n<figure> and <figcaption> (images/illustrations with captions), \n\n<mark> (highlighting text), and \n\n<time> (dates and times). These tags make the structure more meaningful for both browsers and developers.",
    category: "html",
  },
  {
    id: 71,
    question: "What is the difference between inline and block elements?",
    answer:
      "Inline and block elements are two types of HTML elements that behave differently in layout.\n\n🔵 Block Elements:\n- Always start on a new line.\n- Take full width available (100% width).\n- Can have margin, padding, width, and height.\n- Used for structuring page layouts.\n\nExamples: <div>, <p>, <h1> to <h6>, <section>, <article>, <ul>, <li>\n\n🟣 Inline Elements:\n- Do NOT start on a new line.\n- Take only the space required by their content.\n- Width and height cannot be set.\n- Best for styling small parts inside a block.\n\nExamples: <span>, <a>, <img>, <strong>, <em>, <label>\n\n🟡 Key Difference:\n- Block elements create a full-width block; inline elements sit inside a line.\n\nIn short: Block elements start on a new line and take full width, while inline elements stay in the same line and take only required space.",
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
    id: 123472,
    question: "What is the difference between <div> and <span>?",
    answer:
      "<div> and <span> are two common HTML elements, but they are used for different purposes based on layout behavior.\n\n🔵 <div> (Block Element):\n- A block-level element.\n- Starts on a new line.\n- Takes full width of the container.\n- Used to create large sections, layouts, or container blocks.\n- Can have width, height, margin, padding.\n\nExample:\n<div>This is a block element</div>\n\n🟣 <span> (Inline Element):\n- An inline element.\n- Does NOT start on a new line.\n- Takes only the space required by its content.\n- Used to style or wrap small text portions inside a block.\n- Width and height cannot be applied.\n\nExample:\n<p>This is a <span>highlighted</span> text.</p>\n\n🟡 Key Difference:\n- <div> is for block-level structure and layout.\n- <span> is for inline styling or small text grouping.\n\nIn short: Use <div> for layout blocks and <span> for inline text styling.",
    category: "html",
  },
  {
    id: 1234.78973,
    question:
      "What is the difference between an HTML Tag and an HTML Attribute?",
    answer:
      'HTML tags and attributes are both essential parts of HTML, but they serve different purposes.\n\n🔵 HTML Tag:\n- Tags define the structure and content of a webpage.\n- They tell the browser what to display.\n- Tags usually come in pairs: opening and closing.\n- Examples: <p>, <h1>, <div>, <img>, <a>\n\nExample:\n<p>Hello World</p>\n\n🟣 HTML Attribute:\n- Attributes provide additional information or behavior to a tag.\n- They are written inside the opening tag.\n- They modify how an element behaves or appears.\n- Examples: id, class, src, href, alt, style\n\nExample:\n<img src="image.jpg" alt="sample image" />\n\n🟡 Key Difference:\n- Tags define elements.\n- Attributes add extra details to those elements.\n\nIn short: A tag creates an element, and an attribute adds more information to that element.',
    category: "html",
  },
  {
    id: 7.7664,
    question: "What is the difference between id and class in HTML?",
    answer:
      'id and class are both HTML attributes used for identifying and styling elements, but they serve different purposes.\n\n🔵 id:\n- Used to uniquely identify a single element.\n- Must be unique within the entire page (only one element can have a specific id).\n- Used for JavaScript targeting and linking within the page.\n- CSS selector: #idName\n\nExample:\n<div id="header"></div>\n\n🟣 class:\n- Used to style multiple elements with the same design.\n- Can be reused on many elements.\n- One element can have multiple classes.\n- CSS selector: .className\n\nExample:\n<div class="box highlight"></div>\n\n🟡 Key Difference:\n- id = unique identifier for one element.\n- class = reusable styling applied to multiple elements.\n\nIn short: Use id for unique elements, and class for styling or grouping multiple elements.',
    category: "html",
  },
  {
    id: 9009975,
    question: "What are Meta Tags in HTML?",
    answer:
      'Meta tags are HTML elements placed inside the <head> section to provide metadata (information about the webpage) to browsers and search engines. They do not appear on the page but help with SEO, responsiveness, and browser behavior.\n\n🔵 Common Meta Tags:\n1. <meta charset="UTF-8"> → Defines character encoding.\n2. <meta name="viewport" content="width=device-width, initial-scale=1.0"> → Makes the site responsive on mobile.\n3. <meta name="description" content="This is my website"> → Improves SEO by describing the page.\n4. <meta name="keywords" content="HTML, CSS, JavaScript"> → Provides search keywords (less used now).\n5. <meta name="author" content="Hemant"> → Specifies the page author.\n6. <meta http-equiv="refresh" content="5"> → Refreshes the page after a given time.\n\n🟣 Why Meta Tags Are Important:\n- Improve SEO ranking.\n- Help search engines understand content.\n- Control browser behavior.\n- Make webpages mobile-friendly.\n- Provide metadata for social media previews.\n\nIn short: Meta tags store important information about the webpage for browsers, SEO, and social platforms.',
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
    id: 12098776,
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model is a fundamental concept that describes how every HTML element is structured and how space is calculated on a webpage. Every element is treated as a rectangular box consisting of four layers.\n\n🔵 Layers of the Box Model:\n1. Content → The actual text or image inside the box.\n2. Padding → Space around the content (inside the box).\n3. Border → The line surrounding the padding and content.\n4. Margin → Space outside the border, separating the element from others.\n\n🟣 Visual Representation:\n[ Margin ]\n  [ Border ]\n    [ Padding ]\n      [ Content ]\n\n🟡 Example:\n.box {\n  width: 200px;\n  padding: 10px;\n  border: 2px solid black;\n  margin: 20px;\n}\n\nTotal width = content + padding + border + margin\nTotal width = 200 + 20 + 4 + 40 = 264px\n\nIn short: The CSS Box Model explains how size and spacing of elements are calculated using content, padding, border, and margin.",
    category: "css",
  },
  {
    id: 12.09977,
    question: "What is position in CSS?",
    answer:
      "position in CSS is a property that controls how an element is placed on the page.\n\nIt decides whether the element follows the normal document flow or if it can be moved freely using top, left, right, and bottom.\n\nWe mainly use the position property when we want custom layouts, overlays, sticky headers, tooltips, popups, etc.\n\n🔵 How many types of positions are there in CSS?\n\nCSS has 5 types of positioning:\n\n1️⃣ Static Positioning (default)\n\nStatic is the normal flow of the page.\n\nThe browser places the element naturally without any special positioning.\n\nTop/left/bottom/right do not work here.\n\nWe mostly leave elements static unless we need custom placement.\n\n2️⃣ Relative Positioning\n\nA relatively positioned element stays in the normal flow, but we can shift it using top/left/bottom/right.\n\nThe important thing is: it moves relative to its original position, and it still occupies its original space.\n\nWe commonly use position: relative to create a positioning context for absolutely positioned child elements.\n\n3️⃣ Absolute Positioning\n\nAn absolutely positioned element is removed from the normal flow and does not occupy space.\n\nIt positions itself relative to the nearest positioned ancestor (i.e., parent with position: relative/absolute/fixed).\n\nIf no positioned parent exists, it positions relative to the viewport/document.\n\nWe use it when we want to place elements precisely — like tooltips, dropdowns, badges, etc.\n\n4️⃣ Fixed Positioning\n\nFixed works similar to absolute (removed from normal flow), but the reference point is always the viewport, not the parent.\n\nThe element stays fixed even when the page scrolls.\n\nCommon use cases: sticky headers, floating buttons, side menus, chat widgets.\n\n5️⃣ Sticky Positioning\n\nSticky positioning is like a mix of relative and fixed behavior. When the page first loads, the element behaves normally, just like a relatively positioned element. It sits in the flow and doesn't act special. But the moment you start scrolling and reach the position you've set—like top: 0—the element \"sticks\" to that spot and stays visible, just like a fixed element. This makes it perfect for things like sticky headers or table headers that you want to remain visible only after the user scrolls past them, not from the very beginning.",
    category: "css",
  },
  {
    id: 23.9,
    question:
      "What is the difference between getElementById and getElementsByClassName?",
    answer:
      "getElementById returns a single DOM element whose id matches the given string. Since IDs are unique in HTML, this method always returns one element or null if no match is found. It is also one of the fastest DOM selection methods.\n\ngetElementsByClassName returns a live HTMLCollection of all elements that have the specified class name. Even if only one element matches, it still returns a collection. If no elements match, it returns an empty collection. You can loop through it to access each element.\n\nIn short: getElementById → returns one unique element, getElementsByClassName → returns a live collection of multiple elements.",
    category: "css",
  },
  {
    id: 199078,
    question: "What is Flexbox in CSS?",
    answer:
      "Flexbox (Flexible Box Layout) is a CSS layout system designed to align, distribute, and position elements easily inside a container. It helps build responsive layouts without using floats or complex positioning.\n\n🔵 How Flexbox Works:\nFlexbox has two main parts:\n1. Flex Container → The parent element (display: flex)\n2. Flex Items → The children inside the container\n\n🟣 Common Flexbox Properties:\nOn the Container:\n- display: flex → Activates flexbox\n- flex-direction → row, row-reverse, column, column-reverse\n- justify-content → Aligns items horizontally (center, space-between, space-around)\n- align-items → Aligns items vertically (center, flex-start, flex-end)\n- flex-wrap → Wrap items onto multiple lines\n\nOn the Items:\n- flex-grow → How much an item expands\n- flex-shrink → How much an item shrinks\n- flex-basis → Initial size of item\n- align-self → Align a single item\n\n🟡 Example:\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n🟠 Why Flexbox Is Useful:\n- Easy horizontal & vertical centering\n- Smooth responsive design\n- Flexible spacing between elements\n- No need for floats or complicated CSS\n\nIn short: Flexbox is a powerful layout system that helps align and position elements easily in both directions and makes responsive design much simpler.",
    category: "css",
  },
  {
    id: 79.88888888888,
    question: "What is the flex shorthand property in CSS?",
    answer:
      "The flex shorthand property in CSS is used to set flex-grow, flex-shrink, and flex-basis in a single line. Instead of writing all three properties separately, flex lets you define how an item grows, shrinks, and what its initial size should be.\n\n🔵 Syntax:\nflex: <flex-grow> <flex-shrink> <flex-basis>;\n\n🟣 Example:\nflex: 1 0 200px;\nHere,\n- flex-grow: 1 → Item can grow if space is available.\n- flex-shrink: 0 → Item will not shrink.\n- flex-basis: 200px → Initial size is 200px.\n\n🟡 Common Shorthands:\n1. flex: 1;\n   → flex-grow: 1, flex-shrink: 1, flex-basis: 0\n\n2. flex: 0 1 auto;\n   → Default behavior (item shrinks but does not grow)\n\n3. flex: 1 1 auto;\n   → Item grows and shrinks based on available space\n\n🟠 Why Flex Shorthand Is Useful:\n- Makes code shorter and cleaner\n- Controls item resizing behavior quickly\n- Helps build responsive layouts easily\n\nIn short: flex shorthand sets grow, shrink, and basis in one line, controlling how flex items expand or shrink inside a flex container.",
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
    id: 987567876680,
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a powerful 2D layout system that allows you to create complex, responsive layouts using rows and columns. It provides full control over both horizontal and vertical alignment, making layout design easier than older methods like floats or tables.\n\n🔵 Key Features of CSS Grid:\n- Two-dimensional control: rows + columns.\n- Precise placement of items.\n- Easy to create responsive layouts.\n- Supports gap property for spacing.\n- Powerful functions like repeat(), minmax(), auto-fit, auto-fill.\n\n🟣 Common Grid Properties:\nContainer (Parent):\n- display: grid\n- grid-template-columns\n- grid-template-rows\n- grid-gap / gap\n- grid-template-areas\n- justify-content, align-content\n\nItems (Children):\n- grid-column / grid-row\n- grid-area\n\n🟡 Example:\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n}\n\n🟠 Why CSS Grid Is Useful:\n- Helps build layouts like dashboards, galleries, cards, and full web structures.\n- Provides more control than flexbox for complex grids.\n- Great for 2D layouts where both row and column alignment matter.\n\nIn short: CSS Grid is a two-dimensional layout system that makes creating advanced and responsive page structures simple and efficient.",
    category: "css",
  },
  {
    id: 123344481,
    question: "What is a CSS Preprocessor?",
    answer:
      "A CSS preprocessor is a tool that extends the features of standard CSS by adding powerful functionalities like variables, nesting, mixins, functions, and reusable code. The preprocessor code is written in a special syntax and then compiled into regular CSS that browsers can understand.\n\n🔵 Popular CSS Preprocessors:\n- SASS / SCSS\n- LESS\n- Stylus\n\n🟣 Key Features:\n1. Variables → Store colors, fonts, sizes.\n   Example (SCSS): $primary: #3498db;\n\n2. Nesting → Write CSS inside parent selectors for cleaner code.\n\n3. Mixins → Reusable blocks of CSS.\n\n4. Functions & Operators → Perform calculations inside CSS.\n\n5. Partials & Imports → Split CSS into multiple files.\n\n🟡 Why Use a Preprocessor?\n- Cleaner and more maintainable code.\n- Avoid repetition and duplicate styles.\n- Easy to manage large-scale projects.\n- Supports modular styling.\n\n🟠 Example (SCSS):\n$primary: #ff0000;\n.button {\n  background: $primary;\n  padding: 10px;\n}\n\nIn short: A CSS preprocessor lets you write advanced, cleaner, and more manageable CSS, which then compiles into normal CSS for the browser.",
    category: "css",
  },
  {
    id: 198982,
    question: "What is the difference between px, em, rem, and % in CSS?",
    answer:
      "px, em, rem, and % are CSS units used to define sizes, but they behave differently based on how they scale.\n\n🔵 px (Pixels):\n- Absolute unit.\n- Does NOT scale based on parent or root.\n- Fixed size.\n- Good for borders, 1px lines, icons.\n\nExample: font-size: 16px;\n\n🟣 em:\n- Relative unit.\n- Depends on the **font-size of the parent element**.\n- 1em = parent's font-size.\n- Can compound (nested em values keep multiplying).\n\nExample:\n.parent { font-size: 20px; }\n.child { font-size: 2em; } → 40px\n\n🟡 rem:\n- Relative unit.\n- Depends on the **root (html) font-size**, not the parent.\n- Default root is 16px → 1rem = 16px.\n- More predictable than em.\n\nExample:\nhtml { font-size: 10px; }\n.box { font-size: 2rem; } → 20px\n\n🟠 % (Percentage):\n- Relative to the parent element.\n- Used for widths, heights, padding, etc.\n\nExample:\n.container { width: 100%; }\n.child { width: 50%; }\n\n🟣 Key Difference:\n- px → fixed size\n- em → relative to parent\n- rem → relative to root\n- % → relative to parent size\n\nIn short: Use rem for consistent scaling, em for flexible nested scaling, px for fixed values, and % for responsive layouts.",
    category: "css",
  },
  {
    id: 199083,
    question: "What is the difference between CSS Grid and Flexbox?",
    answer:
      "CSS Grid and Flexbox are both powerful layout systems, but they solve different kinds of problems. Grid is designed for two-dimensional layouts, meaning it handles rows and columns at the same time. It's perfect when you need full control over both directions — like building a full page layout, a dashboard, or a gallery where items should align both horizontally and vertically. Grid lets you create structured layouts with precise placement.\n\nFlexbox, on the other hand, is one-dimensional. It either arranges items in a row or a column, but not both at the same time. Flexbox shines when we're dealing with smaller components and want content to adjust naturally — like navbars, buttons, cards, or aligning items inside a container. It's more content-driven, meaning items automatically take up space based on their size and available room.",
    category: "css",
  },
  {
    id: 23,
    question: "Why do we use semantic elements instead of div?",
    answer:
      "Semantic elements provide meaningful structure to a webpage, unlike generic <div> tags which do not convey any purpose. Using elements like <header>, <nav>, <main>, <section>, <article>, and <footer> improves code readability, makes the layout easier to understand, and reduces 'div soup'.\n\nSemantic HTML also improves accessibility because screen readers can better interpret the document structure, helping users with disabilities navigate the page. Additionally, search engines use semantic tags to understand content hierarchy, which can positively impact SEO.\n\nIn short: semantic elements add clarity, accessibility, and SEO benefits, while <div> only provides structure with no meaning.",
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
    id: 199084,
    question: "What are CSS Selectors?",
    answer:
      'CSS selectors are patterns used to select and style specific HTML elements. They tell the browser which elements the CSS rules should apply to.\n\n🔵 Types of CSS Selectors:\n1. **Universal Selector:** * { margin: 0; padding: 0; }\n2. **Element Selector:** p { color: red; }\n3. **Class Selector:** .title { font-size: 20px; }\n4. **ID Selector:** #header { background: black; }\n5. **Group Selector:** h1, h2 { color: blue; }\n6. **Descendant Selector:** .box p { color: green; }\n7. **Child Selector:** .container > p { color: orange; }\n8. **Adjacent Sibling Selector:** h1 + p { margin-top: 0; }\n9. **General Sibling Selector:** h1 ~ p { color: gray; }\n10. **Attribute Selector:** input[type="text"] { border: 1px solid; }\n\n🟣 Why Selectors Are Important:\n- Allow targeting specific elements.\n- Help write clean and structured CSS.\n- Improve reusability and maintainability.\n\nIn short: CSS selectors are used to identify which HTML elements should receive specific styling rules.',
    category: "css",
  },
  {
    id: 23.8,
    question:
      "What is the difference between querySelector and querySelectorAll?",
    answer:
      "querySelector selects and returns the first DOM element that matches the given CSS selector. If no element matches, it returns null. It is useful when you need only a single element.\n\nquerySelectorAll returns a static NodeList of all elements matching the selector. Even if multiple elements match, it returns a collection, not just the first one. If there are no matches, it returns an empty NodeList.\n\nIn short: querySelector → first matching element, querySelectorAll → all matching elements as a NodeList.",
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
    id: 230.12,
    question: "How many ways do we have to center a div?",
    answer:
      "There are multiple ways to center a div in CSS, both horizontally and vertically:\n\n1. **margin: auto** → Centers a block element horizontally when a width is set.\n   Example: margin: 0 auto;\n\n2. **Flexbox** → Most common modern approach. Centers both horizontally and vertically.\n   display: flex; justify-content: center; align-items: center;\n\n3. **CSS Grid** → Very simple way to center content in both directions.\n   display: grid; place-items: center;\n\n4. **Transform + absolute positioning** → Used for perfect centering in older layouts.\n   position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\n\n5. **text-align: center** → Centers inline or inline-block elements horizontally (not vertical centering).\n\nIn short: Flexbox and Grid are the simplest and most modern ways to center a div.",
    category: "css",
  },
  // JavaScript Questions
  {
    id: 2485,
    question: "What is JavaScript?",
    answer:
      'JavaScript is a high-level, dynamic, and interpreted programming language used to make web pages interactive and dynamic. It runs in the browser and allows developers to update content, handle events, validate forms, create animations, and interact with APIs.\n\n🔵 Key Features of JavaScript:\n- Lightweight and easy to learn\n- Supports object-oriented, functional, and event-driven programming\n- Runs directly in the browser without compilation\n- Provides DOM manipulation for dynamic UI changes\n- Supports asynchronous operations using callbacks, promises, and async/await\n\n🟣 What JavaScript Is Used For:\n- Interactive UI components (sliders, modals, dropdowns)\n- Form validation and event handling\n- Fetching data using APIs\n- Single Page Applications (React, Angular, Vue)\n- Backend development using Node.js\n\n🟡 Example:\nconsole.log("Hello JavaScript");\n\nIn short: JavaScript is the programming language that brings interactivity, logic, and dynamic behavior to websites.',
    category: "javascript",
  },
  {
    id: 1256105,
    question:
      "What is layout thrashing and how do you prevent forced reflows in the browser?",
    answer:
      "Layout thrashing happens when the browser has to repeatedly recalculate layout and re-render the page because JavaScript is constantly reading and writing DOM values in a mixed and inefficient way.\n\nWhen JavaScript asks for layout information (like offsetHeight, scrollHeight, width, etc.) right after changing the DOM, the browser is forced to recalculate styles and layout again and again. This repeated cycle slows down the page and hurts performance.\n\n🔵 What causes layout thrashing?\n- Reading DOM properties immediately after writing them.\n- Making multiple style changes one by one.\n- Frequent DOM manipulations inside loops.\n- Using JavaScript animations instead of CSS.\n\n🔵 How to prevent forced reflows and layout thrashing?\n1. **Batch DOM reads and writes**\n   - Read all layout values together.\n   - Write all DOM changes together.\n\n2. **Use requestAnimationFrame() for smooth updates**\n   - Lets the browser group changes before repainting.\n\n3. **Use CSS classes instead of multiple style updates**\n   - Apply one class instead of setting many inline styles.\n\n4. **Avoid measuring DOM values too often**\n   - Cache values when possible.\n\n5. **Use CSS transitions/animations instead of JavaScript animations**\n   - They run on the GPU and avoid extra layout calculations.\n\n🟡 Simple Summary:\nLayout thrashing happens when we mix DOM reads and writes too fast. To prevent it, batch changes, avoid unnecessary DOM reads, and let the browser handle updates efficiently.",
    category: "javascript",
  },
  {
    id: 2386,
    question:
      "What does it mean when JavaScript is called an interpreted language?",
    answer:
      "JavaScript is called an interpreted language because its code is executed line by line by the browser's JavaScript engine without needing a separate compilation step beforehand. The engine reads the code, interprets it, and runs it immediately.\n\n🔵 How Interpreted Languages Work:\n- No separate compile step like C/C++ or Java.\n- Code is executed directly at runtime.\n- Faster development, easier debugging.\n\n🟣 Why JavaScript Is Considered Interpreted:\n- Browser engines (like V8, SpiderMonkey) read and execute code instantly.\n- You can run JavaScript directly in the browser console.\n- Changes reflect immediately without recompiling.\n\n🟡 Modern Note:\n- Modern engines use Just-In-Time (JIT) compilation to improve performance.\n- JIT compiles parts of the code during execution for speed.\n\nIn short: JavaScript is interpreted because it runs line by line directly in the browser without needing a separate compilation step.",
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
    id: 345587,
    question: "What does it mean that JavaScript is single-threaded?",
    answer:
      "JavaScript is called single-threaded because it has only one call stack and can execute only one piece of code at a time. It cannot run multiple tasks simultaneously in parallel like multi-threaded languages.\n\n🔵 How Single Threading Works:\n- Only one line of code executes at a time.\n- JavaScript has one call stack to process tasks.\n- If one task takes time, it blocks the others.\n\n🟣 Problem With Single Thread:\n- Long-running tasks (like heavy loops or large calculations) can block the UI.\n- Browser may freeze until the task completes.\n\n🟡 How JavaScript Handles Async Tasks:\nEven though JavaScript is single-threaded, it manages asynchronous tasks using:\n- Event Loop\n- Web APIs\n- Callback Queue\n- Microtask Queue\n\nThese allow JavaScript to appear non-blocking and handle timers, promises, API calls, and DOM events without freezing.\n\nIn short: JavaScript is single-threaded because it has one call stack and executes one task at a time, but it uses async mechanisms to stay non-blocking.",
    category: "javascript",
  },
  {
    id: 98789888,
    question: "What is Strict Mode?",
    answer:
      "StrictMode is a development-only tool that helps identify potential issues in React applications. It highlights unsafe lifecycle methods, accidental side effects, and deprecated APIs by running certain functions twice. It doesn’t affect production; it just helps us write cleaner and more future-proof code.",
    category: "javascript",
  },
  {
    id: 98789889,
    question: "What is Event Delegation in JavaScript?",
    answer:
      "Event Delegation is a technique in JavaScript where instead of adding event listeners to individual child elements, we attach a single event listener to a parent element. Because events bubble up in the DOM, the parent can catch events from its children.This improves performance, reduces memory usage, and is useful when elements are created dynamically. For example, instead of adding a click event to every button inside a list, we add one click event to the list container and detect which child was clicked using event.target.\n\n Event Delegation is commonly used for lists, tables, menus, and dynamic DOM updates.",
    category: "javascript",
  },
  {
    id: 834449,
    question: "What is the difference between Webpack and Turbopack?",
    answer:
      "Webpack and Turbopack are both bundlers used in modern JavaScript applications, but they differ in performance, architecture, and speed.\n\n🔵 Webpack:\n- The most widely used JavaScript bundler.\n- Written in JavaScript.\n- Supports loaders, plugins, code splitting, tree shaking.\n- Very powerful but can be slow on large projects.\n- Used in React, Angular, Vue for years.\n\n🟣 Turbopack:\n- Next-generation bundler created by Vercel.\n- Written in Rust, designed to replace Webpack.\n- Much faster (up to 700× faster in dev mode).\n- Built for modern frameworks like Next.js.\n- Supports incremental builds and instant updates.\n\n🟡 Key Differences:\n- Speed: Turbopack is significantly faster than Webpack.\n- Language: Webpack uses JavaScript, Turbopack uses Rust.\n- Use Case: Webpack works for all JS apps; Turbopack is optimized for Next.js.\n- Performance: Turbopack provides instant hot reload and better dev experience.\n\nIn short: Webpack is the traditional bundler used widely, while Turbopack is a modern, super-fast bundler designed for Next.js and future web apps.",
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
    id: 125694,
    question: "What is Event Handling in JavaScript?",
    answer:
      "Event handling in JavaScript means responding to user actions or browser actions — like clicks, key presses, mouse movements, form submissions, or even page load. Whenever something happens on the page, the browser generates an event, and we write functions called event handlers to react to those events. Event handling is what makes a webpage interactive. For example, clicking a button to open a modal, typing in a search box, or submitting a form — all of these work because of event handling.",
    category: "javascript",
  },
  {
    id: 93330,
    question: "What is a callback in JavaScript?",
    answer:
      "A callback is a function passed as an argument to another function and executed after the completion of that function. It allows JavaScript to handle asynchronous operations like API calls, timers, and event handling.\n\n🔵 Why Callbacks Are Used:\n- To run code after an async task completes.\n- To avoid blocking the main thread.\n- To control execution order in async programming.\n\n🟣 Example:\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 2000);\n}\n\nfetchData(function(message) {\n  console.log(message); // Data loaded\n});\n\n🟡 Real-Time Examples:\n- setTimeout()\n- Event listeners\n- Reading files (Node.js)\n- API calls (older style)\n\n🟠 Problem With Callbacks:\n- Nested callbacks lead to callback hell (pyramid of doom).\n- Hard to read, manage, and debug.\n\nIn short: A callback is a function executed after another function finishes, mostly used in asynchronous operations.",
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
      "var, let, and const are three ways to declare variables in JavaScript, and the difference mainly comes from their scope, re-declaration rules, and how they behave during hoisting.\n\nvar is function-scoped and can be re-declared, which often leads to unexpected behavior because it gets hoisted and initialized with undefined.\n\nlet is block-scoped, meaning it stays inside the curly braces where it's defined. It can be updated but not re-declared in the same block, and it's safer because it doesn't allow access before declaration.\n\nconst is also block-scoped like let, but it cannot be reassigned. The reference stays constant, though the content inside objects or arrays can still change. In modern JavaScript, we prefer using let for values that change and const for values that should stay fixed, and we avoid using var unless absolutely necessary.",
    category: "javascript",
  },

  {
    id: 2391,
    question:
      "What is the difference between function declaration and function initialization (function expression)?",
    answer:
      "The difference between a function declaration and a function initialization, which we also call a function expression, mainly comes from how they are defined and how they behave during hoisting.\n\nA function declaration is when we define a function with a name directly in the code using the function keyword. The big advantage is that declarations are fully hoisted, meaning the entire function is moved to the top of its scope. So we can call a function declaration even before it appears in the code.\n\nA function expression is when we assign a function to a variable. Here, the variable gets hoisted but not the actual function value. This means we cannot call a function expression before it's initialized, because until that line is executed, the variable holds undefined. Function expressions are often used when we want more control, like creating anonymous functions, callbacks, or when we want to store functions inside objects.",
    category: "javascript",
  },
  {
    id: 93192,
    question: "What is Hoisting in JavaScript?",
    answer:
      "Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope before the code actually runs. This means JavaScript knows about your variables and functions even before execution starts. Function declarations get fully hoisted, so you can call them before they appear in the code. But variables declared with var are hoisted only with the value undefined, and variables declared with let and const are hoisted but kept in something called the temporal dead zone, which means you can't use them until the line where they are actually declared. Hoisting is basically JavaScript's way of setting up memory for variables and functions before running the code.",
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
    id: 2193,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "In JavaScript, == and === are comparison operators, but they work differently.\n\n🔵 == (Loose Equality):\n- Compares values after performing type conversion.\n- If the types are different, JavaScript converts them into the same type before comparing.\n- Can lead to unexpected results.\n\nExample:\n0 == '0'   // true\n1 == true  // true\nnull == undefined // true\n\n🟣 === (Strict Equality):\n- Compares both value AND type.\n- No type conversion is performed.\n- More predictable and recommended.\n\nExample:\n0 === '0'  // false\n1 === true // false\n10 === 10  // true\n\n🟡 Key Difference:\n- == compares values after type coercion.\n- === compares both value and type without coercion.\n\nIn short: === is strict and safer, while == does type conversion before comparing.",
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
    id: 1094,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature in JavaScript where an inner function remembers and has access to the variables of its outer function even after the outer function has finished executing. This happens because the inner function keeps a reference to the lexical scope in which it was created.\n\nClosures are extremely useful in JavaScript. They allow us to access outer function variables even after the function ends, which is great for creating private variables and data encapsulation. We commonly use closures in callbacks, event handlers, and functional programming patterns.\n\nHere's a simple example:\n\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2\n\nIn this example, the inner function keeps access to the 'count' variable even after the outer function has returned. Each time we call counter(), it remembers the previous value of count and increments it. This is closure in action — the function remembers its environment.",
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
    id: 6573,
    question: "What is the difference between map and forEach?",
    answer:
      "map and forEach are both array iteration methods in JavaScript, but they are used for different purposes.\n\n🔵 forEach:\n- Used only for iterating through an array.\n- Does NOT return a new array.\n- Always returns undefined.\n- Best for performing side effects like logging, updating values, API calls.\n\nExample:\nconst arr = [1, 2, 3];\narr.forEach(item => console.log(item));\n// Output: 1 2 3 (no new array created)\n\n🟣 map:\n- Used to transform each element and return a NEW array.\n- Length remains the same as original array.\n- Best when you need to create a modified array.\n\nExample:\nconst arr = [1, 2, 3];\nconst result = arr.map(item => item * 2);\nconsole.log(result); // [2, 4, 6]\n\n🟡 Key Difference:\n- forEach → Executes logic but returns nothing.\n- map → Executes logic and RETURNS a new transformed array.\n\nIn short: use forEach when you just want to loop, use map when you need a new array.",
    category: "javascript",
  },
  {
    id: 609765552,
    question: "What is the difference between null and undefined?",
    answer:
      "In JavaScript, null and undefined both represent 'no value', but they are used differently.\n\n🟣 undefined:\n- A variable is undefined when it is declared but not assigned.\n- Default value of uninitialized variables.\n- Functions return undefined if no return value is given.\n- Property that does not exist on an object is undefined.\n\nExample:\nlet a;\nconsole.log(a); // undefined\n\n🔵 null:\n- null is an assigned value.\n- It represents 'intentional absence' of value.\n- Developer sets it manually when they want to clear or reset a variable.\n\nExample:\nlet b = null;\nconsole.log(b); // null\n\n🟡 Key Difference:\n- undefined means the value is missing unintentionally.\n- null means the value is intentionally empty.\n\nIn short: undefined = not assigned, null = intentionally assigned empty value.",
    category: "javascript",
  },
  {
    id: 4095,
    question:
      "What is the difference between arrow function and normal function in JavaScript?",
    answer:
      "Arrow functions and normal functions both help define functions, but they behave differently in terms of syntax, this binding, arguments handling, and usage.\n\n🔵 Normal Function:\n- Has its own 'this' context.\n- 'this' depends on how the function is called.\n- Has 'arguments' object.\n- Can be used as constructors.\n- More flexible but longer syntax.\n\nExample:\nfunction add(a, b) {\n  return a + b;\n}\n\n🟣 Arrow Function:\n- Does NOT have its own 'this'.\n- Inherits 'this' from the parent (lexical this).\n- Does NOT have 'arguments' object.\n- Cannot be used as constructors.\n- Shorter and cleaner syntax.\n\nExample:\nconst add = (a, b) => a + b;\n\n🟡 Key Differences:\n- Normal functions have their own this; arrow functions do not.\n- Arrow functions cannot use arguments or be used with new.\n- Arrow functions are shorter and preferred for callbacks.\n\nIn short: Normal functions have their own this and arguments, while arrow functions use lexical this and are better for concise, callback-style code.",
    category: "javascript",
  },
  {
    id: 109.1,
    question: "What are the types of exports and imports in JavaScript?",
    answer:
      "JavaScript supports two types of exports: default exports and named exports. A default export allows exporting a single main value from a file, and we import it without curly braces. Named exports allow exporting multiple values, and we must import them using curly braces. Default is for primary components or modules, while named exports are useful for utilities and helper functions.",
    category: "javascript",
  },
  {
    id: 10101096,
    question:
      "What is the difference between for...in and for...of in JavaScript?",
    answer:
      "for...in and for...of are both looping statements, but they are used for different types of iteration.\n\n🔵 for...in:\n- Used to iterate over the **keys (property names)** of an object.\n- Works on objects and arrays (but not recommended for arrays).\n- Returns string keys.\n\nExample:\nconst user = { name: 'Alex', age: 25 };\nfor (let key in user) {\n  console.log(key); // name, age\n}\n\n🟣 for...of:\n- Used to iterate over **values** of an iterable.\n- Works on arrays, strings, maps, sets, NodeLists.\n- Returns actual values, not keys.\n\nExample:\nconst arr = [10, 20, 30];\nfor (let value of arr) {\n  console.log(value); // 10, 20, 30\n}\n\n🟡 Key Difference:\n- for...in → iterates keys (used for objects).\n- for...of → iterates values (used for arrays and iterables).\n\nIn short: Use for...in for object properties and for...of for array or iterable values.",
    category: "javascript",
  },
  {
    id: 9744,
    question:
      "What is the difference between call, apply, and bind in JavaScript?",
    answer:
      "call, apply, and bind are all used to control the value of 'this' when we invoke a function. The difference is mainly in how the function is executed and how we pass the arguments.\n\nWith call, we directly invoke the function and pass arguments one by one. It immediately runs the function in the context of the object we provide.\n\napply works almost the same way as call, but the only difference is that it expects the arguments in an array instead of individual values. It's useful when you already have your data in an array and want to pass it directly.\n\nbind is different from both because it does not run the function immediately. Instead, it returns a new function with 'this' permanently bound to the object we pass. We can call that new function later whenever we need it. It's commonly used in event handlers or situations where we want to keep the correct 'this' value for later execution.",
    category: "javascript",
  },
  {
    id: 60.876555,
    question: "What is the difference between setTimeout and setInterval?",
    answer:
      "setTimeout and setInterval are two timing functions in JavaScript that control when and how often a piece of code runs. setTimeout runs the function only once after a delay, while setInterval keeps running the function repeatedly at a fixed interval until we stop it. So basically, setTimeout is for one-time delayed actions, and setInterval is for continuous repeated actions.\n\nCommon use cases:\n\nsetTimeout: showing alerts after delay, debouncing, delaying API calls, animations, hiding notifications.\n\nsetInterval: live counters, clocks, real-time updates, repeated API polling, progress bars.",
    category: "javascript",
  },
  {
    id: 59.9099,
    question:
      "What is the difference between LocalStorage, SessionStorage, and Cookies?",
    answer:
      "LocalStorage, SessionStorage, and Cookies are all used to store data in the browser, but they differ in lifespan, storage size, and usage.\n\nLocalStorage is used for long-term data storage. The data persists even after the browser or tab is closed and has no expiration time. It can store up to around 5MB of data. We typically use LocalStorage for storing things like user preferences, theme settings, or shopping cart items that should remain even after closing the browser.\n\nSessionStorage is similar to LocalStorage in terms of storage capacity (around 5MB), but the key difference is that the data is removed when the tab or window is closed. It exists only for that specific tab session. We use SessionStorage for temporary data like active tab state, form steps, or session-specific flags that should not persist across sessions.\n\nCookies are different from both LocalStorage and SessionStorage because they are sent to the server with every HTTP request. They have a very small storage limit of around 4KB and can have an expiration date set by the developer. Cookies are mainly used for authentication tokens, tracking user behavior, and server communication where the server needs to access the stored data.",
    category: "javascript",
  },
  {
    id: 12298,
    question:
      "What is the difference between event bubbling and event capturing?",
    answer:
      "Event bubbling and event capturing are two phases of event propagation in JavaScript that define the order in which events travel through the DOM.\n\nEvent bubbling is the default phase and is most commonly used in JavaScript. In this phase, the event starts from the innermost child element where the event occurred and moves upward to the outer parent elements. For example, if you click a button inside a div, the event first fires on the button, then on the div, then on its parent, and so on up to the document. The flow is: Child → Parent → Grandparent → Document. Event bubbling is particularly useful for event delegation, where we handle events on a parent element instead of attaching listeners to every child.\n\nEvent capturing, also called the trickle-down phase, works in the opposite direction. The event starts from the outermost parent element and moves inward toward the target child element. So the flow is: Document → Grandparent → Parent → Child. Event capturing is less commonly used but can be enabled by passing 'true' as the third parameter in addEventListener, like this: parent.addEventListener('click', handler, true). By default, if you pass false or omit the parameter, it uses bubbling.",
    category: "javascript",
  },
  {
    id: 454799,
    question: "What is the difference between slice and splice in JavaScript?",
    answer:
      "In JavaScript, both slice and splice are used to work with arrays, but they behave completely differently.\n\n  slice():slice() is a non-mutating method. It creates a new array by copying a selected portion of the original array. The important thing is that it does not modify the original array. We use slice when we want to extract data without affecting the source array.\n\n splice(): splice(), on the other hand, is a mutating method. It is used to add, remove, or replace elements directly in the original array. Since splice modifies the array in place, it’s commonly used when we need to update array content.",
    category: "javascript",
  },
  {
    id: 10.34556,
    question: "What is the difference shallow copy and deep copy?",
    answer:
      "Shallow copy and deep copy are two different ways of copying objects in JavaScript, and the main difference is how they handle nested objects or arrays.\n\nA shallow copy only copies the first level of the object. If the object contains nested objects or arrays, those nested items are not actually copied — instead, they remain referenced to the original. This means if you modify a nested object in the copied version, it will also change in the original object because both are pointing to the same nested object in memory. You can create a shallow copy using methods like the spread operator ({...obj}), Object.assign(), or Array.slice() for arrays.\n\nA deep copy, on the other hand, creates a completely independent copy of the entire object, including all nested objects and arrays. Everything is duplicated at every level, so changing anything in the copied object will not affect the original object at all. They are fully independent. To create a deep copy, we typically use JSON.parse(JSON.stringify(obj)) for simple objects, or libraries like Lodash's cloneDeep() for more complex cases with functions or special types.\n\nIn simple terms: shallow copy shares nested references, while deep copy duplicates everything independently.",
    category: "javascript",
  },
  {
    id: 454799,
    question:
      "What is the difference between debounce and Throttling in JavaScript?",
    answer:
      "Throttling:Throttling is a technique used to limit how many times a function can execute over a period of time.Even if an event keeps firing continuously—like scroll, resize, or button clicks—the throttled function will only run at fixed intervals.This helps improve performance and prevents unnecessary function calls.\n\n debounce:Debouncing is a technique that delays the execution of a function until a certain amount of time has passed without the event being triggered again.If the event keeps happening repeatedly, the timer resets each time, and the function runs only once after the user stops triggering the event",
    category: "react",
  },
  {
    id: 1256106,
    question: "How do you identify memory leaks in a React application?",
    answer:
      "In React, memory leaks usually happen when components keep holding references to data even after they are unmounted, or when we don’t clean up side effects properly.\n\n🔵 How I identify memory leaks in React:\n1. **Browser DevTools – Memory Tab**\n   - I take heap snapshots before and after performing some actions (like opening/closing modals, navigating between pages).\n   - If the number of objects or memory usage keeps increasing and never comes down, it’s a sign of a memory leak.\n\n2. **Performance Issues / Warning Signs**\n   - App becomes slower over time.\n   - UI starts lagging after navigating for a while.\n   - React gives warnings like: “Can’t perform a React state update on an unmounted component”.\n\n3. **React DevTools Profiler**\n   - I use the Profiler to check which components are re-rendering too often or staying mounted longer than expected.\n\n🔵 Common causes of memory leaks in React:\n- Not cleaning up `useEffect` subscriptions or listeners.\n- setInterval / setTimeout not cleared.\n- Event listeners added on window or document and never removed.\n- WebSocket or API subscriptions not closed.\n\nExample (Bad – no cleanup):\nuseEffect(() => {\n  const interval = setInterval(() => {\n    setCount(c => c + 1);\n  }, 1000);\n}, []);\n\nExample (Fixed – with cleanup):\nuseEffect(() => {\n  const interval = setInterval(() => {\n    setCount(c => c + 1);\n  }, 1000);\n\n  return () => clearInterval(interval); // cleanup\n}, []);\n\n🟡 How I prevent / fix memory leaks:\n- Always return a cleanup function from useEffect for subscriptions, timers, and event listeners.\n- Cancel in-flight API requests when the component unmounts (using AbortController or library support).\n- Avoid storing huge objects or unnecessary data in state.\n\nIn simple words: I detect memory leaks using DevTools (memory snapshots + profiler), watch for growing memory and warnings, and fix them by properly cleaning up effects, timers, listeners, and subscriptions in React.",
    category: "react",
  },
  {
    id: 1256107,
    question:
      "Explain how garbage collection works in modern JavaScript engines.",
    answer:
      "Modern JavaScript engines like V8 use automatic garbage collection to free up memory that is no longer needed. Developers don't manually release memory — the engine does it for us.\n\n🔵 How it works:\nJavaScript uses a model called **mark-and-sweep**.\n1. The garbage collector starts from the root objects (like window, global variables).\n2. It 'marks' all objects that are reachable or still in use.\n3. Any object that is NOT reachable is considered garbage.\n4. The engine removes those unreachable objects from memory.\n\nThis prevents memory leaks by making sure unused data doesn't stay in memory forever.\n\n🔵 What makes an object 'reachable'?  \n- Variables currently in scope\n- Objects referenced by other objects\n- Active closures or event listeners\n- Global objects\n\nIf there is no reference pointing to an object, it becomes unreachable and will be collected.\n\n🔵 Example of losing reachability:\nlet user = { name: 'John' };\nuser = null; // The object is now unreachable → Garbage collected.\n\n🔵 Modern optimizations:\n- **Generational GC**: New objects are stored in a 'young' space for quick cleanup.\n- **Incremental GC**: Splits work into small steps to avoid blocking the main thread.\n- **Concurrent GC**: Runs garbage collection in parallel threads.\n- **Idle-time GC**: Runs when the browser is idle.\n\n🟡 Simple Summary:\nGarbage collection automatically removes objects that your code can no longer reach. Modern engines do this efficiently using mark-and-sweep, generational cleanup, and background threads to keep performance smooth.",
    category: "javascript",
  },
  {
    id: 463100,
    question:
      "What is the difference between Object.freeze and Object.seal in JavaScript?",
    answer:
      "Object.freeze and Object.seal are used to control modifications on objects, but they provide different levels of restriction.\n\n🔵 Object.freeze():\n- Makes the object completely immutable.\n- Cannot add new properties.\n- Cannot delete properties.\n- Cannot modify existing property values.\n- The strictest form of object protection.\n\nExample:\nconst obj = Object.freeze({ name: 'Alex' });\nobj.name = 'John'; // No effect\nobj.age = 25; // No effect\n\n🟣 Object.seal():\n- Stops adding or deleting properties.\n- Existing properties CAN be modified.\n- Structure is locked but values are still writable.\n\nExample:\nconst user = Object.seal({ name: 'Alex' });\nuser.name = 'John'; // Works\nuser.age = 25; // No effect (cannot add)\ndelete user.name; // No effect\n\n🟡 Key Difference:\n- freeze → No add, no delete, no change (fully locked).\n- seal → No add, no delete, but values can still change.\n\nIn short: Object.freeze makes an object fully read-only, while Object.seal allows modifying existing values but blocks adding or removing properties.",
    category: "javascript",
  },
  {
    id: 101010102,
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise in JavaScript is basically a way to handle asynchronous operations in a cleaner and more predictable way. Instead of relying on nested callbacks, a Promise gives us an object that represents a value that we will get in the future — either the operation succeeds or it fails.\n\nA Promise starts in the pending state, and once the async work is done, it either resolves or rejects. We handle the success using .then() and handle errors using .catch(). The main advantage of Promises is that they make async flows easier to manage and help avoid callback hell. Promises are also the foundation of async/await, which makes asynchronous code look and behave more like synchronous code.",
    category: "javascript",
  },
  {
    id: 45101,
    question:
      "What is the difference between Promise.all(), Promise.race(), and Promise.allSettled()?",
    answer:
      "These Promise methods are used to handle multiple asynchronous operations together, but each behaves differently.\n\n🔵 Promise.all():\n- Runs all promises in parallel.\n- Resolves only when ALL promises resolve.\n- If ANY promise fails, the entire Promise.all() fails.\n\nExample:\nPromise.all([p1, p2, p3])\n  .then(res => console.log(res))\n  .catch(err => console.log(err));\n\n🟣 Promise.race():\n- Returns the result of the FIRST promise that settles.\n- Whichever promise resolves or rejects first wins.\n\nExample:\nPromise.race([p1, p2, p3])\n  .then(res => console.log(res))\n  .catch(err => console.log(err));\n\n🟡 Promise.allSettled():\n- Waits for ALL promises to finish.\n- Returns an array of results with status: fulfilled or rejected.\n- Never fails, even if some promises fail.\n\nExample:\nPromise.allSettled([p1, p2, p3])\n  .then(result => console.log(result));\n\n🟠 Key Difference:\n- Promise.all → Fails if one fails.\n- Promise.race → Returns whichever completes first.\n- Promise.allSettled → Returns results of all promises, regardless of success or failure.\n\nIn short: Use Promise.all for all-success situations, race for first-result scenarios, and allSettled when you need outcomes of every promise.",
    category: "javascript",
  },
  {
    id: 99123,
    question: "What is the difference between call(), apply() and bind()?",
    answer:
      "call() is a method that lets you run a function by explicitly setting what this should refer to and by providing the function arguments one by one.It executes the function instantly with the chosen context.\n\n apply() works just like call(), but it takes the function arguments in the form of an array or array-like object.It also executes the function immediately with the specified this. \n\n bind() creates a new function where the value of this is permanently set to the provided object.It does not run the function immediately — it returns a copy that can be called later with the fixed context.",
    category: "javascript",
  },
  {
    id: 103,
    question: "What are async and await in JavaScript?",
    answer:
      "Async and await are features built on top of Promises that make asynchronous code look and feel like synchronous code. When I mark a function as async, it means that the function will always return a Promise. Inside that function, I can use await to pause the execution until a Promise settles. Instead of chaining multiple .then() calls, I can write async code in a much cleaner, step-by-step style.\n\nThe main benefit is readability — especially when calling multiple APIs or performing sequential async operations. await makes the code easier to understand, handle errors using try/catch, and avoid callback hell. In simple terms, async/await helps us write asynchronous logic in a synchronous manner, but without blocking the main thread.",
    category: "javascript",
  },
  {
    id: 125687,
    question: "Which is better: async/await or promises, and why?",
    answer:
      "Async/await is not a replacement for Promises — it's actually built on top of Promises — but in most real-world cases I prefer async/await because it makes the code much easier to read and maintain.\n\nWith Promises, when we have multiple async steps, we usually end up chaining .then() and .catch(), and if the flow is a bit complex, the code can become hard to follow.\n\nWith async/await, the same logic looks more like normal synchronous code: I just await each step, and I can handle errors with a simple try/catch. That improves readability, debugging, and makes business logic clearer, especially in larger codebases.\n\nThat said, Promises are still very useful. For example, when I need to run things in parallel using Promise.all, or when I'm working with many independent async operations, Promises are a great fit.\n\nSo my approach is:\n\nFor sequential async logic → I prefer async/await for cleaner code.\n\nFor parallel or more advanced patterns → I still use Promises directly.",
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
    id: 125690,
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop in JavaScript is the mechanism that allows JavaScript to handle asynchronous tasks even though it runs on a single thread. JavaScript can execute only one line of code at a time, but the browser APIs and Node.js handle async work in the background. The Event Loop keeps checking if the call stack is empty, and whenever an async operation like a timer, promise, or API call finishes, the Event Loop pushes its callback back into the call stack when it's safe to run. This is what allows JavaScript to stay non-blocking and responsive, even while doing async work. Promises go to the microtask queue, timers and other callbacks go to the macrotask queue, and the Event Loop decides when each one gets executed.",
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
    id: 125691,
    question: "What are Rest and Spread operators in JavaScript?",
    answer:
      "The Rest and Spread operators use the same syntax (three dots ...) but they work in opposite ways.\n\n🔵 Spread Operator:\n- Used to expand or unpack elements from arrays or objects.\n- Commonly used to copy arrays/objects, merge them, or pass values into functions.\n\nExample:\nconst arr = [1, 2, 3];\nconst newArr = [...arr, 4]; // [1,2,3,4]\n\n🔵 Rest Operator:\n- Used to collect or 'gather' multiple elements into a single array.\n- Often used in function parameters or destructuring.\n\nExample:\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6\n\n🟡 Key Difference:\n- Spread breaks values apart.\n- Rest gathers values together.\n\nIn short: Spread expands data, while Rest collects data, and both make JavaScript more clean and flexible.",
    category: "javascript",
  },
  {
    id: 56,
    question: "What is the difference between Debounce and Throttle?",
    answer:
      "In JavaScript, Debounce and Throttle are used to control high-frequency events like scroll, resize, typing, mouse move, and repeated clicks. Running a function on every event causes UI lag, too many API calls, high CPU usage, and poor user experience.\n\nDebounce — Debounce delays the execution of a function until there is a pause in the event. It runs only once after the user stops performing the action. Best use cases: search box suggestions, form validation while typing, and resize end detection. Example: When a user types a → ap → app → apple, debounce waits for 500ms and triggers only one API call.\n\nThrottle — Throttle allows a function to run at fixed time intervals even if the event fires continuously. Best use cases: scroll handling (infinite scroll, analytics), map dragging, and preventing multiple button clicks. Example: Resend OTP button — even if the user clicks 20 times, OTP sends only once in 30 seconds.\n\nIn short: Debounce waits for user inactivity before executing, while Throttle executes at fixed intervals.",
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
    id: 125692,
    question: "What are shift and unshift in JavaScript?",
    answer:
      "Shift and unshift are array methods in JavaScript that help us add or remove elements at the beginning of an array.\n\nshift removes the first element and returns it, and the remaining elements move one step forward.\n\nunshift does the opposite — it adds one or more elements to the start of the array and shifts the existing elements to the right.",
    category: "javascript",
  },
  {
    id: 1256104,
    question: "How does the browser parse and execute JavaScript internally?",
    answer:
      "When we write JavaScript code, the browser doesn't run it directly. It goes through a clear process inside the JavaScript engine (like V8 in Chrome).\n\n🔵 1. Reading the Code (Parsing):\nThe browser first reads the entire JavaScript file from top to bottom and checks for syntax errors. If the code is valid, it converts it into a structure called the AST — basically a format the engine understands.\n\n🔵 2. Compiling the Code:\nModern browsers use JIT (Just-In-Time) compilation. This means instead of interpreting everything line by line, they convert hot or frequently used code into machine code to make it faster.\n\n🔵 3. Executing the Code:\nAfter compilation, the code runs inside the JavaScript call stack. JavaScript is single-threaded, so it runs one task at a time.\n\n🔵 4. Handling Async Tasks:\nFor things like setTimeout, fetch, or events, the browser does not block. These tasks go to Web APIs. After they finish, their callbacks are sent to queues, and the Event Loop pushes them to the call stack when it's free.\n\n🔵 5. Memory Management:\nThe browser also manages memory — it allocates memory for variables and automatically cleans up unused objects using garbage collection.\n\n🟡 Simple Summary:\nThe browser reads the code → converts it → compiles it → runs it → handles async work with the event loop → and manages memory in the background.\n\nThis entire process happens extremely fast, which is why JavaScript feels smooth and responsive in the browser.",
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
    id: 106,
    question:
      "What is the difference between call by value and call by reference in JavaScript?",
    answer:
      "Call by value and call by reference describe how data is passed into functions in JavaScript.\n\nFor primitive types like numbers, strings, and booleans, JavaScript uses call by value. This means the function receives a copy of the actual value. If we change it inside the function, it doesn't affect the original value outside.\n\nFor non-primitive types like objects and arrays, JavaScript uses call by reference. In this case, the function receives a reference to the original object, not a separate copy. So if we modify the object or array inside the function, the changes will reflect outside as well, because both the function and the outer variable point to the same memory location.",
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
    id: 57.1,
    question:
      "What is the difference between Microtask and Macrotask in JavaScript?",
    answer:
      'To understand Microtasks and Macrotasks, you must first understand the Event Loop. JavaScript runs on a single thread, so it uses an Event Loop to decide which task runs first. All async tasks are not equal — they go into different queues.\n\n🟦 Macrotask Queue:\nMacrotasks are big tasks that are executed one by one.\nExamples:\n- setTimeout\n- setInterval\n- setImmediate\n- DOM events\n- Network request callbacks\n\n🟪 Microtask Queue:\nMicrotasks are high-priority small tasks that always run before macrotasks.\nExamples:\n- Promise.then()\n- async/await\n- queueMicrotask()\n- MutationObserver\n\n🚀 Important Rule:\nAfter every macrotask, JavaScript empties the microtask queue first. Microtasks have higher priority, so they run earlier.\n\n🧠 Example:\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nOutput:\nA\nD\nC ← (microtask first)\nB ← (macrotask)\n\nIn short: Microtasks run before macrotasks because they have higher priority in the Event Loop.',
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
    id: 71.1,
    question: "What is async/await in JavaScript?",
    answer:
      "Async/await is a way to handle asynchronous operations in JavaScript with cleaner syntax. When you put 'async' before a function, it always returns a Promise. Inside that function, you can use the 'await' keyword to pause execution until a Promise resolves or rejects. It makes asynchronous code look like synchronous code, making it easier to read and maintain compared to chaining .then() methods. Errors can be caught using try/catch blocks.",
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
    id: 76107,
    question: "What is a Higher-Order Function in JavaScript?",
    answer:
      "A Higher-Order Function (HOF) is a function that either takes another function as an argument, returns a function, or does both. It allows functional programming techniques and makes code more reusable and modular.\n\n🔵 Characteristics of Higher-Order Functions:\n- Accepts one or more functions as parameters.\n- Can return another function.\n- Helps in abstraction and cleaner code.\n\n🟣 Examples of Higher-Order Functions:\n1. Built-in HOFs: map(), filter(), reduce(), forEach(), setTimeout().\n2. Custom HOF Example:\n\nfunction greet(message) {\n  return function(name) {\n    return message + ' ' + name;\n  };\n}\n\nconst sayHello = greet('Hello');\nconsole.log(sayHello('Hemant')); // Hello Hemant\n\n🟡 Why Higher-Order Functions Are Useful:\n- Improve reusability.\n- Help write clean and maintainable code.\n- Enable functional programming patterns.\n- Make async operations easier.\n\nIn short: A higher-order function is any function that takes another function as input or returns a new function as output.",
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
    id: 103.1,
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
    id: 106.1,
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
    id: 271,
    question: "What is Next.js and why use it?",
    answer:
      "Next.js is a React framework that provides features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, and file-based routing. It improves performance, SEO, and developer experience while simplifying React application development.",
    category: "nextjs",
  },
  {
    id: 111,
    question: "What is the difference between SSR, SSG, and ISR in Next.js?",
    answer:
      "SSR, SSG, and ISR are different rendering methods in Next.js that determine how pages are generated and delivered.\n\n🔵 SSR (Server-Side Rendering):\n- Page is generated on every request.\n- Data is fetched on the server for each visit.\n- Best for dynamic content that changes frequently.\n- Example: dashboards, user profiles, admin panels.\n\nCode Example:\nexport async function getServerSideProps() {\n  const data = await fetch('https://api.example.com');\n  return { props: { data } };\n}\n\n🟣 SSG (Static Site Generation):\n- Page is generated at build time (once).\n- Very fast because pages are pre-rendered.\n- Best for static content that rarely changes.\n- Example: blog pages, documentation, marketing pages.\n\nCode Example:\nexport async function getStaticProps() {\n  const data = await fetch('https://api.example.com');\n  return { props: { data } }; \n}\n\n🟡 ISR (Incremental Static Regeneration):\n- Creates static pages but allows them to update after a set time.\n- Combines benefits of SSG + real-time updates.\n- Best for pages that change but not on every request.\n- Example: product pages, news articles, listings.\n\nCode Example:\nexport async function getStaticProps() {\n  const data = await fetch('https://api.example.com');\n  return { props: { data }, revalidate: 10 };\n}\n\n🟠 Key Differences:\n- SSR → renders on every request.\n- SSG → renders once at build time.\n- ISR → renders once and regenerates in the background after a set time.\n\nIn short: SSR is dynamic per request, SSG is static at build time, and ISR updates static pages automatically after intervals.",
    category: "nextjs",
  },
  {
    id: 112,
    question:
      "What is the difference between App Router and Page Router in Next.js?",
    answer:
      "App Router and Page Router are two routing systems in Next.js, but they work differently in terms of structure, rendering, and features.\n\n🔵 Page Router (pages/):\n- Older routing system available before Next.js 13.\n- Uses the pages/ folder.\n- Each file inside pages/ automatically becomes a route.\n- Uses getStaticProps, getServerSideProps, getInitialProps.\n- Mostly client-side components.\n- Less flexible for nested layouts.\n\nExample:\npages/index.js → '/'\npages/about.js → '/about'\n\n🟣 App Router (app/):\n- Introduced in Next.js 13.\n- Uses the app/ folder with React Server Components.\n- Supports layouts, nested routing, parallel routes, loading states.\n- Uses new data-fetching functions like fetch(), not GSSP or GSP.\n- Better performance due to Server Components.\n- More scalable for large applications.\n\nExample:\napp/page.js → '/'\napp/about/page.js → '/about'\n\n🟡 Key Differences:\n- Page Router → older, simpler, no nested layouts.\n- App Router → modern, supports layouts, server components, and advanced routing.\n- App Router gives better performance and flexibility.\n\nIn short: Page Router is the old pages-based routing system, while App Router is the new and powerful routing system with layouts, server components, and modern features.",
    category: "nextjs",
  },
  {
    id: 90909700742113,
    question:
      "What is the difference between Server Components and Client Components in Next.js?",
    answer:
      "In Next.js (App Router), components can be Server Components or Client Components. They have different capabilities and run in different environments.\n\n🔵 Server Components:\n- Run on the server, not in the browser.\n- Default behavior in the app/ directory.\n- Can fetch data directly from the server.\n- Do not include JavaScript in the client bundle (fast performance).\n- Cannot use browser APIs like window, document.\n- Cannot use client-only hooks: useState, useEffect, useRef.\n\nExample:\n// server component (default)\nexport default function Page() {\n  const data = await fetch('https://api.com').then(res => res.json());\n  return <div>{data.title}</div>;\n}\n\n🟣 Client Components:\n- Run in the browser.\n- Must use 'use client' at the top.\n- Needed for interactivity.\n- Can use useState, useEffect, useRef, event listeners.\n- Slightly heavier because they ship JavaScript to the client.\n\nExample:\n'use client';\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n\n🟡 Key Differences:\n- Server Components run on the server; Client Components run in the browser.\n- Server Components cannot use React hooks or browser APIs; Client Components can.\n- Server Components improve performance by sending less JavaScript.\n\nIn short: Use Server Components for data fetching and static UI. Use Client Components for interactivity like buttons, forms, and animations.",
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
  {
    id: 114,
    question:
      "What is the difference between router.push and Link href in Next.js?",
    answer:
      "router.push and Link href are both used for navigation in Next.js, but they serve different purposes.\n\n🔵 Link (href):\n- Used for client-side navigation in JSX.\n- Best for clickable links.\n- Automatically prefetches pages for faster navigation.\n- Improves performance and SEO.\n\nExample:\n<Link href=\"/about\">Go to About</Link>\n\n🟣 router.push:\n- Used to navigate programmatically inside JavaScript code.\n- Useful after form submissions, button clicks, or conditional redirects.\n- Does not automatically prefetch.\n\nExample:\nrouter.push('/dashboard');\n\n🟡 When to Use What:\n- Use <Link> when the user clicks a link in UI.\n- Use router.push when navigation happens through logic or functions.\n\n🟠 Key Difference:\n- Link → declarative navigation (in UI).\n- router.push → programmatic navigation (in code).\n\nIn short: Link is for clickable navigation in JSX, while router.push is for navigation triggered by functions or events.",
    category: "nextjs",
  },
  {
    id: 113,
    question: "Difference between client-side and server-side rendering?",
    answer:
      "In Client-Side Rendering (CSR), the browser loads a minimal HTML file and then downloads JavaScript, which builds the UI on the client. It’s good for dynamic apps but slower for first load.\n\n In Server-Side Rendering (SSR), the UI is rendered on the server and a complete HTML page is sent to the browser. This makes initial loading faster and improves SEO. Frameworks like Next.js handle SSR efficiently",
    category: "nextjs",
  },
  // React Questions
  {
    id: 111.1,
    question: "What is React and what makes it popular?",
    answer:
      "React is a JavaScript library developed by Facebook for building fast, interactive, and scalable user interfaces. It follows a component-based architecture, which means the UI is split into reusable pieces called components. React uses a Virtual DOM to efficiently update only the parts of the UI that change instead of reloading the whole page. It also supports one-way data flow, which makes applications predictable and easier to debug. React’s features like hooks, JSX, and reusable components help developers build modern, performance-optimized web applications. Overall, React makes UI development faster, cleaner, and more maintainable",
    category: "react",
  },

  {
    id: 108.2,
    question: "What are the features of React?",
    answer:
      "React comes with several powerful features that make UI development fast and efficient. The biggest feature is its component-based architecture, which allows us to build UI using small, reusable components. React also uses the Virtual DOM, which helps improve performance by updating only the parts of the real DOM that actually change. It supports one-way data flow, making the application predictable and easier to debug. Another key feature is JSX, which lets us write HTML-like syntax directly inside JavaScript, improving readability. Finally, React offers hooks like useState, useEffect, and useMemo that allow functional components to manage state and side effects. These features together help build scalable, maintainable, and high-performance applications.",
    category: "react",
  },
  {
    id: 108.3,
    question: "What is JSX and how it works?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension in React that allows us to write HTML-like code directly inside JavaScript. JSX makes the UI code more readable and expressive because we can visually see the structure of the component. Behind the scenes, JSX is not HTML; it gets compiled into JavaScript functions like React.createElement. It also supports JavaScript expressions using curly braces, so we can dynamically render data. Overall, JSX makes building UI easier, cleaner, and more maintainable compared to writing large amounts of pure JavaScript.",
    category: "react",
  },
  {
    id: 108.4010938,
    question: "What are fragments in React?",
    answer:
      "Fragments in React allow us to return multiple elements from a component without adding any extra wrapper elements to the DOM. Normally, React components must return a single parent element, but with fragments we can group children without creating unnecessary <div> or <span> tags. This helps keep the DOM clean and avoids layout or styling issues caused by extra nodes. We can use fragments with <React.Fragment> or the short syntax <>...</>. They are especially useful when rendering lists or grouping multiple elements inside a component.",
    category: "react",
  },
  {
    id: 108.1,
    question: "What is an Error Boundary in React?",
    answer:
      "An Error Boundary is a special React component that catches JavaScript errors in its child components and prevents the entire application from crashing. It allows you to show a fallback UI instead of breaking the app.\n\n🔵 Key Features of Error Boundaries:\n- Catch errors during rendering.\n- Catch errors in lifecycle methods.\n- Catch errors in constructors of child components.\n- Show a fallback UI gracefully.\n\n🟣 How to Create an Error Boundary:\nError boundaries must be class components because they rely on lifecycle methods.\n\nExample:\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log('Error:', error);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h2>Something went wrong!</h2>;\n    }\n    return this.props.children;\n  }\n}\n\n🟡 Usage:\n<ErrorBoundary>\n  <MyComponent />\n</ErrorBoundary>\n\n🟠 Important Note:\n- Error boundaries do NOT catch errors from event handlers, async code, or server-side rendering.\n\nIn short: An Error Boundary prevents your React app from crashing by catching UI errors and showing a fallback UI.",
    category: "react",
  },
  {
    id: 74108,
    question: "What is the difference between React.memo and useMemo?",
    answer:
      "React.memo and useMemo are both performance optimization tools in React, but they solve different problems.\n\n🔵 React.memo:\n- A higher-order component.\n- Used to memoize a **whole component**.\n- Prevents re-rendering if props do not change.\n- Useful for functional components receiving the same props repeatedly.\n\nExample:\nconst MyComponent = React.memo(function Child(props) {\n  return <div>{props.value}</div>;\n});\n\n🟣 useMemo:\n- A React hook.\n- Memoizes the **result of a calculation** (not the component itself).\n- Recomputes only when dependencies change.\n- Useful for expensive calculations or derived data.\n\nExample:\nconst result = useMemo(() => heavyCalculation(count), [count]);\n\n🟡 Key Differences:\n- React.memo → Stops unnecessary re-renders of a component.\n- useMemo → Stops unnecessary recalculations inside a component.\n- React.memo is for components; useMemo is for values.\n\nIn short: React.memo memoizes components, while useMemo memoizes computed values.",
    category: "react",
  },
  {
    id: 125696,
    question: "What is React Router and what is Client-Side Routing?",
    answer:
      "React Router is a popular library used in React applications to handle navigation between different pages without reloading the browser. It lets us map URLs to components and create a smooth single-page application (SPA) experience.\n\n🔵 React Router Features:\n- Navigate between pages without full page reloads.\n- Supports dynamic routing.\n- Provides hooks like useNavigate, useParams, useLocation.\n- Helps manage nested routes and protected routes.\n\n🔵 What is Client-Side Routing?\n- Client-side routing means the routing is handled in the browser instead of the server.\n- When the user navigates, React updates the component on the screen without requesting a new page from the server.\n- This makes the app faster and feels more like a desktop application.\n\n🟡 Example of React Router:\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<Home />} />\n    <Route path='/about' element={<About />} />\n  </Routes>\n</BrowserRouter>\n\n🟠 Key Difference:\n- Traditional routing reloads the entire page.\n- Client-side routing updates the UI instantly without reload.\n\nIn short: React Router enables client-side routing, making navigation faster and smoother in React applications.",
    category: "react",
  },

  {
    id: 108.5010938,
    question: "What are the higher order components in React?",
    answer:
      "A Higher Order Component is a function that takes a component as input and returns an enhanced component as output. It’s a pattern used for reusing logic across multiple components. HOCs are mainly used for things like authentication checks, logging, theming, or fetching data. Before hooks, HOCs were very popular, but now custom hooks provide a cleaner alternative. Still, understanding HOCs is important because many older libraries like react-redux use them..",
    category: "react",
  },
  {
    id: 108.7,
    question: "What are React Mixins?",
    answer:
      "Mixins were a way to share reusable logic across components before ES6 classes and hooks were introduced. They allowed developers to add shared code into multiple components. However, mixins caused issues like naming conflicts and unclear data flow, so React officially discouraged them. Today, hooks and HOCs are the preferred alternatives for reusing logic.",
    category: "react",
  },
  {
    id: 108.8,
    question: "What are Render Props",
    answer:
      "Render Props is a pattern where a component receives a function as a prop, and that function returns elements to render. It allows sharing logic between components without using inheritance. Before hooks, render props were widely used for reusable logic like handling hover, toggles, or fetching. Now, custom hooks are the preferred approach but render props are still important to understand.",
    category: "react",
  },
  {
    id: 198916,
    question:
      "What are React Hooks and name the most common ones and why were they introduced?",
    answer:
      "React Hooks are special functions that allow functional components to use state, lifecycle features, and other React capabilities without needing class components. They make React code cleaner, simpler, and more reusable.\n\n🔵 Why Hooks Were Introduced:\n1. To avoid the complexity of class components.\n2. To reuse logic easily across components.\n3. To simplify state management and side effects.\n4. To improve readability and maintainability.\n\n🟣 Most Common Hooks:\n- useState → Manage state in functional components.\n- useEffect → Handle side effects like API calls, subscriptions, timers.\n- useContext → Share global state easily.\n- useRef → Access DOM elements or store mutable values.\n- useMemo → Memoize expensive calculations.\n- useCallback → Memoize functions to avoid re-renders.\n- useReducer → Complex state management (alternative to Redux-like logic).\n\n🟡 Example:\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  console.log('Component Mounted');\n}, []);\n\nIn short: React Hooks let functional components use state and lifecycle features, making React development simpler and more efficient.",
    category: "react",
  },
  {
    id: 134513,
    question:
      "Explain the React component lifecycle in both Class-Based and Functional components.",
    answer:
      "In React, both Class and Functional components follow a lifecycle, but they handle it differently. \n\n" +
      "Class-Based Components have defined lifecycle methods:\n\n" +
      "1. Mounting → constructor, render, componentDidMount (best place for API calls)\n" +
      "2. Updating → shouldComponentUpdate, render, componentDidUpdate (runs after every update)\n" +
      "3. Unmounting → componentWillUnmount (cleanup operations)\n" +
      "4. Error Handling → componentDidCatch\n\n" +
      "Functional Components use Hooks to represent lifecycle stages:\n\n" +
      "1. Mounting → useEffect(() => { ... }, [])\n" +
      "2. Updating → useEffect(() => { ... }, [dependencies])\n" +
      "3. Unmounting → cleanup function inside useEffect\n" +
      "4. Optimization → useMemo, useCallback, React.memo\n\n" +
      "Overall: Class components rely on lifecycle methods, while Functional components use Hooks like useEffect to manage the same lifecycle more efficiently.",
    category: "react",
  },
  {
    id: 108.6010938,
    question: "What is useCallback and how it works?",
    answer:
      "useCallback is a React hook that memoizes a function so it doesn’t get re-created on every render. It returns the same function reference until its dependencies change. This is useful when passing functions to child components that are memoized, or when preventing unnecessary re-renders. In simple terms, useCallback improves performance by caching functions.",
    category: "react",
  },
  {
    id: 108.4,
    question: "What is DOM?",
    answer:
      "DOM stands for Document Object Model. It is a programming interface provided by the browser that represents a webpage as a tree of nodes. Every element—like div, button, or input—is a node in this tree. JavaScript can interact with the DOM to update or manipulate the UI dynamically. For example, changing text, adding elements, or removing elements all happen through the DOM. However, updating the real DOM frequently is slow because the browser must re-render layout, styling, and structure. That’s why libraries like React use a Virtual DOM to make updates faster. In simple words, DOM is the bridge between JavaScript and the UI on the screen.",
    category: "react",
  },
  {
    id: 117,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight, in-memory representation of the real DOM. Instead of updating the actual browser DOM directly—which is slow—React first updates the Virtual DOM. After that, React compares the new Virtual DOM with the previous one using a process called diffing. Only the parts that changed are updated in the real DOM, not the entire page. This makes UI updates significantly faster and improves performance. The Virtual DOM is one of the biggest reasons React applications feel smooth and responsive.",
    category: "react",
  },
  {
    id: 108.5,
    question: "What is the component lifecycle of a React class component?",
    answer: `A React class component has a defined lifecycle that describes how it is created, updated, and removed from the UI. The lifecycle is divided into three main phases: Mounting, Updating, and Unmounting.

In the Mounting phase, the component is created and inserted into the DOM. Methods like constructor, render, and componentDidMount run here.

In the Updating phase, the component re-renders when state or props change. Methods like shouldComponentUpdate, render, and componentDidUpdate are called.

In the Unmounting phase, the component is removed from the DOM, and componentWillUnmount is used for cleanup tasks like removing event listeners.

This lifecycle helps us perform side effects, optimize performance, and manage resources during a component's existence.`,
    category: "react",
  },
  {
    id: 999118,
    question:
      "What is the difference between controlled and uncontrolled components in React?",
    answer:
      "A controlled component is one where form inputs like input or textarea are controlled by React state. Every change updates state, and the UI is always synced with state\n\nAn uncontrolled component uses the DOM to manage form values, often accessed through refs. It’s similar to traditional HTML form behavior\n\n Use controlled components when you need validation or dynamic control. Use uncontrolled when you want simple, minimal control",
    category: "react",
  },
  {
    id: 233120,
    question: "What is Reconciliation in React?",
    answer:
      "Reconciliation is the process React uses to determine what changes need to be made to the real DOM when the application's state or props update. React compares the new Virtual DOM with the previous one and updates only the parts that changed, making UI updates fast and efficient.\n\n🔵 How Reconciliation Works:\n1. React creates a new Virtual DOM whenever state or props change.\n2. React compares the new Virtual DOM with the old one using a diffing algorithm.\n3. Only the modified elements are updated in the real DOM.\n4. This makes updates faster and avoids unnecessary re-renders.\n\n🟣 Key Rules React Follows:\n- If the element type changes, React destroys the old element and creates a new one.\n- If the type is the same, React updates only the changed attributes.\n- Keys help React identify elements in lists and optimize reconciliation.\n\n🟡 Why Reconciliation Is Important:\n- Improves performance.\n- Minimizes real DOM updates.\n- Provides smooth UI rendering.\n- Makes React apps efficient even with frequent updates.\n\nIn short: Reconciliation is React’s process of comparing Virtual DOM trees and applying only necessary changes to the real DOM for fast and optimized UI updates.",
    category: "react",
  },
  {
    id: 108.6,
    question: "What are props in React?",
    answer:
      "Props in React are read-only inputs passed from a parent component to a child component. They allow data and behavior to flow down the component tree. Props help make components reusable because the same component can behave differently based on the props it receives. Props are immutable, meaning a child component cannot modify them. They are similar to function parameters and help maintain one-way data flow in React, making applications predictable and easy to debug.",
    category: "react",
  },
  {
    id: 108.71,
    question: "What are synthetic events in React?",
    answer:
      "Synthetic events are React’s custom event wrapper around the browser’s native events. They provide a consistent, cross-browser interface so we don’t have to worry about browser differences. Synthetic events work the same way across all browsers because React manages them internally. They also improve performance through event delegation — React attaches one event listener at the root instead of multiple listeners on every element",
    category: "react",
  },
  {
    id: 108.81,
    question: "What is state in React?",
    answer:
      "State is a component’s dynamic data that can change over time. Whenever the state updates, React re-renders the component to reflect the new UI. Unlike props, state is internal and controlled by the component itself. State is used for things like form inputs, toggles, counters, API responses, etc.",
    category: "react",
  },
  {
    id: 108.9,
    question: "Difference between state and props?",
    answer:
      "State is internal, mutable data managed inside a component and can change over time. Props are external inputs passed from parent to child and are read-only.\n\nState triggers re-renders when updated, while props reflect how a component behaves or displays content. State = internal & changeable, Props = external & fixed. State = changeable, Props = fixed.",
    category: "react",
  },

  {
    id: 115,
    question: "What is prop drilling and how can you avoid it?",
    answer:
      "Props drilling happens when we pass data through multiple nested components just to reach a deeply nested child. Even components that don’t use the data still receive the props. This makes the code harder to maintain and read \n\n We can avoid props drilling using Context API, Redux, Zustand, or custom hooks. These solutions allow sharing data directly with any component without passing props through every level.We can avoid props drilling using Context API, Redux, Zustand, or custom hooks. These solutions allow sharing data directly with any component without passing props through every level.",
    category: "react",
  },
  {
    id: 116,
    question: "What are pure components in React?",
    answer:
      "A Pure Component in React automatically implements a shallow comparison of props and state in shouldComponentUpdate. It re-renders only when something actually changes, reducing unnecessary updates and improving performance.\n\n It only works for class components and doesn't work for functional components.\n\n It changes only if the props or state are different from the previous props or state.",
    category: "react",
  },
  {
    id: 1256102,
    question: "What are React.lazy and Suspense in React?",
    answer:
      "React.lazy and Suspense are used together to load components only when they are needed, instead of loading everything at once.\n\n🔵 React.lazy:\nReact.lazy lets us import a component lazily. This means the component will load only when the user reaches that page or section. It helps reduce the initial load time and makes the app faster.\n\nExample:\nconst Profile = React.lazy(() => import('./Profile'));\n\n🔵 Suspense:\nSuspense is used to show a fallback UI, like a loader or message, while the lazy component is being loaded. Without Suspense, lazy loading will not work.\n\nExample:\n<Suspense fallback={<h2>Loading...</h2>}>\n  <Profile />\n</Suspense>\n\n🟡 Why we use them:\n- Improve performance by splitting code.\n- Load heavy components only when needed.\n- Give users a smooth experience with a loading screen.\n\nIn simple words: React.lazy loads the component later, and Suspense shows a loader until that component finishes loading.",
    category: "react",
  },

  {
    id: 108.11,
    question: "What is refs?",
    answer:
      "Refs give us direct access to DOM elements or child components. They are used for tasks like focusing inputs, playing videos, or reading values without re-rendering.",
    category: "react",
  },
  {
    id: 108.12,
    question: "What is forwardRef?",
    answer:
      "forwardRef is a React function that lets a parent component pass a ref to a child component. It’s useful when we need to access a DOM element inside a child component from the parent.",
    category: "react",
  },
  {
    id: 108.13,
    question: "What are keys in React?",
    answer:
      "Keys are unique identifiers used by React to track list items during rendering. They help React know which items changed, added, or removed. Without proper keys, React may re-render incorrectly or perform slowly. A stable ID is preferred over using the index.",
    category: "react",
  },
  {
    id: 108.13,
    question: "What is lazy loading in React?",
    answer:
      "Lazy loading means loading components only when they are needed, instead of at the initial page load. React uses React.lazy() for code splitting so that large components load on demand, improving performance and reducing bundle size..",
    category: "react",
  },
  {
    id: 108.14,
    question: "What is Suspense??",
    answer:
      "Suspense allows us to show a fallback UI, like a loader, while waiting for lazy-loaded components or data to load. It improves the user experience by preventing blank screens and creating smooth asynchronous loading.",
    category: "react",
  },
  {
    id: 108.15,
    question: "What are the custom hooks in React ?",
    answer:
      "Custom hooks are reusable functions that use React hooks inside them. They allow us to extract and share logic like fetching data, form handling, or timers across multiple components. They start with the prefix ‘use’ and help reduce code duplication",
    category: "react",
  },
  {
    id: 108.16,
    question: "What is the useReducer hook in React?",
    answer:
      "useReducer is a hook used for managing complex state logic. Instead of multiple setState calls, you use a reducer function that takes the current state and an action and returns the new state. It’s similar to Redux’s reducer pattern and is great for multi-step or related state updates.",
    category: "react",
  },
  {
    id: 108.17,
    question: "What is the Portals in React?",
    answer:
      "Portals allow us to render a component into a DOM node that exists outside the main React root. They are used for UI elements like modals, popups, and tooltips to avoid styling or overflow issues.",
    category: "react",
  },
  {
    id: 108.18,
    question: "What is context in React?",
    answer:
      "Context in React is a way to share data across multiple components without passing props manually at every level. It helps solve the problem of props drilling. With context, we can create a global state that any component can access directly. It’s commonly used for themes, authentication, user data, and language settings. Context improves code readability and reduces unnecessary prop passing.",
    category: "react",
  },
  {
    id: 108.19,
    question: "What pass callback in setState?",
    answer:
      "setState is asynchronous, meaning React batches updates for performance. Because of this, if we immediately try to use the updated state right after calling setState, we may not get the correct value. Passing a callback to setState ensures that the code inside the callback runs only after the state has been updated and the component has re-rendered. It’s useful for operations that depend on the latest state..",
    category: "react",
  },
  {
    id: 108.21,
    question: "Lifecycle replacements in functional components??",
    answer: `Functional components use useEffect as a replacement for lifecycle methods.
 
• componentDidMount → useEffect with empty dependency array
• componentDidUpdate → useEffect with dependency array
• componentWillUnmount → return a cleanup function from useEffect

So useEffect gives us mount, update, and unmount behavior in a single hook`,
    category: "react",
  },
  {
    id: 124.7,
    question: "What is useMemo and how it works?",
    answer:
      "useMemo is a performance optimization hook in React that memoizes a computed value. It helps prevent expensive calculations from running on every render. Instead, React will only recompute the value when its dependency array changes. This is especially useful when we have heavy computations, filtering large lists, or when a value is passed to a child component that relies on referential equality to avoid unnecessary re-renders. So in simple words: useMemo stores a computed result and returns the cached value unless its dependencies update. This makes the component faster and reduces performance bottlenecks.",
    category: "react",
  },
  {
    id: 117.1,
    question: "What are the differences between React.memo and useMemo?",
    answer:
      "React.memo is a higher-order component that prevents unnecessary re-rendering of a component by comparing props - if props haven't changed, React skips rendering. It wraps the entire component (export default React.memo(MyComponent)). \n\n useMemo is a hook used inside a component to memoize the result of an expensive calculation. It caches the value and only recalculates when dependencies change. Use memo for component-level optimization, useMemo for value/calculation optimization within a component.",
    category: "react",
  },
  {
    id: 117.2,
    question: "Difference between createElement and cloneElement?",
    answer:
      "createElement is used to create a new React element from scratch, based on type, props, and children. cloneElement, on the other hand, creates a copy of an existing element and allows us to modify its props or children. cloneElement is useful when we want to pass additional props to children without changing the original component.",
    category: "react",
  },
  {
    id: 117.3,
    question: "When to use useState vs useReducer?",
    answer:
      "useState is best for simple, independent pieces of state—for example, toggles, input values, or simple counters..\n\n useReducer is better when the state is complex, involves multiple related fields, or when updating logic is more structured. It uses a reducer function similar to Redux, making it ideal for complex forms or multi-step processes",
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
    id: 125.1,
    question: "How can we pass data from child to parent component?",
    answer:
      "The most common way is using callback functions. The parent passes a function as a prop to the child, and the child calls that function with the data. Another method is using refs when the parent wants to directly read values from the child. State management tools like Context or Redux also support upward communication indirectly.",

    category: "react",
  },
  {
    id: 125.2,
    question: "How can we send data from child to parent with callback??",
    answer:
      "The parent component defines a function to handle the incoming data and passes it as a prop to the child. The child triggers that function, usually on a button click or form submit, and sends the value back to the parent. This is the most standard and recommended approach.",

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
    id: 125698,
    question: "What are Error Boundaries in React?",
    answer:
      "Error Boundaries are special React components that catch JavaScript errors in the component tree during rendering, lifecycle methods, or inside child components. Instead of crashing the entire application, error boundaries display a fallback UI.\n\n🔵 Key Points:\n- They prevent the whole UI from breaking due to one component's error.\n- They catch errors during rendering, lifecycle methods, and inside children.\n- They do NOT catch errors in event handlers, async code, or server-side rendering.\n\n🔵 Example of Error Boundary:\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h2>Something went wrong.</h2>;\n    }\n    return this.props.children;\n  }\n}\n\n🔵 Usage:\n<ErrorBoundary>\n  <MyComponent />\n</ErrorBoundary>\n\n🟡 Why Error Boundaries Are Useful:\n- Improve app stability.\n- Prevent full app crashes.\n- Provide better user experience by showing fallback UIs.\n\nIn short: Error Boundaries catch UI errors and show a fallback instead of breaking the entire app.",
    category: "react",
  },
  {
    id: 1256100,
    question: "What is React Fiber and Concurrent Mode?",
    answer:
      "React Fiber is the new rendering engine introduced in React 16. It changes how React updates the UI. Instead of doing all updates in one big process, Fiber breaks the work into smaller chunks. This allows React to pause, continue, or stop rendering when needed. Because of this, the UI stays smooth even when the app becomes heavy.\n\nConcurrent Mode is a set of features built on top of Fiber that makes React apps feel faster and more responsive. It allows React to prioritize important updates, like user input, over less important work. It also allows React to prepare multiple UI states in the background and update the screen only when ready.\n\nTogether:\n- Fiber improves how React schedules rendering.\n- Concurrent Mode uses Fiber to make rendering non-blocking and much smoother.\n\nIn simple words: Fiber is the engine that makes React faster and smarter, and Concurrent Mode is the feature that uses that engine to give users a smoother experience.",
    category: "react",
  },

  // {id:56775,question:"What ",answer:"",category:"react"},
  {
    id: 128,
    question:
      "What is the difference beetween package.json and package-lock.json?",
    answer:
      "package.json is the main configuration file that lists a project's dependencies, scripts, project name, and version. It specifies only the dependency ranges, like ^1.2.0 \n package-lock.json automatically locks the exact versions of every dependency and sub-dependency installed, ensuring that all developers and environments use identical versions. This helps create consistent builds and prevents version conflicts",
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
    id: 138.45,
    question: "What are React Server Components and why are they faster?",
    answer:
      "React Server Components (RSCs) are components that run entirely on the server and never ship their JavaScript to the browser. They allow the UI to be rendered on the server and send only the final HTML to the client.\n\n" +
      "They are faster because:\n" +
      "1. No client-side JavaScript is sent for server components, which reduces bundle size.\n" +
      "2. Data fetching happens directly on the server, avoiding extra network calls from the browser.\n" +
      "3. Less JavaScript means faster hydration and quicker page load time.\n" +
      "4. Heavy operations run on the server, improving performance on low-end devices.\n\n" +
      "Overall, React Server Components improve performance by keeping the UI lightweight and reducing the amount of work the browser needs to do.",
    category: "react",
  },
  {
    id: 139,
    question: "How does caching work in Next.js?",
    answer:
      "Next.js uses a built-in caching system to speed up data fetching, reduce API calls, and improve performance.\n\n" +
      "1. Data Caching → In the App Router, fetch() is cached by default. Next.js stores the API response and reuses it on future requests. You can control this using:\n" +
      "   - cache: 'no-store' (always fetch fresh data)\n" +
      "   - next: { revalidate: X } (revalidate data after X seconds)\n\n" +
      "2. Route Caching → Static pages are cached as HTML and served instantly without rerendering on every request.\n\n" +
      "3. Segment-Level Caching → Each layout and page in the app/ directory can have its own cache behavior depending on how data is fetched.\n\n" +
      "4. Client-Side Navigation Cache → Next.js prefetches and caches routes in the browser, making navigation almost instant.\n\n" +
      "5. Static Asset Caching → Images, fonts, and static files use long-term browser caching with hashed filenames.\n\n" +
      "Overall, caching in Next.js improves performance by reducing network calls, minimizing re-renders, and delivering faster page loads.",
    category: "nextjs",
  },
  {
    id: 140,
    question: "Why should we use Dynamic Route Segments in Next.js?",
    answer:
      "Dynamic Route Segments allow us to create flexible and reusable routes based on parameters such as IDs, slugs, or usernames. Instead of creating multiple pages manually, we can create a single dynamic file like [id] or [slug] to handle many dynamic URLs.\n\n" +
      "They are useful because:\n" +
      "1. They simplify routing for pages that depend on dynamic data (e.g., product details, blog posts).\n" +
      "2. They reduce code duplication by using one component for many route variations.\n" +
      "3. They make URL structures cleaner and more SEO-friendly.\n" +
      "4. They allow us to fetch data based on dynamic parameters using functions like generateStaticParams or useParams.\n\n" +
      "Overall, dynamic route segments help build scalable, data-driven pages without manually creating multiple route files.",
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
    question: "What are the differences between App Route and Page Route?",
    answer:
      "Page Routes (pages/) are the older routing system in Next.js where each file automatically becomes a route and components are fully client-side by default. It uses getStaticProps, getServerSideProps, and API routes for data fetching.\n\n" +
      "App Routes (app/) are the modern routing system introduced in Next.js 13 that support React Server Components, nested layouts, loading UI, error boundaries, and colocated data fetching using fetch(), async components, and server actions.\n\n" +
      "Page Routes are simple and good for smaller or legacy projects, while App Routes provide better performance, structured layouts, and are recommended for scalable and production-ready apps.",
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
    id: 272,
    question:
      "How would you handle environment variables in a Next.js application?",
    answer:
      "Environment variables in Next.js can be managed by creating a .env file at the root of your project. Prefix the variable names with NEXT_PUBLIC_ if they need to be available on the client-side as well as the server-side. For example, to create a variable called API_URL, you can define it in your .env file like this:NEXT_PUBLIC_API_URL=https://api.example.com\n\nThen, you can access these variables in your code using process.env.NEXT_PUBLIC_API_URL. Using these prefixed variables ensures that they are embedded into the client-side bundle, which is key for any frontend integrations. Also, remember to add your .env file to .gitignore to keep it out of your version control for security reasons.Then, you can access these variables in your code using process.env.NEXT_PUBLIC_API_URL. Using these prefixed variables ensures that they are embedded into the client-side bundle, which is key for any frontend integrations. Also, remember to add your .env file to .gitignore to keep it out of your version control for security reasons.",
    category: "nextjs",
  },
  {
    id: 273,
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
    id: 1423441,
    question: "What problem does useEffect solve in React?",
    answer:
      "useEffect solves the problem of handling side effects inside functional components. Before Hooks, side effects like API calls, event listeners, subscriptions, and timers could only be done using lifecycle methods in class components.\n\n" +
      "useEffect helps by:\n" +
      "1. Running code after the component renders (similar to componentDidMount).\n" +
      "2. Running code when specific state or props change (similar to componentDidUpdate).\n" +
      "3. Cleaning up listeners, timers, and subscriptions when the component unmounts (similar to componentWillUnmount).\n" +
      "4. Keeping related logic together instead of splitting it across multiple lifecycle methods.\n\n" +
      "Overall, useEffect gives functional components full lifecycle capabilities and makes managing side effects easier, cleaner, and more predictable.",
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
      "In the Next.js App Router, both hooks come from next/navigation but serve different purposes. usePathname() returns the current URL path (like '/dashboard' or '/products/123'), which is useful for highlighting active routes or running logic based on the current page. useSearchParams() is used to read the query parameters from the URL (like ?id=10&filter=active). It provides methods such as get() to access specific values. In short, usePathname() helps you track the active route, while useSearchParams() helps you work with the URL’s query string.",
    category: "nextjs",
  },
  {
    id: 1423412,
    question: "What is memoization?",
    answer:
      "Memoization is a performance optimization technique where a function stores the result of its computation and returns the cached result when the same inputs are used again. This avoids recalculating the same work repeatedly and improves performance.\n\n" +
      "In React, memoization is commonly used to prevent unnecessary re-renders and optimize expensive operations. React provides tools like:\n" +
      "1. useMemo – memoizes values.\n" +
      "2. useCallback – memoizes functions.\n" +
      "3. React.memo – memoizes entire components.\n\n" +
      "Overall, memoization makes applications faster by caching results and reducing redundant computations.",
    category: "react",
  },
  {
    id: 14343,
    question: "When should you use useReducer over useState?",
    answer:
      "useReducer is preferred over useState when your state logic becomes complex or involves multiple related values. It helps manage state in a more structured and predictable way using actions and reducers.\n\n" +
      "You should use useReducer when:\n" +
      "1. The state has multiple fields that update together.\n" +
      "2. The state transitions follow clear actions (like increment, decrement, toggle, add, remove).\n" +
      "3. The logic becomes hard to manage with multiple useState calls.\n" +
      "4. You want a cleaner state management pattern similar to Redux.\n" +
      "5. The next state depends on the previous state.\n\n" +
      "Overall, useReducer is ideal for complex or large components, while useState is better for simple and straightforward state updates.",
    category: "react",
  },
  {
    id: 125695,
    question: "What are default props in React?",
    answer:
      "Default props are fallback values for props in React components. They are used when a parent component does not pass a value for a particular prop.\n\nDefault props help prevent errors, ensure components always have valid data, and make components more reusable.\n\n🔵 Example using defaultProps (Class Component):\nMyComponent.defaultProps = {\n  name: 'Guest'\n};\n\n🔵 Example using Default Props (Functional Component):\nfunction Welcome({ name = 'Guest' }) {\n  return <h1>Hello, {name}</h1>;\n}\n\n🟡 Why Default Props are useful:\n- Avoid undefined props.\n- Provide fallback values.\n- Improve component stability.\n\nIn short: Default props ensure a component has a value even if the parent doesn't pass one.",
    category: "react",
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

  // Redux Questions
  {
    id: 156,
    question: "What is Redux and why do we use it?",
    answer:
      "Redux is a predictable state management library for JavaScript applications. It helps manage application state in a centralized store, making it easier to track changes and debug. Redux is commonly used in React applications when: \n1. Multiple components need to access the same state\n2. State needs to be shared across different parts of the application\n3. You need predictable state updates\n4. You want to implement features like undo/redo\n5. You need better debugging with tools like Redux DevTools\n\nRedux follows three core principles: single source of truth (one store), state is read-only (changes only through actions), and changes are made with pure functions (reducers).",
    category: "redux",
  },
  {
    id: 157,
    question: "What are the core principles of Redux?",
    answer:
      "Redux has three fundamental principles:\n\n1. Single Source of Truth: The entire application state is stored in a single object tree within a single store. This makes it easier to track changes and debug the application.\n\n2. State is Read-Only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither views nor network callbacks can directly modify the state.\n\n3. Changes are Made with Pure Functions: To specify how the state tree is transformed by actions, you write pure reducers. Reducers are pure functions that take the previous state and an action, and return the next state without mutating the previous state.",
    category: "redux",
  },
  {
    id: 158,
    question: "What are Actions, Reducers, and Store in Redux?",
    answer:
      "Actions: Plain JavaScript objects that describe what happened in the application. They must have a 'type' property and can optionally include a payload with additional data. Example: { type: 'ADD_TODO', payload: { text: 'Learn Redux' } }\n\nReducers: Pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments, and return a new state. Example: (state = initialState, action) => { switch(action.type) { case 'ADD_TODO': return {...state, todos: [...state.todos, action.payload]} } }\n\nStore: The object that holds the entire application state. It has methods like getState() to access state, dispatch(action) to update state, and subscribe(listener) to register change listeners. Created using createStore(reducer).",
    category: "redux",
  },
  {
    id: 159,
    question: "What is Redux Toolkit and why should we use it?",
    answer:
      "Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It was created to address common concerns about Redux being too complex and requiring too much boilerplate code.\n\nKey benefits:\n1. Simplifies store setup with configureStore()\n2. Reduces boilerplate with createSlice() which generates actions and reducers\n3. Built-in Immer library allows 'mutating' syntax that safely creates immutable updates\n4. Includes Redux Thunk by default for async logic\n5. Provides createAsyncThunk for handling async operations\n6. Better TypeScript support\n7. Includes Redux DevTools Extension by default\n\nExample: createSlice() combines action creators and reducers in one place, making code more maintainable and easier to write.",
    category: "redux",
  },
  {
    id: 160,
    question: "How do you handle async operations in Redux?",
    answer:
      "There are several ways to handle async operations in Redux:\n\n1. Redux Thunk (most common): Allows action creators to return functions instead of action objects. The function receives dispatch and getState as arguments.\nExample: const fetchUser = (id) => async (dispatch) => { dispatch({type: 'FETCH_START'}); const data = await api.getUser(id); dispatch({type: 'FETCH_SUCCESS', payload: data}); }\n\n2. Redux Toolkit's createAsyncThunk: Simplifies async logic by automatically dispatching pending, fulfilled, and rejected actions.\nExample: const fetchUser = createAsyncThunk('users/fetch', async (userId) => { return await api.getUser(userId); })\n\n3. Redux Saga: Uses generator functions for complex async flows with better testability.\n\n4. Redux Observable: Uses RxJS observables for handling async operations with powerful operators.\n\nRedux Thunk and createAsyncThunk are the most commonly used approaches.",
    category: "redux",
  },
  {
    id: 161,
    question: "What is the difference between Redux and Context API?",
    answer:
      "Redux and Context API both manage state Context API is great for small to medium applications where we need to share simple global data like theme, user info, or language. It avoids prop drilling but doesn’t offer advanced features. \n\n Redux, on the other hand, is a full state management library that provides predictable global state control using reducers, actions, and a centralized store. It’s better for large applications with complex state logic. Redux also provides tools like middleware, debugging, and time-travel debugging.",
    category: "redux",
  },
  {
    id: 162,
    question: "What are Redux middleware and when would you use them?",
    answer:
      "Redux middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. Middleware can:\n- Intercept actions\n- Modify actions\n- Delay actions\n- Log actions\n- Make async calls\n- Dispatch additional actions\n\nCommon middleware:\n1. Redux Thunk: Handles async logic by allowing functions as actions\n2. Redux Saga: Handles complex async flows with generators\n3. Redux Logger: Logs every action and state change\n4. Redux Promise: Handles promises in actions\n\nExample use case: Authentication middleware that intercepts every action, checks if the user is authenticated, and redirects to login if not.\n\nMiddleware is applied when creating the store: const store = createStore(reducer, applyMiddleware(thunk, logger))",
    category: "redux",
  },
  {
    id: 163,
    question: "How does Redux DevTools help in debugging?",
    answer:
      "Redux DevTools is a powerful debugging tool that provides:\n\n1. Action History: See all dispatched actions in chronological order with their payloads\n2. State Inspection: View the entire state tree at any point in time\n3. Time Travel Debugging: Jump back and forth between different states by selecting actions\n4. Action Replay: Replay actions to reproduce bugs\n5. State Diff: See exactly what changed between states\n6. Action Dispatch: Manually dispatch actions for testing\n7. Export/Import: Save and load state snapshots for testing\n8. Performance Monitoring: Track performance of actions and renders\n\nTo enable it, install the browser extension and use configureStore() from Redux Toolkit (includes it by default) or add devTools enhancer to your store configuration. It's invaluable for understanding state changes and debugging complex state logic.",
    category: "redux",
  },
  {
    id: 164,
    question: "What are selectors in Redux and why are they important?",
    answer:
      "Selectors are functions that extract specific pieces of data from the Redux store state. They encapsulate the logic for reading data from the store.\n\nBenefits:\n1. Encapsulation: Hide the state structure from components\n2. Reusability: Use the same selector in multiple components\n3. Memoization: With libraries like Reselect, selectors can cache results for better performance\n4. Testability: Easy to test independently of components\n5. Maintainability: If state structure changes, only update selectors\n\nExample:\nBasic selector: const selectTodos = (state) => state.todos\nMemoized selector with Reselect: const selectCompletedTodos = createSelector([selectTodos], (todos) => todos.filter(t => t.completed))\n\nUsage in component: const todos = useSelector(selectTodos)\n\nMemoized selectors only recalculate when their inputs change, preventing unnecessary renders and computations.",
    category: "redux",
  },
  {
    id: 165,
    question:
      "What is the difference between useSelector and connect in Redux?",
    answer:
      "Both useSelector and connect are used to access Redux state in React components, but they have different approaches:\n\nuseSelector (React-Redux Hooks):\n- Function component approach\n- More flexible and concise\n- Allows multiple selectors in one component\n- Returns specific piece of state directly\n- Component re-renders when selected state changes\n- Example: const user = useSelector(state => state.user)\n\nconnect (Higher-Order Component):\n- Class or function component approach\n- More boilerplate with mapStateToProps and mapDispatchToProps\n- Wraps component in HOC\n- Better for connecting multiple props\n- Example: connect(mapStateToProps, mapDispatchToProps)(MyComponent)\n\nModern Redux development favors hooks (useSelector with useDispatch) for their simplicity and better TypeScript support. However, connect is still valid and commonly seen in legacy codebases.",
    category: "redux",
  },

  // Socket.IO / WebSocket Questions
  {
    id: 166,
    question: "What is Socket.IO and how does it differ from WebSockets?",
    answer:
      "Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. While it uses WebSocket as the underlying transport when possible, it has key differences:\n\nWebSocket:\n- Native browser API\n- Raw protocol for real-time communication\n- Requires manual implementation of features\n- Limited fallback options\n- Lower-level, more control\n\nSocket.IO:\n- Library built on top of WebSocket\n- Automatic reconnection\n- Built-in fallback (HTTP long-polling if WebSocket unavailable)\n- Room and namespace support\n- Automatic JSON parsing\n- Broadcast and event-based API\n- Works across all browsers and devices\n\nSocket.IO provides a higher-level abstraction with more features out of the box, making it easier to build production-ready real-time applications. Use raw WebSocket when you need minimal overhead and full control.",
    category: "socket",
  },
  {
    id: 167,
    question: "How do you implement real-time chat using Socket.IO?",
    answer:
      "Implementing real-time chat with Socket.IO involves:\n\nServer (Node.js):\n```javascript\nconst io = require('socket.io')(server);\nio.on('connection', (socket) => {\n  console.log('User connected');\n  socket.on('chat message', (msg) => {\n    io.emit('chat message', msg); // Broadcast to all\n  });\n  socket.on('disconnect', () => {\n    console.log('User disconnected');\n  });\n});\n```\n\nClient (React):\n```javascript\nimport io from 'socket.io-client';\nconst socket = io('http://localhost:3000');\n\nfunction Chat() {\n  useEffect(() => {\n    socket.on('chat message', (msg) => {\n      setMessages(prev => [...prev, msg]);\n    });\n    return () => socket.off('chat message');\n  }, []);\n\n  const sendMessage = (text) => {\n    socket.emit('chat message', text);\n  };\n}\n```\n\nKey concepts: connection/disconnection events, emitting events, listening for events, and broadcasting messages.",
    category: "socket",
  },
  {
    id: 168,
    question: "What are Socket.IO rooms and namespaces?",
    answer:
      "Rooms and namespaces are Socket.IO features for organizing and segmenting socket connections:\n\nRooms:\n- Arbitrary channels that sockets can join and leave\n- Server-side only concept\n- Used to broadcast events to subsets of clients\n- Example: chat rooms, game lobbies\n```javascript\nsocket.join('room1');\nio.to('room1').emit('message', 'Hello room1');\nsocket.leave('room1');\n```\n\nNamespaces:\n- Separate communication channels over single connection\n- Both server and client concept\n- Used to separate application logic\n- Example: different sections of app (/admin, /user)\n```javascript\nconst adminNsp = io.of('/admin');\nadminNsp.on('connection', socket => {});\n// Client: const adminSocket = io('/admin');\n```\n\nDifference: Namespaces are created explicitly and exist separately. Rooms are created dynamically within namespaces. Use namespaces for major application segments and rooms for temporary groupings.",
    category: "socket",
  },
  {
    id: 169,
    question: "How do you handle authentication with Socket.IO?",
    answer:
      "Socket.IO authentication can be handled in several ways:\n\n1. Token-based (JWT) - Most Common:\nClient:\n```javascript\nconst socket = io('http://localhost:3000', {\n  auth: { token: 'your-jwt-token' }\n});\n```\n\nServer:\n```javascript\nio.use((socket, next) => {\n  const token = socket.handshake.auth.token;\n  try {\n    const decoded = jwt.verify(token, SECRET);\n    socket.user = decoded;\n    next();\n  } catch (err) {\n    next(new Error('Authentication error'));\n  }\n});\n```\n\n2. Cookie-based:\nEnable cookie sharing between HTTP and Socket.IO:\n```javascript\nio.use((socket, next) => {\n  const session = parseSessionFromCookie(socket.request.headers.cookie);\n  if (session.authenticated) next();\n  else next(new Error('Not authenticated'));\n});\n```\n\n3. Query parameters (less secure):\n```javascript\nconst socket = io('http://localhost:3000?token=xyz');\n```\n\nBest practice: Use middleware to verify authentication before allowing connections, and store user info on the socket object for later use.",
    category: "socket",
  },
  {
    id: 170,
    question: "How do you handle socket disconnections and reconnections?",
    answer:
      "Handling disconnections and reconnections is crucial for reliable real-time applications:\n\nClient-side:\n```javascript\nconst socket = io('http://localhost:3000', {\n  reconnection: true,\n  reconnectionDelay: 1000,\n  reconnectionAttempts: 5\n});\n\nsocket.on('connect', () => {\n  console.log('Connected:', socket.id);\n  setConnectionStatus('online');\n});\n\nsocket.on('disconnect', (reason) => {\n  console.log('Disconnected:', reason);\n  setConnectionStatus('offline');\n  if (reason === 'io server disconnect') {\n    socket.connect(); // Manual reconnect if server forced disconnect\n  }\n});\n\nsocket.on('reconnect', (attemptNumber) => {\n  console.log('Reconnected after', attemptNumber, 'attempts');\n});\n```\n\nServer-side:\n```javascript\nio.on('connection', (socket) => {\n  socket.on('disconnect', (reason) => {\n    console.log('User disconnected:', reason);\n    // Clean up user-specific data\n  });\n});\n```\n\nBest practices:\n- Show connection status to users\n- Queue messages during disconnection\n- Re-sync state after reconnection\n- Set reasonable reconnection attempts\n- Handle cleanup on server disconnect",
    category: "socket",
  },
  {
    id: 171,
    question:
      "What are the common performance optimization techniques for Socket.IO?",
    answer:
      "Socket.IO performance optimizations:\n\n1. Use Rooms Efficiently:\n- Target specific rooms instead of broadcasting to all\n- io.to('room').emit() instead of io.emit()\n\n2. Enable Compression:\n```javascript\nconst io = require('socket.io')(server, {\n  perMessageDeflate: true\n});\n```\n\n3. Use Binary Data:\n- Send ArrayBuffers for large data like images\n- More efficient than Base64 strings\n\n4. Implement Rate Limiting:\n```javascript\nconst rateLimiter = require('socket.io-rate-limit');\nio.use(rateLimiter({ maxSockets: 100 }));\n```\n\n5. Redis Adapter for Scaling:\n```javascript\nconst redisAdapter = require('socket.io-redis');\nio.adapter(redisAdapter({ host: 'localhost', port: 6379 }));\n```\n\n6. Namespace Separation:\n- Separate high and low traffic features\n\n7. Client-side:\n- Debounce frequent events\n- Batch multiple updates\n- Clean up listeners on unmount\n\n8. Monitor and Profile:\n- Use socket.io-admin-ui for monitoring\n- Track connection count and message frequency",
    category: "socket",
  },
  {
    id: 172,
    question: "How do you scale Socket.IO across multiple servers?",
    answer:
      "Scaling Socket.IO horizontally requires a message broker to sync events across servers:\n\n1. Using Redis Adapter (Most Common):\n```javascript\nconst { createAdapter } = require('@socket.io/redis-adapter');\nconst { createClient } = require('redis');\n\nconst pubClient = createClient({ host: 'localhost', port: 6379 });\nconst subClient = pubClient.duplicate();\n\nPromise.all([pubClient.connect(), subClient.connect()]).then(() => {\n  io.adapter(createAdapter(pubClient, subClient));\n});\n```\n\n2. Sticky Sessions:\nEnsure requests from same client go to same server:\n```javascript\n// Nginx configuration\nupstream io_nodes {\n  ip_hash;\n  server 127.0.0.1:3000;\n  server 127.0.0.1:3001;\n}\n```\n\n3. Using Socket.IO Cluster Adapter:\nFor same-machine scaling across CPU cores\n\n4. Architecture:\n- Multiple Node.js servers\n- Redis pub/sub for message distribution\n- Load balancer with sticky sessions\n- Shared session store (Redis)\n\nBenefits: Increased capacity, fault tolerance, load distribution. Events emitted on one server reach clients on all servers through Redis.",
    category: "socket",
  },
  {
    id: 173,
    question:
      "What are Socket.IO acknowledgements and when should you use them?",
    answer:
      "Acknowledgements (or callbacks) in Socket.IO allow you to receive confirmation that a message was received and get a response:\n\nClient to Server:\n```javascript\n// Client\nsocket.emit('create-order', orderData, (response) => {\n  if (response.status === 'ok') {\n    console.log('Order created:', response.orderId);\n  } else {\n    console.error('Error:', response.error);\n  }\n});\n\n// Server\nsocket.on('create-order', (data, callback) => {\n  try {\n    const orderId = createOrder(data);\n    callback({ status: 'ok', orderId });\n  } catch (error) {\n    callback({ status: 'error', error: error.message });\n  }\n});\n```\n\nServer to Client:\n```javascript\n// Server\nsocket.emit('update-status', newStatus, (acknowledged) => {\n  console.log('Client acknowledged:', acknowledged);\n});\n\n// Client\nsocket.on('update-status', (status, callback) => {\n  updateUI(status);\n  callback(true);\n});\n```\n\nUse cases:\n- Confirm critical operations\n- Get data from receiver\n- Implement request-response patterns\n- Error handling\n- Transaction-like operations\n\nBest practice: Set timeouts for acknowledgements to handle non-responsive clients.",
    category: "socket",
  },
  {
    id: 174,
    question: "How do you test Socket.IO applications?",
    answer:
      "Testing Socket.IO applications involves both unit and integration tests:\n\n1. Client-side Testing (Jest + React Testing Library):\n```javascript\nimport { io } from 'socket.io-client';\nimport { render, waitFor } from '@testing-library/react';\n\njest.mock('socket.io-client');\n\ntest('receives message', async () => {\n  const mockSocket = { on: jest.fn(), emit: jest.fn() };\n  io.mockReturnValue(mockSocket);\n  \n  const { getByText } = render(<Chat />);\n  \n  const messageHandler = mockSocket.on.mock.calls\n    .find(call => call[0] === 'message')[1];\n  \n  messageHandler({ text: 'Hello' });\n  \n  await waitFor(() => {\n    expect(getByText('Hello')).toBeInTheDocument();\n  });\n});\n```\n\n2. Server-side Testing:\n```javascript\nconst { createServer } = require('http');\nconst { Server } = require('socket.io');\nconst Client = require('socket.io-client');\n\ndescribe('chat server', () => {\n  let io, serverSocket, clientSocket;\n  \n  beforeAll((done) => {\n    const httpServer = createServer();\n    io = new Server(httpServer);\n    httpServer.listen(() => {\n      const port = httpServer.address().port;\n      clientSocket = new Client(`http://localhost:${port}`);\n      io.on('connection', (socket) => {\n        serverSocket = socket;\n      });\n      clientSocket.on('connect', done);\n    });\n  });\n  \n  test('should emit message', (done) => {\n    clientSocket.on('message', (data) => {\n      expect(data).toBe('hello');\n      done();\n    });\n    serverSocket.emit('message', 'hello');\n  });\n});\n```\n\n3. E2E Testing: Use Cypress or Playwright to test real-time features in browser.",
    category: "socket",
  },
  {
    id: 175.9823,
    question: "What are the security best practices for Socket.IO?",
    answer:
      "Socket.IO security best practices:\n\n1. Authentication & Authorization:\n- Always authenticate on connection\n- Verify user permissions before emitting sensitive data\n- Use JWT or session-based auth\n\n2. Validate All Input:\n```javascript\nsocket.on('message', (data) => {\n  if (!isValidMessage(data)) {\n    return socket.disconnect();\n  }\n  // Process message\n});\n```\n\n3. Rate Limiting:\n- Prevent spam and DoS attacks\n- Limit connections per IP\n- Throttle message frequency\n\n4. CORS Configuration:\n```javascript\nconst io = require('socket.io')(server, {\n  cors: {\n    origin: 'https://yourdomain.com',\n    methods: ['GET', 'POST'],\n    credentials: true\n  }\n});\n```\n\n5. Use HTTPS/WSS:\n- Encrypt all socket traffic\n- Prevent man-in-the-middle attacks\n\n6. Namespace Isolation:\n- Separate admin and user connections\n- Different authentication per namespace\n\n7. Room Access Control:\n- Verify user can join/leave rooms\n- Don't trust client-provided room names\n\n8. Sanitize Output:\n- Prevent XSS in chat applications\n- Escape HTML in messages\n\n9. Monitor & Log:\n- Track suspicious activity\n- Log authentication failures\n- Monitor connection rates\n\n10. Keep Dependencies Updated:\n- Regular security patches\n- Update Socket.IO and dependencies",
    category: "socket",
  },

  // TypeScript Questions
  {
    id: 200,
    question: "What is TypeScript and why should we use it?",
    answer:
      "TypeScript is a statically typed superset of JavaScript that adds optional type annotations. In my experience working with both JavaScript and TypeScript projects, I've found several key advantages:\n\n1. Catch Bugs Early: Type checking catches issues during development, not in production. I've prevented countless runtime errors this way.\n\n2. Better Refactoring: When I need to rename a property or change a function signature, TypeScript shows me exactly what breaks.\n\n3. Improved Developer Experience: Autocomplete and IntelliSense make coding faster and reduce the need to constantly check documentation.\n\n4. Self-Documenting Code: Types serve as inline documentation, making it easier for team members to understand the codebase.\n\n5. Easier Maintenance: When returning to code after months, types help me understand what I wrote much faster.\n\nReal Example from my work:\n```typescript\n// This API call error would only show in production with JS\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nasync function fetchUser(id: string): Promise<User> {\n  const response = await fetch(`/api/users/${id}`);\n  return response.json(); // TypeScript ensures return matches User interface\n}\n\n// TypeScript catches this at development time\nconst user = await fetchUser(123); // Error: number not assignable to string\n```\n\nIn my projects, TypeScript has reduced production bugs by about 40% and made onboarding new developers much smoother.",
    category: "typescript",
  },
  {
    id: 274,
    question:
      "What is the difference between 'interface' and 'type' in TypeScript?",
    answer:
      "In my daily work, I use both but for different purposes. Here's how I decide:\n\nI use Interface when:\n- Defining object shapes, especially for classes\n- Working with OOP patterns\n- Need declaration merging (like extending third-party types)\n- Building public APIs\n\nI use Type when:\n- Creating unions or intersections\n- Working with primitives or tuples\n- Need computed properties\n- Creating utility types\n\nReal Examples from my projects:\n```typescript\n// Interface - API response\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\n// Can extend library types\ninterface User {\n  createdAt: Date; // Declaration merging\n}\n\n// Type - Complex types\ntype Status = 'pending' | 'active' | 'inactive'; // Union\ntype ID = string | number; // Flexible\ntype ApiResponse<T> = {\n  data: T;\n  error?: string;\n};\n\n// Type for function signatures\ntype EventHandler = (event: Event) => void;\n\n// Intersection types\ntype UserWithRole = User & { role: string };\n```\n\nPractical Rule: I default to interface for objects and type for everything else. Both work fine for simple objects, so consistency in the codebase matters more than strict rules.",
    category: "typescript",
  },
  {
    id: 275,
    question: "Explain TypeScript Generics with examples",
    answer:
      "Generics let me write reusable code that works with multiple types while keeping type safety. I use them daily in API calls, React components, and utility functions.\n\nReal-world API example I use:\n```typescript\n// Generic API response handler\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message?: string;\n}\n\nasync function fetchData<T>(url: string): Promise<ApiResponse<T>> {\n  const response = await fetch(url);\n  return response.json();\n}\n\n// Type-safe usage\nconst users = await fetchData<User[]>('/api/users');\nconst product = await fetchData<Product>('/api/product/1');\n```\n\nGeneric React Component I created:\n```typescript\ninterface SelectProps<T> {\n  options: T[];\n  value: T;\n  onChange: (value: T) => void;\n  getLabel: (item: T) => string;\n}\n\nfunction Select<T>({ options, value, onChange, getLabel }: SelectProps<T>) {\n  return (\n    <select value={getLabel(value)} onChange={(e) => { /* ... */ }}>\n      {options.map(opt => <option key={getLabel(opt)}>{getLabel(opt)}</option>)}\n    </select>\n  );\n}\n```\n\nUtility function with constraints:\n```typescript\n// Only accept objects with an 'id' property\nfunction findById<T extends { id: string }>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}\n\nconst user = findById(users, '123'); // Type-safe\n```\n\nThis approach has saved me from many runtime errors when working with different data types.",
    category: "typescript",
  },
  {
    id: 276,
    question: "What are TypeScript Utility Types?",
    answer:
      "Utility types are TypeScript's built-in helpers that I use constantly to transform types. Here are the ones I use most in my daily work:\n\n1. Partial<T> - For update functions:\n```typescript\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  age: number;\n}\n\n// Update only some fields\nfunction updateUser(id: string, updates: Partial<User>) {\n  // Can pass { name: 'John' } without other fields\n}\n```\n\n2. Pick<T, K> - For DTOs:\n```typescript\n// Only send specific fields to frontend\ntype UserDTO = Pick<User, 'id' | 'name' | 'email'>;\n```\n\n3. Omit<T, K> - For creating new entities:\n```typescript\n// Remove id when creating new user (DB generates it)\ntype CreateUserInput = Omit<User, 'id'>;\n```\n\n4. Record<K, T> - For maps and lookups:\n```typescript\n// Form validation errors\ntype ValidationErrors = Record<string, string>;\nconst errors: ValidationErrors = {\n  email: 'Invalid email',\n  password: 'Too short'\n};\n```\n\n5. ReturnType<T> - Extract function return types:\n```typescript\nfunction fetchUser() {\n  return { id: '1', name: 'John', role: 'admin' };\n}\n\ntype User = ReturnType<typeof fetchUser>;\n// No need to define interface separately!\n```\n\n6. Required<T> & Readonly<T>:\n```typescript\n// Config that can't be modified\ntype Config = Readonly<{\n  apiUrl: string;\n  timeout: number;\n}>;\n```\n\nThese have reduced boilerplate code significantly in my projects.",
    category: "typescript",
  },
  {
    id: 204,
    question:
      "What is the difference between 'any', 'unknown', and 'never' types?",
    answer:
      "These three types confused me initially, but after working with TypeScript for 3 years, here's how I use them:\n\nany - I avoid it unless absolutely necessary:\n```typescript\n// BAD - loses all type safety\nlet data: any = fetchSomeData();\ndata.something.that.doesnt.exist(); // No error until runtime!\n\n// Only use for quick prototyping or third-party libraries with no types\nconst thirdPartyLib: any = require('old-library');\n```\n\nunknown - My go-to for uncertain types:\n```typescript\n// GOOD - Forces type checking\nfunction processApiResponse(response: unknown) {\n  // Must check type before using\n  if (typeof response === 'object' && response !== null) {\n    if ('data' in response) {\n      return response.data;\n    }\n  }\n  throw new Error('Invalid response');\n}\n\n// I use this for try-catch blocks\ntry {\n  doSomething();\n} catch (error: unknown) {\n  if (error instanceof Error) {\n    console.log(error.message);\n  }\n}\n```\n\nnever - For exhaustive checks and errors:\n```typescript\n// Exhaustive type checking (super useful!)\ntype Status = 'pending' | 'success' | 'error';\n\nfunction handleStatus(status: Status) {\n  switch(status) {\n    case 'pending': return 'Loading...';\n    case 'success': return 'Done!';\n    case 'error': return 'Failed!';\n    default:\n      // If I add a new status, TypeScript errors here\n      const exhaustive: never = status;\n      return exhaustive;\n  }\n}\n\n// Functions that always throw\nfunction fail(message: string): never {\n  throw new Error(message);\n}\n```\n\nRule of thumb: unknown > any, always. Never is for special cases.",
    category: "typescript",
  },
  {
    id: 205,
    question: "Explain Type Guards in TypeScript",
    answer:
      "Type guards help narrow down types in conditional blocks. I use them constantly to handle different types safely.\n\n1. typeof - for primitives (most common):\n```typescript\nfunction formatValue(value: string | number) {\n  if (typeof value === 'string') {\n    return value.toUpperCase(); // TS knows it's string\n  }\n  return value.toFixed(2); // TS knows it's number\n}\n```\n\n2. instanceof - for classes:\n```typescript\nfunction handleError(error: Error | string) {\n  if (error instanceof Error) {\n    console.log(error.stack); // Safe access to Error properties\n  } else {\n    console.log(error); // It's a string\n  }\n}\n```\n\n3. 'in' operator - for object properties:\n```typescript\ninterface ApiError {\n  errorCode: number;\n  message: string;\n}\n\ninterface ApiSuccess {\n  data: any;\n}\n\nfunction handleResponse(res: ApiError | ApiSuccess) {\n  if ('errorCode' in res) {\n    // Handle error\n    showError(res.message);\n  } else {\n    // Handle success\n    processData(res.data);\n  }\n}\n```\n\n4. Custom type guards (my favorite for complex logic):\n```typescript\ninterface User {\n  type: 'user';\n  name: string;\n}\n\ninterface Admin {\n  type: 'admin';\n  name: string;\n  permissions: string[];\n}\n\nfunction isAdmin(user: User | Admin): user is Admin {\n  return user.type === 'admin';\n}\n\n// Usage\nfunction greet(user: User | Admin) {\n  if (isAdmin(user)) {\n    console.log(user.permissions); // Safe!\n  }\n}\n```\n\n5. Discriminated unions (best pattern for state management):\n```typescript\ntype LoadingState = { status: 'loading' };\ntype SuccessState = { status: 'success'; data: any };\ntype ErrorState = { status: 'error'; error: string };\n\ntype State = LoadingState | SuccessState | ErrorState;\n\nfunction render(state: State) {\n  switch (state.status) {\n    case 'loading':\n      return <Spinner />;\n    case 'success':\n      return <Data data={state.data} />; // TS knows data exists\n    case 'error':\n      return <Error message={state.error} />; // TS knows error exists\n  }\n}\n```\n\nI use discriminated unions for almost all state management in React apps.",
    category: "typescript",
  },
  {
    id: 206,
    question: "What are Union and Intersection types?",
    answer:
      "Union (|) and Intersection (&) types are fundamental to how I structure types in my projects.\n\nUnion (|) - 'OR' logic - value can be one of several types:\n```typescript\n// Common use case: API response\ntype ApiResponse = SuccessResponse | ErrorResponse;\n\n// Function parameters\nfunction setId(id: string | number) {\n  // id can be either\n}\n\n// Status flags\ntype Status = 'idle' | 'loading' | 'success' | 'error';\n\n// Real example from my work\ntype PaymentMethod = 'card' | 'paypal' | 'crypto';\n```\n\nIntersection (&) - 'AND' logic - combines multiple types:\n```typescript\n// Composing types\ninterface Timestamped {\n  createdAt: Date;\n  updatedAt: Date;\n}\n\ninterface User {\n  id: string;\n  name: string;\n}\n\n// User with timestamps\ntype UserEntity = User & Timestamped;\n\nconst user: UserEntity = {\n  id: '1',\n  name: 'John',\n  createdAt: new Date(),\n  updatedAt: new Date()\n};\n```\n\nReal-world pattern I use for permissions:\n```typescript\ninterface BaseUser {\n  id: string;\n  email: string;\n}\n\ninterface AdminPermissions {\n  canDelete: boolean;\n  canBan: boolean;\n}\n\ninterface ModeratorPermissions {\n  canEdit: boolean;\n  canApprove: boolean;\n}\n\n// Admin has all user properties + admin permissions\ntype Admin = BaseUser & AdminPermissions;\n\n// User can be regular, moderator, or admin\ntype User = BaseUser | (BaseUser & ModeratorPermissions) | Admin;\n```\n\nExtending third-party types (very useful!):\n```typescript\nimport { Request } from 'express';\n\ninterface AuthData {\n  userId: string;\n  role: string;\n}\n\n// Add auth data to Express Request\ntype AuthRequest = Request & { auth: AuthData };\n```\n\nSimple rule: Use | when value can be different things, use & when you want to merge types together.",
    category: "typescript",
  },
  {
    id: 207,
    question: "What are TypeScript Decorators and how do they work?",
    answer:
      "Decorators are a powerful feature I've used mainly in Angular and NestJS projects. They're functions that modify classes, methods, or properties at design time.\n\nNote: Need 'experimentalDecorators': true in tsconfig.json\n\nMost common use case - API endpoints (NestJS):\n```typescript\n@Controller('users')\nexport class UserController {\n  @Get(':id')\n  @UseGuards(AuthGuard)\n  async getUser(@Param('id') id: string) {\n    return this.userService.findOne(id);\n  }\n  \n  @Post()\n  @HttpCode(201)\n  createUser(@Body() createUserDto: CreateUserDto) {\n    return this.userService.create(createUserDto);\n  }\n}\n```\n\nMethod decorator for logging (I created this for debugging):\n```typescript\nfunction LogExecutionTime() {\n  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n    const originalMethod = descriptor.value;\n    \n    descriptor.value = async function (...args: any[]) {\n      const start = Date.now();\n      const result = await originalMethod.apply(this, args);\n      const end = Date.now();\n      console.log(`${propertyKey} took ${end - start}ms`);\n      return result;\n    };\n    \n    return descriptor;\n  };\n}\n\nclass DataService {\n  @LogExecutionTime()\n  async fetchData() {\n    // expensive operation\n  }\n}\n```\n\nValidation decorator pattern:\n```typescript\nfunction ValidateEmail() {\n  return function (target: any, propertyKey: string) {\n    let value: string;\n    \n    const getter = () => value;\n    const setter = (newVal: string) => {\n      if (!newVal.includes('@')) {\n        throw new Error('Invalid email');\n      }\n      value = newVal;\n    };\n    \n    Object.defineProperty(target, propertyKey, {\n      get: getter,\n      set: setter\n    });\n  };\n}\n\nclass User {\n  @ValidateEmail()\n  email: string;\n}\n```\n\nHonestly, I don't write custom decorators often - mostly use framework-provided ones (Angular's @Component, @Injectable, NestJS's @Controller, @Get, etc.). They're powerful but can make code harder to understand if overused.",
    category: "typescript",
  },
  {
    id: 208,
    question: "What is the 'keyof' operator in TypeScript?",
    answer:
      "keyof is one of my favorite TypeScript features - it creates a union of all keys from an object type. I use it for type-safe property access.\n\nBasic example:\n```typescript\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  age: number;\n}\n\ntype UserKeys = keyof User; // 'id' | 'name' | 'email' | 'age'\n```\n\nType-safe getter (I use this pattern frequently):\n```typescript\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user: User = { id: '1', name: 'John', email: 'j@e.com', age: 30 };\n\nconst name = getProperty(user, 'name'); // TypeScript knows it's string\nconst age = getProperty(user, 'age'); // TypeScript knows it's number\n// getProperty(user, 'invalid'); // Error at compile time!\n```\n\nUpdate function (real example from my CRUD operations):\n```typescript\nfunction updateUser<K extends keyof User>(\n  userId: string,\n  field: K,\n  value: User[K]\n) {\n  // TypeScript ensures value matches the field type!\n  return db.users.update(userId, { [field]: value });\n}\n\nupdateUser('123', 'name', 'Jane'); // ✓\nupdateUser('123', 'age', 25); // ✓\nupdateUser('123', 'age', 'twenty'); // ✗ Error!\n```\n\nForm handling pattern:\n```typescript\ntype FormErrors<T> = {\n  [K in keyof T]?: string;\n};\n\ninterface LoginForm {\n  email: string;\n  password: string;\n}\n\nconst errors: FormErrors<LoginForm> = {\n  email: 'Invalid email',\n  password: 'Too short'\n  // TypeScript won't allow invalid keys\n};\n```\n\nAPI filtering (used in my search features):\n```typescript\nfunction filterByFields<T>(\n  items: T[],\n  filters: Partial<T>\n): T[] {\n  return items.filter(item => {\n    return (Object.keys(filters) as Array<keyof T>).every(\n      key => item[key] === filters[key]\n    );\n  });\n}\n```\n\nThis has caught so many typos and refactoring issues for me!",
    category: "typescript",
  },
  {
    id: 209,
    question: "Explain 'typeof' operator and 'as const' assertion",
    answer:
      "These are two features I use daily to create types from values instead of duplicating definitions.\n\ntypeof - Extract type from a value:\n```typescript\n// Instead of defining type twice\nconst config = {\n  apiUrl: 'https://api.example.com',\n  timeout: 5000,\n  retries: 3\n};\n\ntype Config = typeof config; // Type extracted from value!\n\nfunction useConfig(cfg: typeof config) {\n  // Now config and function param always match\n}\n```\n\nWith functions (super useful!):\n```typescript\nfunction fetchUser() {\n  return {\n    id: '123',\n    name: 'John',\n    role: 'admin',\n    permissions: ['read', 'write']\n  };\n}\n\n// No need to define User interface separately\ntype User = ReturnType<typeof fetchUser>;\n```\n\nas const - Make values readonly and literal:\n```typescript\n// Without as const\nconst colors = ['red', 'blue']; // Type: string[]\n\n// With as const\nconst COLORS = ['red', 'blue'] as const; // Type: readonly ['red', 'blue']\n\ntype Color = typeof COLORS[number]; // 'red' | 'blue' (literal types!)\n```\n\nReal-world example - App routes:\n```typescript\nconst ROUTES = {\n  home: '/',\n  profile: '/profile',\n  settings: '/settings',\n  admin: '/admin'\n} as const;\n\ntype RouteKey = keyof typeof ROUTES;\ntype RoutePath = typeof ROUTES[RouteKey];\n\nfunction navigate(path: RoutePath) {\n  // Only accepts actual route paths\n  router.push(path);\n}\n\nnavigate('/profile'); // ✓\nnavigate('/invalid'); // ✗ Error!\n```\n\nAPI constants pattern I use:\n```typescript\nconst API_ENDPOINTS = {\n  users: '/api/users',\n  posts: '/api/posts',\n  comments: '/api/comments'\n} as const;\n\ntype Endpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];\n\n// Type-safe API calls\nfunction apiCall(endpoint: Endpoint) {\n  return fetch(endpoint);\n}\n```\n\nEnum alternative (my preferred approach):\n```typescript\n// Instead of enum\nconst STATUS = {\n  PENDING: 'pending',\n  ACTIVE: 'active',\n  INACTIVE: 'inactive'\n} as const;\n\ntype Status = typeof STATUS[keyof typeof STATUS];\n// 'pending' | 'active' | 'inactive'\n```\n\nThis pattern reduces duplication and keeps types in sync with values automatically.",
    category: "typescript",
  },
  {
    id: 210,
    question: "What are Conditional Types in TypeScript?",
    answer:
      "Conditional types use the ternary pattern (T extends U ? X : Y) to create types based on conditions. I mainly use them in utility types and generic constraints.\n\nBasic pattern:\n```typescript\ntype IsArray<T> = T extends any[] ? true : false;\n\ntype A = IsArray<string[]>; // true\ntype B = IsArray<string>; // false\n```\n\nPractical example - Unwrapping Promises:\n```typescript\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\n\ntype A = Unwrap<Promise<string>>; // string\ntype B = Unwrap<number>; // number\n\n// Used this in async function return types\nasync function getData(): Promise<User[]> { ... }\ntype Data = Unwrap<ReturnType<typeof getData>>; // User[]\n```\n\nAPI Response handler I created:\n```typescript\ntype ApiData<T> = T extends { data: infer D } ? D : never;\n\ninterface ApiResponse {\n  data: User[];\n  status: number;\n}\n\ntype Users = ApiData<ApiResponse>; // User[]\n```\n\nExcluding types (very useful):\n```typescript\n// Remove null/undefined from types\ntype NonNullable<T> = T extends null | undefined ? never : T;\n\ntype ID = string | null;\ntype ValidID = NonNullable<ID>; // string\n```\n\nFunction argument extraction:\n```typescript\ntype FirstArg<T> = T extends (first: infer F, ...args: any[]) => any\n  ? F\n  : never;\n\nfunction updateUser(id: string, data: UserData) { }\n\ntype UserID = FirstArg<typeof updateUser>; // string\n```\n\nFlattening arrays (I use this in data processing):\n```typescript\ntype Flatten<T> = T extends (infer U)[] ? U : T;\n\ntype Num = Flatten<number[]>; // number\ntype Str = Flatten<string>; // string\n```\n\nReal use case - making fields optional:\n```typescript\ntype MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;\n\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  phone: string;\n}\n\n// Make phone optional\ntype UserInput = MakeOptional<User, 'phone'>;\n```\n\nHonestly, I don't write complex conditional types often, but I use built-in ones like ReturnType, Parameters, and NonNullable constantly.",
    category: "typescript",
  },
  {
    id: 211,
    question: "What is the difference between 'enum' and 'const enum'?",
    answer:
      "Enums in TypeScript allow defining a set of named constants. There are regular enums and const enums.\n\nRegular Enum:\n- Generates JavaScript code\n- Can be used at runtime\n- Supports reverse mapping\n```typescript\nenum Direction {\n  Up,\n  Down,\n  Left,\n  Right\n}\n\nconsole.log(Direction.Up); // 0\nconsole.log(Direction[0]); // 'Up' (reverse mapping)\n\n// Compiled JS:\nvar Direction;\n(function (Direction) {\n  Direction[Direction[\"Up\"] = 0] = \"Up\";\n  Direction[Direction[\"Down\"] = 1] = \"Down\";\n  // ...\n})(Direction || (Direction = {}));\n```\n\nConst Enum:\n- No JavaScript code generated\n- Inlined at compile time\n- More performant\n- No reverse mapping\n```typescript\nconst enum Direction {\n  Up,\n  Down,\n  Left,\n  Right\n}\n\nconst dir = Direction.Up;\n\n// Compiled JS:\nconst dir = 0; // Inlined!\n```\n\nString Enums:\n```typescript\nenum Status {\n  Active = 'ACTIVE',\n  Inactive = 'INACTIVE',\n  Pending = 'PENDING'\n}\n\nconsole.log(Status.Active); // 'ACTIVE'\n```\n\nHeterogeneous Enums:\n```typescript\nenum Mixed {\n  No = 0,\n  Yes = 'YES'\n}\n```\n\nWhen to Use:\n- Regular enum: When you need runtime enum object or reverse mapping\n- Const enum: When performance matters and you don't need runtime access\n- String enum: When you want readable values and no reverse mapping needed\n\nAlternative - Union of Literals:\n```typescript\ntype Direction = 'Up' | 'Down' | 'Left' | 'Right';\n// More lightweight, no runtime code\n```",
    category: "typescript",
  },
  {
    id: 212,
    question: "Explain Mapped Types in TypeScript",
    answer:
      "Mapped types allow creating new types by transforming properties of existing types.\n\nBasic Mapped Type:\n```typescript\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype ReadonlyUser = Readonly<User>;\n// { readonly name: string; readonly age: number; }\n```\n\nOptional Properties:\n```typescript\ntype Optional<T> = {\n  [P in keyof T]?: T[P];\n};\n\ntype OptionalUser = Optional<User>;\n// { name?: string; age?: number; }\n```\n\nNullable Properties:\n```typescript\ntype Nullable<T> = {\n  [P in keyof T]: T[P] | null;\n};\n\ntype NullableUser = Nullable<User>;\n// { name: string | null; age: number | null; }\n```\n\nKey Remapping:\n```typescript\ntype Getters<T> = {\n  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];\n};\n\ntype UserGetters = Getters<User>;\n// { getName: () => string; getAge: () => number; }\n```\n\nFiltering Properties:\n```typescript\ntype PickByType<T, U> = {\n  [P in keyof T as T[P] extends U ? P : never]: T[P];\n};\n\ninterface Person {\n  name: string;\n  age: number;\n  email: string;\n  isActive: boolean;\n}\n\ntype StringProps = PickByType<Person, string>;\n// { name: string; email: string; }\n```\n\nConditional Mapping:\n```typescript\ntype ModifyType<T> = {\n  [P in keyof T]: T[P] extends string ? number : T[P];\n};\n\ntype Modified = ModifyType<User>;\n// { name: number; age: number; }\n```\n\nTemplate Literal Types:\n```typescript\ntype EventHandlers<T> = {\n  [P in keyof T as `on${Capitalize<string & P>}Change`]: (value: T[P]) => void;\n};\n\ntype UserHandlers = EventHandlers<User>;\n// {\n//   onNameChange: (value: string) => void;\n//   onAgeChange: (value: number) => void;\n// }\n```",
    category: "typescript",
  },
  {
    id: 213,
    question: "What are Template Literal Types?",
    answer:
      "Template Literal Types use template literal syntax to create new string literal types by combining existing string literal types.\n\nBasic Template Literals:\n```typescript\ntype World = 'world';\ntype Greeting = `hello ${World}`; // 'hello world'\n```\n\nCombining Unions:\n```typescript\ntype Color = 'red' | 'blue' | 'green';\ntype Size = 'small' | 'large';\ntype Style = `${Size}-${Color}`;\n// 'small-red' | 'small-blue' | 'small-green' | 'large-red' | 'large-blue' | 'large-green'\n```\n\nIntrinsic String Manipulation:\n```typescript\ntype Uppercase<S extends string> // Built-in\ntype Lowercase<S extends string> // Built-in\ntype Capitalize<S extends string> // Built-in\ntype Uncapitalize<S extends string> // Built-in\n\ntype Loud = Uppercase<'hello'>; // 'HELLO'\ntype Quiet = Lowercase<'HELLO'>; // 'hello'\ntype Cap = Capitalize<'hello'>; // 'Hello'\ntype Uncap = Uncapitalize<'Hello'>; // 'hello'\n```\n\nEvent Names:\n```typescript\ntype EventName<T extends string> = `${T}Changed`;\ntype Events = EventName<'name' | 'age' | 'email'>;\n// 'nameChanged' | 'ageChanged' | 'emailChanged'\n```\n\nGetter/Setter Types:\n```typescript\ntype PropKey = 'name' | 'age';\n\ntype Getters = `get${Capitalize<PropKey>}`;\n// 'getName' | 'getAge'\n\ntype Setters = `set${Capitalize<PropKey>}`;\n// 'setName' | 'setAge'\n```\n\nCSS Properties:\n```typescript\ntype CSSProperty = 'margin' | 'padding';\ntype Side = 'top' | 'bottom' | 'left' | 'right';\n\ntype LonghandProperty = `${CSSProperty}-${Side}`;\n// 'margin-top' | 'margin-bottom' | ... | 'padding-right'\n```\n\nAPI Routes:\n```typescript\ntype HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';\ntype Endpoint = '/users' | '/products';\n\ntype APIRoute = `${HTTPMethod} ${Endpoint}`;\n// 'GET /users' | 'POST /users' | 'GET /products' | ...\n```\n\nWith Mapped Types:\n```typescript\ninterface Person {\n  name: string;\n  age: number;\n}\n\ntype Listeners<T> = {\n  [K in keyof T as `on${Capitalize<string & K>}Change`]: (value: T[K]) => void;\n};\n\ntype PersonListeners = Listeners<Person>;\n// {\n//   onNameChange: (value: string) => void;\n//   onAgeChange: (value: number) => void;\n// }\n```",
    category: "typescript",
  },
  {
    id: 214,
    question: "How to handle errors and exceptions in TypeScript?",
    answer:
      "TypeScript provides several patterns for handling errors effectively.\n\n1. Try-Catch-Finally:\n```typescript\ntry {\n  const data = JSON.parse(jsonString);\n  processData(data);\n} catch (error) {\n  if (error instanceof SyntaxError) {\n    console.error('Invalid JSON:', error.message);\n  } else {\n    console.error('Unknown error:', error);\n  }\n} finally {\n  cleanup();\n}\n```\n\n2. Custom Error Classes:\n```typescript\nclass ValidationError extends Error {\n  constructor(public field: string, message: string) {\n    super(message);\n    this.name = 'ValidationError';\n  }\n}\n\nclass NetworkError extends Error {\n  constructor(public statusCode: number, message: string) {\n    super(message);\n    this.name = 'NetworkError';\n  }\n}\n\ntry {\n  throw new ValidationError('email', 'Invalid email format');\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.error(`${error.field}: ${error.message}`);\n  }\n}\n```\n\n3. Result Type Pattern:\n```typescript\ntype Result<T, E = Error> = \n  | { success: true; data: T }\n  | { success: false; error: E };\n\nfunction parseJSON<T>(json: string): Result<T> {\n  try {\n    return { success: true, data: JSON.parse(json) };\n  } catch (error) {\n    return { success: false, error: error as Error };\n  }\n}\n\nconst result = parseJSON<User>(jsonString);\nif (result.success) {\n  console.log(result.data);\n} else {\n  console.error(result.error);\n}\n```\n\n4. Async Error Handling:\n```typescript\nasync function fetchUser(id: string): Promise<User> {\n  try {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) {\n      throw new NetworkError(response.status, 'Failed to fetch user');\n    }\n    return await response.json();\n  } catch (error) {\n    if (error instanceof NetworkError) {\n      console.error(`Network error: ${error.statusCode}`);\n    }\n    throw error;\n  }\n}\n```\n\n5. Error Boundaries (React):\n```typescript\ninterface Props { children: React.ReactNode; }\ninterface State { hasError: boolean; error?: Error; }\n\nclass ErrorBoundary extends React.Component<Props, State> {\n  state: State = { hasError: false };\n  \n  static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, error };\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return <div>Error: {this.state.error?.message}</div>;\n    }\n    return this.props.children;\n  }\n}\n```",
    category: "typescript",
  },
  {
    id: 215,
    question: "What is Type Assertion and when should you use it?",
    answer:
      "Type Assertion tells TypeScript to treat a value as a specific type. It's like type casting but doesn't perform runtime checks.\n\nSyntax (Two Ways):\n```typescript\n// Angle-bracket syntax\nlet value: any = 'hello';\nlet length1 = (<string>value).length;\n\n// 'as' syntax (preferred, works with JSX)\nlet length2 = (value as string).length;\n```\n\nCommon Use Cases:\n\n1. DOM Manipulation:\n```typescript\nconst input = document.getElementById('email') as HTMLInputElement;\ninput.value = 'test@example.com';\n\n// Or with null check\nconst input = document.getElementById('email');\nif (input instanceof HTMLInputElement) {\n  input.value = 'test@example.com';\n}\n```\n\n2. API Responses:\n```typescript\ninterface User {\n  id: number;\n  name: string;\n}\n\nconst response = await fetch('/api/user');\nconst user = await response.json() as User;\n```\n\n3. Type Narrowing:\n```typescript\ninterface Cat { meow: () => void; }\ninterface Dog { bark: () => void; }\n\nfunction makeSound(animal: Cat | Dog) {\n  if ('meow' in animal) {\n    (animal as Cat).meow();\n  } else {\n    (animal as Dog).bark();\n  }\n}\n```\n\n4. Const Assertions:\n```typescript\nconst config = {\n  apiUrl: 'https://api.example.com',\n  timeout: 5000\n} as const; // readonly properties, literal types\n```\n\n5. Non-null Assertion (!):\n```typescript\nfunction getValue(key: string): string | null {\n  return localStorage.getItem(key);\n}\n\n// When you're certain it's not null\nconst token = getValue('authToken')!;\n```\n\nDouble Assertion (Escape Hatch):\n```typescript\n// TypeScript won't allow incompatible assertions\nconst x = 'hello' as number; // Error\n\n// But you can force it (not recommended)\nconst y = ('hello' as any) as number; // OK, but dangerous\n```\n\nBest Practices:\n- Use sparingly; prefer type guards\n- Prefer 'as' syntax over angle brackets\n- Avoid 'as any' unless absolutely necessary\n- Use ! operator only when you're certain value exists\n- Consider type guards for better type safety",
    category: "typescript",
  },
  {
    id: 216,
    question: "What is the output of: console.log(foo); var foo = 'bar';",
    answer:
      "Output: undefined\n\nReason: var is hoisted with value undefined. Assignment happens later.",
    category: "output-based",
  },
  {
    id: 217,
    question: "What is the output of: sayHi(); var sayHi = function() { console.log('Hello'); };",
    answer:
      "Output: TypeError: sayHi is not a function\n\nReason: var sayHi is hoisted as undefined. Calling undefined() throws an error.",
    category: "output-based",
  },
  {
    id: 218,
    question: "What is the output of: for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
    answer:
      "Output: 3, 3, 3\n\nReason: var is function-scoped. All callbacks share same i = 3.",
    category: "output-based",
  },
  {
    id: 219,
    question: "What is the output of: for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
    answer:
      "Output: 0, 1, 2\n\nReason: let creates a new i for each iteration (block-scoped).",
    category: "output-based",
  },
  {
    id: 220,
    question: "What is the output of: console.log(typeof null);",
    answer:
      "Output: 'object'\n\nReason: A historical bug in JavaScript. typeof null incorrectly returns 'object'.",
    category: "output-based",
  },
  {
    id: 221,
    question: "What is the output of: console.log([] == ![]);",
    answer:
      "Output: true\n\nReason:\n- ![] → false (empty array is truthy, negation makes it false)\n- [] == false → Both get converted to numbers\n- [] → '' (empty string) → 0\n- false → 0\n- So 0 == 0 → true",
    category: "output-based",
  },
  {
    id: 222,
    question: "What is the output of: console.log(['10','11','12'].map(parseInt));",
    answer:
      "Output: [10, NaN, NaN]\n\nReason: parseInt receives (value, index) as arguments from map. So:\n- parseInt('10', 0) → 10 (radix 0 defaults to 10)\n- parseInt('11', 1) → NaN (radix 1 is invalid)\n- parseInt('12', 2) → NaN ('12' is invalid in base 2)",
    category: "output-based",
  },
  {
    id: 223,
    question: "What is the output of: const obj = { num: 10, regular: function() { console.log(this.num); }, arrow: () => console.log(this.num) }; obj.regular(); obj.arrow();",
    answer:
      "Output:\n10\nundefined\n\nReason: Regular method has its own 'this' = obj. Arrow function does NOT bind 'this' → inherits from parent scope → undefined.",
    category: "output-based",
  },
  {
    id: 224,
    question: "What is the output of: console.log('start'); setTimeout(() => console.log('timeout'), 0); Promise.resolve().then(() => console.log('promise')); console.log('end');",
    answer:
      "Output:\nstart\nend\npromise\ntimeout\n\nReason: Synchronous code executes first, then microtasks (Promise), then macrotasks (setTimeout).",
    category: "output-based",
  },
];

export const getCategoryQuestions = (
  category: Question["category"]
): Question[] => {
  return questions.filter((q) => q.category === category);
};
