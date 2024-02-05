import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [resolve(), commonjs(), typescript(), terser()],
  external: ['react', 'react-dom'],
}
