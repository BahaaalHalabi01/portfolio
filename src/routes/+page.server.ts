import type { TLocales } from "$src/lib/translations"
import type { PageServerLoad } from "./$types"

type TTranslationObject<T = string> = Record<TLocales, T>

export const load: PageServerLoad = async event => {

  const experienceData: Array<{
    title: string, duration: TTranslationObject, summary?: TTranslationObject, tasks: TTranslationObject<Array<string>>, website?: string, href?: string, id: string
  }> = [{
    id: '1',
    website: 'bedu.me',
    href: 'https://bedu.me',
    title: 'Bedu, Remote - Tech Lead',
    duration: { en: 'October 2022 - December 2023 (1 year 2 months)', ru: '' },
    summary: {
      en: 'Biggest takeaway from this work was me vetting myself if I am able to take tech decisions, validate them, and implement them. It gave me big confidence to know that I understand what I am doing, and that I can take decisions that will help the product move forward and perform much better.',
      ru: 'Самым важным уроком из этой работы было то, что я проверял себя, способен ли я принимать технические решения, проверять их и внедрять. Это дало мне большую уверенность в том, что я понимаю, что я делаю, и что я могу принимать решения, которые помогут продукту двигаться вперёд и работать намного лучше.'
    },
    tasks: {
      ru: [
        `<li>Переписать весь фронтенд (UI/UX и api-уровень), который использовал material-ui, redux toolkit и NextJs 12, чтобы использовать <strong>NextJs 13</strong> (добавить SSR и ISR для <strong>мгновенного времени загрузки</strong>), <strong>TailwindCSS</strong> и использовать контекстный API с <strong>tanstack-query</strong> для api-уровня. Это значительно улучшило производительность и отзывчивость системы.</li>`,
        `<li>Правильная настройка <strong>Typescript</strong> на api-уровне на фронтенде и для кодовой базы на бэкенде.</li>`,
        `<li>Управление инфраструктурой AWS с использованием <strong>Инфраструктуры как кода (Typescript)</strong> и консоли Amazon.</li>`,
        `<li>Преобразование дизайна из Zeplin/Figma/Adobe XD в код с использованием Tailwindcss с использованием <strong>Radix-ui</strong> или <strong>Material-ui</strong>.</li>`,
        `<li>Проектирование необходимых изменений в <strong>инфраструктуре</strong> при необходимости, представление и обсуждение результатов с CTO, а затем разработка после утверждения.</li>`,
        `<li>Использование тестовой среды для проверки изменений. Написание тестов для бэкенда с использованием <strong>Jest</strong> и ручное тестирование на фронтенде.</li>`,
        `<li>Ввод в работу разработчика на неполный рабочий день для помощи в QA/работе на бэкенде, назначение ему задач, помощь при необходимости, как правило, через <strong>совместное программирование</strong>, и <strong>проверка кода</strong> по завершении задачи.</li>`,
        `<li>После первых 6 месяцев я был единственным работающим с технической стороны, поэтому мне приходилось общаться напрямую с владельцем продукта/владельцем компании по вопросам изменений и прогресса, а также принимать <strong>основные технические решения</strong> самостоятельно.</li>`
      ],
      en: [
        `<li>Rewrite entire frontend (UI/UX and api layer) which was using material-ui,redux toolkit, and NextJs 12 to use <strong>NextJs 13</strong> &nbsp;(add&nbsp;SSR and ISR for&nbsp;<strong>instant&nbsp;load&nbsp;times</strong>), <strong>TailwindCSS</strong>, and use context api with <strong>tanstack-query</strong> for the api layer. This vastly improved the performance and responsiveness of the system.</li>`,
        `<li>Correctly configure <strong>Typescript</strong> on the api layer on the frontend and for the backend codebase</li>`,
        `<li>Manage AWS infrastructure using <strong>Infrastructure as Code (Typescript)</strong> and Amazon console.</li>`,
        `<li>Take design  in zeplin/figma/adobe-xd and transform it into code using Tailwindcss with <strong>Radix-ui</strong> or <strong>Material-ui</strong>.</li>`,
        `<li>Architect the needed <strong>infrastructure</strong> changes when needed, present it and discuss findings CTO then develop upon approval.</li>`,
        `<li>Use testing enviornment to validate changes. Write tests for the backend using <strong>Jest</strong>, and manually test in the frontend .</li>`,
        `<li>Onboard a part-time developer for helping in QA/Back-end work, assign him with tasks, help if needed which usually done through <strong>pair programming</strong>, and <strong>code review</strong> upon finishing the task.</li>`,
        `<li>After the initial 6 months, i was the only one working on the tech side, so i had to communicate directly to the product owner/company owner for changes and progress, and take <strong>major tech decisions</strong> on my own</li>`
      ]
    }
  },
  {
    id: '3',
    title: 'Dox, Remote - NextJs Full Stack Developer',
    duration: { en: 'July 2023 - September 2023 (3 Months)', ru: '' },
    summary: {
      en: 'I took this project as a side work and to try and apply the new skills I had learned. Specifically, this project allowed me to try the new NextJs App Router and React Server Components in a production environment. As I had to make all the tech decisions, it was a good chance to test libraries that I already enjoyed working with locally (ex: prisma, authjs).',
      ru: 'Я взял этот проект как дополнительную работу, чтобы попробовать и применить новые навыки, которые я узнал. Конкретно этот проект позволил мне опробовать новый NextJs App Router и React Server Components в производственной среде. Поскольку мне приходилось принимать все технические решения, это была хорошая возможность протестировать библиотеки, с которыми я уже наслаждался работой локально (например: prisma, authjs).'
    },
    tasks: {
      ru: [
        `<li>Разработка с нуля приложения NextJs-13 (<strong>Server Components</strong>), позволяющего пользователю с использованием панели потока (с использованием библиотеки <strong>Reactflow</strong>) создавать схему тестирования батарей и взаимодействовать с ней с использованием <strong>перетаскивания</strong>.</li>`,
        `<li>Визуализация данных в <strong>таблице</strong>, позволяющей редактировать, удалять и дублировать созданные ранее схемы тестирования.</li>`,
        `<li>Написание схемы базы данных <strong>PostgreSql</strong> с использованием <strong>Prisma</strong> orm и их размещение на Supabase.</li>`,
        `<li>Написание <strong>многоуровневого API</strong> с использованием api-маршрутов в NextJs и использование новой схемы получения данных <strong>Server Components</strong>, когда это возможно.</li>`,
        `<li>Реализация <strong>OAuth</strong> Google с использованием <strong>сеансовых токенов</strong> с помощью <strong>NextAuth</strong>.</li>`
      ],
      en: [
        `<li>Develop from scratch a NextJs-13 (<strong>Server Components</strong>) application that lets the user using a flow board (using <strong>Reactflow</strong> library) create a battery testing schema and interact with it using <strong>drag and drop</strong>.</li>`,
        `<li>	Vizualize data in a <strong>table</strong> allowing you to edit,delete, and duplicate your testing schemas created before.</li>`,
        `<li> Write a <strong>PostgreSql</strong> database schema using <strong>Prisma</strong> orm and host them on Supabase.</li>`,
        `<li>	Write a <strong>multi-tenant api layer</strong> using api routes in NextJs and use the new <strong>Server Components</strong> data fetching schema when possible.</li>`,
        `<li>Implement google <strong>OAuth</strong> using <strong>session tokens</strong> with the help of <strong>NextAuth</strong>.</li>`
      ]
    }
  },
  {
    id: '4',
    title: 'Qaff.com, Remote-   React Front-end Developer',
    website: "qaff.com",
    href: 'https://qaff.com',
    duration: { en: 'August 2023 - September 2023 (1 Month)', ru: '' },
    tasks: {
      ru: [
        `<li>Реализация многопроцессной формы с искусственным интеллектом, которая принимает ввод от пользователя, отправляет его в лямбду, которая в свою очередь, в зависимости от результатов, требует различного ввода, который должен быть отображен. После завершения сбора данных лямбда вернет окончательный результат, который должен быть интегрирован с существующей ручной формой.</li>`,
        `<li>Рефакторинг классовых компонентов React в функциональные, выделение логики и общего пользовательского интерфейса в их собственные компоненты. - Реализация дизайнов с использованием material-ui из figma и согласование с бэкендом для необходимых API.</li>`,
        `<li>Добавление документации с использованием <strong>JsDoc</strong> и коллекций <strong>Postman</strong>.</li>`
      ],
      en: [
        `<li>Implement an <strong>AI-assisted multi-stage form</strong> that takes some input from the user, sends it to 
		 			the lambda which then based on the results requires different input that has to be 
		 			rendered. Upon completing the data collection, the lambda will return a final result which 
		 			has to be integrated with the existing manual form.
		 		</li>`,
        `<li>
		 		<strong>Refactor</strong> class-based React components into functional, and extract logic and common ui
		 			into their own components. - Implement designs using <strong>material-ui</strong> from <strong>figma</strong> and coordinate
		 			with backend for needed apis
		 		</li>`,
        `<li>Add documentation using <strong>JsDoc</strong> and <strong>Postman</strong> collections.</li>`
      ]
    }
  },
  {
    id: '2',
    website: 'dox.tech',
    href: 'https://dox.tech/',
    title: 'Dox, Remote - Typescript Full Stack Developer',
    duration: { en: 'October 2021 - December 2022 (1 year)', ru: '' },
    summary: {
      en: "This was my first job, and it being in a startup environment, led me to learn a lot and work on things that I didn't know, nor even had the intention of learning (ex: Kubernetes). It was the first time I was challenged with real-world problems after doing many straightforward tasks/youtube tutorials.",
      ru: "Это была моя первая работа, и то, что она была в стартап-окружении, позволило мне многое узнать и работать над вещами, о которых я не знал, и даже не имел намерения изучать (например: Kubernetes). Это был первый раз, когда мне пришлось столкнуться с реальными проблемами после выполнения множества простых задач и уроков с YouTube."
    },
    tasks: {
      ru: [
        `<li>Разработка фронтенд-приложения на React с использованием TypeScript. Использование ReactQuery для управления данными.</li>`,
        `<li>Обработка уведомлений в реальном времени с использованием Socket.IO, аутентификация с использованием JWT-токенов.</li>`,
        `<li>Создание библиотеки компонентов с использованием Storybook и Styled-components.</li>`,
        `<li>Основная цель приложения - получение ввода пользователя и файлов (данные о батарее и измерения), их отправка на сервер, а затем отображение возвращенных данных после их обработки в виде различных диаграмм. Построение диаграмм выполняется с использованием собственной типобезопасной реализации библиотеки ChartJs.</li>`,
        `<li>Управление и помощь стажеру в адаптации, текущие задачи и проверка кода.</li>`,
        `<li>Администрирование инфраструктуры на AWS (с использованием Kubernetes и консоли Amazon).</li>`,
        `<li>Обслуживание и модернизация микросервисной архитектуры с использованием Node и routing-controllers.</li>`
      ],
      en: [
        `<li>Developed a <strong>React</strong> front-end application using <strong>Typescript</strong>, which main job was to take data inputted by the user, do some processing on it, 
          and then display findings using <strong>ChartJs</strong>. Used <strong>Tanstack-Query</strong>( react query at the time) for the api layer.</li>`,
        `<li>Implement Real-time notifications using <strong>Socket.IO</strong>,and authentication using <strong>jwt-tokens</strong> with help of <strong>react context</strong>.</li>`,
        `<li>Maintained and added on to a component library using <strong>Storybook</strong> , and <strong>Styled-components</strong>.</li>`,
        `<li>Build a custom <strong>typesafe</strong> wrapper over <strong>ChartJs</strong> which made our work cleaner.</li>`,
        `<li>Managed and helped an intern on onboarding, current ongoing tasks and <strong>code review</strong>.</li>`,
        `<li>Administered infrastructure on <strong>AWS</strong>(using kubernetes, and amazon console) </li>`,
        `<li>Maintained and helped work on a <strong>microservices architecture</strong> using node and routing-controllers.
        (i was mostly front-end up until the last 6 months,where i got invloved in the backend much more)</li>`
      ]
    }
  },
  {
    id: '5',
    website: 'bankerway.com',
    href: 'https://bankerway.com/Main/about-2/',
    title: 'BankerWay, Remote - TemenosT24 Banking Technical Consultant Training',
    duration: { en: 'September 2021 (1 Month)', ru: '' },
    summary: {
      en: "This was a training I took to get an idea of the fintech world, helping me choose my path as a developer.",
      ru: "Это было обучение, которое я прошел, чтобы понять мир финтеха, помогая мне выбрать свой путь как разработчика."
    },
    tasks: {
      en: [`
				<li>
					Underwent Temenos T24 banking system training. Used and developed code for the T24 system
					using JBASIC and TAFJ framework that enables customization on basic banking features in
					Temenos T24.
				</li>`,
        `<li>
					During the learning period, I was one of the highest performing students, held zoom
					meetings to help tutor others. I was given a certificate and a job offer at the end.
				</li>`
      ], ru:
        [
          `<li>Прошел обучение по банковской системе Temenos T24. Использовал и разрабатывал код для системы T24 с использованием JBASIC и TAFJ-фреймворка, который позволяет настраивать основные банковские функции в Temenos T24.</li>`,
          `<li>В период обучения я был одним из самых успешных студентов, проводил встречи в Zoom, чтобы помогать другим студентам. В конце получил сертификат и предложение о работе.</li>`
        ]

    }
  },
  {
    id: '6',
    title: 'Let’s Grant, Remote - Full Stack Web-Dev Bootcamp',
    duration: { en: 'June 2020 - September 2020 (4 Months)', ru: '' },
    tasks: {
      en: [
        `	<li> 
		 			Receive hands-on web development training with React (hooks), Redux, Firebase, Git Heroku,
		 			and MongoDb. Ended the bootcamp with developing a full-stack website.
		 		</li>`
      ], ru:
        [
          `<li>Проходил практическое обучение веб-разработке с использованием React (hooks), Redux, Firebase, Git, Heroku и MongoDb. Завершил буткемп, разработав полноценный веб-сайт.</li>`
        ]

    }
  },
  {
    id: '7',
    title: 'SolWeavers,  Hamra Beirut - Web-Dev Internship',
    duration: { en: 'July 2018 - August 2018 (2 Months)', ru: '' },
    tasks: {
      en: [
        `<li>
					Learn basics of javascript and web development, with a little of React class components
				</li>`
      ], ru: [
        `<li>Изучение основ JavaScript и веб-разработки, с небольшим углублением в классовые компоненты React.</li>`
      ]
    },
    summary: {
      en: "This was a beginner to intermediate level bootcamp that upon completion gives you a certificate you can submit to university in order to finish a required course.",
      ru: "Это был буткемп начального и среднего уровня, который по завершении предоставляет вам сертификат, который вы можете предоставить в университет, чтобы завершить требуемый курс."
    }
  }]


  return { experienceData }


}

