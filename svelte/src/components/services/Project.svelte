<script lang="ts">
  import type { Project } from '../../types'

  export let project: Project

  const { id, name, thumbnail: src, relatedServices, relatedSkills } = project
</script>

<figure>
  <img {src} alt={name} />
  <figcaption>
    <h1>{name}</h1>
    <h2>
      {#each relatedServices as service}
        <span>{service}</span>
      {/each}
    </h2>
    <div class="skills">
      {#each relatedSkills as skill}
        <img src="" alt="" />
      {/each}
    </div>
  </figcaption>
</figure>

<style lang="scss">
</style>
