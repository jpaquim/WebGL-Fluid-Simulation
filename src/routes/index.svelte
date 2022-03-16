<script context="module">
	export const router = false;
</script>

<script>
	import { onMount } from 'svelte';
	import * as knobby from 'svelte-knobby';
	import Canvas from '$lib/Canvas.svelte';

	// a bit hackish, these actions are overwritten by the Canvas component
	const actions = { randomSplats: () => {}, captureScreenShot: () => {} };

	const controls = knobby.panel({
		$id: 'main', // enable localStorage features

		// labelled control panels are collapsible
		// $label: 'Main options',

		DYE_RESOLUTION: { min: 128, max: 1024, step: 2, value: 1024 },
		SIM_RESOLUTION: { min: 32, max: 256, step: 2, value: 128 },
		DENSITY_DISSIPATION: { min: 0, max: 4, step: 0.01, value: 1 },
		VELOCITY_DISSIPATION: { min: 0, max: 4, step: 0.01, value: 0.2 },
		PRESSURE: { min: 0, max: 1, step: 0.01, value: 0.8 },
		PRESSURE_ITERATIONS: { min: 0, max: 30, step: 1, value: 20 },
		CURL: { min: 0, max: 50, step: 1, value: 30 },
		SPLAT_RADIUS: { min: 0.01, max: 1, step: 0.01, value: 0.25 },
		SPLAT_FORCE: { min: 0, max: 10000, step: 1, value: 6000 },
		SHADING: true,
		COLORFUL: true,
		COLOR_UPDATE_SPEED: { min: 0, max: 20, step: 1, value: 10 },
		PAUSED: false,
		['Random Splats']: () => {
			actions.randomSplats();
		},
		// bloom folder
		BLOOM: true,
		BLOOM_ITERATIONS: { min: 0, max: 10, step: 1, value: 8 },
		BLOOM_RESOLUTION: { min: 8, max: 512, step: 1, value: 256 },
		BLOOM_INTENSITY: { min: 0, max: 2, step: 0.01, value: 0.8 },
		BLOOM_THRESHOLD: { min: 0, max: 1, step: 0.01, value: 0.6 },
		BLOOM_SOFT_KNEE: { min: 0, max: 1, step: 0.01, value: 0.7 },
		// sunrays folder
		SUNRAYS: true,
		SUNRAYS_RESOLUTION: { min: 1, max: 200, step: 1, value: 196 },
		SUNRAYS_WEIGHT: { min: 0, max: 1, step: 0.01, value: 1 },
		// capture folder
		BACK_COLOR: {
			r: { min: 0, max: 255, step: 1, value: 0 },
			g: { min: 0, max: 255, step: 1, value: 0 },
			b: { min: 0, max: 255, step: 1, value: 0 }
		},
		TRANSPARENT: false,
		CAPTURE_RESOLUTION: { min: 128, max: 1024, step: 2, value: 512 },
		['Take Screenshot']: () => {
			actions.captureScreenshot();
		}
	});

	let showControls = false;
	$: knobby.toggle(showControls);

	onMount(() => {
		showControls = true;
	});
</script>

<Canvas {...$controls} {actions} />
