<script lang="ts">
	import { cn } from '$src/lib';
	import { getExperiences } from '$src/routes/experiences';
	import type { EventHandler } from 'svelte/elements';

	let {
		label = '',
		href = '',
		website = '',
		className = ''
	} = $props<{
		label?: string;
		href?: string;
		website?: string;
		className?: string;
	}>();

	const experiences = getExperiences();

	const setChecked: EventHandler<Event, HTMLDetailsElement> = (event) => {
		const open = !!event.currentTarget.open;
		$experiences.set(label, open);
		$experiences = $experiences;
	};

	const checked = $derived(!!$experiences.get(label));

	$effect(() => {
		console.log(checked);
	});
</script>

<!-- {#if checked} -->
<details open={checked ? true : null} on:toggle|preventDefault={setChecked}>
	<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}>
		{label}
		{'-'}
		<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>
	</summary>
	<div class="flex flex-col gap-y-4 pt-4"><slot /></div>
</details>

<!-- {:else} -->
<!-- <details on:toggle|preventDefault={setChecked}> -->
<!-- 	<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}> -->
<!-- 		{label} -->
<!-- 		{'-'} -->
<!-- 		<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a> -->
<!-- 	</summary> -->
<!-- </details> -->
<!-- {/if} -->

<style>
</style>
