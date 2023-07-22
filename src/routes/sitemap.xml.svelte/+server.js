const blog = {
    page: "blog",
    slug: "resources/blog", 
}

const ebooks = {
    page: "ebooks",
    slug: "resources/ebooks", 
}

const ebooksdemos = [
  {
    title: "Ebook-001",
    slug: "top-10-steps-to-become-a-poliglot-by-yourself-and-without-spending-money-ebook-demo"
  }
  ]

const spanishblogposts = [
  {
    title: "Spanish-001",
    slug: "what-differentiates-spanish-from-spain-to-spanish-from-the-rest-of-the-world", 
    updatedAt: "2023-06-18"
  }
  ]
  

const pages = ["about", "resources", "faq"] //list of pages as a string ex. ["about", "blog", "contact"]

const site = "https://en.gerastucter.site"

// const tutoring = {
//     page: "blog",
//     slug: "resources/tutoring", 
//   }
  
/** @type {import('./$types').RequestHandler} */
export async function GET({
    url
}) {
    const body = sitemap(spanishblogposts, pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
    <url>
  <loc>${site}/${blog.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/${ebooks.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${spanishblogposts.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${blog.slug}/spanish/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
		  ${ebooksdemos.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${ebooks.slug}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;