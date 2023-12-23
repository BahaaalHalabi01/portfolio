import { derived, writable, type Readable, type Writable } from "svelte/store";
import translations, { type TLocales, type TTranslationKeys } from "./translations";
import { browser } from "$app/environment";
import { getContext, setContext } from "svelte";

enum ContextKeys  {
  translate = 'translate',
  locale = 'locale'
}

const startingLocale = 'ru' as TLocales

const callback = ($locale: TLocales) => (key: TTranslationKeys, defaultLocale?: TLocales, vars = {}) => translate($locale, key, vars, defaultLocale)


const createLocale = (l?: TLocales) => {
  const locales = writable(l ?? startingLocale);
  setContext(ContextKeys.locale, locales)
  return locales
}

const getLocale = () => {
  return getContext(ContextKeys.locale) as Writable<TLocales>
}


const createTranslations = () => {
  const l = getLocale()
  if (!locales) throw new Error('Create locale store before calling translation')

  const t: Readable<ReturnType<typeof callback>> = derived(l, callback);
  setContext(ContextKeys.translate, t)
  return t
}



const getTranslations = () => {
  return getContext(ContextKeys.translate) as Readable<ReturnType<typeof callback>>
}


const locales = Object.keys(translations);

function translate(l: TLocales, key: TTranslationKeys, vars: Record<string, string>, defaultLocale = startingLocale ) {

  //load locale from server if it exists
  let locale = browser ? l : defaultLocale

  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}


export { getLocale, locales, createLocale, createTranslations, getTranslations }





