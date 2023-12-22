
const translations = {
  en: {
    "nav.title": "Hello, World!",
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.work": "work",
    "nav.contact": "contact",
    "nav.resume": "get my resume",
    "nav.name": "Bahaa al Halabi",
    "homepage.welcome": "Hi <strong>{{name}}</strong>, how are you?",
    "homepage.time": "The current time is: {{time}}",
  },
  ru: {
    "nav.title": "Hello, World!",
    "nav.about": "об меня",
    "nav.experience": "опыт",
    "nav.work": "моя работа",
    "nav.contact": "контакт",
    "nav.resume": "скачать мое резюме",
    "nav.name": "Бахаа ал Халаби",
  },
}
type TLocales = keyof typeof translations
type TTranslationKeys = keyof typeof translations['en']
export type { TTranslationKeys, TLocales }


export default translations
