<script lang="ts">
	import ExperienceAccordion from '$src/components/experience-accordion.svelte';
	import { ToggleLeft, Unlock, ToggleRight, Lock, ChevronsDown, ChevronsUp } from 'lucide-svelte';
	import { initExperiences } from './experiences';
	import Button from '$src/components/button.svelte';
	import type { PageData } from './$types';
  import NeoVim from '$lib/icons/neovim.svelte'

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

<section class="flex lg:gap-y-4 gap-y-6 flex-col min-h-full relative scroll-my-32" id="about">
<img
		src="/svelte.png"
		class="bg-transparent absolute right-0 lg:top-8 top-0 hover:scale-125 transition-all hover:rotate-12 md:block hidden"
		width={96}
		height={96}
		alt="linux"
	/>
<NeoVim

	/>
	<p class="lg:text-2xl text-xl">Welcome to my portfolio, my name is</p>
	<h1 class="text-green-600 lg:text-7xl font-semibold text-4xl">Bahaa al Halabi</h1>
	<h2 class="lg:text-7xl lg:pb-6 font-medium text-4xl">I turn ideas into cool web apps</h2>
	<p class="text-stone-400 lg:text-2xl lg:max-w-4xl">
		I am a middle+ full stack web developer. I mainly use <span
			class="text-green-600 italic lg:text-3xl text-2xl">Typescript</span
		>,
		<span class="text-green-600 italic lg:text-3xl text-2xl">React</span>,{' '}and{' '}<span
			class="text-green-600 italic text-2xl lg:text-3xl">NextJs</span
		>
		to build my frontend apps, and
		<span class="text-2xl lg:text-3xl text-green-600 italic">NodeJs</span> with various
		<span class="text-green-600 italic lg:text-3xl text-2xl">Amazon Web Services</span> for the backend.
		I worked up until now exclusivly with startups, constantly taking on difficult tasks outside of my
		scope, enabling me to grow significantly.
	</p>
	<p class="text-stone-400 lg:text-2xl lg:max-w-4xl">
		I would like to believe that i am not a <q>React Developer</q>, and that i understand the
		fundementals of programming well, enabling me to dive into other technologies.
		<span class="text-green-600 lg:text-3xl text-2xl italic">Rust</span>
		and <span class="text-svelte text-2xl lg:text-3xl italic">Svelte</span> being on top of the list.
	</p>

	<p class="text-stone-400 lg:text-2xl lg:max-w-4xl">
		This website was built using my favorite meta framework
		<a
			target="_blank"
			rel="noreferrer"
			class="text-svelte italic text-2xl lg:text-3xl"
			href="https://kit.svelte.dev">SvelteKit</a
		>, with
		<a
			href="https://svelte-5-preview.vercel.app/docs/introduction"
			target="_blank"
			rel="noreferrer"
			class="text-svelte italic text-2xl lg:text-3xl"
			>Svelte5
		</a>
		written using the&nbsp;<span class="italic text-2xl lg:text-3xl">superior</span>&nbsp;text
		editor
		<a
			class="text-green-600 italic text-2xl lg:text-3xl"
			href="https://neovim.io/"
			target="_blank"
			rel="noreferrer">{' '}NeoVim</a
		>. I use
		<a
			class="lg:text-3xl italic text-green-600 text-2xl"
			href="https://pop.system76.com/"
			target="_blank"
			rel="noreferrer">linux{' '}</a
		>
		as my preferred operating system.
	</p>
	<div class="lg:py-20 py-8" />
	<a
		href="#skills"
		class="absolute md:block hidden bottom-4 right-0 w-fit hover:scale-125 transition-transform duration-300"
		><ChevronsDown class="w-28 h-14" /></a
	>
</section>
<div class="lg:py-8" />
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
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl">My Skills</h1>
	<div class="py-6" />
	<div
		class="grid lg:grid-cols-3 grid-cols-1 gap-y-6 rounded-md shadow-md lg:px-12 px-4 py-8 bg-slate-700 place-content-center lg:place-items-center max-w-6xl"
	>
		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 font-medium border-b-2 border-green-600 w-full">
				Front End
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Typescript,JsDoc
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					React, Svelte
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					NextJs, Sveltekit
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Prisma, AuthJs
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900 truncate"
				>
					Tailwindcss, MaterialUi, RadixUi
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					GraphQl, TanStack Query, tRPC
				</li>
				<li
					class="lg:text-xl text-lg rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Redux, Redux Toolkit
				</li>
			</ul>
		</div>
		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 font-medium border-b-2 border-green-600 w-full">
				Tooling
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					NeoVim
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Linux
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Notion
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Git
				</li>
			</ul>
		</div>

		<div class="flex flex-col items-start justify-start h-full">
			<p class="text-3xl pb-2 text-green-600 font-medium border-b-2 border-green-600 w-full">
				Back End
			</p>
			<ul class="list-image-checkmark list-inside space-y-2 pt-4">
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					NodeJs
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Elastic Search
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Amazon Web Services
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Serverless
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Sql, MongoDb, DynamoDb
				</li>
				<li
					class="text-xl rounded-full border border-green-600 px-4 py-2 hover:scale-110 duration-300 transition-transform hover:bg-slate-900"
				>
					Rust
				</li>
			</ul>
		</div>
	</div>
	<div class="lg:pt-12 pt-8">
		<p class="italic font-bold max-w-6xl">
			Watching many content creators helped me advance my career and take a leap and learn some of
			the things above.
		</p>
		<p class="italic font-bold max-w-6xl">
			Special thanks to
			<a
				href="https://www.twitch.tv/theprimeagen"
				target="_blank"
				rel="noreferrer"
				class="text-green-600 text-2xl"
			>
				The Primeagen
			</a>
			and
			<a href="https://t3.gg/" target="_blank" rel="noreferrer" class="text-green-600 text-2xl">
				Theo</a
			> as these two channels helped me understand the ecosystem from completly different point of views.
			Give them a follow, you will not regret it!
		</p>
	</div>
	<a
		href="#experience"
		class="absolute md:block hidden bottom-0 right-0 w-fit hover:scale-125 transition-transform duration-300"
		><ChevronsDown class="w-28 h-14" /></a
	>
</section>
<div class="lg:py-16 py-8" />
<section class="scroll-m-16 relative" id="experience">
	<h1 class="text-green-600 lg:text-6xl pr-8 text-4xl">My Work Experience</h1>
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
		<a
			href="#about"
			class="absolute bottom-0 right-0 float-right w-fit hover:scale-125 transition-transform duration-300"
			title="go to start"><ChevronsUp class="w-28 h-14" /></a
		>
	</div>
</section>

<div class="lg:py-16 py-8" />
  <section id='contact-me'>
  </section>
