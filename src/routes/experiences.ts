import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";


enum Keys {
  Experience = 'experience'
}

function initExperiences() {
  const openedSet = new Set<string>()
  const store = writable(openedSet)
  setContext(Keys.Experience, store)
  return store
}

function getExperiences() {
  return getContext<Writable<Set<string>>>(Keys.Experience)
}

export { initExperiences, getExperiences }
