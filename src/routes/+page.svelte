<script lang="ts">
	import ExperienceAccordion from '$src/components/experience-accordion.svelte';
	import { ToggleLeft, Unlock, ToggleRight, Lock, ChevronsDown } from 'lucide-svelte';
	import { initExperiences } from './experiences';
	import Button from '$src/components/button.svelte';
	import type { PageData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';

	export let data: PageData;
	const { titles } = data;
	const experiences = initExperiences();

	const openAll = (event: MouseEvent) => {
		const e = event as MouseEvent & { currentTarget: HTMLButtonElement };
		const checked = e.currentTarget.dataset['open'];
		if (checked === 'false') e.currentTarget.dataset['open'] = 'true';
		else e.currentTarget.dataset['open'] = 'false';

		titles.forEach((title) => {
			checked === 'true' ? $experiences.delete(title) : $experiences.add(title);
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
			for (let i = titles.length - 1; ; i--) {
				const title = titles[i];
				$experiences.delete(title);
				const current = $experiences.size;
				if (current === 1) break;
			}
		}

		!!limit ? $experiences.delete('lmt') : $experiences.add('lmt');
		$experiences = $experiences;
	};
</script>

<section class="flex gap-y-4 flex-col min-h-full relative" id="about">
	<img
		src="/linux.png"
		class="bg-transparent absolute right-0 top-0 hover:scale-125 transition-all hover:rotate-12"
		width={96}
		height={96}
		alt="linux"
	/>
	<p class="text-2xl">Welcome to my portfolio, my name is</p>
	<h1 class="text-green-600 lg:text-7xl font-semibold">Bahaa al Halabi</h1>
	<h2 class="lg:text-7xl lg:pb-6 font-medium">I turn ideas into cool web apps</h2>
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
		>. I use
		<a
			class="text-3xl italic text-green-600"
			href="https://pop.system76.com/"
			target="_blank"
			rel="noreferrer">linux{' '}</a
		>
		as my preferred operating system.
	</p>
	<div class="py-6" />
	<Button class="text-xl w-fit">Interested in More?</Button>

	<div class="py-6" />
	<a
		href="#skills"
		class="absolute bottom-4 right-0 w-fit hover:scale-125 transition-transform duration-300"
		><ChevronsDown class="w-28 h-14" /></a
	>
</section>
<div class="py-8" />
<section class="scroll-m-16" id="skills">
	<h1 class="text-green-600 lg:text-6xl pr-8">My Skills</h1>
	<div class="py-6" />
	<div
		class="grid grid-cols-3 rounded-md shadow-md px-12 gap-x-4 mx-auto py-8 bg-slate-700 place-content-center place-items-center"
	>
		<div class="flex flex-col items-start justify-start h-full">
			<p class='text-3xl pb-4 text-green-600 font-medium'>Front End</p>
			<ul>
				<li>Typescript,JsDoc</li>
				<li>React, Svelte</li>
				<li>NextJs, Sveltekit</li>
				<li>Tailwindcss, MaterialUi,RadixUi</li>
				<li>GraphQl, TanStack Query,tRPC</li>
				<li>Redux, Redux Toolkit</li>
			</ul>
		</div>
		<div class="flex flex-col items-start justify-start h-full">
			<p class='text-3xl pb-4 text-green-600 font-medium'>Back End</p>
			<ul>
				<li>NodeJs</li>
				<li>Amazon Web Services</li>
				<li>Serverless</li>
				<li>Sql,No-Sql</li>
				<li>Rust</li>
			</ul>
		</div>
		<div class="flex flex-col">Managment</div>
	</div>
</section>

<div class="py-16" />
<section class="scroll-m-16" id="experience">
	<h1 class="text-green-600 lg:text-6xl pr-8">My Work Experience</h1>
	<div class="flex items-end gap-x-8 py-8">
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
		<ExperienceAccordion label={titles[1]} href="https://qaff.com" website="qaff.com">
			<p class="italic">August 2023 - September 2023 (1 Month)</p>
			<ul class="list-disc list-inside">
				<li>
					Implement an AI-assisted multi-stage form that takes some input from the user, sends it to
					the lambda which then based on the results requires different input that has to be
					rendered. Upon completing the data collection, the lambda will return a final result which
					has to be integrated with the existing manual form.
				</li>

				<li>
					Refactor class-based React components into functional, and extract logic and common ui
					into their own components. - Implement designs using material-ui from figma and coordinate
					with backend for needed apis
				</li>
				<li>Add documentation using JsDoc and Postman collections.</li>
			</ul>
		</ExperienceAccordion>
		<ExperienceAccordion label={titles[2]}>
			<p class="italic">July 2023 - September 2023 (3 Months)</p>
			<p class="text-xl">
				This project allowed me to try the new NextJs App Router and React Server Components in a
				production environment. As i had to make all the tech decisions, it was a good chance to
				test libraries that i already enjoyed working with locally (ex:prisma,authjs)
			</p>
			<p class="text-xl">A summary of the tasks i did:</p>
			<ul class="list-disc list-inside">
				<li>
					Develop from scratch a NextJs ( Server Components) application that lets the user using a
					flow board (Reactflow library) create a battery testing schema and interact with it using
					drag and drop.
				</li>
				<li>
					Vizualize data in a table allowing you to edit,delete, and duplicate your testing schemas.
				</li>
				<li>Host the application, use PostgreSql with an Orm for the database (using Supabase).</li>
				<li>
					Write an api layer using traditional http routes in NextJs and fetch directly in Server
					Components when possible.
				</li>
				<li>Authentication using session tokens with the help of AuthJs.</li>
			</ul>
		</ExperienceAccordion>
		<ExperienceAccordion label={titles[3]} website="dox.tech" href="https://dox.tech">
			<p class="italic">October 2021 - December 2022 (1 year)</p>
			<p class="text-xl">
				This was my first job, and it being in a startup environment, led me to learn a lot and work
				on things that i didn't know, nor even had the intention of learning (ex: kubernetes). It
				was the first time i was challanged with real world problems after doing many
				straight-forward tasks/youtube tutorials.
			</p>
			<p class="text-xl">A summary of the tasks i did:</p>
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
		<ExperienceAccordion
			label={titles[4]}
			href={'https://bankerway.com/Main/about-2/'}
			website="bankerway.com"
		>
			<p class="italic">September 2021 (1 Month)</p>
			<p class="text-xl">
				This was a training i took to get an idea of the fintech world, helping me choose my path as
				a developer.
			</p>
			<p class="text-xl">During my training:</p>

			<ul class="list-disc list-inside">
				<li>
					Underwent Temenos T24 banking system training. Used and developed code for the T24 system
					using JBASIC and TAFJ framework that enables customization on basic banking features in
					Temenos T24.
				</li>
				<li>
					During the learning period, I was one of the highest performing students, held zoom
					meetings to help tutor others. I was given a certificate and a job offer at the end.
				</li>
			</ul>
		</ExperienceAccordion>
		<ExperienceAccordion label={titles[5]}>
			<p class="italic">June 2020 - September 2020 (4 Months)</p>
			<p class="text-xl">
				This was a beginner to intermiddiate level bootcamp that upon completion gives you a
				certificate you can submit to university in order to finish a required course
			</p>
			<ul class="list-disc list-inside">
				<li>
					Receive hands-on web development training with React(hooks), Redux, Firebase, Git Heroku,
					and MongoDb. Ended the bootcamp with developing a full-stack website.
				</li>
			</ul>
		</ExperienceAccordion>
		<ExperienceAccordion label={titles[6]}>
			<p class="italic">July 2018 - August 2018 (2 Months)</p>
			<ul class="list-disc list-inside">
				<li>
					Learn basics of javascript and web development, with a little of React class components
				</li>
			</ul>
		</ExperienceAccordion>
	</div>

	<a
		href="#experience"
		class="sticky bottom-4 right-0 float-right w-fit hover:scale-125 transition-transform duration-300"
		><ChevronsDown class="w-28 h-14" /></a
	>
</section>
