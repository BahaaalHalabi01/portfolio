<script lang="ts">
	import ExperienceAccordion from '$src/components/experience-accordion.svelte';
	import { ToggleLeft, Unlock, ToggleRight, Lock } from 'lucide-svelte';
	import { initExperiences } from './experiences';
	import Button from '$src/components/button.svelte';

	const experiences = initExperiences();
	const titles = ['Bedu, Remote - Tech Lead', 'Dox, Remote - Typescript Full Stack Developer'];
	const openAll = (event: MouseEvent) => {
		const e = event as MouseEvent & { currentTarget: HTMLButtonElement };
		const checked = e.currentTarget.dataset['open'];
		if (checked === 'false') e.currentTarget.dataset['open'] = 'true';
		else e.currentTarget.dataset['open'] = 'false';

		titles.forEach((title) => {
			const open = $experiences.get(title);
			$experiences.set(title, !open);
		});

		$experiences = $experiences;
	};

	const limitOne = (event: MouseEvent) => {
		const e = event as MouseEvent & { currentTarget: HTMLButtonElement };
		const checked = e.currentTarget.dataset['open'];
		if (checked === 'false') e.currentTarget.dataset['open'] = 'true';
		else e.currentTarget.dataset['open'] = 'false';

		const limit = $experiences.get('lmt');
		$experiences.set('lmt', !!!limit);

		$experiences = $experiences;
	};
</script>

<section class="flex gap-y-4 flex-col min-h-full" id="about">
	<p class="text-2xl">Welcome to my portfolio, my name is</p>
	<h1 class="text-green-600 lg:text-7xl snap-center">Bahaa al Halabi</h1>
	<h2 class="lg:text-7xl lg:pb-6">I turn ideas into cool web apps</h2>
	<p class="text-stone-400 text-2xl lg:max-w-4xl">
		I am a middle+ full stack web developer. I mainly use <span
			class="text-green-600 italic text-3xl">Typescript</span
		>,&nbsp;
		<span class="text-green-600 italic text-3xl">React</span>,&nbsp;and&nbsp;<span
			class="text-green-600 italic text-3xl">NextJs</span
		>
		to build my frontend apps, and
		<span class="text-3xl text-green-600 italic">NodeJs</span> with various
		<span class="text-green-600 italic text-3xl">Amazon Web Services</span> for the backend. I worked
		up until now exclusivly with startups, constantly taking on difficult tasks outside of my scope,
		enabling me to grow significantly.
	</p>
	<p class="text-stone-400 text-2xl lg:max-w-4xl">
		I would like to believe that i am not a <q>React Developer</q>, and that i understand the
		fundementals of programming well, enabling me to dive into other technologies.
		<span class="text-green-600 text-3xl italic">Rust</span>
		and <span class="text-svelte text-3xl italic">Svelte</span> being on top of the list.
	</p>

	<p class="text-stone-400 text-xl lg:max-w-4xl">
		This website was built with my favorite meta framework
		<a
			target="_blank"
			rel="noreferrer"
			class="text-svelte italic text-3xl"
			href="https://kit.svelte.dev">SvelteKit</a
		>, written using the&nbsp;<span class="italic text-3xl">superior</span>&nbsp;text editor
		<a
			class="text-green-600 italic text-3xl"
			href="https://neovim.io/"
			target="_blank"
			rel="noreferrer">{' '}NeoVim</a
		>
	</p>
	<div class="py-6" />
	<Button class="text-xl w-fit">Interested in More?</Button>
</section>
<div class="py-24" />
<section class="" id="experience">
	<h1 class="text-green-600 lg:text-6xl inline-block pr-8">My Experience</h1>
	<div class="inline-flex items-end gap-x-8">
		<Button
			onclick={openAll}
			class="inline-flex gap-x-2 items-center group/tgl"
			data-open="false"
			title="power of data attributes"
		>
			<ToggleRight class="hidden group-data-[open=true]/tgl:inline-block h-8 w-8 fill-green-600" />
			<ToggleLeft class=" hidden group-data-[open=false]/tgl:inline-block h-8 w-8" />
			Toggle All
		</Button>
		<Button
			onclick={limitOne}
			title="power of stores"
			class="items-center text-center gap-x-2 inline-flex justify-center group/lmt"
			data-open="false"
		>
			<Lock class="hidden group-data-[open=true]/lmt:inline-block" />
			<Unlock class="inline-block group-data-[open=true]/lmt:hidden" />
			<span class="inline-block group-data-[open=true]/lmt:hidden">
				Limit to One Open at A time
			</span>
			<span class="inline-block group-data-[open=false]/lmt:hidden">
				Open as many as you want
			</span>
		</Button>
	</div>

	<div class="flex gap-y-10 flex-col py-8">
		<ExperienceAccordion label={titles[0]} website="bedu.me" href="https://bedu.me">
			<p class="italic">October 2022 - December 2023 (1 year 2 months)</p>
			<p class="text-xl">
				Biggest takeaway from this work, was me vetting myself if i am able to take tech decisions,
				validate them, and implement them. It gave me big confidence to know that i understand what
				i am doing, and that i can take decisions that will help the product move forward and
				perform much better.
			</p>
			<p class="text-xl">A summary of tasks i did:</p>
			<ul class="list-disc list-inside">
				<li>
					Rewrite entire frontend (UI/UX and api layer) which was using material-ui,redux toolkit,
					and NextJs 12 to use NextJs 13 ( add SSR and ISR ), TailwindCSS, and use context api with
					tanstack-query for the api layer. This vastly improved the performance and responsiveness
					of the system.
				</li>
				<li>
					Correctly configure typescript on the api layer on the frontend and for the backend
					codebase.
				</li>
				<li>Manage AWS infrastructure using infrastructure as code and amazon console.</li>
				<li>
					Take design (zeplin/figma/adobe-xd) and transform it into code using tailwind css or
					material-ui.
				</li>
				<li>Architect the needed backend work, discuss with CTO and develop upon approval.</li>
				<li>
					Manual testing in a testing environment upon completion of the backend and frontend work.
				</li>
				<li>
					Onboard a part-time developer for helping in QA/Back-end work, assign him with tasks, help
					if needed (usually done through pair programming), and code review upon finishing the
					task.
				</li>
			</ul>
			<p class="italic font-bold">
				**After the initial 6 months, i was the only one working on the tech side, so i had to
				communicate directly to the product owner/company owner for changes and progress
			</p>
		</ExperienceAccordion>
		<ExperienceAccordion label={titles[1]} website="dox.tech" href="https://dox.tech">
			<p class="italic">October 2021 - December 2022 (1 year)</p>
			<p class="text-xl">
				This was my first job, and it being in a startup environment, led me to learn a lot and work
				on things that i didn't know, nor even had the intention of learning (ex: kubernetes). It
				was the first time i was challanged with real world problems after doing many
				straight-forward tasks/youtube tutorials.
			</p>
			<p class="text-xl">A summary of tasks i did:</p>
			<ul class="list-disc list-inside">
				<li>
					Developed a React front-end application using Typescript. Used ReactQuery for data
					management.
				</li>
				<li>
					Real-time notifications were handled using Socket.IO,and authentication using jwt-tokens.
				</li>
				<li>Created a component library using Storybook , and Styled-components.</li>
				<li>
					The application’s main purpose was to take user input and files (battery related data and
					measurnments), send them to the backend and display the returned data after parsing it as
					different Charts. Charting was done using a custom typesafe implementation of ChartJs
					library.
				</li>
				<li>Managed and helped an intern on onboarding, current ongoing tasks and code review.</li>
				<li>Administered infrastructure on AWS ( using kubernetes, and amazon console)</li>
				<li>
					Maintained and upgraded a microservices architecture using node and routing-controllers.
				</li>
			</ul>
		</ExperienceAccordion>
	</div>
</section>
