<script lang="ts">
	import { cn } from '$src/lib';
	import { getExperiences } from '$src/routes/experiences';
	import type { EventHandler } from 'svelte/elements';

	let {
		label = '',
		href = '',
		website = '',
		className = '',
    children
	} = $props<{
		label?: string;
		href?: string;
		website?: string;
		className?: string;
    children?:any
	}>();

	const experiences = getExperiences();

	const setChecked: EventHandler<Event, HTMLDetailsElement> = (event) => {
		const open = !!event.currentTarget.open;
		const limit = !!$experiences.has('lmt');
		if (!!limit && !open) {
			const size = $experiences.size;

			//closing myself need to keep one open
			if (size <= 3) {
				//close myself only
				$experiences.delete(label);
				$experiences = $experiences;
				return;
			}
			//keep 2 elements
			let remove = size - 2;
			$experiences.forEach((val) => {
				if (val === 'lmt') return (remove -= 1);
				if (val === label) {
					$experiences.delete(val);
					remove -= 1;
				}
				if (remove === 0) return;
				$experiences.delete(val);
			});

			$experiences = $experiences;
			return;
		}
		if (!!limit) {
			$experiences.clear();
			$experiences.add('lmt');
		}

		open ? $experiences.add(label) : $experiences.delete(label);
		$experiences = $experiences;
	};

	const checked = $derived(!!$experiences.has(label));

	const resetToggle = () => {
		const tglAll = document.getElementById('tgl-all-btn') as HTMLButtonElement;
		const data = tglAll.dataset['open'];
		if (data === 'true') tglAll.dataset['open'] = 'false';
	};
</script>

{#if checked}
<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<details open on:toggle|preventDefault={setChecked} on:click={resetToggle}>
		<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}>
			{label}
			{#if href}
				{'-'}
				<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>{/if}
		</summary>
		<div class="flex flex-col gap-y-4 pt-4 relative">
{@render children()}
    </div>
	</details>
{:else}
	<details on:toggle|preventDefault={setChecked}>
		<summary class={cn('text-slate-300 max-w-fit text-3xl', className)}>
			{label}

			{#if href}
				{'-'}
				<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>
			{/if}
		</summary>
	</details>
{/if}

<style>
</style>
