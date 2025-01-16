import esbuild from 'esbuild';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pkg from '../package.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));

const entryPoints = {
  index: join(__dirname, '../src/index.ts'),
  button: join(__dirname, '../src/button/define.ts'),
  input: join(__dirname, '../src/input/define.ts'),
  select: join(__dirname, '../src/select/define.ts'),
  spinner: join(__dirname, '../src/spinner/define.ts'),
  switch: join(__dirname, '../src/switch/define.ts'),
};
const outdir = join(__dirname, '../dist');

esbuild.build({
  entryPoints,
  bundle: true,
  format: 'esm',
  outdir,
  external: [...Object.keys(pkg.peerDependencies)],
});

esbuild.build({
  entryPoints,
  bundle: true,
  format: 'cjs',
  outdir,
  outExtension: { '.js': '.cjs' },
  external: [...Object.keys(pkg.peerDependencies)],
});

esbuild.build({
  entryPoints: { index: join(__dirname, '../src/index.ts') },
  bundle: true,
  format: 'esm',
  minify: true,
  outdir,
  outExtension: { '.js': '.min.js' },
  external: [...Object.keys(pkg.peerDependencies)],
});
