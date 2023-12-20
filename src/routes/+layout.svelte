<script>
	import Telegram from '$src/lib/icons/telegram.svelte';
	import '../app.css';
	import { AtSign, BugPlay, Github, Instagram, Linkedin, Twitter } from 'lucide-svelte';

	const headers = [
		{ href: '/about', label: 'about' },
		{ href: '/experience', label: 'experience' },
		{ href: '/work', label: 'work' },
		{ href: '/contact', label: 'contact' }
	];
	const comingSoon = () => {
		alert('My apologies,I do not have those social media yet!');
	};
</script>

<main class="container w-full mx-auto flex flex-col grow min-h-screen relative">
	<nav
		class="lg:flex items-center justify-between lg:h-16 font-bold text-lg capitalize sticky top-0 bg-slate-900 z-20 lg:py-0 py-2"
	>
		<span class="inline-flex gap-x-2 items-center p-2">
			<BugPlay />
			Bahaa al Halabi
		</span>

		<a class="border-green-600 border-2 p-2 inline-block lg:hidden float-right" href="/resume"
			>My Resume!</a
		>

		<div class="flex flex-row lg:gap-x-12 items-center lg:py-0 py-2 text-sm lg:text-base justify-between lg:w-fit w-full">
			{#each headers as header, i}
				<span class="flex lg:gap-x-2 gap-x-1">
					<span class="text-green-600">0{i + 1}{'.'}</span>
					<a href={header.href} class="cursor-pointer">
						{header.label}
					</a>
				</span>
			{/each}

			<a class="border-green-600 border-2 p-2 hidden lg:block" href="/resume">Checkout My Resume!</a
			>
		</div>
	</nav>
	<div class="lg:px-24 lg:py-12 py-4">
		<slot />
	</div>

	<div class="md:sticky hidden left-0 bottom-0 md:flex flex-col gap-y-8 lg:pb-24 max-w-fit bg-slate-900">
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

		<a
			href="mailto:bahaa.alhalabi01@outlook.com"
			class="hover:scale-125 transition-transform duration-300 ease-out"
		>
			<AtSign />
		</a>
		<a
			href="/"
			class="hover:scale-125 transition-transform duration-300 ease-out"
			on:click|preventDefault|once={comingSoon}
		>
			<Instagram />
		</a>
		<a
			href="/"
			class="hover:scale-125 transition-transform duration-300 ease-out"
			on:click|preventDefault|once={comingSoon}
		>
			<Twitter />
		</a>
	</div>

	<footer>
		<a href="https://www.flaticon.com/free-icons/check-mark" title="check mark icons"
			>Check mark icons created by icon wind - Flaticon</a
		>
	</footer>
</main>
