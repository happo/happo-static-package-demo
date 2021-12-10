import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'static/bundle.js',
    format: 'iife'
  },
  plugins: [nodeResolve(), commonjs()],
};
