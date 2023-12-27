// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  namespace Calendly {
    interface TInitInlineWidgetParams {
      url: string
      parentElement: HTMLElement | null
    }
    function initInlineWidget(params: {}): void

  }


}

export { };
