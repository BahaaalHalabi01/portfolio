import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async event => {


  const experienceData: Array<{ title: string, duration: string, summary: string, tasks: Array<string>, website?: string, href?: string, id: string }> = [{
    id: '1',
    website: 'bedu.me',
    href: 'https://bedu.me',
    title: 'Bedu, Remote - Tech Lead',
    duration: 'October 2022 - December 2023 (1 year 2 months)',
    summary: 'Biggest takeaway from this work, was me vetting myself if i am able to take tech decisions, validate them, and implement them. It gave me big confidence to know that i understand what i am doing, and that i can take decisions that will help the product move forward and perform much better.',
    tasks: [
      `<li>Rewrite entire frontend (UI/UX and api layer) which was using material-ui,redux toolkit, and NextJs 12 to use <strong>NextJs 13</strong> &nbsp;(add&nbsp;SSR and ISR for&nbsp;<strong>instant&nbsp;load&nbsp;times</strong>), <strong>TailwindCSS</strong>, and use context api with <strong>tanstack-query</strong> for the api layer. This vastly improved the performance and responsiveness of the system.</li>`,
      `<li>Correctly configure <strong>Typescript</strong> on the api layer on the frontend and for the backend codebase</li>`,
      `<li>Manage AWS infrastructure using <strong>Infrastructure as Code (Typescript)</strong> and Amazon console.</li>`,
      `<li>Take design  in zeplin/figma/adobe-xd and transform it into code using Tailwindcss with <strong>Radix-ui</strong> or <strong>Material-ui</strong>.</li>`,
      `<li>Architect the needed <strong>infrastructure</strong> changes when needed, present it and discuss findings CTO then develop upon approval.</li>`,
      `<li>Use testing enviornment to validate changes. Write tests for the backend using <strong>Jest</strong>, and manually test in the frontend .</li>`,
      `<li>Onboard a part-time developer for helping in QA/Back-end work, assign him with tasks, help if needed which usually done through <strong>pair programming</strong>, and <strong>code review</strong> upon finishing the task.</li>`,
      `<li>After the initial 6 months, i was the only one working on the tech side, so i had to communicate directly to the product owner/company owner for changes and progress, and take <strong>major tech decisions</strong> on my own</li>`
    ]
  },
  {
    id: '2',
    website: 'dox.tech',
    href: 'https://dox.tech/',
    title: 'Dox, Remote - Typescript Full Stack Developer',
    duration: 'October 2021 - December 2022 (1 year)',
    summary: "This was my first job, and it being in a startup environment, led me to learn a lot and work on things that i didn't know, nor even had the intention of learning (ex: kubernetes). It was the first time i was challanged with real world problems after doing many straight-forward tasks/youtube tutorials.",
    tasks: [
      `<li>Developed a React front-end application using Typescript. Used ReactQuery for data management.</li>`,
      `<li>Real-time notifications were handled using Socket.IO,and authentication using jwt-tokens.</li>`,
      `<li>Created a component library using Storybook , and Styled-components.</li>`,
      `<li>The application’s main purpose was to take user input and files (battery related data and measurnments), send them to the backend and display the returned data after parsing it as different Charts. Charting was done using a custom typesafe implementation of ChartJs library.</li>`,
      `<li>Managed and helped an intern on onboarding, current ongoing tasks and code review.< /li>`,
      `<li>Administered infrastructure on AWS(using kubernetes, and amazon console) < /li>`,
      `<li>Maintained and upgraded a microservices architecture using node and routing - controllers.</li>`
    ]
  }

  ]



  /**@todo store them in db*/
  const titles = [
    'Bedu, Remote - Tech Lead',
    'Qaff.com, Remote-   React Front-end Developer',
    'Dox, Remote - NextJs Full Stack Developer',
    'Dox, Remote - Typescript Full Stack Developer',
    'BankerWay, Remote - Temenos T24 Banking Technical Consultant',
    'Let’s Grant, Remote - Full Stack Web-Dev Bootcamp',
    'SolWeavers,  Hamra Beirut - Web-Dev Internship'
  ];

  return { experienceData }


}
