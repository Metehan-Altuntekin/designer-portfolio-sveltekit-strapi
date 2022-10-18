<script lang="ts">
  import { fly } from 'svelte/transition'
  import { get } from 'svelte/store'

  import { CONTENT } from '../config'

  import { portfolioOpen, filterOptions, filterParams, filteredProjects } from '../stores/portfolio'

  import ServicesFilter from '../components/portfolio/ServicesFilter.svelte'
  import SkillsFilter from '../components/portfolio/SkillsFilter.svelte'
  import TagsFilter from '../components/portfolio/TagsFilter.svelte'

  import Project from '../components/services/Project.svelte'

  const { title, subheading, filters: filterNames } = CONTENT.sections.portfolio
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
    <div class="projects">
      {#each $filteredProjects as project (project.id)}
        <Project {project} />
      {/each}
    </div>
  </section>
{/if}

<style lang="scss">
  // portfolio section is a fullscreen modal

  #portfolio {
    @include section;
    padding-top: 10vh;
    position: fixed;
    inset: 0;
    background-color: var(--color-bg);
  }

  #portfolio > .title {
    @include title;
    margin-bottom: 0.2em;
  }

  #portfolio > .subheading {
    @include title;
    color: var(--color-primary);
    font-size: clamp(1rem, 3vmin, 2.5rem);
  }

  .filter-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10vh;
  }

  .projects {
    // make a responsive grid container
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    overflow-y: auto;
  }
</style>
