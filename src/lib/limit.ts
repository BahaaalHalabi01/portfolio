import { getContext, setContext } from "svelte";
import { ContextKeys } from ".";
import { writable, type Writable } from "svelte/store";

function setLimit(l = false) {

  return setContext(ContextKeys.limit, writable(l));
}

function getLimit() {
  return getContext(ContextKeys.limit) as Writable<boolean>

}

export { setLimit, getLimit }
