# WebGL Fluid Simulation

Play here: https://svelte-webgl-fluid-simulation.vercel.app

Original: https://paveldogreat.github.io/WebGL-Fluid-Simulation

## Svelte port

Built using [SvelteKit](https://kit.svelte.dev/).

## Building svelte-knobby submodule

Currently using my fork of [svelte-knobby](https://github.com/jpaquim/svelte-knobby) while waiting for [this upstream PR](https://github.com/Rich-Harris/svelte-knobby/pull/29) to be integrated.

```bash
git submodule update --init
```

```bash
pushd packages/svelte-knobby && npm i && npm run build && npm run package; popd
```

## Developing

Install dependencies with `pnpm i`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version of the app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## References

https://github.com/PavelDoGreat/WebGL-Fluid-Simulation

### Original references

http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch38.html

https://github.com/mharrys/fluids-2d

https://github.com/haxiomic/GPU-Fluid-Experiments

## License

The code is available under the [MIT license](LICENSE)
