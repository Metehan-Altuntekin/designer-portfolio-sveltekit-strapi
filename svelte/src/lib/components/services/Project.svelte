<script lang="ts">
  import { fly } from 'svelte/transition'
  // types
  import type { Project } from '../../../types'
  // stores
  import services from '../../../stores/services'
  import skills from '../../../stores/skills'
  import { openModal } from '../../../stores/projectDetailsModal'

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
          <span>{service.name}</span>
        {/each}
      </h2>
    </div>
    <div class="right-col">
      <div class="skills">
        {#each relatedSkills as skillId}
          {@const skill = $skills.find((e) => e.id === skillId)}
          <img src={skill.icon} alt={skill.name} title={skill.name} />
        {/each}
      </div>
      <div class="tags">
        {#each relatedTags as tag}
          <span class="chip">{tag}</span>
        {/each}
      </div>
    </div>
  </figcaption>
</figure>

<style lang="scss">
  figure {
    display: block;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    position: relative;
    cursor: pointer;
  }
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
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: clamp(0.85rem, 1.5vw, 1.3rem);
    font-weight: 500;
    color: #aaa;
    line-height: 1.1;
    position: relative;
    padding-left: 0.5em;
  }
  h2::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background-color: var(--color-primary);
  }
  h2 span {
    display: block;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  .skills {
    display: flex;
    gap: 0.25rem;
  }
  .skills img {
    height: 2rem;
    width: 2rem;
    object-fit: contain;
  }
  .tags {
    display: flex;
    gap: 0.3rem;
  }
</style>
