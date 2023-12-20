import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async event => {

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

  return { titles }


}
