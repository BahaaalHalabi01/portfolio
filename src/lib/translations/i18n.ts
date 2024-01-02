import { derived, writable, type Readable, type Writable } from "svelte/store";
import translations, { type TLocales, type TTranslationKeys } from "./";
import { getContext, setContext } from "svelte";
import { ContextKeys } from "$lib";



const defaultLocale = 'ru' as TLocales


/**@todo maybe this isn't needed, investigate**/
const createLocale = (l?: TLocales) => {
  const locales = writable(l ?? defaultLocale);
  setContext(ContextKeys.locale, locales)
  return locales
}

const getLocale = () => {
  return getContext(ContextKeys.locale) as Writable<TLocales>
}

const translateCallback = ($locale: TLocales) => (key: TTranslationKeys, vars = {}) => translate($locale, key, vars)


const createTranslations = () => {
  const l = getLocale()
  if (!locales) throw new Error('Create locale store before calling translation')

  const t: Readable<ReturnType<typeof translateCallback>> = derived(l, translateCallback);
  setContext(ContextKeys.translate, t)
  return t
}


const getTranslations = () => {
  return getContext(ContextKeys.translate) as Readable<ReturnType<typeof translateCallback>>
}


const locales = Object.keys(translations);

function translate(l: TLocales, key: TTranslationKeys, vars: Record<string, string>) {


  let locale = l
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) {
    console.error(`no translation found for ${locale}.${key}`);
    return key
  }

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}


export { getLocale, locales, createLocale, createTranslations, getTranslations  }





