<script lang="ts">
	import Telegram from '$src/lib/icons/telegram.svelte';
	import '../app.css';
	import { AtSign, BugPlay, Github, Instagram, Linkedin, Twitter } from 'lucide-svelte';
	import { browser } from '$app/environment';
	import type { TTranslationKeys } from '$src/lib/translations/translations';
	import type { LayoutData } from './$types';
	import { createLocale, createTranslations, locales } from '$src/lib/translations/i18n';

	let { data } = $props<{ data: LayoutData }>();

	const getHeaders = () => [
		{ href: '#about', label: t('nav.about') },
		{ href: '#experience', label: t('nav.experience') },
		{ href: '#skills', label: t('nav.skills') },
		{ href: '#contact', label: t('nav.contact') }
	];


  const locale = createLocale(data.locale)
  const translate = createTranslations()
	const t = (key: TTranslationKeys) => $translate(key, data.locale)

	let headers = $state(getHeaders());

	const comingSoon = () => {
		alert('My apologies,I do not have those social media yet!');
	};

	const setLocale = () => {
		headers = getHeaders();
	};

</script>

<main class="container w-full mx-auto flex flex-col grow min-h-screen relative">
	<nav
		class="lg:flex items-center justify-between lg:h-16 font-bold text-lg capitalize sticky top-0 bg-slate-900 z-20 lg:py-0 py-2"
	>
		<div class="flex items-center gap-x-8">
			<a class="inline-flex gap-x-2 items-center p-2" href="/">
				<BugPlay />
				{t('name')}
			</a>
			{#if browser}
				<select bind:value={$locale} class="bg-transparent" on:change={setLocale}>
					{#each locales as l}
						<option value={l}>{l}</option>
					{/each}
				</select>
			{/if}
		</div>

		<a
			class="border-green-600 border-2 p-2 inline-block lg:hidden float-right"
			href="/Bahaa_al_Halabi.pdf"
			download={'Bahaa_al_Halabi.pdf'}>{t('nav.resume-re')}</a
		>

		<div
			class="flex flex-row lg:gap-x-12 items-center lg:py-0 py-2 text-sm lg:text-base justify-between lg:w-fit w-full"
		>
			{#each headers as header, i}
				<span class="flex lg:gap-x-2 gap-x-1">
					<span class="text-green-600">0{i + 1}{'.'}</span>
					<a href={header.href} class="cursor-pointer">
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
	<div class="lg:px-24 lg:py-12 py-4">
		<slot />
	</div>

	<div class="lg:sticky hidden bottom-0 md:flex flex-col gap-y-8 lg:pb-24 max-w-fit bg-slate-900">
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
