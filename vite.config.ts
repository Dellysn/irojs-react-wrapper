import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.ts'),
      name: 'IrojsReactWrapper',
      formats: ['es', 'umd'],
      fileName: (format) => `irojs-react-wrapper.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
}))
