<script lang="ts">
  import { CONTENT } from '../config'

  import { portfolioOpen } from '../stores/portfolio'
  import projects from '../stores/projects'
  import services from '../stores/services'
  import { getService } from '../stores/services'
  import { getSkill } from '../stores/skills'

  import ServicesFilter from '../components/portfolio/ServicesFilter.svelte'
  import Skills from '../components/services/Skills.svelte'
  import Tags from '../components/services/Tags.svelte'

  const { title, subheading, filters: filterNames } = CONTENT.sections.portfolio

  let filters = {
    services: [],
    skills: [],
    tags: [],
  }

  $: console.info(filters)
</script>

{#if $portfolioOpen}
  <section id="portfolio">
    <h1 class="title">{title}</h1>
    <h2 class="title">{subheading}</h2>
    <div class="filter-area">
      <ServicesFilter services={$services} bind:value={filters.services} />
      <div class="skills">
        {#each $services as service}{/each}
      </div>
      <!-- <Tags /> -->
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
