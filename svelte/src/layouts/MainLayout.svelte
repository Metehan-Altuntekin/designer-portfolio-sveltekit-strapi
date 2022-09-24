<script lang="ts">
  import Header from '../sections/Header.svelte'
  import Footer from '../sections/Footer.svelte'
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  main > :global(section) {
    @include section;
  }
</style>
