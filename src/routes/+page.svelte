<script lang="ts">
	import ExperienceAccordion from '$src/components/experience-accordion.svelte';
	import { ToggleLeft, Unlock, ToggleRight, Lock, ChevronsUp } from 'lucide-svelte';
	import { initExperiences } from './experiences';
	import Button from '$src/components/button.svelte';
	import type { PageData } from './$types';
	import NeoVim from '$lib/icons/neovim.svelte';
	import type { TTranslationKeys } from '$src/lib/translations/translations';
	import { getTranslations } from '$src/lib/translations/i18n';
	import { browser } from '$app/environment';

	let { data } = $props<{ data: PageData }>();
	const experiences = initExperiences();
	const ids = data.experienceData.map((exp) => exp.id);

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

		const limit = $experiences.has('lmt');

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

		!!limit ? $experiences.delete('lmt') : $experiences.add('lmt');
		$experiences = $experiences;
	};

	const translate = getTranslations();
	const t = (key: TTranslationKeys) => $translate(key, data.locale);
</script>

<section class="flex lg:gap-y-4 gap-y-6 flex-col min-h-full relative scroll-my-32" id="about">
	<img
		src="/svelte.png"
		class="bg-transparent absolute right-0 lg:top-8 md:top-16 top-0 hover:scale-125 transition-all hover:rotate-12 md:block hidden"
		width={96}
		height={96}
		alt="linux"
	/>
	<NeoVim />
	<p class="lg:text-2xl text-xl">{t('homepage.welcome')}</p>
	<h1 class="text-green-600 lg:text-7xl font-semibold text-4xl">{t('name')}</h1>
	<h2 class="lg:text-7xl lg:pb-6 font-medium text-4xl lg:pr-60">{t('homepage.welcome-sub')}</h2>
	<p class="text-stone-400 lg:text-2xl lg:max-w-5xl">
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
	<p class="text-stone-400 lg:text-2xl lg:max-w-5xl">
		{t('homepage.about-5')} <q>React {t('developer')}</q>, {t('homepage.about-6')}
		<a class="important-link" href="https://www.rust-lang.org/" target="_blank">Rust</a>
		{t('and')} <a class="important-link" href="https://svelte.dev/" target="_blank">Svelte</a>
		{t('homepage.about-7')}
	</p>

	<p class="text-stone-400 lg:text-2xl lg:max-w-5xl">
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
</section>
<div class="lg:py-20 py-8" />
<section class="scroll-m-16 relative pb-8" id="skills">
	<img
		src="/linux.png"
		class="bg-transparent absolute right-0 lg:top-8 top-0 hover:scale-125 transition-all hover:rotate-12"
		width={96}
		height={96}
		alt="linux"
	/>
	<img
		src="/svelte.png"
		class="bg-transparent absolute right-24 -top-4 hover:scale-125 transition-all hover:rotate-12 md:hidden block"
		width={96}
		height={96}
		alt="linux"
	/>
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl">{t('skills.title')}</h1>
	<div class="py-6" />
	<div
		class="grid lg:grid-cols-3 grid-cols-1 gap-y-6 rounded-md shadow-md lg:px-12 px-4 py-8 bg-slate-700 place-content-center lg:place-items-center max-w-6xl"
	>
		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 font-medium w-full">
				{t('skills.front')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li class=" skill-li">Typescript,JsDoc</li>
				<li class=" skill-li">React, Svelte</li>
				<li class=" skill-li">NextJs, Sveltekit</li>
				<li class=" skill-li">Prisma, AuthJs</li>
				<li class=" skill-li truncate">Tailwindcss, MaterialUi, RadixUi</li>
				<li class=" skill-li">GraphQl, TanStack Query, tRPC</li>
				<li class=" skill-li">Redux, Redux Toolkit</li>
			</ul>
		</div>
		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 font-medium w-full">
				{t('skills.tooling')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li class="skill-li">NeoVim</li>
				<li class="skill-li">Linux</li>
				<li class="skill-li">Notion</li>
				<li class="skill-li">Git</li>
			</ul>
		</div>

		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 w-full">
				{t('skills.backend')}
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li class="skill-li">NodeJs</li>
				<li class="skill-li">Elastic Search</li>
				<li class="skill-li">Amazon Web Services</li>
				<li class=" skill-li">Serverless</li>
				<li class=" skill-li">Sql, MongoDb, DynamoDb</li>
				<li class=" skill-li">Rust</li>
				<li class=" skill-li">Jest</li>
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
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl">{t('exp.title')}</h1>
	<div class="flex flex-col md:flex-row items-start md:items-end lg:gap-x-8 lg:py-8 py-4 gap-y-4">
		<Button
			onclick={openAll}
			class="inline-flex gap-x-2 items-center group/tgl"
			data-open="false"
			id="tgl-all-btn"
			title="power of data attributes"
		>
			<ToggleRight class="hidden group-data-[open=true]/tgl:inline-block h-8 w-8 fill-green-600" />
			<ToggleLeft class=" hidden group-data-[open=false]/tgl:inline-block h-8 w-8" />
			Toggle All
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
				Limit to One Open at A time
			</span>
			<span class="inline-block group-data-[open=false]/lmt:hidden">
				Open as many as you want
			</span>
		</Button>
	</div>

	<div class="flex gap-y-16 flex-col py-8">
		{#each data.experienceData as exp (exp.id)}
			<ExperienceAccordion label={exp.title} website={exp.website} href={exp.href} id={exp.id}>
				<p class="italic">{exp.duration}</p>
				<ul class="list-disc list-inside max-w-6xl">
					<!-- {#if browser} -->
					{#each exp.tasks as task, i (task)}
						{@html task}
					{/each}
					<!-- {/if} -->
				</ul>
				<p class="text-svelte">
					{exp.summary}
				</p>
			</ExperienceAccordion>
		{/each}

		<!-- <ExperienceAccordion label={titles[1]} href="https://qaff.com" website="qaff.com"> -->
		<!-- 	<p class="italic">August 2023 - September 2023 (1 Month)</p> -->
		<!-- 	<ul class="list-disc list-inside"> -->
		<!-- 		<li> -->
		<!-- 			Implement an AI-assisted multi-stage form that takes some input from the user, sends it to -->
		<!-- 			the lambda which then based on the results requires different input that has to be -->
		<!-- 			rendered. Upon completing the data collection, the lambda will return a final result which -->
		<!-- 			has to be integrated with the existing manual form. -->
		<!-- 		</li> -->
		<!---->
		<!-- 		<li> -->
		<!-- 			Refactor class-based React components into functional, and extract logic and common ui -->
		<!-- 			into their own components. - Implement designs using material-ui from figma and coordinate -->
		<!-- 			with backend for needed apis -->
		<!-- 		</li> -->
		<!-- 		<li>Add documentation using JsDoc and Postman collections.</li> -->
		<!-- 	</ul> -->
		<!-- </ExperienceAccordion> -->
		<!-- <ExperienceAccordion label={titles[2]}> -->
		<!-- 	<p class="italic">July 2023 - September 2023 (3 Months)</p> -->
		<!-- 	<p class="text-xl"> -->
		<!-- 		This project allowed me to try the new NextJs App Router and React Server Components in a -->
		<!-- 		production environment. As i had to make all the tech decisions, it was a good chance to -->
		<!-- 		test libraries that i already enjoyed working with locally (ex:prisma,authjs) -->
		<!-- 	</p> -->
		<!-- 	<p class="text-xl">A summary of the tasks i did:</p> -->
		<!-- 	<ul class="list-disc list-inside"> -->
		<!-- 		<li> -->
		<!-- 			Develop from scratch a NextJs ( Server Components) application that lets the user using a -->
		<!-- 			flow board (Reactflow library) create a battery testing schema and interact with it using -->
		<!-- 			drag and drop. -->
		<!-- 		</li> -->
		<!-- 		<li> -->
		<!-- 			Vizualize data in a table allowing you to edit,delete, and duplicate your testing schemas. -->
		<!-- 		</li> -->
		<!-- 		<li>Host the application, use PostgreSql with an Orm for the database (using Supabase).</li> -->
		<!-- 		<li> -->
		<!-- 			Write an api layer using traditional http routes in NextJs and fetch directly in Server -->
		<!-- 			Components when possible. -->
		<!-- 		</li> -->
		<!-- 		<li>Authentication using session tokens with the help of AuthJs.</li> -->
		<!-- 	</ul> -->
		<!-- </ExperienceAccordion> -->
		<!-- <ExperienceAccordion -->
		<!-- 	label={titles[4]} -->
		<!-- 	href={'https://bankerway.com/Main/about-2/'} -->
		<!-- 	website="bankerway.com" -->
		<!-- > -->
		<!-- 	<p class="italic">September 2021 (1 Month)</p> -->
		<!-- 	<p class="text-xl"> -->
		<!-- 		This was a training i took to get an idea of the fintech world, helping me choose my path as -->
		<!-- 		a developer. -->
		<!-- 	</p> -->
		<!-- 	<p class="text-xl">During my training:</p> -->
		<!---->
		<!-- 	<ul class="list-disc list-inside"> -->
		<!-- 		<li> -->
		<!-- 			Underwent Temenos T24 banking system training. Used and developed code for the T24 system -->
		<!-- 			using JBASIC and TAFJ framework that enables customization on basic banking features in -->
		<!-- 			Temenos T24. -->
		<!-- 		</li> -->
		<!-- 		<li> -->
		<!-- 			During the learning period, I was one of the highest performing students, held zoom -->
		<!-- 			meetings to help tutor others. I was given a certificate and a job offer at the end. -->
		<!-- 		</li> -->
		<!-- 	</ul> -->
		<!-- </ExperienceAccordion> -->
		<!-- <ExperienceAccordion label={titles[5]}> -->
		<!-- 	<p class="italic">June 2020 - September 2020 (4 Months)</p> -->
		<!-- 	<p class="text-xl"> -->
		<!-- 		This was a beginner to intermiddiate level bootcamp that upon completion gives you a -->
		<!-- 		certificate you can submit to university in order to finish a required course -->
		<!-- 	</p> -->
		<!-- 	<ul class="list-disc list-inside"> -->
		<!-- 		<li> -->
		<!-- 			Receive hands-on web development training with React(hooks), Redux, Firebase, Git Heroku, -->
		<!-- 			and MongoDb. Ended the bootcamp with developing a full-stack website. -->
		<!-- 		</li> -->
		<!-- 	</ul> -->
		<!-- </ExperienceAccordion> -->
		<!-- <ExperienceAccordion label={titles[6]}> -->
		<!-- 	<p class="italic">July 2018 - August 2018 (2 Months)</p> -->
		<!-- 	<ul class="list-disc list-inside"> -->
		<!-- 		<li> -->
		<!-- 			Learn basics of javascript and web development, with a little of React class components -->
		<!-- 		</li> -->
		<!-- 	</ul> -->
		<!-- </ExperienceAccordion> -->
		<a
			href="#about"
			class="absolute bottom-0 right-0 float-right w-fit hover:scale-125 transition-transform duration-300"
			title="go to start"><ChevronsUp class="w-28 h-14" /></a
		>
	</div>
</section>

<div class="lg:py-16 py-8" />
<section id="contact-me"></section>
