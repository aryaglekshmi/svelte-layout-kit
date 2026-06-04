<script lang="ts">
	import { LandingPage1, LandingPage2, LandingPage3 } from '$lib/index.js';

	let active = $state<1 | 2 | 3>(1);

	const layouts: { id: 1 | 2 | 3; label: string }[] = [
		{ id: 1, label: 'Product' },
		{ id: 2, label: 'Real Estate' },
		{ id: 3, label: 'Portfolio' }
	];
</script>

<!-- Demo switcher -->
<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-black/5">
	{#each layouts as { id, label } (id)}
		<button
			type="button"
			class="btn btn-sm {active === id ? 'btn-primary' : 'btn-ghost'}"
			onclick={() => (active = id)}
		>
			{label}
		</button>
	{/each}
</nav>

{#if active === 1}
	<LandingPage1 />
{:else if active === 2}
	<LandingPage2 />
{:else}
	<LandingPage3 />
{/if}
