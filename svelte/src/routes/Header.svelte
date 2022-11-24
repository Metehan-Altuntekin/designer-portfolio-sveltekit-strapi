<script lang="ts">
  import Icon from '@iconify/svelte'
  import { fly, fade } from 'svelte/transition'

  import { NAV, ROUTES, OWNER } from '$lib/config'
  import content from '$lib/stores/content'

  let mobileNav = false
  let mobileNavStep2 = false

  const fullName = OWNER.name + ' ' + OWNER.surname
  $: nav = $content.sections.header.nav
</script>

<header id="header">
  <a href={ROUTES.HOME} class="logo" title={nav.home}>
    <img src="./assets/logo.png" alt="Logo" />
    <span>{fullName}</span>
  </a>

  <button class="mobile-nav-toggle" on:click={() => (mobileNav = !mobileNav)}><Icon icon="eva:menu-outline" /></button>

  <nav>
    {#each NAV as option}
      <a href={option?.src} on:click={option?.onClick}>{nav[option.name.toLowerCase()]}</a>
    {/each}
    <a class="button secondary sm" href={ROUTES.CONTACT}>{nav?.contact}</a>
  </nav>

  <!-- TODO create a component for mutually transitioning elements like these -->
  <!-- This had to be done in that way because Svelte apparently doesn't allow 2 elements to have transition at the same time-->
  {#if mobileNav}
    <div
      class="mobile-nav_bg"
      on:click={() => (mobileNavStep2 = false)}
      on:introend={() => (mobileNavStep2 = true)}
      transition:fade|local={{ duration: 100 }}
    />
    {#if mobileNavStep2}
      <nav
        class="mobile-nav"
        on:outroend={() => (mobileNav = false)}
        on:click={() => (mobileNavStep2 = false)}
        transition:fly|local={{ duration: 200, x: 150, y: 0, opacity: 0 }}
      >
        {#each NAV as option}
          <a href={option?.src} on:click={option?.onClick}>{option.name}</a>
        {/each}
        <a class="secondary sm" href={ROUTES.CONTACT}>Contact</a>
      </nav>
    {/if}
  {/if}
</header>

<style lang="scss">
  header {
    --header-bg-color: #343a54;
    --mobile-nav-bg-color: #4f5779;
    --header-text-color: #fff;

    --header-logo-size: clamp(30px, max(4vh, 2.4vw), 75px);
    --header-logo-text-size: calc(var(--header-logo-size) * 0.5);

    @include section;

    display: flex;
    justify-content: space-between;
    align-items: center;

    inset: 0;
    position: fixed;
    bottom: auto;
    z-index: 9;

    background-color: var(--header-bg-color);
  }

  // Logo and name of the OWNER
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      font-size: var(--header-logo-size);
      margin: 10px 0;
      height: var(--header-logo-size);
    }
    span {
      margin-left: 0.75em;
      color: var(--header-text-color);
      white-space: nowrap;
      font-size: var(--header-logo-text-size);
      font-family: Kanit, Montserrat, sans-serif;
    }
  }

  // Toggle button for mobile nav
  .mobile-nav-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--header-text-color);
    font-size: 2rem;

    @include md {
      display: none;
    }
  }

  // Desktop nav and basis for mobile nav
  nav {
    display: none;

    font-size: 1rem;

    @include md {
      display: flex;
    }

    a {
      font-family: Poppins, Kanit, Segoe UI, sans-serif;
      font-size: 1em;
      line-height: 1;
      padding: 0.5em 1em;

      @include hover;
    }
  }

  // Mobile nav
  nav.mobile-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0 0 0 auto;
    z-index: 999;
    padding: 10vh 1.5em;
    background-color: var(--mobile-nav-bg-color);

    @include md {
      display: none;
    }
  }

  .mobile-nav_bg {
    position: fixed;
    inset: 0;
    z-index: 99;
    background-color: #0004;
  }
</style>
