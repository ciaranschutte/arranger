import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
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
	plugins: [tsconfigPaths()],
});
