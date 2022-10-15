import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const portfolioOpen: Writable<boolean> = writable(false);

export function openPortfolio(): void {
  portfolioOpen.set(true)
  window.location.hash = 'portfolio' // set hash when project is selected

  // when hash changes, close modal
  window.onhashchange = (e: HashChangeEvent) => {
    if(e.oldURL.includes('portfolio')) closePortfolio() // close modal if hash is changed from portfolio
  }
}

export function closePortfolio(): void {
  portfolioOpen.set(false)
  
  // replace url with no hash
  if(window.location.hash.includes ('portfolio')) {
    window.history.replaceState(null, '', window.location.pathname)
  }
}