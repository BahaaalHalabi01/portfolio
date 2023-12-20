import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";


enum Keys {
  Experience = 'experience'
}

function initExperiences() {
  const openedSet = new Map<string,boolean>()
  const store = writable(openedSet)
  setContext(Keys.Experience, store)
  return store
}

function getExperiences() {
  return getContext<Writable<Map<string,boolean>>>(Keys.Experience)
}

export { initExperiences, getExperiences }
