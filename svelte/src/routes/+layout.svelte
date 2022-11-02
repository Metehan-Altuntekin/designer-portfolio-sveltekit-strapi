<script lang="ts">
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'

  import ProjectDetailsModal from '$lib/components/ProjectDetailsModal.svelte'
  import NotificationProvider from './NotificationProvider.svelte'
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
<ProjectDetailsModal />
<NotificationProvider />

<style lang="scss" global>
  @import '$lib/styles/global.css';
  main > :global(section) {
    @include section;
  }
</style>
