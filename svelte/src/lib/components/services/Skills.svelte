<script lang="ts">
  export let serviceId: number
  export let skillIds: number[]

  import type { Skill } from '$lib/types'
  import skills from '$lib/stores/skills'
  import { filterParams, toggleFilterParams } from '$lib/stores/projects'

  function handleSkillSelection(skill: Skill) {
    toggleFilterParams(serviceId, 'skills', skill.id)
    // console.info($filterParams)
  }
</script>

<ul>
  {#each $skills as skill}
    {#if skillIds.includes(skill.id)}
      {@const selected = $filterParams[serviceId].skills.includes(skill.id)}
      <li on:click={() => handleSkillSelection(skill)}>
        <img src={skill.largeIcon} alt={skill.name} title={skill.name} class:selected />
      </li>
    {/if}
  {/each}
</ul>

<style lang="scss">
  ul {
    $size: clamp(2rem, 5vh, 4rem);
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: calc($size * 0.1) 0;

    li {
      img {
        height: $size;

        filter: brightness(0.4);
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
        }

        &.selected {
          filter: brightness(1);
        }
      }
    }
  }
</style>
