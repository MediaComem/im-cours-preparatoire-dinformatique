import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://ludelafo.github.io",
	base: "/test-astro",
	integrations: [
		starlight({
			title: "UPInfoIM",
			logo: {
				src: "./src/assets/logo.svg",
				replacesTitle: false,
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/ludelafo/test-astro",
				},
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
		}),
	],
});
