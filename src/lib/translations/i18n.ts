import { derived, writable, type Readable } from "svelte/store";
import translations, { type TLocales, type TTranslationKeys } from "./translations";


const locale = writable("ru");
const locales = Object.keys(translations);

function translate(locale: TLocales, key: TTranslationKeys, vars: Record<string, string>) {
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

const callback = ($locale: TLocales) => (key: TTranslationKeys, vars = {}) => translate($locale, key, vars)
const t: Readable<ReturnType<typeof callback>> = derived(locale, callback);

export { t, locale, locales }


