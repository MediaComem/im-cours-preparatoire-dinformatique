import { type Config } from "prettier";

const config: Config = {
	endOfLine: "lf",
	printWidth: 80,
	proseWrap: "always",
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

export default config;
