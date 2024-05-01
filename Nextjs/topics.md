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

![Screenshot 2024-04-08 094655](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/dda54d7c-b2ae-4254-b453-a81cc4483e6f)

![Screenshot 2024-04-08 100136](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/c7449597-b7e4-4758-9447-791540890400)


![Screenshot 2024-04-08 105944](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/7a7291c0-b2b8-4148-af34-9d98b5baac71)
![Screenshot 2024-04-08 105950](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/aebfba4f-2916-4b89-abe9-3855374f992b)

![Screenshot 2024-04-08 110033](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/a93c0a35-220c-4d50-a959-39425c81ef78)


![Screenshot 2024-04-08 111445](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/cf7d05c5-cf26-4728-896f-5468ea640f10)
![Screenshot 2024-04-08 111449](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/adc1e2d1-875e-45f0-8ce9-3248a21fd90b)
![Screenshot 2024-04-08 111502](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/daa7c8ad-d266-4512-a30d-f51a74e43816)
![Screenshot 2024-04-08 111513](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/2d01ec51-a47b-4d27-9c24-4659320475d0)
![Screenshot 2024-04-08 123047](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/214ca148-a977-445c-960a-42db2aeb1128)
![Screenshot 2024-04-08 141803](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/9e6ab4ca-75f4-4264-8275-aaee1b8e9ab7)
![Screenshot 2024-04-08 141809](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/7d978227-d6d8-4917-8704-00f6d937acaa)
![Screenshot 2024-04-08 145434](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/756a8009-dd96-4f51-872f-584f51a95221)
![Screenshot 2024-04-08 145550](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/4c5692b5-f1a3-4018-aaeb-4613261d00f8)
![Screenshot 2024-04-08 145640](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/d6c433a6-4b92-415f-bc3d-e4759c6c975f)
![Screenshot 2024-04-08 150342](https://github.com/meabhisingh/mernProjectEcommerce/assets/78479119/9f191a5a-d29f-4999-9a71-11a714d0c8c3)