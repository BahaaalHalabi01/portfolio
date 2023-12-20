<script lang="ts">
	import { cn } from '$src/lib';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { class: className, children, ...props } = $props<HTMLButtonAttributes>();
</script>

<button
	{...props}
	class={cn(
		'border-2 border-green-600 p-2 inline-flex gap-x-2 items-center hover:scale-110 transition-transform duration-300 h-14 w-fit',
		className
	)}
>
	{#if children}
		{@render children()}
	{/if}
</button>
