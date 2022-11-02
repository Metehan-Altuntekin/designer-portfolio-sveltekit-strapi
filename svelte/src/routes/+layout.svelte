<script lang="ts">
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'

  import ProjectDetailsModal from '$lib/components/ProjectDetailsModal.svelte'
  import NotificationProvider from './NotificationProvider.svelte'

  import content from '$lib/stores/content'

  $: fullName = $content.owner.name + ' ' + $content.owner.surname
</script>

<svelte:head>
  <link rel="icon" type="image" href={$content.owner.logo} />
  <!-- <meta name="description" content={$content.description} /> -->
</svelte:head>

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
