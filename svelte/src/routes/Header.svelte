<script lang="ts">
  import Icon from '@iconify/svelte'
  import { fly, fade } from 'svelte/transition'

  import { NAV } from '$lib/config'

  let mobileNav = false
  let mobileNavStep2 = false
</script>

<header id="header">
  <a href="/" class="logo">
    <img src="./assets/logo.png" alt="Logo" />
    <span>Hüsnü Mahmudizer</span>
  </a>

  <button class="mobile-nav-toggle" on:click={() => (mobileNav = !mobileNav)}><Icon icon="eva:menu-outline" /></button>

  <nav>
    {#each NAV as option}
      <a href={option?.src} on:click={option?.onClick}>{option.name}</a>
    {/each}
    <a class="button secondary sm" href="#contact">Contact</a>
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
        <a class="secondary sm" href="#contact">Contact</a>
      </nav>
    {/if}
  {/if}
</header>

<style lang="scss">
  header {
    background-color: #343a54;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    inset: 0;
    bottom: auto;
    z-index: 9;
    @include section;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        $height: clamp(30px, max(4vh, 2.4vw), 75px);
        font-size: $height;
        height: $height;
        margin: 10px 0;
      }
      span {
        white-space: nowrap;
        font-size: clamp(1rem, max(2vh, 1.2vw), 1.6rem);
        font-family: Kanit, Montserrat, sans-serif;
        margin-left: 0.75em;
      }
    }

    .mobile-nav-toggle {
      display: flex;
      background-color: transparent;
      color: white;
      font-size: 2rem;
      justify-content: center;
      align-items: center;

      @include md {
        display: none;
      }
    }

    nav {
      display: none;
      font-size: 1rem;

      @include md {
        display: block;
      }

      a {
        font-family: Poppins, Kanit, Segoe UI, sans-serif;
        font-size: 1em;
        line-height: 1;
        padding: 0.5em 1em;

        @include hover;
      }

      &.mobile-nav {
        display: flex;
        position: fixed;
        inset: 0 0 0 auto;
        background-color: #4f5779;
        flex-direction: column;
        z-index: 999;
        padding: 10vh 1.5em;

        @include md {
          display: none;
        }

        .special {
          margin-top: 0.5em;
        }
      }
    }
    .mobile-nav_bg {
      position: fixed;
      inset: 0;
      background-color: #0004;
      z-index: 99;
    }
  }
</style>
