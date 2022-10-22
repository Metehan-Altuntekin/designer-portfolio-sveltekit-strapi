<script lang="ts">
  import { fly } from 'svelte/transition'

  import { CONTENT } from '$lib/config'

  import { filterOptions, filterParams, filteredProjects } from '$lib/stores/portfolio'
  import { openModal } from '$lib/stores/projectDetailsModal'

  import ServicesFilter from '$lib/components/portfolio/ServicesFilter.svelte'
  import SkillsFilter from '$lib/components/portfolio/SkillsFilter.svelte'
  import TagsFilter from '$lib/components/portfolio/TagsFilter.svelte'

  const { title, subheading, filters: filterNames } = CONTENT.sections.portfolio

  let displayMobileFilter = false

  function toggleFilterModal() {
    displayMobileFilter = !displayMobileFilter
  }
</script>

<section id="portfolio" transition:fly={{ x: 500, duration: 300, opacity: 0 }}>
  <header>
    <div class="heading-area">
      <h1 class="title">{title}</h1>
      <h2 class="subheading">{subheading}</h2>
    </div>
    <div class="filter-area">
      <ServicesFilter services={$filterOptions.services} bind:value={$filterParams.services} />
      <SkillsFilter skills={$filterOptions.skills} bind:value={$filterParams.skills} />
      <TagsFilter tags={$filterOptions.tags} bind:value={$filterParams.tags} />
      <button class="button secondary sm">Reset</button>
    </div>
  </header>
  <div class="projects-area">
    {#each $filteredProjects as project (project.id)}
      <figure class="project" title={project.name} on:click={() => openModal(project)}>
        <img src={project.thumbnail} alt={project.name} />
      </figure>
    {/each}
  </div>
  <!-- {#if displayMobileFilter}
    <div class="mobile-filter-modal" transition:fly={{ y: 100 }}>
      <ServicesFilter services={$filterOptions.services} bind:value={$filterParams.services} />
      <SkillsFilter skills={$filterOptions.skills} bind:value={$filterParams.skills} />
      <TagsFilter tags={$filterOptions.tags} bind:value={$filterParams.tags} />
      <div class="buttons">
        <button class="button sm" on:click={toggleFilterModal}>Close</button>
        <button class="button secondary sm">Reset</button>
      </div>
    </div>
  {/if}
  <nav class="mobile-nav">
    <button class="button sm" on:click={toggleFilterModal}>Filters</button>
    <button class="button secondary sm">Back</button>
  </nav> -->
</section>

<style lang="scss">
  @mixin mobile-breakpoint {
    @include md {
      @content;
    }
  }

  section {
    --gap: 50px;
    display: grid;
    grid-auto-flow: row;
    align-items: start;
    gap: var(--gap);

    // remove padding from global section styling
    padding: 0;
    // add margin to top to prevent header overflow
    margin-top: 15vh;
    padding-bottom: 10vh;

    @include mobile-breakpoint {
      grid-auto-flow: column;
      grid-template-columns: clamp(300px, 30%, 600px) 1fr;
      padding-left: var(--gap);
      padding-bottom: 20vh;
    }
  }

  section > header {
    @include section;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--gap);

    @include mobile-breakpoint() {
      padding: 0;
      position: sticky;
      top: 15vh;
    }
  }

  section > header > .heading-area {
    padding-left: 1.5em;
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 100%;
      width: 4px;
      background-color: var(--color-primary);
      position: absolute;
      left: 0;
      top: 0;
    }

    .title {
      @include title;
      margin-bottom: 0.2em;
      margin-top: 0;
    }

    .subheading {
      @include title;
      color: var(--color-primary);
      font-size: clamp(1rem, 3vmin, 2.5rem);
      margin: 0;
    }
  }

  section > header > .filter-area {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 24px;
    gap: 24px;

    border-radius: 24px;

    background-color: #0005;
    backdrop-filter: blur(40px);

    @include lg {
      padding: 40px;
    }
  }

  section > .projects-area {
    // make a responsive grid container
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    @include sm {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    @include md {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    @include lg {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    &:hover {
      .project {
        filter: brightness(0.7);
      }
    }

    .project {
      transition: 0.3s;
      aspect-ratio: 1;
      background-color: cadetblue;
      cursor: pointer;
      @include flex();

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        filter: brightness(1);
      }
    }
  }

  // filter area should be a modal in mobile devices

  // hide the filter area on mobile devices
  section > header > .filter-area {
    display: none;
    @include mobile-breakpoint() {
      display: flex;
    }
  }

  // mobile filter area is a modal
  section > .mobile-filter-modal {
    position: fixed;
    z-index: 9999;
    inset: auto;
    margin: $page-padding;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 24px;
    gap: 16px;

    border-radius: 20px;

    background-color: #0005;
    backdrop-filter: blur(40px);

    .buttons {
      display: flex;
      gap: 1rem;
    }
  }
  section > .mobile-nav {
    position: fixed;
    z-index: 999;
    inset: auto 0 0 0;
    display: flex;
    background-color: var(--color-bg);
    justify-content: center;
    gap: 1.5em;
    padding: 1.5em;
    filter: drop-shadow(0 0 1em #000a);

    @include mobile-breakpoint {
      display: none;
    }
  }
</style>
