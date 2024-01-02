import type { TLocales } from '$src/lib/translations';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const localeHeader = event.request.headers.get('accept-language') ?? ''
  const preferredLanguage = localeHeader.split(',')[0].trim();
  let locale = preferredLanguage.split(';')[0].trim().split('-')[0] as TLocales

  if (locale !== 'en' && locale !== 'ru') locale = 'ru'

  return {
    locale
  };
};
