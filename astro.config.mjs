// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://vbase.docs.onecomet.co.nz',
	integrations: [
		starlight({
			title: 'vBase docs',
			description: 'Install, run and troubleshoot vBase, the ONECOMET private cloud platform.',
			logo: { src: './src/assets/logo.svg', replacesTitle: false },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/theme.css'],
			social: [{ icon: 'github', label: 'vBase releases', href: 'https://github.com/MSNFernando/vbase-releases' }],
			editLink: { baseUrl: 'https://github.com/MSNFernando/vbase-docs/edit/main/' },
			lastUpdated: true,
			plugins: [starlightLlmsTxt({ projectName: 'vBase', description: 'vBase is a private cloud platform (VMs, VPCs, firewalls, storage, managed PostgreSQL) that runs on your own servers.' })],
			sidebar: [
				{ label: 'Get started', items: [
					{ slug: 'start/what-is-vbase' },
					{ slug: 'start/requirements' },
					{ slug: 'start/write-the-stick' },
					{ slug: 'start/first-boot' },
					{ slug: 'start/sign-in' },
				] },
				{ label: 'Plan your network', autogenerate: { directory: 'network' } },
				{ label: 'Use vBase', autogenerate: { directory: 'use' } },
				{ label: 'Run the platform', autogenerate: { directory: 'operate' } },
				{ label: 'Troubleshooting', autogenerate: { directory: 'troubleshooting' } },
				{ label: 'Reference', autogenerate: { directory: 'reference' } },
			],
		}),
	],
});
