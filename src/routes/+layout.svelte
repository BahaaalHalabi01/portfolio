<script lang="ts">
	import Telegram from '$src/lib/icons/telegram.svelte';
	import '../app.css';
	import { AtSign, BugPlay, Github, Instagram, Linkedin, Twitter } from 'lucide-svelte';
	import type { TTranslationKeys } from '$src/lib/translations';
	import type { LayoutData } from './$types';
	import { createLocale, createTranslations, locales } from '$src/lib/translations/i18n';
	import type { Snippet } from 'svelte';

	let { data, children } = $props<{ data: LayoutData; children: Snippet }>();

	const getHeaders = () => [
		{ href: '#about', label: t('nav.about') },
		{ href: '#experience', label: t('nav.experience') },
		{ href: '#skills', label: t('nav.skills') },
		{ href: '#contact', label: t('nav.contact') }
	];

	const locale = createLocale(data.locale);
	const translate = createTranslations();
	const t = (key: TTranslationKeys) => $translate(key, data.locale);

	let headers = $state(getHeaders());

	const comingSoon = () => {
		alert('My apologies,I do not have those social media yet!');
	};

	const setLocale = () => {
		headers = getHeaders();
	};
</script>

{#snippet social()}
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
{/snippet}

<svelte:head>
	<script src="https://assets.calendly.com/assets/external/widget.js" defer async></script>
	<meta name="Cross-Origin-Opener-Policy" content="same-origin" />
</svelte:head>

<main class="container w-full mx-auto flex flex-col grow min-h-screen relative max-h-fit">
	<nav
		class="lg:flex items-center justify-between lg:h-16 font-bold text-lg capitalize sticky top-0 bg-slate-900 z-20 lg:py-0 py-2"
	>
		<div class="flex items-center md:gap-x-8 justify-between flex-wrap">
			<span class="flex gap-x-2 lg:gap-x-6">
				<a class="inline-flex gap-x-2 items-center" href="/">
					<BugPlay />
					{t('name')}
				</a>
				<select
					bind:value={$locale}
					class="bg-transparent px-1"
					on:change={setLocale}
					data-testid="language"
				>
					{#each locales as l}
						<option value={l}>{l}</option>
					{/each}
				</select>
			</span>
			<a
				class="border-green-600 border-2 p-2 inline-block lg:hidden float-right"
				href="/Bahaa_al_Halabi.pdf"
				download={'Bahaa_al_Halabi.pdf'}>{t('nav.resume-re')}</a
			>
		</div>

		<div
			class="flex flex-row lg:gap-x-12 items-center lg:py-0 py-2 text-sm lg:text-base justify-between lg:w-fit w-full"
		>
			{#each headers as header, i}
				<span class="flex lg:gap-x-2 gap-x-0.5">
					<span class="text-green-600">0{i + 1}{'.'} </span>
					<a
						href={header.href}
						class="cursor-pointer"
						data-testid={header.href.substring(1) + '-nav'}
					>
						{header.label}
					</a>
				</span>
			{/each}

			<a
				class="border-green-600 border-2 p-2 hidden lg:block"
				href="/Bahaa_al_Halabi.pdf"
				download={'Bahaa_al_Halabi.pdf'}>{t('nav.resume')}</a
			>
		</div>
	</nav>
	<div
		class="lg:fixed lg:flex hidden top-full -translate-y-full 2xl:left-[8%] left-[4%] flex-col gap-y-8 bg-slate-900 justify-between w-full pb-24 max-w-fit"
	>
		{@render social()}
	</div>

	<div class="xl:px-24 lg:px-20 lg:py-12 py-4">
		{@render children()}
	</div>

	<footer class="lg:hidden flex w-full sticky bottom-0 justify-between bg-slate-900 p-4">
		{@render social()}
	</footer>
</main>
