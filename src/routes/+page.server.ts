import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async event => {


  const experienceData: Array<{ title: string, duration: string, summary: string, tasks: Array<string>, website?: string }> = [{
    title: 'Bedu, Remote - Tech Lead',
    duration: 'October 2022 - December 2023 (1 year 2 months)',
    summary: 'Biggest takeaway from this work, was me vetting myself if i am able to take tech decisions, validate them, and implement them. It gave me big confidence to know that i understand what i am doing, and that i can take decisions that will help the product move forward and perform much better.',
    tasks: [
      'Rewrite entire frontend (UI/UX and api layer) which was using material-ui,redux toolkit, and NextJs 12 to use NextJs 13 ( add SSR and ISR ), TailwindCSS, and use context api with tanstack-query for the api layer. This vastly improved the performance and responsiveness of the system.',
      'Correctly configure typescript on the api layer on the frontend and for the backend codebase',
      'Manage AWS infrastructure using infrastructure as code and amazon console.',
      'Take design (zeplin/figma/adobe-xd) and transform it into code using tailwind css or material-ui.',
      'Architect the needed backend work, discuss with CTO and develop upon approval.',
      'Manual testing in a testing environment upon completion of the backend and frontend work.',
      'Onboard a part-time developer for helping in QA/Back-end work, assign him with tasks, help if needed (usually done through pair programming), and code review upon finishing the task.'
    ]
  }]



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

  return { titles  }


}
