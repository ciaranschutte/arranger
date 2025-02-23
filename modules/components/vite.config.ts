import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'process.env': process.env,
		global: 'window',
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true,

		lib: {
			entry: resolve(__dirname, 'src/main.tsx'),
			name: 'arranger-components',
			fileName: 'main',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
		},
	},
	plugins: [tsconfigPaths(), react()],
});
