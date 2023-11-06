import rss from '@astrojs/rss';
import { g as getCollection, S as SITE_TITLE, d as SITE_DESCRIPTION } from './__86758c4b.mjs';
import '../astro_8c4f9a15.mjs';
import '../astro-assets-services_050c3bcc.mjs';
/* empty css                           *//* empty css                                                                    *//* empty css                           */
async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
