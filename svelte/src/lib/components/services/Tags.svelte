<script lang="ts">
  import type { Tag } from '$lib/types'
  // import { filterParams, toggleFilterParams } from '$lib/stores/projects'

  export let serviceId: number
  export let tags: Tag[]

  function handleTagSelection(tag: Tag) {
    // toggleFilterParams(serviceId, 'tags', tag)
    // console.info($filterParams)
  }
</script>

<ul>
  {#each tags as tag}
    <!-- {@const selected = $filterParams[serviceId].tags.includes(tag)} -->
    <li>
      <button class="chip" on:click={() => handleTagSelection(tag)}>{tag}</button>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    @include flex(false, top, start);
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  button.selected {
    background-color: #fff8;
  }
</style>
