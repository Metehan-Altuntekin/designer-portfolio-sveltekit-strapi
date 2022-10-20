<script lang="ts">
  // import '../style/global.css'
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'

  import ProjectDetailsModal from '$lib/components/ProjectDetailsModal.svelte'
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
<ProjectDetailsModal />

<style lang="scss">
  main > :global(section) {
    @include section;
  }
</style>
