![Screenshot 2024-04-06 152402](https://github.com/Gaurav038/interview-notes/assets/78479119/8b18d094-f7a5-46a0-947a-708ecd4c3a20)
# ROUTING
![Screenshot 2024-04-06 162514](https://github.com/Gaurav038/interview-notes/assets/78479119/ee423a5b-4f15-4527-8ed9-c4e812f82cf2)
![Screenshot 2024-04-06 163134](https://github.com/Gaurav038/interview-notes/assets/78479119/de9701f8-4730-4068-a238-6199596799ac)
![Screenshot 2024-04-06 170159](https://github.com/Gaurav038/interview-notes/assets/78479119/a6a76c6a-ecd1-4b13-b908-ce52e4254f52)
## not-found.js :  Next.js displays a default "Not Found" page. This page informs the user that the requested page could not be found. 
![Screenshot 2024-04-06 172827](https://github.com/Gaurav038/interview-notes/assets/78479119/cf5bc587-e7d3-4bdc-a767-cfc365685148)
![Screenshot 2024-04-06 173208](https://github.com/Gaurav038/interview-notes/assets/78479119/edb893be-e5e4-4c8b-864d-01fe3bed6d4c)
![Screenshot 2024-04-06 173208](https://github.com/Gaurav038/interview-notes/assets/78479119/30457f9d-3265-4fa1-a661-5b2973f01531)
![Screenshot 2024-04-07 120040](https://github.com/Gaurav038/interview-notes/assets/78479119/bcb1159b-0008-488d-bc06-8f241e123d35)
![Screenshot 2024-04-07 124601](https://github.com/Gaurav038/interview-notes/assets/78479119/6f35423b-5c67-4ba7-8a31-285c52d18c15)

# Search Engine Optimization (SEO)

Search Engine Optimization (SEO) is the practice of optimizing your website to improve its visibility and ranking in search engine results pages (SERPs). Metadata plays a crucial role in SEO as it provides search engines with information about your web pages, helping them understand the content and context of your site. Let's break down the key aspects of metadata and its importance for SEO:

Title Tag:

The title tag is an HTML element that specifies the title of a web page. It appears as the clickable headline in search engine results.
Title tags should be descriptive, concise, and relevant to the content of the page.
Including relevant keywords in the title tag can help improve the page's visibility in search results.

meta description:
The meta description is a brief summary of the content of a web page. It appears below the title tag in search engine results.
Meta descriptions should accurately describe the page's content and entice users to click through to the page.
While meta descriptions don't directly impact search engine rankings, they can influence click-through rates (CTR), which indirectly affects SEO.

Meta keywords:
Meta keywords are a list of keywords or phrases that describe the content of a web page.
However, meta keywords are no longer used by most search engines as a ranking factor due to their susceptibility to keyword stuffing and manipulation.

meta robots:
The meta robots tag provides instructions to search engine crawlers on how to index and follow links on a web page.
Common directives include "index" (allow indexing), "nofollow" (prevent following links), "noindex" (prevent indexing), and "nofollow, noindex" (prevent both indexing and following links).

# Search engine crawlers
Search engine crawlers, also known as web crawlers, spiders, or bots, are automated programs used by search engines to discover and index web pages on the internet. These crawlers play a crucial role in how search engines gather information about websites and determine their relevance and ranking in search results

![Screenshot 2024-04-07 150819](https://github.com/Gaurav038/interview-notes/assets/78479119/c9dbfd68-3fe8-4e50-b866-541c8a5af0e3)

## Link component
In Next.js, the Link component is a powerful tool for client-side navigation between pages within your application. It provides a declarative way to create links and handles client-side routing without causing a full page refresh. Here's how you can use the Link component in Next.js:

Import the Link Component:
First, import the Link component from the next/link module at the top of your file:
```javascript
import Link from 'next/link';
<Link href="/about">
  <a>About</a>
</Link>
```

## NEXTJS HOOKS

1. useRouter
In Next.js, the useRouter hook from the next/router module allows you to access the router object and perform client-side navigation, access query parameters, and handle route events within your React components. Here's how you can use the useRouter hook in Next.js:

```javascript
import { useRouter } from 'next/router';
const MyComponent = () => {
  const router = useRouter();

  // Access router properties and methods
  console.log(router.pathname); // Current route path
  console.log(router.query);    // Query parameters
  console.log(router.asPath);   // Actual path including query parameters
  console.log(router.push);     // Method for navigation
  console.log(router.replace);  // Method for replacing the current URL
  console.log(router.back);     // Method for navigating back in history
```

![Screenshot 2024-04-08 092154](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/fb8ba75f-4227-4351-b7c6-2a97d059cc96)

