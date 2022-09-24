<script lang="ts">
  import Header from '../sections/Header.svelte'
  import Footer from '../sections/Footer.svelte'

  import ProjectDetailsModal from '../components/ProjectDetailsModal.svelte'
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
