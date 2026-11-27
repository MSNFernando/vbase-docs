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
			logo: { src: './src/assets/onecomet-logo.png', alt: 'ONECOMET', replacesTitle: false },
			favicon: '/favicon.png',
			customCss: ['./src/styles/theme.css'],
			components: { Footer: './src/components/Footer.astro' },
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
				{ label: 'Plan your network', items: [{ autogenerate: { directory: 'network' } }] },
				{ label: 'Use vBase', items: [{ autogenerate: { directory: 'use' } }] },
				{ label: 'Run the platform', items: [{ autogenerate: { directory: 'operate' } }] },
				{ label: 'Troubleshooting', items: [{ autogenerate: { directory: 'troubleshooting' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
			],
		}),
	],
});
