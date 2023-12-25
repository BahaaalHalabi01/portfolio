<script lang="ts">
	import { cn } from '$src/lib';
	import { getLimit  } from '$src/lib/limit';
	import { getExperiences } from '$src/routes/experiences';
	import {  ChevronRight,  } from 'lucide-svelte';

	let {
		id = '',
		label = '',
		href = '',
		website = '',
		className = '',
		children
	} = $props<{
		id: string;
		label?: string;
		href?: string;
		website?: string;
		className?: string;
		children?: any;
	}>();

	const experiences = getExperiences();
	const lmt = getLimit();

	const setChecked = () => {
		const open = !!$experiences.has(id);

		if ($lmt && open) {
			const size = $experiences.size;

			//closing myself need to keep one open
			if (size <= 3) {
				//close myself only
				$experiences.delete(id);
				$experiences = $experiences;
				return;
			}
			//keep 2 elements
			let remove = size - 1;
			$experiences.forEach((val) => {
				if (val === id) {
					$experiences.delete(val);
					remove -= 1;
				}
				if (remove === 0) return;
				$experiences.delete(val);
			});

			$experiences = $experiences;
			return;
		}
		if ($lmt) {
			$experiences.clear();
		}

		!open ? $experiences.add(id) : $experiences.delete(id);
		$experiences = $experiences;
	};

	function resetToggle() {
		setChecked();

		const tglAll = document.getElementById('tgl-all-btn') as HTMLButtonElement;
		const data = tglAll.dataset['open'];
		if (data === 'true') tglAll.dataset['open'] = 'false';
	}

	const checked = $derived($experiences.has(id));
</script>

<div>
	<label
		class={cn('text-slate-300 max-w-fit lg:text-3xl text-2xl cursor-pointer', className)}
		for={'acco-' + id}
	>
			<ChevronRight class={cn("inline-block transition-transform",checked && 'rotate-90' )} />
		<input type="checkbox" on:change={resetToggle} id={'acco-' + id} class="hidden" />
		{label}
		{#if href}
			{'-'}
			<a {href} class="underline italic" target="_blank" rel="noreferrer">{website}</a>
		{/if}
	</label>
	<div class="flex flex-col gap-y-4 pt-4 relative">
		{#if checked}
			{@render children()}
		{/if}
	</div>
</div>


<style>
</style>
