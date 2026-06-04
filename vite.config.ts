import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		mode !== 'production' ? tailwindcss() : null,
		sveltekit()
	].filter(Boolean)
}));
