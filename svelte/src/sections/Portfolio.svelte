<script lang="ts">
  import { fly } from 'svelte/transition'
  import { get } from 'svelte/store'

  import { CONTENT } from '../config'

  import { portfolioOpen, filterOptions, filterParams } from '../stores/portfolio'

  import ServicesFilter from '../components/portfolio/ServicesFilter.svelte'
  import SkillsFilter from '../components/portfolio/SkillsFilter.svelte'
  import TagsFilter from '../components/portfolio/TagsFilter.svelte'

  const { title, subheading, filters: filterNames } = CONTENT.sections.portfolio

  $: console.info($filterParams)
  $: console.info($filterOptions)
</script>

{#if $portfolioOpen}
  <section id="portfolio" transition:fly={{ x: 500, duration: 300, opacity: 0 }}>
    <h1 class="title">{title}</h1>
    <h2 class="subheading">{subheading}</h2>
    <div class="filter-area">
      <ServicesFilter services={$filterOptions.services} bind:value={$filterParams.services} />
      <SkillsFilter skills={$filterOptions.skills} bind:value={$filterParams.skills} />
      <TagsFilter tags={$filterOptions.tags} bind:value={$filterParams.tags} />
    </div>
    <div class="projects" />
  </section>
{/if}

<style lang="scss">
  // portfolio section is a fullscreen modal

  section {
    @include section;
    padding-top: 10vh;
    position: fixed;
    inset: 0;
    background-color: var(--color-bg);
  }

  .filter-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10vh;
  }
</style>
