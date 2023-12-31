
const translations = {
  en: {
    'contact.title': 'Contact Me!',
    'btn.toggle-all': 'Toggle All',
    'btn.limit-false': 'Limit to one experience open at a time',
    'btn.limit-true': 'Open as many as you want',
    'and': 'and',
    'with': 'with',
    'superior': 'superior',
    'text-editor': 'text editor',
    'developer': 'developer',
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.skills": "skills",
    "nav.contact": "contact",
    "nav.resume": "get my resume!",
    "nav.resume-re": "my resume!",
    "name": "Bahaa al Halabi",
    "homepage.welcome": "Welcome to my portfolio, my name is",
    "homepage.welcome-sub": "I turn ideas into cool web applications",
    "homepage.about-0": "I am a senior full stack web developer. I mainly use ",
    "homepage.about-1": "to build my frontend apps, and",
    "homepage.about-2": "with various",
    "homepage.about-3": "for the backend",
    "homepage.about-4": "I worked up until now exclusively with startups, constantly taking on difficult tasks outside of my scope, enabling me to grow significantly.",
    "homepage.about-5": "I would like to believe that i am not a",
    "homepage.about-6": "and that i understand the fundamentals of programming will, enabling me to dive into other technologies.",
    "homepage.about-7": 'being on top of the list.',
    "homepage.about-8": 'This website was built using my favorite meta-framework',
    "homepage.about-9": "written using the",
    "homepage.about-10": "I use",
    "homepage.about-11": "as my preferred operating system.",
    "homepage.find-website": "If you are interested,find this website's code on my",
    "skills.title": "My Skills",
    "skills.front": "Frontend",
    "skills.thanks": "Watching many content creators helped me advance my career and take a leap and learn some of the things above.",
    "skills.thanks-0": "Special thank to",
    'skills.thanks-1': "as these two channels helped me understand the ecosystem from completely different point of views. Give them a follow, you will not regret it!",
    "skills.tooling": "Tooling",
    "skills.backend": "Backend",
    "exp.title": "My Work Experience",
  },
  ru: {
    'contact.title': 'Свяжитесь со мной!',
    'btn.toggle-all': 'Переключить все',
    'btn.limit-false': 'Ограничение до одного опыта, открытого одновременно',
    'btn.limit-true': 'Открывайте столько, сколько хотите',
    "exp.title": "Мой опыт работы",
    'and': 'и',
    'with': 'с',
    'superior': 'начальство',
    'text-editor': 'Текстовый редактор',
    'developer': 'разработчик',
    "nav.about": "об меня",
    "nav.experience": "опыт",
    "nav.skills": "мои навыки",
    "nav.contact": "контакт",
    "nav.resume": "скачать мое резюме!",
    "nav.resume-re": "мое резюме!",
    "name": "Бахаа ал Халаби",
    "homepage.welcome": "Добро пожаловать в мое портфолио, меня зовут",
    "homepage.welcome-sub": "Я превращаю идеи в крутые веб-приложения",
    "homepage.about-0": "Я старший веб-разработчик полного стека. в основном использую ",
    "homepage.about-1": "для создания моих интерфейсных приложений, и",
    "homepage.about-2": "с различными",
    "homepage.about-3": "для бзкенда",
    "homepage.about-4": "До сих пор я работал исключительно со стартапами, постоянно берясь за сложные задачи, выходящие за рамки моей компетенции, что позволило мне значительно вырасти.",
    "homepage.about-5": "Мне хотелось бы верить, что я не",
    "homepage.about-6": "и что я понимаю основы программирования, что позволит мне погрузиться в другие технологии.",
    "homepage.about-7": 'быть на вершине списка.',
    "homepage.about-8": 'Этот сайт был разработан с использованием моего любимого мета-фреймворка.',
    "homepage.about-9": "написано с использованием",
    "homepage.about-10": "I use",
    "homepage.about-11": "как моя любимая операционная система.",
    "homepage.find-website": 'Если вам интересно, найдите код этого сайта на моем',
    "skills.title": "Мои навыки",
    "skills.front": "Фронтенд",
    "skills.thanks": "Наблюдение за многими создателями контента помогло мне продвинуться по карьерной лестнице, сделать шаг вперед и научиться некоторым из вышеперечисленных вещей.",
    "skills.tooling": "Оснастка",
    "skills.thanks-0": "Особая благодарность",
    "skills.thanks-1": "поскольку эти два канала помогли мне понять экосистему с совершенно разных точек зрения. Подпишитесь на них, вы не пожалеете!",
    "skills.backend": "Бэкенд",
  },
}
type TLocales = keyof typeof translations
type TTranslationKeys = keyof typeof translations['en']
export type { TTranslationKeys, TLocales }


export default translations
