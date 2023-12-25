// place files you want to import through the `$lib` alias in this folder.


enum ContextKeys {
  translate = 'translate',
  locale = 'locale',
  limit = 'lmt',
  experience = 'exp'
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export {cn,ContextKeys}
