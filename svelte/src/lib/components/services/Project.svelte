<script lang="ts">
  import { fly } from 'svelte/transition'
  // types
  import type { Project } from '$lib/types'
  // stores
  import services from '$lib/stores/services'
  import skills from '$lib/stores/skills'
  import { openModal } from '$lib/stores/projectDetailsModal'

  export let project: Project

  export let aspectRatio: number | string = 16 / 9

  const { id, name, thumbnail: src, relatedServices, relatedSkills, relatedTags } = project
</script>

<figure transition:fly={{ y: 100 }} on:click={() => openModal(project)} style={`--aspect-ratio:${aspectRatio}`}>
  <img {src} alt={name} />
  <figcaption>
    <div class="left-col">
      <h1>{name}</h1>
      <h2>
        {#each relatedServices as serviceId}
          {@const service = $services.find((e) => e.id === serviceId)}
          {#if service}
            <span>{service.name}</span>
          {/if}
        {/each}
      </h2>
    </div>
    <div class="right-col">
      <div class="skills">
        {#each relatedSkills.slice(0, 2) as skillId}
          {@const skill = $skills.find((e) => e.id === skillId)}
          {#if skill}
            <img src={skill.icon} alt={skill.name} title={skill.name} />
          {/if}
        {/each}
      </div>
      <div class="tags">
        {#each relatedTags.slice(0, 2) as tag}
          <span class="chip">{tag}</span>
        {/each}
      </div>
    </div>
  </figcaption>
</figure>

<style lang="scss">
  figure {
    --project-name-size: clamp(1rem, 2vw, 2rem);
    --project-service-size: clamp(0.85rem, 1.5vw, 1.3rem);
    --skill-size: clamp(1.5rem, 3vw, 2.5rem);
    --tag-font-size: clamp(0.6rem, 1.5vw, 1.2rem);

    display: block;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    position: relative;
    cursor: pointer;
  }

  // only the thumbnail
  figure > img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  //
  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    position: absolute;
    inset: auto 0 0 0;

    // gradient background effect on the bottom to make the text more readable
    background-image: linear-gradient(to bottom, #0000, #000a 75%);
    padding: 1rem;

    transition: 0.3s;
    opacity: 0;
  }
  figure:hover > figcaption {
    opacity: 1;
  }

  .left-col {
  }

  .right-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  h1 {
    font-size: var(--project-name-size);
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0.5em;
  }

  h2 {
    position: relative;
    padding-left: 0.5em;
    color: #aaa;
    font-size: var(--project-service-size);
    font-weight: 500;
    line-height: 1.1;

    // the decorative line before the services
    &::before {
      content: '';
      position: absolute;
      inset: 0 auto 0 0;
      width: 4px;
      background-color: var(--color-primary);
    }

    // each service name
    span {
      display: block;
      color: inherit;
      font-weight: inherit;
      font-size: inherit;
    }
  }

  .skills {
    display: flex;
    gap: 0.25rem;

    img {
      height: var(--skill-size);
      width: var(--skill-size);
      object-fit: contain;
    }
  }

  .tags {
    display: flex;
    gap: 0.3rem;

    span.chip {
      font-size: var(--tag-font-size);
    }
  }
</style>
