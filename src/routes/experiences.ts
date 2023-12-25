import { ContextKeys } from "$src/lib";
import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

const openedSet = new Set<string>()
const store = writable(openedSet)

function initExperiences() {
  setContext(ContextKeys.experience, store)
  return store
}

function getExperiences() {
  return getContext<Writable<Set<string>>>(ContextKeys.experience)
}

export { initExperiences, getExperiences }
