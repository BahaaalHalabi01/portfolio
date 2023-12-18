<script>
	import Telegram from '$src/lib/icons/telegram.svelte';
	import '../app.css';
	import { BugPlay, Github, Instagram, Linkedin, Twitter } from 'lucide-svelte';

	let data;

	const headers = [
		{ href: '/about', label: 'about' },
		{ href: '/experience', label: 'experience' },
		{ href: '/work', label: 'work' },
		{ href: '/contact', label: 'contact' }
	];
</script>

<main class="container w-full mx-auto flex flex-col grow min-h-screen relative">
	<nav class="flex items-center justify-between h-16 font-bold text-lg capitalize sticky top-0 bg-slate-900">
		<span class="inline-flex gap-x-2 items-center p-2">
			<BugPlay />
			Bahaa al Halabi
		</span>
		<div class="flex flex-row lg:gap-x-12 items-center">
			{#each headers as header, i}
				<span class="flex gap-x-2">
					<span class="text-green-600">0{i + 1}{'.'}</span>
					<a href={header.href} class="cursor-pointer">
						{header.label}
					</a>
				</span>
			{/each}

			<a class="border-green-600 border-2 p-2" href="/resume">Checkout My Resume!</a>
		</div>
	</nav>
	<div class="lg:px-24 py-12">
		<slot />
	</div>

	<div class="sticky left-0 bottom-0 flex flex-col gap-y-8 lg:pb-24 max-w-fit bg-slate-900">
		<a
			href="https://github.com/BahaaalHalabi01"
			class="hover:scale-125 transition-transform duration-300 ease-out"
			target="_blank"
			rel="author"
		>
			<Github />
		</a>
		<a
			href="https://www.linkedin.com/in/bahaa-al-halabi-78066a1a1"
			target="_blank"
			rel="author"
			class="hover:scale-125 transition-transform duration-300 ease-out"
		>
			<Linkedin />
		</a>
		<a
			class="hover:scale-125 transition-transform duration-300 ease-out"
			href="https://t.me/bahaaalhalabi01"
			target="_blank"
			rel="author"
		>
			<Telegram />
		</a>
		<a href="/" class="hover:scale-125 transition-transform duration-300 ease-out">
			<Instagram />
		</a>
		<a href="/" class="hover:scale-125 transition-transform duration-300 ease-out">
			<Twitter />
		</a>
	</div>
</main>
