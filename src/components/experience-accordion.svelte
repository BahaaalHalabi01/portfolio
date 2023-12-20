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
		const limit = !!$experiences.get('lmt');
		if (!!limit) {
			const size = $experiences.size;
			// 1 for limit and 2 checked, do not clear, one will stay checked
			if (size !== 3) {
				$experiences.clear();
				$experiences.set('lmt', true);
			}
		}
		open ? $experiences.set(label, open) : $experiences.delete(label);

		$experiences = $experiences;
	};

	const checked = $derived($experiences.get(label));

 
</script>

{#if checked}
<details open on:toggle|preventDefault={setChecked}>
	<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}>
		{label}
		{'-'}
		<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>
	</summary>
	<div class="flex flex-col gap-y-4 pt-4"><slot /></div>
</details>
{:else}
	<details on:toggle|preventDefault={setChecked}>
		<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}>
			{label}
			{'-'}
			<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>
		</summary>
	</details>
{/if}

<style>
</style>
