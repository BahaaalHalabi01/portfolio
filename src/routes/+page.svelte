<script lang="ts">
	import ExperienceAccordion from '$src/components/experience-accordion.svelte';
	import { ToggleLeft, Unlock, ToggleRight, Lock, ChevronsUp } from 'lucide-svelte';
	import { initExperiences } from './experiences';
	import Button from '$src/components/button.svelte';
	import type { PageData } from './$types';
	import NeoVim from '$lib/icons/neovim.svelte';
	import type { TTranslationKeys } from '$src/lib/translations';
	import { getLocale, getTranslations } from '$src/lib/translations/i18n';
	import { setLimit } from '$src/lib/limit';

	let { data } = $props<{ data: PageData }>();
	const experiences = initExperiences();
	const ids = data.experienceData.map((exp) => exp.id);

	const lmt = setLimit();

	const openAll = (event: MouseEvent) => {
		const e = event as MouseEvent & { currentTarget: HTMLButtonElement };
		const checked = e.currentTarget.dataset['open'];
		if (checked === 'false') e.currentTarget.dataset['open'] = 'true';
		else e.currentTarget.dataset['open'] = 'false';

		ids.forEach((i) => {
			checked === 'true' ? $experiences.delete(i) : $experiences.add(i);
		});

		$experiences = $experiences;
	};

	const limitOne = (event: MouseEvent) => {
		const e = event as MouseEvent & { currentTarget: HTMLButtonElement };
		const checked = e.currentTarget.dataset['open'];
		if (checked === 'false') e.currentTarget.dataset['open'] = 'true';
		else e.currentTarget.dataset['open'] = 'false';

		//we have already open experiences
		const size = $experiences.size;
		if (size > 1 && checked === 'false') {
			for (let i = ids.length - 1; ; i--) {
				const id = ids[i];
				$experiences.delete(id);
				const current = $experiences.size;
				if (current === 1) break;
			}
		}

		lmt.set(!$lmt);

		$experiences = $experiences;
	};

	const locale = getLocale();
	const translate = getTranslations();
	const t = (key: TTranslationKeys) => $translate(key);
</script>

<section class="flex lg:gap-y-4 gap-y-6 flex-col min-h-full relative scroll-my-32" id="about">
	<div class="absolute right-0 lg:top-8 hidden bg-transparent lg:flex flex-col gap-y-4 items-end">
		<img
			src="/svelte.png"
			class="bg-transparent hover:scale-125 transition-all hover:rotate-12 md:block hidden"
			width={96}
			height={96}
			alt="svelte"
		/>
		<img
			src="/linux.png"
			class="bg-transparent hover:scale-125 transition-all hover:rotate-12 md:block hidden"
			width={96}
			height={96}
			alt="linux"
		/>
		<NeoVim />
	</div>
	<p class="lg:text-2xl text-xl">{t('homepage.welcome')}</p>
	<h1 class="text-green-600 lg:text-7xl font-semibold text-4xl" data-testid='name'>{t('name')}</h1>
	<h2 class="lg:text-7xl lg:pb-6 font-medium text-4xl lg:pr-60">{t('homepage.welcome-sub')}</h2>
	<p class="head-p">
		{t('homepage.about-0')}
		<a href="https://www.typescriptlang.org" target="_blank" class="important-link">Typescript</a>,
		<a class=" important-link" href="https://react.dev" target="_blank">React</a>,{' '}{t(
			'and'
		)}{' '}
		<a class="important-link" href="https://nextjs.org" target="_blank">NextJs</a>
		{t('homepage.about-1')}
		<a class="important-link" href="https://nodejs.org" target="_blank">NodeJs</a>
		{t('homepage.about-2')}
		<a class="important-link" href="https://aws.amazon.com" target="_blank">Amazon Web Services</a>
		{t('homepage.about-3')}.
		{t('homepage.about-4')}
	</p>
	<p class="head-p">
		{t('homepage.about-5')} <q>React {t('developer')}</q>, {t('homepage.about-6')}
		<a class="important-link" href="https://www.rust-lang.org/" target="_blank">Rust</a>
		{t('and')} <a class="important-link" href="https://svelte.dev/" target="_blank">Svelte</a>
		{t('homepage.about-7')}
	</p>

	<p class="head-p">
		{t('homepage.about-8')}
		<a target="_blank" rel="noreferrer" class="important-link" href="https://kit.svelte.dev"
			>SvelteKit</a
		>, {t('with')}
		<a
			href="https://svelte-5-preview.vercel.app/docs/introduction"
			target="_blank"
			rel="noreferrer"
			class="important-link"
			>Svelte5
		</a>
		{t('homepage.about-9')}&nbsp;<span class="important-link hover:no-underline"
			>{t('superior')}</span
		>&nbsp;{t('text-editor')}<a
			class="important-link"
			href="https://neovim.io/"
			target="_blank"
			rel="noreferrer">{' '}NeoVim</a
		>. {t('homepage.about-10')}
		<a class="important-link" href="https://pop.system76.com/" target="_blank" rel="noreferrer"
			>Linux{' '}</a
		>
		{t('homepage.about-11')}
	</p>
	<p class="head-p">
		{t('homepage.find-website')}
		<a
			href="https://github.com/BahaaalHalabi01"
			class="hover:scale-125 transition-transform duration-300 ease-out important-link"
			target="_blank"
			rel="author"
		>
			Github
		</a>
	</p>
</section>
<div class="lg:py-20 py-8" />
<section class="scroll-m-16 relative pb-8" id="skills">
	<img
		src="/linux.png"
		class="bg-transparent absolute -right-4 lg:top-8 top-0 hover:scale-125 transition-all hover:rotate-12 lg:hidden block"
		width={96}
		height={96}
		alt="linux"
	/>
	<img
		src="/svelte.png"
		class="bg-transparent absolute right-16 -top-4 hover:scale-125 transition-all hover:rotate-12 lg:hidden block"
		width={96}
		height={96}
		alt="svelte"
	/>
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl" data-testid=skills>{t('skills.title')}</h1>
	<div class="py-6" />
	<div
		class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:px-12 xl:gap-x-24 gap-y-6 rounded-md shadow-md py-8 bg-slate-700 md:gap-x-6 md:px-6 w-full mx-auto max-w-fit px-10 gap-x-0 lg:max-w-fit place-items-start place-content-start"
	>
		<div class="flex flex-col items-start justify-start h-full w-full lg:col-span-2">
			<p class="text-3xl pb-2 text-green-600 font-medium w-full">
				{t('skills.front')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4 w-full">
				<li class=" skill-li">Typescript,JsDoc</li>
				<li class=" skill-li">React, Svelte</li>
				<li class=" skill-li">NextJs, Sveltekit</li>
				<li class=" skill-li">Prisma, AuthJs</li>
				<li class=" skill-li truncate">Tailwindcss, MaterialUi, RadixUi</li>
				<li class=" skill-li">GraphQl, TanStack Query, tRPC</li>
				<li class=" skill-li">Redux, Redux Toolkit</li>
			</ul>
		</div>
		<div class="flex flex-col items-start justify-start h-full w-full lg:col-span-2">
			<p class="text-3xl pb-2 text-green-600 w-full">
				{t('skills.backend')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4 w-full">
				<li class="skill-li">NodeJs</li>
				<li class="skill-li">Elastic Search</li>
				<li class="skill-li">Amazon Web Services</li>
				<li class=" skill-li">Serverless</li>
				<li class=" skill-li">Sql, MongoDb, DynamoDb</li>
				<li class=" skill-li">Rust</li>
				<li class=" skill-li">Jest, Cypress, Playwright</li>
			</ul>
		</div>
		<div class="flex flex-col items-start justify-start h-full w-full lg:col-span-1">
			<p class="text-3xl pb-2 text-green-600 font-medium w-full">
				{t('skills.tooling')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4 w-full">
				<li class="skill-li">NeoVim</li>
				<li class="skill-li">Linux</li>
				<li class="skill-li">Notion</li>
				<li class="skill-li">Git</li>
			</ul>
		</div>
	</div>

	<div class="lg:pt-12 pt-8">
		<p class="italic font-bold max-w-6xl">
			{t('skills.thanks')}
		</p>
		<p class="italic font-bold max-w-6xl">
			{t('skills.thanks-0')}
			<a
				href="https://www.twitch.tv/theprimeagen"
				target="_blank"
				rel="noreferrer"
				class="text-green-600 text-2xl"
			>
				The Primeagen
			</a>
			{t('and')}
			<a href="https://t3.gg/" target="_blank" rel="noreferrer" class="text-green-600 text-2xl">
				Theo</a
			>
			{t('skills.thanks-1')}
		</p>
	</div>
</section>
<div class="lg:py-16 py-8" />
<section class="scroll-m-16 relative" id="experience">
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl" data-testid=experience>{t('exp.title')}</h1>
	<div class="flex flex-col md:flex-row items-start md:items-end gap-x-8 lg:py-8 py-4 gap-y-4">
		<Button
			onclick={openAll}
			class="inline-flex gap-x-2 items-center group/tgl"
			data-open="false"
			id="tgl-all-btn"
			title="power of data attributes"
		>
			<ToggleRight class="hidden group-data-[open=true]/tgl:inline-block h-8 w-8 fill-green-600" />
			<ToggleLeft class=" hidden group-data-[open=false]/tgl:inline-block h-8 w-8" />
			{t('btn.toggle-all')}
		</Button>
		<Button
			onclick={limitOne}
			title="power of stores and context"
			class="items-center text-center gap-x-2 inline-flex justify-center group/lmt"
			data-open="false"
		>
			<Unlock class="hidden group-data-[open=true]/lmt:inline-block" />
			<Lock class="inline-block group-data-[open=true]/lmt:hidden" />
			<span class="inline-block group-data-[open=true]/lmt:hidden">
				{t('btn.limit-false')}
			</span>
			<span class="inline-block group-data-[open=false]/lmt:hidden">
				{t('btn.limit-true')}
			</span>
		</Button>
	</div>

	<div class="flex gap-y-16 flex-col py-8">
		{#each data.experienceData as exp (exp.id)}
			<ExperienceAccordion label={exp.title} website={exp.website} href={exp.href} id={exp.id}>
				<p class="italic">{exp.duration[$locale]}</p>
				<ul class="list-disc list-inside max-w-6xl">
					{#if exp.tasks && exp.tasks[$locale].length > 0}
						{#each exp.tasks[$locale] as task, i (task)}
							{@html task}
						{/each}
					{/if}
				</ul>
				<p class="text-green-600">
					{exp.summary && exp.summary[$locale]}
				</p>
			</ExperienceAccordion>
		{/each}
	</div>
</section>

<div class="lg:pt-16 pt-8" />
<section id="contact" class="relative w-full flex flex-col justify-center">

	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl">{t('contact.title')}</h1>

	<div class="lg:py-0 py-6" />
	<div
		class="calendly-inline-widget min-w-[300px] lg:max-w-[1400px] w-full h-[900px] md:h-[950px]"
		data-url="https://calendly.com/bahaa-alhalabi01/30min?background_color=334155&text_color=cbd5e1&primary_color=16a34a"
	></div>
	<a
		href="#about"
		class="absolute bottom-0 right-0 float-right w-fit hover:scale-125 transition-transform duration-300"
		title="go to start"><ChevronsUp class="w-12 h-12 lg:w-16 lg:h-16 p-0" /></a
	>
</section>

